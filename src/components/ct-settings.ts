import type { LFUCache } from '../utils/LFUCache'
import type { CtDialog } from './ct-dialog'
import type { TabItem } from './ct-tabs'
import { css, html, LitElement } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'
import { emitCtEvent } from '../utils/emit'
import { LANGUAGES } from '../utils/languages'
import { parseCacheKey } from '../utils/public'
import { refreshIcon } from './icons'
import './ct-input'
import './ct-select'
import './ct-textarea'
import './ct-button'
import './ct-radio-group'
import './ct-divider'
import './ct-section-header'
import './ct-tabs'
import './ct-dialog'

@customElement('chrome-translate-settings')
export class ChromeTranslateSettings extends LitElement {
  static override styles = css`
    :host {
      all: initial;
      display: contents;
    }

    @unocss-placeholder;
  `

  @property({ type: Object }) language: { from: string, to: string } = { from: 'auto', to: '' }
  @property({ type: String }) provider: 'chrome' | 'openai' = 'chrome'
  @property({ type: String }) mode: 'text' | 'html' = 'text'
  @property({ type: Number }) batchSize = 6
  @property({ type: String }) openaiApiKey = ''
  @property({ type: String }) openaiBaseUrl = 'https://api.openai.com/v1'
  @property({ type: String }) openaiModel = 'gpt-4o-mini'
  @property({ type: String }) openaiPrompt = ''
  @property({ type: Array }) openaiModels: string[] = []
  @property({ type: Boolean }) openaiModelsLoading = false
  @property({ type: String }) openaiModelsError = ''
  @property({ type: Number }) openaiTemperature = 0.3
  @property({ type: Number }) openaiMaxTokens = 1024
  @property({ type: Object }) translateCache?: LFUCache<string>

  @property({ type: String }) private activeTab = 'translate'
  @state() private cacheSearch = ''
  @state() private cacheLimit = 100
  @state() private cacheOrder: 'desc' | 'asc' = 'desc'
  @state() private editingItem: { key: string, from: string, to: string, text: string, value: string, freq: number } | null = null

  @query('ct-dialog') private dialogEl!: CtDialog
  @query('#edit-dialog') private editDialogEl!: CtDialog

  show(): void {
    this.dialogEl?.show()
  }

  close(): void {
    this.dialogEl?.close()
  }

  private get fromOptions() {
    return [{ label: 'Auto', value: 'auto' }, ...LANGUAGES]
  }

  private get toOptions() {
    return [...LANGUAGES]
  }

  private get modelOptions() {
    return this.openaiModels.map(m => ({ label: m, value: m }))
  }

  private emit(name: string, detail: unknown): void {
    emitCtEvent(this, name, detail)
  }

  private startEdit(item: { key: string, value: string, freq: number }): void {
    const parsed = parseCacheKey(item.key)
    if (!parsed) {
      return
    }
    this.editingItem = {
      key: item.key,
      from: parsed.from,
      to: parsed.to,
      text: parsed.text,
      value: item.value,
      freq: item.freq,
    }
    this.updateComplete.then(() => this.editDialogEl?.show())
  }

  private saveEdit(): void {
    if (!this.editingItem || !this.translateCache) {
      return
    }
    const { from, to, text, value, freq } = this.editingItem
    if (!from || !to || !text) {
      return
    }
    const newKey = `${from}->${to}:${text}`
    if (newKey !== this.editingItem.key) {
      this.translateCache.remove(this.editingItem.key)
    }
    this.translateCache.set(newKey, value, freq)
    this.editDialogEl?.close()
    this.editingItem = null
    this.requestUpdate()
  }

  private cancelEdit(): void {
    this.editDialogEl?.close()
    this.editingItem = null
    this.requestUpdate()
  }

