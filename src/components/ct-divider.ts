import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('ct-divider')
export class CtDivider extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    @unocss-placeholder;
  `

  override render() {
    return html`<div part="root" class="h-1px bg-[#eee]"></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ct-divider': CtDivider
  }
}
