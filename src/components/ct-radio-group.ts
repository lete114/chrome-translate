import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { emitCtEvent } from '../utils/emit'

export interface RadioOption {
  label: string
  value: string
}

@customElement('ct-radio-group')
export class CtRadioGroup extends LitElement {
  static override styles = css`
    :host {
      display: flex;
    }

    :host([direction="horizontal"]) { flex-direction: row; gap: 12px; }
    :host([direction="vertical"]) { flex-direction: column; gap: 6px; }

    @unocss-placeholder;
  `

  @property({ type: Array }) options: RadioOption[] = []
  @property({ type: String }) value = ''
  @property({ type: String }) name = ''
  @property({ type: String, reflect: true }) direction: 'horizontal' | 'vertical' = 'horizontal'

  private onChange(value: string): void {
    this.value = value
    emitCtEvent(this, 'ct-change', { value })
  }

  override render() {
    return html`
      ${this.options.map(o => html`
        <label
          part="option"
          class="flex-1 flex items-center gap-8px px-14px py-10px border-1px border-solid border-[#ddd] rounded-[8px] cursor-pointer text-13px text-[#555] transition-colors transition-duration-0.2s hover:border-[#00c4b6] ${o.value === this.value ? 'border-[#00c4b6]! bg-[#f0fdfb] text-[#00c4b6]! font-600' : ''}"
        >
          <input
            class="hidden"
            type="radio"
            name=${this.name}
            value=${o.value}
            ?checked=${o.value === this.value}
            @change=${() => this.onChange(o.value)}
          >
          <span part="label">${o.label}</span>
        </label>
      `)}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ct-radio-group': CtRadioGroup
  }
}
