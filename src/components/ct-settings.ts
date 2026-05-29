import { css, html, LitElement, nothing } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'
import { LANGUAGES } from '../utils/languages'
import { refreshIcon } from './icons'
import './ct-input'
import './ct-select'

export interface SettingsChangeEvent {
  language?: { from: string, to: string }
  provider?: 'chrome' | 'openai'
  mode?: 'text' | 'html'
  batchSize?: number
  openaiField?: { field: string, value: string }
}

@customElement('chrome-translate-settings')
export class ChromeTranslateSettings extends LitElement {
  static override styles = css`
    :host {
      all: initial;
      display: contents;
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.3);
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

  @state() private activeTab: 'translate' | 'provider' = 'translate'

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

  private emit(name: string, detail: unknown): void {
    this.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true,
    }))
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

  private renderSidebar() {
    return html`
      <div class="max-[500px]:w-[60px] flex-[0_0_auto] border-r-1px border-r-solid border-r-[#eee] px-0 py-12px flex flex-col gap-2px w-140px">
        <div
          class="max-[500px]:px-2 max-[500px]:py-[10px] max-[500px]:justify-center [&:hover]-bg-[#f5f5f5] [&:hover]-text-[#333] flex items-center gap-8px px-16px py-10px cursor-pointer text-13px text-[#666] border-l-3px border-l-solid border-l-transparent transition-all transition-duration-0.15s select-none ${this.activeTab === 'translate' ? 'border-l-[#00c4b6]! bg-[#f0fdfb] text-[#00c4b6]! font-600' : ''}"
          @click=${() => { this.activeTab = 'translate' }}
        >
          <span class="text-16px">🌐</span>
          <span class="max-[500px]:hidden whitespace-nowrap">Translate</span>
        </div>
        <div
          class="max-[500px]:px-2 max-[500px]:py-[10px] max-[500px]:justify-center [&:hover]-bg-[#f5f5f5] [&:hover]-text-[#333] flex items-center gap-8px px-16px py-10px cursor-pointer text-13px text-[#666] border-l-3px border-l-solid border-l-transparent transition-all transition-duration-0.15s select-none ${this.activeTab === 'provider' ? 'border-l-[#00c4b6]! bg-[#f0fdfb] text-[#00c4b6]! font-600' : ''}"
          @click=${() => { this.activeTab = 'provider' }}
        >
          <span class="text-16px">⚙️</span>
          <span class="max-[500px]:hidden whitespace-nowrap">Provider</span>
        </div>
      </div>
    `
  }

  private renderRadio(name: string, value: string, checked: boolean, label: string, onChange: () => void) {
    return html`
      <label class="flex-1 flex items-center gap-8px px-14px py-10px border-1px border-solid border-[#ddd] rounded-[8px] cursor-pointer text-13px text-[#555] transition-all transition-duration-0.2s [&:hover]-border-[#00c4b6] ${checked ? 'border-[#00c4b6]! bg-[#f0fdfb] text-[#00c4b6]! font-600' : ''}">
        <input class="hidden" type="radio" name=${name} value=${value} ?checked=${checked} @change=${onChange}>
        <span>${label}</span>
      </label>
    `
  }

  private renderTranslateTab() {
    return html`
      <div class="text-13px font-600 text-[#888] mb-10px">Language</div>
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

      <div class="h-1px bg-[#eee] mx-0 my-16px"></div>

      <div class="text-13px font-600 text-[#888] mb-10px">Translation Mode</div>
      <div class="flex gap-12px" style="flex-direction:column;gap:6px;">
        ${this.renderRadio('mode', 'text', this.mode === 'text', 'Text', () => this.emit('mode-change', { value: 'text' }))}
        ${this.renderRadio('mode', 'html', this.mode === 'html', 'HTML', () => this.emit('mode-change', { value: 'html' }))}
      </div>

      <div class="h-1px bg-[#eee] mx-0 my-16px"></div>

      <div class="text-13px font-600 text-[#888] mb-10px">Performance</div>
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
      <div class="text-13px font-600 text-[#888] mb-10px">Translation Provider</div>
      <div class="flex gap-12px">
        ${this.renderRadio('provider', 'chrome', this.provider === 'chrome', 'Chrome AI', () => this.emit('provider-change', { value: 'chrome' }))}
        ${this.renderRadio('provider', 'openai', this.provider === 'openai', 'OpenAI API', () => this.emit('provider-change', { value: 'openai' }))}
      </div>

      ${this.provider === 'openai'
        ? html`
        <div class="h-1px bg-[#eee] mx-0 my-16px"></div>
        <div class="text-13px font-600 text-[#888] mb-10px">OpenAI Configuration</div>
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
              <button
                @click=${() => this.emit('fetch-models', undefined)}
                class="shrink-0 w-36px h-38px border-1px border-solid border-[#ddd] rounded-[8px] bg-[#fafafa] cursor-pointer text-[#00c4b6] flex items-center justify-center p-0 box-border"
                title="Refresh models"
              >${refreshIcon}</button>
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

          <label class="flex flex-col gap-4px">
            <span class="text-12px text-[#888] font-500">System Prompt</span>
            <textarea
              class="px-12px py-8px border-1px border-solid border-[#ddd] rounded-[6px] text-13px text-[#333] bg-[#fafafa] outline-none transition-border-color transition-duration-0.2s w-[100%] min-h-120px box-border resize-y font-[inherit] [&:focus]-border-[#00c4b6] [&:focus]-bg-[#fff]"
              .value=${this.openaiPrompt}
              @change=${(e: Event) => this.emit('openai-config-change', { field: 'prompt', value: (e.target as HTMLTextAreaElement).value })}
              placeholder="Optional: custom system prompt for translation"
            ></textarea>
          </label>
        </div>
      `
        : nothing}
    `
  }

  override render() {
    return html`
      <dialog class="border-none rounded-[12px] shadow-[0_16px_48px_rgba(0,0,0,.2)] w-600px p-0 overflow-hidden open:flex open:flex-col open:h-full">
        <div class="flex items-center justify-between px-20px py-16px border-b-1px border-b-solid border-b-[#eee] text-16px font-600 text-[#333]">
          <span>Setting</span>
          <button class="w-28px h-28px border-none bg-[#f5f5f5] rounded-[50%] cursor-pointer flex items-center justify-center text-14px text-[#999] [&:hover]-bg-[#e8e8e8] [&:hover]-text-[#333]" @click=${() => this.dialogEl?.close()}>✕</button>
        </div>
        <div class="flex flex-1 overflow-hidden">
          ${this.renderSidebar()}
          <div class="flex-1 min-h-0 p-20px overflow-y-auto">
            ${this.activeTab === 'translate' ? this.renderTranslateTab() : this.renderProviderTab()}
          </div>
        </div>
      </dialog>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chrome-translate-settings': ChromeTranslateSettings
  }
}
