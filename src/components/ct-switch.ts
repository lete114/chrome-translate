import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { emitCtEvent } from '../utils/emit'

@customElement('ct-switch')
export class CtSwitch extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
    }
    @unocss-placeholder;
  `

  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false

  private onClick(): void {
    if (this.disabled) return
    this.checked = !this.checked
    emitCtEvent(this, 'ct-change', { value: this.checked })
  }

  override render() {
    return html`
      <div part="root"
        class="relative w-[44px] h-[24px] flex-shrink-0 cursor-pointer ${this.disabled ? 'op-50 pointer-events-none' : ''}"
        role="switch"
        aria-checked=${this.checked}
        tabindex=${this.disabled ? '-1' : '0'}
        @click=${this.onClick}
        @keydown=${(e: KeyboardEvent) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this.onClick() } }}
      >
        <div class="w-full h-full rounded-full transition-colors duration-200"
          style="background-color: ${this.checked ? '#00c4b6' : '#ccc'}"></div>
        <div class="absolute top-[2px] left-[2px] w-[20px] h-[20px] bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,.2)] transition-all duration-200"
          style="transform: ${this.checked ? 'translateX(20px)' : 'translateX(0)'}"></div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ct-switch': CtSwitch
  }
}