  private renderTranslateTab() {
    return html`
      <ct-section-header label="Language"></ct-section-header>
      <div class="flex items-center gap-12px">
        <div class="flex-1">
          <ct-select
            .value=${this.language.from}
            .options=${this.fromOptions}
            @ct-change=${(e: CustomEvent) => this.emit('language-change', { target: 'from', value: e.detail.value })}
          ></ct-select>
        </div>
        <span class="text-#999">→</span>
        <div class="flex-1">
          <ct-select
            .value=${this.language.to}
            .options=${this.toOptions}
            @ct-change=${(e: CustomEvent) => this.emit('language-change', { target: 'to', value: e.detail.value })}
          ></ct-select>
        </div>
      </div>

      <ct-divider></ct-divider>

      <ct-section-header label="Translation Mode"></ct-section-header>
      <ct-radio-group
        direction="vertical"
        name="mode"
        .value=${this.mode}
        .options=${[{ label: 'Text', value: 'text' }, { label: 'HTML', value: 'html' }]}
        @ct-change=${(e: CustomEvent) => this.emit('mode-change', { value: e.detail.value })}
      ></ct-radio-group>

      <ct-divider></ct-divider>

      <ct-section-header label="Performance"></ct-section-header>
      <ct-input
        type="number"
        label="Max concurrent requests"
        .value=${String(this.batchSize)}
        min="1" max="20" step="1"
        @ct-change=${(e: CustomEvent) => this.emit('batch-size-change', { value: Number(e.detail.value) })}
      ></ct-input>
    `
  }

  private renderProviderTab() {
    return html`
      <ct-section-header label="Translation Provider"></ct-section-header>
      <ct-radio-group
        direction="horizontal"
        name="provider"
        .value=${this.provider}
        .options=${[{ label: 'Chrome AI', value: 'chrome' }, { label: 'OpenAI API', value: 'openai' }]}
        @ct-change=${(e: CustomEvent) => this.emit('provider-change', { value: e.detail.value })}
      ></ct-radio-group>

      ${this.provider === 'openai'
        ? html`
        <ct-divider></ct-divider>
        <ct-section-header label="OpenAI Configuration"></ct-section-header>
        <div class="flex flex-col gap-12px">
          <ct-input
            type="password"
            label="API Key"
            placeholder="sk-..."
            .value=${this.openaiApiKey}
            @ct-change=${(e: CustomEvent) => this.emit('openai-config-change', { field: 'apiKey', value: e.detail.value })}
          ></ct-input>

          <ct-input
            type="text"
            label="Base URL"
            .value=${this.openaiBaseUrl}
            @ct-change=${(e: CustomEvent) => this.emit('openai-config-change', { field: 'baseUrl', value: e.detail.value })}
          ></ct-input>

          <label class="flex flex-col gap-4px">
            <span class="text-12px text-[#888] font-500">Model</span>
            <div class="flex gap-6px items-start">
              <div class="flex-1 min-w-0">
                <ct-select
                  .value=${this.openaiModel}
                  .options=${this.modelOptions}
                  ?loading=${this.openaiModelsLoading}
                  error=${this.openaiModelsError}
                  placeholder=${this.openaiModelsLoading ? 'Loading models…' : 'Select a model'}
                  @ct-change=${(e: CustomEvent) => this.emit('openai-config-change', { field: 'model', value: e.detail.value })}
                ></ct-select>
              </div>
              <ct-button size="md" variant="outlined" square title="Refresh models" @click=${() => this.emit('fetch-models', undefined)}>${refreshIcon}</ct-button>
            </div>
          </label>

          <ct-input
            type="number"
            label="Temperature"
            .value=${String(this.openaiTemperature)}
            min="0" step="0.1"
            @ct-change=${(e: CustomEvent) => this.emit('openai-config-change', { field: 'temperature', value: e.detail.value })}
          ></ct-input>

          <ct-input
            type="number"
            label="Max Tokens"
            .value=${String(this.openaiMaxTokens)}
            min="0" step="1"
            @ct-change=${(e: CustomEvent) => this.emit('openai-config-change', { field: 'maxTokens', value: e.detail.value })}
          ></ct-input>

          <ct-textarea
            label="System Prompt"
            placeholder="Optional: custom system prompt for translation"
            .value=${this.openaiPrompt}
            @ct-change=${(e: CustomEvent) => this.emit('openai-config-change', { field: 'prompt', value: e.detail.value })}
          ></ct-textarea>
        </div>
      `
        : ''}
    `
  }

