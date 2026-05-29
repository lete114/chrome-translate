import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { emitCtEvent } from '../utils/emit'

@customElement('ct-textarea')
export class CtTextarea extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    @unocss-placeholder;
  `

  @property({ type: String }) value = ''
  @property({ type: String }) placeholder = ''
  @property({ type: String }) label = ''
  @property({ type: String }) helpText = ''
  @property({ type: String }) error = ''
  @property({ type: Boolean }) disabled = false
  @property({ type: Boolean }) readonly = false
  @property({ type: Number }) rows: number | undefined = undefined
  @property({ type: Number }) minLength: number | undefined = undefined
  @property({ type: Number }) maxLength: number | undefined = undefined

  private onChange(e: Event): void {
    const value = (e.target as HTMLTextAreaElement).value
    emitCtEvent(this, 'ct-change', { value })
  }

  private onInput(e: Event): void {
    const value = (e.target as HTMLTextAreaElement).value
    emitCtEvent(this, 'ct-input', { value })
  }

  override render() {
    return html`
      <label part="root" class="flex flex-col gap-4px">
        ${this.label ? html`<span part="label" class="text-12px text-[#888] font-500">${this.label}</span>` : ''}
        <textarea
          part="textarea"
          class="px-12px py-8px border-1px border-solid border-[#ddd] rounded-[6px] text-13px text-[#333] bg-[#fafafa] outline-none transition-colors transition-duration-0.2s w-full min-h-120px box-border resize-y font-inherit focus:border-[#00c4b6] focus:bg-[#fff] disabled:op-70 disabled:cursor-default"
          .value=${this.value}
          placeholder=${ifDefined(this.placeholder || undefined)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          rows=${ifDefined(this.rows)}
          minlength=${ifDefined(this.minLength)}
          maxlength=${ifDefined(this.maxLength)}
          @change=${this.onChange}
          @input=${this.onInput}
        ></textarea>
        ${this.helpText ? html`<span part="help" class="text-11px text-[#888]">${this.helpText}</span>` : ''}
        ${this.error ? html`<span part="error" class="text-11px text-[#e74c3c]">${this.error}</span>` : ''}
      </label>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ct-textarea': CtTextarea
  }
}
