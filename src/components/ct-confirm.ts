import type { CtDialog } from './ct-dialog'
import { css, html, LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import './ct-button'
import './ct-dialog'

@customElement('ct-confirm')
export class CtConfirm extends LitElement {
  static override styles = css`
    :host {
      all: initial;
      display: contents;
    }

    @unocss-placeholder;
  `

  @property({ type: String }) title = ''
  @property({ type: String }) message = ''
  @property({ type: String }) confirmText = 'Confirm'
  @property({ type: String }) cancelText = 'Cancel'
  @property({ type: Boolean }) danger = false

  @query('ct-dialog') private dialogEl!: CtDialog

  private resolve!: (value: boolean) => void

  static show(options: {
    title?: string
    message: string
    confirmText?: string
    cancelText?: string
    danger?: boolean
  }): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const el = document.createElement('ct-confirm')
      Object.assign(el, options)
      el.resolve = resolve
      document.body.appendChild(el)
      void el.updateComplete.then(() => {
        el.dialogEl?.show()
      })
    })
  }

  private onConfirm(): void {
    this.resolve(true)
    this.remove()
  }

  private onCancel(): void {
    this.resolve(false)
    this.remove()
  }

  override render() {
    const dangerStyle = this.danger
      ? '--ct-btn-color:#e74c3c;--ct-btn-border:#e74c3c;--ct-btn-hover-bg:#e74c3c;--ct-btn-hover-color:#fff'
      : ''

    return html`
      <ct-dialog
        .title=${this.title}
        width="360px"
        height="fit-content"
        @ct-close=${this.onCancel}
      >
        <div class="text-14px text-[#555] leading-[1.5]">
          ${this.message}
        </div>
        <div class="flex items-center justify-end gap-8px mt-16px">
          <ct-button
            size="md" variant="outlined"
            @click=${this.onCancel}
          >${this.cancelText}</ct-button>
          <ct-button
            size="md"
            variant=${this.danger ? 'outlined' : 'filled'}
            style=${dangerStyle}
            @click=${this.onConfirm}
          >${this.confirmText}</ct-button>
        </div>
      </ct-dialog>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ct-confirm': CtConfirm
  }
}
