import { css, html, LitElement, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

export interface CtSelectOption {
  label: string
  value: string
  disabled?: boolean
}

@customElement('ct-select')
export class CtSelect extends LitElement {
  private uid = `cs-${Math.random().toString(36).slice(2, 8)}`
  static override styles = css`
    :host {
      --ct-primary: #00c4b6;
      --ct-border: #ddd;
      --ct-bg: #f8f8f8;
      --ct-bg-hover: #f0f0f0;
      --ct-bg-active: #f0fdfb;
      --ct-text: #333;
      --ct-text-secondary: #555;
      --ct-text-muted: #999;
      --ct-radius: 8px;
      --ct-font-size: 13px;
      display: block;
    }

    .trigger {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid var(--ct-border);
      border-radius: var(--ct-radius);
      background: var(--ct-bg);
      cursor: pointer;
      font-size: var(--ct-font-size);
      color: var(--ct-text);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }

    .trigger:hover {
      border-color: var(--ct-primary);
    }

    .trigger:disabled {
      opacity: 0.7;
      cursor: default;
    }

    .trigger:disabled:hover {
      border-color: var(--ct-border);
    }

    .arrow {
      font-size: 10px;
      color: var(--ct-text-muted);
      transition: transform 0.2s;
    }

    .dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background: #fff;
      border: 1px solid var(--ct-border);
      border-radius: var(--ct-radius);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      max-height: 200px;
      overflow-y: auto;
      z-index: 10;
    }

    .dropdown.dropup {
      top: auto;
      bottom: calc(100% + 4px);
    }

    .option {
      padding: 8px 12px;
      cursor: pointer;
      font-size: var(--ct-font-size);
      color: var(--ct-text-secondary);
      transition: background 0.15s;
    }

    .option:hover,
    .option.highlighted {
      background: var(--ct-bg-hover);
    }

    .option.selected {
      color: var(--ct-primary);
      font-weight: 600;
      background: var(--ct-bg-active);
    }

    .wrapper {
      position: relative;
    }

    .error-text {
      font-size: 11px;
      color: #e74c3c;
      line-height: 1.4;
      padding-top: 2px;
    }
  `

  @property({ type: String }) value = ''
  @property({ type: Array }) options: CtSelectOption[] = []
  @property({ type: String }) placeholder = 'Select…'
  @property({ type: Boolean }) disabled = false
  @property({ type: Boolean }) loading = false
  @property({ type: String }) error = ''

  @state() private dropdownOpen = false
  @state() private dropup = false
  @state() private highlightIndex = -1

  private get label(): string {
    if (this.loading) {
      return 'Loading…'
    }
    const selected = this.options.find(o => o.value === this.value)
    return selected?.label ?? this.placeholder
  }

  override connectedCallback(): void {
    super.connectedCallback()
    document.addEventListener('mousedown', this.onDocumentMouseDown)
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback()
    document.removeEventListener('mousedown', this.onDocumentMouseDown)
  }

  private onDocumentMouseDown = (e: MouseEvent): void => {
    if (!this.dropdownOpen) {
      return
    }
    const path = e.composedPath() as Element[]
    const inDropdown = path.some(el => el instanceof Element && el.getAttribute('data-dropdown') === this.uid)
    if (!inDropdown) {
      this.dropdownOpen = false
    }
  }

  private toggle(): void {
    if (this.disabled) {
      return
    }

    if (!this.dropdownOpen) {
      const trigger = this.renderRoot.querySelector('.trigger')!
      const rect = trigger.getBoundingClientRect()
      this.dropup = window.innerHeight - rect.bottom < 200
      this.highlightIndex = Math.max(0, this.options.findIndex(o => o.value === this.value))
    }

    this.dropdownOpen = !this.dropdownOpen
  }

  private select(value: string): void {
    this.dropdownOpen = false
    if (value !== this.value) {
      this.dispatchEvent(new CustomEvent('ct-change', {
        detail: { value },
        bubbles: true,
        composed: true,
      }))
    }
  }

  private onKeydown(e: KeyboardEvent): void {
    if (!this.dropdownOpen) {
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        this.highlightIndex = Math.min(this.highlightIndex + 1, this.options.length - 1)
        break
      case 'ArrowUp':
        e.preventDefault()
        this.highlightIndex = Math.max(this.highlightIndex - 1, 0)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (this.highlightIndex >= 0) {
          this.select(this.options[this.highlightIndex].value)
        }
        break
      case 'Escape':
        this.dropdownOpen = false
        break
    }
  }

  override render() {
    return html`
      <div class="wrapper" data-dropdown=${this.uid} part="root">
        <button
          part="trigger"
          class="trigger"
          ?disabled=${this.disabled || this.loading}
          @click=${this.toggle}
          aria-haspopup="listbox"
          aria-expanded=${this.dropdownOpen}
        >
          ${this.label}
          <span part="arrow" class="arrow" style="transform: ${this.dropdownOpen ? 'rotate(180deg)' : 'none'}">▾</span>
        </button>

        ${this.error ? html`<div part="error" class="error-text">${this.error}</div>` : ''}

        ${!this.disabled && !this.loading && this.dropdownOpen && this.options.length > 0
          ? html`
          <div
            part="dropdown"
            class="dropdown ${this.dropup ? 'dropup' : ''}"
            role="listbox"
            @keydown=${this.onKeydown}
          >
            ${this.options.map((o, i) => html`
              <div
                part="option"
                class="option ${o.value === this.value ? 'selected' : ''} ${i === this.highlightIndex ? 'highlighted' : ''}"
                role="option"
                aria-selected=${o.value === this.value}
                @click=${() => this.select(o.value)}
                @mouseenter=${() => { this.highlightIndex = i }}
              >${o.label}</div>
            `)}
          </div>
        `
          : nothing}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ct-select': CtSelect
  }
}
