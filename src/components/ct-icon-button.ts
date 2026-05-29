import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { emitCtEvent } from '../utils/emit'

type ButtonSize = 'sm' | 'md'
type ButtonVariant = 'ghost' | 'outlined' | 'filled'

@customElement('ct-icon-button')
export class CtIconButton extends LitElement {
  static override styles = css`
    :host([size="sm"]) button { width: 28px; height: 28px; border-radius: 50%; }
    :host([size="md"]) button { width: 36px; height: 36px; border-radius: 8px; }
    :host([variant="ghost"]) button { border: none; background: var(--ct-btn-bg, #f5f5f5); color: var(--ct-btn-color, #999); }
    :host([variant="ghost"]) button:hover { background: var(--ct-btn-hover-bg, #e8e8e8); color: var(--ct-btn-hover-color, #333); }
    :host([variant="outlined"]) button { border: 1px solid var(--ct-btn-border, #ddd); background: var(--ct-btn-bg, #fafafa); color: var(--ct-btn-color, #00c4b6); }
    :host([variant="outlined"]) button:hover { border-color: var(--ct-btn-hover-border, #00c4b6); }
    :host([variant="filled"]) button { border: none; background: var(--ct-btn-bg, #00c4b6); color: var(--ct-btn-color, #fff); }
    :host([variant="filled"]) button:hover { opacity: 0.9; }

    @unocss-placeholder;
  `

  @property({ type: String, reflect: true }) size: ButtonSize = 'sm'
  @property({ type: String, reflect: true }) variant: ButtonVariant = 'ghost'
  @property({ type: String }) title = ''
  @property({ type: Boolean }) disabled = false

  private onClick(): void {
    if (this.disabled) {
      return
    }
    emitCtEvent(this, 'ct-click', undefined)
  }

  override render() {
    return html`
      <button
        part="button"
        class="flex items-center justify-center p-0 box-border cursor-pointer transition-all transition-duration-0.2s leading-none disabled:op-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[#00c4b6] focus-visible:outline-offset-2"
        ?disabled=${this.disabled}
        title=${this.title}
        @click=${this.onClick}
      >
        <slot></slot>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ct-icon-button': CtIconButton
  }
}
