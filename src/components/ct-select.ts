import { css, html, LitElement, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { emitCtEvent } from '../utils/emit'

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
      display: block;
    }

    @unocss-placeholder;
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
      emitCtEvent(this, 'ct-change', { value })
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
      <div class="relative" data-dropdown=${this.uid} part="root">
        <button
          part="trigger"
          class="trigger w-full px-12px py-10px border-1px border-solid border-[#ddd] rounded-[8px] bg-[#f8f8f8] cursor-pointer text-13px text-[#333] flex items-center justify-between gap-4px transition-colors transition-duration-0.2s box-border disabled:op-70 disabled:cursor-default hover:border-[#00c4b6] disabled:hover:border-[#ddd]"
          ?disabled=${this.disabled || this.loading}
          @click=${this.toggle}
          aria-haspopup="listbox"
          aria-expanded=${this.dropdownOpen}
        >
          ${this.label}
          <span part="arrow" class="text-10px text-[#999]" style="transition: transform 0.2s; transform: ${this.dropdownOpen ? 'rotate(180deg)' : 'none'}">▾</span>
        </button>

        ${this.error ? html`<div part="error" class="text-11px text-[#e74c3c] lh-[1.4] pt-2px">${this.error}</div>` : ''}

        ${!this.disabled && !this.loading && this.dropdownOpen && this.options.length > 0
          ? html`
          <div
            part="dropdown"
            class="absolute left-0 right-0 bg-[#fff] border-1px border-solid border-[#ddd] rounded-[8px] shadow-[0_8px_24px_rgba(0,0,0,.12)] max-h-200px overflow-y-auto z-10 ${this.dropup ? 'top-auto bottom-[calc(100%+4px)]' : 'top-[calc(100%+4px)]'}"
            role="listbox"
            @keydown=${this.onKeydown}
          >
            ${this.options.map((o, i) => html`
              <div
                part="option"
                class="px-12px py-8px cursor-pointer text-13px text-[#555] transition-colors transition-duration-0.15s hover:bg-[#f0f0f0] ${i === this.highlightIndex ? 'bg-[#f0f0f0]' : ''} ${o.value === this.value ? 'text-[#00c4b6]! font-600 bg-[#f0fdfb]' : ''}"
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
