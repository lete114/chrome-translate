import type { CtDialog } from './ct-dialog'
import type { TabItem } from './ct-tabs'
import { css, html, LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { emitCtEvent } from '../utils/emit'
import { LANGUAGES } from '../utils/languages'
import { refreshIcon } from './icons'
import './ct-input'
import './ct-select'
import './ct-textarea'
import './ct-icon-button'
import './ct-radio-group'
import './ct-divider'
import './ct-section-header'
import './ct-tabs'
import './ct-dialog'

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

  @property({ type: String }) private activeTab = 'translate'

  @query('ct-dialog') private dialogEl!: CtDialog

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
              <ct-icon-button size="md" variant="outlined" title="Refresh models" @click=${() => this.emit('fetch-models', undefined)}>${refreshIcon}</ct-icon-button>
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

  override render() {
    const tabs: TabItem[] = [
      { icon: html`<span>🌐</span>`, label: 'Translate', value: 'translate' },
      { icon: html`<span>⚙️</span>`, label: 'Provider', value: 'provider' },
    ]

    return html`
      <ct-dialog title="Setting">
        <ct-tabs
          slot="sidebar"
          .tabs=${tabs}
          .active=${this.activeTab}
          @ct-change=${(e: CustomEvent) => { this.activeTab = e.detail.value }}
        ></ct-tabs>
        ${this.activeTab === 'translate' ? this.renderTranslateTab() : this.renderProviderTab()}
      </ct-dialog>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chrome-translate-settings': ChromeTranslateSettings
  }
}
