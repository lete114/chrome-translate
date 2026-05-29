import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'

@customElement('ct-input')
export class CtInput extends LitElement {
  static override styles = css`
    :host {
      --ct-primary: #00c4b6;
      --ct-border: #ddd;
      --ct-bg: #fafafa;
      --ct-bg-focus: #fff;
      --ct-text: #333;
      --ct-text-muted: #888;
      --ct-radius: 6px;
      --ct-font-size: 13px;
      display: block;
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .label-text {
      font-size: 12px;
      color: var(--ct-text-muted);
      font-weight: 500;
    }

    input {
      padding: 8px 12px;
      border: 1px solid var(--ct-border);
      border-radius: var(--ct-radius);
      font-size: var(--ct-font-size);
      color: var(--ct-text);
      background: var(--ct-bg);
      outline: none;
      transition: border-color 0.2s, background 0.2s;
      width: 100%;
      box-sizing: border-box;
    }

    input:focus {
      border-color: var(--ct-primary);
      background: var(--ct-bg-focus);
    }

    input:disabled {
      opacity: 0.7;
      cursor: default;
    }

    .help-text,
    .error-text {
      font-size: 11px;
    }

    .help-text {
      color: var(--ct-text-muted);
    }

    .error-text {
      color: #e74c3c;
    }
  `

  @property({ type: String }) value = ''
  @property({ type: String }) type: 'text' | 'password' | 'number' = 'text'
  @property({ type: String }) placeholder = ''
  @property({ type: String }) label = ''
  @property({ type: String }) helpText = ''
  @property({ type: String }) error = ''
  @property({ type: Boolean }) disabled = false
  @property({ type: Boolean }) readonly = false
  @property({ type: Number }) min: number | undefined = undefined
  @property({ type: Number }) max: number | undefined = undefined
  @property({ type: Number }) step: number | undefined = undefined

  private onChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value
    this.dispatchEvent(new CustomEvent('ct-change', {
      detail: { value },
      bubbles: true,
      composed: true,
    }))
  }

  private onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value
    this.dispatchEvent(new CustomEvent('ct-input', {
      detail: { value },
      bubbles: true,
      composed: true,
    }))
  }

  override render() {
    return html`
      <label part="root">
        ${this.label ? html`<span part="label" class="label-text">${this.label}</span>` : ''}
        <input
          part="input"
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          min=${ifDefined(this.min)}
          max=${ifDefined(this.max)}
          step=${ifDefined(this.step)}
          @change=${this.onChange}
          @input=${this.onInput}
        >
        ${this.helpText ? html`<span part="help" class="help-text">${this.helpText}</span>` : ''}
        ${this.error ? html`<span part="error" class="error-text">${this.error}</span>` : ''}
      </label>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ct-input': CtInput
  }
}