  private renderCacheTab() {
    if (!this.translateCache) {
      return html`<div class="text-13px text-[#888]">Cache not available</div>`
    }

    const info = this.translateCache.info()
    const pct = info.maxBytes > 0 ? Math.round((info.usedBytes / info.maxBytes) * 100) : 0
    const search = this.cacheSearch.toLowerCase()
    const filtered = info.items.filter(item => item.key.toLowerCase().includes(search))

    const limitOptions = [
      { label: '25', value: '25' },
      { label: '50', value: '50' },
      { label: '100', value: '100' },
      { label: 'All', value: '0' },
    ]

    const statsHtml = html`
      <div class="flex items-center justify-between text-12px text-[#888]">
        <span>${info.totalItems} items • ${info.usedSize} / ${info.maxSize}</span>
        <div class="flex items-center gap-8px">
          <ct-button size="sm" variant="ghost" square title="Refresh" @click=${() => this.requestUpdate()}>↻</ct-button>
          <ct-button size="sm" variant="ghost" square title="Clear cache" style="--ct-btn-color:#e74c3c;--ct-btn-hover-bg:#e74c3c;--ct-btn-hover-color:#fff"
            @click=${() => {
                this.translateCache!.clear()
                this.requestUpdate()
              }}
          >🗑</ct-button>
        </div>
      </div>
      <div class="w-full h-8px bg-[#eee] rounded-[4px] overflow-hidden my-16px">
        <div class="h-full bg-[#00c4b6] rounded-[4px] transition-width transition-duration-0.3s" style="width: ${pct}%"></div>
      </div>
    `

    const searchInput = html`
      <div class="flex items-center gap-8px mb-12px">
        <input
          type="text"
          placeholder="Search entries…"
          class="flex-1 px-12px py-10px border-1px border-solid border-[#ddd] rounded-[8px] text-13px text-[#333] bg-[#fafafa] outline-none transition-colors transition-duration-0.2s box-border focus:border-[#00c4b6] focus:bg-[#fff]"
          .value=${this.cacheSearch}
          @input=${(e: Event) => { this.cacheSearch = (e.target as HTMLInputElement).value }}
        >
        <ct-select
          .value=${String(this.cacheLimit)}
          .options=${limitOptions}
          class="w-68px shrink-0"
          @ct-change=${(e: CustomEvent) => {
              this.cacheLimit = Number(e.detail.value)
              this.requestUpdate()
            }}
        ></ct-select>
        <ct-button size="sm" variant="ghost" square title="Toggle sort order"
          @click=${() => {
              this.cacheOrder = this.cacheOrder === 'desc' ? 'asc' : 'desc'
              this.requestUpdate()
            }}
        >${this.cacheOrder === 'desc' ? '↓' : '↑'}</ct-button>
      </div>
    `

    const displayed = this.cacheOrder === 'desc' ? filtered : [...filtered].reverse()
    const sliced = this.cacheLimit > 0 ? displayed.slice(0, this.cacheLimit) : displayed

    const entryList = sliced.length > 0
      ? html`
        <div class="flex flex-col">
          ${sliced.map((item, index, arr) => {
            const parsed = parseCacheKey(item.key)
            return html`
              <div class="flex flex-col px-8px py-6px rounded-[6px] hover:bg-[#f5f5f5] group cursor-default">
                <div class="flex items-start justify-between gap-8px">
                  <span class="flex-1 text-13px text-[#333] leading-[1.4] break-words">${parsed?.text ?? item.key}</span>
                  <div class="flex items-center gap-4px opacity-0 group-hover:opacity-100 transition-all transition-duration-0.15s shrink-0 mt-1px">
                    <button
                      class="w-20px h-20px border-none bg-transparent cursor-pointer text-12px text-[#ccc] leading-none p-0 flex items-center justify-center rounded-[4px] hover:bg-[#e8e8e8] hover:text-[#0088cc]"
                      title="Edit entry"
                      @click=${() => this.startEdit(item)}
                    >✏️</button>
                    <button
                      class="w-20px h-20px border-none bg-transparent cursor-pointer text-12px text-[#ccc] leading-none p-0 flex items-center justify-center rounded-[4px] hover:bg-[#e8e8e8] hover:text-[#e74c3c]"
                      title="Remove entry"
                      @click=${() => {
                          this.translateCache!.remove(item.key)
                          this.requestUpdate()
                        }}
                    >✕</button>
                  </div>
                </div>
                <div class="flex items-center gap-8px text-11px text-[#999] mt-4px">
                  ${parsed
                    ? html`
                      <span class="inline-flex items-center px-6px py-1px rounded-[3px] bg-[#e8f4f8] text-[#0088cc] font-medium text-10px leading-[18px]">${parsed.from} → ${parsed.to}</span>
                      <span>· freq: ${item.freq}</span>
                    `
                    : html`<span>freq: ${item.freq}</span>`
                  }
                </div>
              </div>
              ${index < arr.length - 1 ? html`<ct-divider class="mx-8px"></ct-divider>` : ''}
            `
          })}
        </div>`
      : html`<div class="text-13px text-[#888] text-center py-20px">No entries found</div>`

    return html`
      <div class="flex flex-col h-full">
        <div class="shrink-0">
          <ct-section-header label="Cache Management"></ct-section-header>
          ${statsHtml}
          <ct-divider></ct-divider>
          ${searchInput}
        </div>
        <div class="flex-1 overflow-y-auto min-h-0">
          ${entryList}
        </div>
      </div>
      ${this.editingItem ? this.renderEditDialog() : ''}
    `
  }

