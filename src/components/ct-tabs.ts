import type { TemplateResult } from 'lit'
import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { emitCtEvent } from '../utils/emit'

export interface TabItem {
  icon?: TemplateResult
  label: string
  value: string
}

@customElement('ct-tabs')
export class CtTabs extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 140px;
      height: 100%;
    }

    @media (max-width: 500px) {
      :host { width: 60px; }
      .tab { padding: 10px 2px; justify-content: center; }
      .tab-label { display: none; }
    }

    @unocss-placeholder;
  `

  @property({ type: Array }) tabs: TabItem[] = []
  @property({ type: String }) active = ''

  private onSelect(value: string): void {
    if (value !== this.active) {
      this.active = value
      emitCtEvent(this, 'ct-change', { value })
    }
  }

  override render() {
    return html`
      <div class="flex-1 border-r-1px border-r-solid border-r-[#eee] px-0 py-12px flex flex-col gap-2px w-full">
        ${this.tabs.map(t => html`
          <div
            part="tab"
            class="tab flex items-center gap-8px px-16px py-10px cursor-pointer text-13px text-[#666] border-l-3px border-l-solid border-l-transparent transition-all transition-duration-0.15s select-none hover:bg-[#f5f5f5] hover:text-[#333] ${t.value === this.active ? 'border-l-[#00c4b6]! bg-[#f0fdfb] text-[#00c4b6]! font-600' : ''}"
            @click=${() => this.onSelect(t.value)}
          >
            ${t.icon ? html`<span part="icon" class="text-16px leading-none">${t.icon}</span>` : ''}
            <span part="label" class="tab-label whitespace-nowrap">${t.label}</span>
          </div>
        `)}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ct-tabs': CtTabs
  }
}
