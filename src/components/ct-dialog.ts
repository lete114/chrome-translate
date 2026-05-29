import { css, html, LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import './ct-icon-button'

@customElement('ct-dialog')
export class CtDialog extends LitElement {
  static override styles = css`
    :host {
      display: contents;
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.3);
    }

    dialog[open] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    @unocss-placeholder;
  `

  @property({ type: String }) title = ''

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
  }

  override render() {
    return html`
      <dialog part="dialog" class="border-none rounded-[12px] shadow-[0_16px_48px_rgba(0,0,0,.2)] w-600px p-0 overflow-hidden">
        <div class="flex items-center justify-between px-20px py-16px border-b-1px border-b-solid border-b-[#eee] text-16px font-600 text-[#333]">
          <span part="title">${this.title}</span>
          <slot name="header-actions">
            <ct-icon-button size="sm" variant="ghost" @click=${() => this.dialogEl?.close()}>✕</ct-icon-button>
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