  private renderEditDialog() {
    return html`
      <ct-dialog id="edit-dialog" title="Edit Cache Entry">
        <div slot="header-actions">
          <ct-button size="sm" variant="ghost" square @click=${this.cancelEdit}>✕</ct-button>
        </div>
        <div class="flex flex-col gap-16px">
          <div class="flex items-center gap-12px">
            <label class="flex-1 flex flex-col gap-4px">
              <span class="text-12px text-[#888] font-500">Source Language</span>
              <ct-select
                .value=${this.editingItem!.from}
                .options=${this.toOptions}
                @ct-change=${(e: CustomEvent) => {
                    if (this.editingItem) {
                      this.editingItem.from = e.detail.value
                    }
                    this.requestUpdate()
                  }}
              ></ct-select>
            </label>
            <span class="text-[#999] mt-24px">→</span>
            <label class="flex-1 flex flex-col gap-4px">
              <span class="text-12px text-[#888] font-500">Target Language</span>
              <ct-select
                .value=${this.editingItem!.to}
                .options=${this.toOptions}
                @ct-change=${(e: CustomEvent) => {
                    if (this.editingItem) {
                      this.editingItem.to = e.detail.value
                    }
                    this.requestUpdate()
                  }}
              ></ct-select>
            </label>
          </div>

          <ct-textarea
            label="Source Text"
            .value=${this.editingItem!.text}
            @ct-change=${(e: CustomEvent) => {
                if (this.editingItem) {
                  this.editingItem.text = e.detail.value
                }
                this.requestUpdate()
              }}
          ></ct-textarea>

          <ct-textarea
            label="Translation"
            .value=${this.editingItem!.value}
            @ct-change=${(e: CustomEvent) => {
                if (this.editingItem) {
                  this.editingItem.value = e.detail.value
                }
                this.requestUpdate()
              }}
          ></ct-textarea>

          <ct-input
            type="number"
            label="Frequency"
            .value=${String(this.editingItem!.freq)}
            min="0" step="1"
            @ct-change=${(e: CustomEvent) => {
                if (this.editingItem) {
                  this.editingItem.freq = Number(e.detail.value)
                }
                this.requestUpdate()
              }}
          ></ct-input>

          <div class="flex items-center justify-end gap-8px mt-8px">
            <ct-button size="md" variant="outlined" @click=${this.cancelEdit}>Cancel</ct-button>
            <ct-button size="md" variant="filled" @click=${this.saveEdit}>Save</ct-button>
          </div>
        </div>
      </ct-dialog>
    `
  }

  override render() {
    const tabs: TabItem[] = [
      { icon: html`<span>🌐</span>`, label: 'Translate', value: 'translate' },
      { icon: html`<span>⚙️</span>`, label: 'Provider', value: 'provider' },
      { icon: html`<span>🗃️</span>`, label: 'Cache', value: 'cache' },
    ]

    return html`
      <ct-dialog title="Setting">
        <ct-tabs
          slot="sidebar"
          .tabs=${tabs}
          .active=${this.activeTab}
          @ct-change=${(e: CustomEvent) => { this.activeTab = e.detail.value }}
        ></ct-tabs>
        ${this.activeTab === 'translate'
          ? this.renderTranslateTab()
          : this.activeTab === 'provider'
            ? this.renderProviderTab()
            : this.renderCacheTab()}
      </ct-dialog>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chrome-translate-settings': ChromeTranslateSettings
  }
}
