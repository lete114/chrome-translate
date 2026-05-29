import { css, html, LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { emitCtEvent } from '../utils/emit'
import './ct-button'

@customElement('ct-dialog')
export class CtDialog extends LitElement {
  static override styles = css`
    :host {
      display: contents;
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.3);
    }

    @unocss-placeholder;
  `

  @property({ type: String }) title = ''
  @property({ type: String }) width = '600px'
  @property({ type: String }) height = '100%'

  @query('dialog') private dialogEl!: HTMLDialogElement

  show(): void {
    this.dialogEl?.showModal()
  }

  close(): void {
    this.dialogEl?.close()
  }

  override firstUpdated(): void {
    this.dialogEl.addEventListener('click', (e: MouseEvent) => {
      if (e.target === this.dialogEl) {
        this.dialogEl.close()
      }
    })
    this.dialogEl.addEventListener('close', () => {
      emitCtEvent(this, 'ct-close', undefined)
    })
  }

  override render() {
    return html`
      <dialog part="dialog" class="[&[open]]-flex [&[open]]-flex-col border-none rounded-[12px] shadow-[0_16px_48px_rgba(0,0,0,.2)] p-0 overflow-hidden" style="width: ${this.width}; height: ${this.height}">
        <div class="flex items-center justify-between px-20px py-16px border-b-1px border-b-solid border-b-[#eee] text-16px font-600 text-[#333]">
          <span part="title">${this.title}</span>
          <slot name="header-actions">
            <ct-button size="sm" variant="ghost" square @click=${() => this.dialogEl?.close()}>✕</ct-button>
          </slot>
        </div>
        <div class="flex flex-1 overflow-hidden">
          <div part="sidebar" class="flex flex-col flex-[0_0_auto]">
            <slot name="sidebar"></slot>
          </div>
          <div part="main" class="flex-1 min-h-0 p-20px overflow-y-auto">
            <slot></slot>
          </div>
        </div>
      </dialog>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ct-dialog': CtDialog
  }
}
