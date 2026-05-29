import type { ITranslateOptions } from '../core/translator'
import { GM_getValue, GM_setValue } from '$'
import { css, html, LitElement, nothing } from 'lit'
import { customElement, query, state } from 'lit/decorators.js'
import { OpenAITranslator } from '../core/provider/openai'
import { useTranslate } from '../hooks/useTranslate'
import { useWatchUrlChange } from '../hooks/useWatchUrlChange'
import { SCROLLBAR_INFO, STORAGE_CONFIG_KEY } from '../utils/constant'
import { LANGUAGES } from '../utils/languages'
import { clamp, debounce, throttle, watchScrollbarChange } from '../utils/public'
import { checkIcon, languageIcon, refreshIcon, settingIcon } from './icons'

interface Config {
  position: { x: string, y: string }
  side: 'left' | 'right'
  language: { from: string, to: string }
  provider: 'chrome' | 'openai'
  mode: 'text' | 'html'
  batchSize: number
  openai: {
    apiKey: string
    baseUrl: string
    model: string
    prompt: string
    temperature: number
    maxTokens: number
  }
}

const DEFAULT_CONFIG: Config = {
  position: { x: '', y: '' },
  side: 'right',
  language: { from: 'auto', to: '' },
  provider: 'chrome',
  mode: 'text',
  batchSize: 6,
  openai: {
    apiKey: '',
    baseUrl: 'https://api.openai.com/v1',
    model: 'gpt-4o-mini',
    prompt: 'You are a professional translator. Translate the following text from {from} to {to}. Return only the translated text, no explanation, no notes. The text contains critical markup tags like <c1>, <c2>, <c3> etc. Each tag\'s opening <cN> and closing </cN> wrap a single contiguous text span. You MUST preserve ALL of these tags exactly as-is, in the exact same order and position, and keep each tag\'s content as one continuous segment. Never split a tag\'s inner content across different parts of the sentence. Never remove, merge, reorder, or restructure any of these tags in any circumstance.',
    temperature: 0.3,
    maxTokens: 1024,
  },
}

@customElement('chrome-translate-ball')
export class ChromeTranslateBall extends LitElement {
  static override styles = css`
    :host {
      all: initial;
    }

    .ct-ball {
      --size: 40px;
      --x: 0px;
      --y: calc(50vh - var(--size) / 2);
      position: fixed;
      top: 0;
      z-index: 999999999;
      width: var(--size);
      height: var(--size);
      transform: translate(var(--x), var(--y));
      transition: all 0.3s ease;
    }

    .ct-ball[data-side="left"] {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
    .ct-ball[data-side="left"]:hover {
      --x: 0;
      padding-left: 10px;
    }
    .ct-ball[data-side="left"]:hover .ct-setting-wrap { left: 6px; }

    .ct-ball[data-side="right"] {
      --x: calc(100vw - var(--size) - var(--scrollbar-width));
      --offset: calc(var(--scrollbar-width) + 10px);
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-right: var(--offset);
    }
    .ct-ball[data-side="right"]:hover {
      --x: calc(100vw - var(--size) - var(--offset));
    }
    .ct-ball[data-side="right"]:hover .ct-setting-wrap { right: calc(var(--scrollbar-width) + 6px); }
    .ct-ball[data-side="right"] .ct-check-icon { left: 0; right: unset; }

    .ct-setting-wrap {
      position: absolute;
      transition: all 0.3s ease;
      top: var(--size);
      padding-top: 10px;
    }
    .ct-ball[data-side="left"] .ct-setting-wrap { left: calc(var(--size) * -1); }
    .ct-ball[data-side="right"] .ct-setting-wrap { right: calc(var(--size) * -1); }

    @unocss-placeholder;
  `

  @state() private moving = false
  @state() private isTranslating = false
  @state() private language!: { from: string, to: string }
  @state() private activeDropdown: 'from' | 'to' | null = null
  @state() private provider: 'chrome' | 'openai' = 'chrome'
  @state() private openaiApiKey = ''
  @state() private openaiBaseUrl = 'https://api.openai.com/v1'
  @state() private openaiModel = 'gpt-4o-mini'
  @state() private openaiPrompt = ''
  @state() private openaiModels: string[] = []
  @state() private openaiModelsLoading = false
  @state() private openaiModelsError = ''
  @state() private modelDropdownOpen = false
  @state() private modelDropdownUp = false
  @state() private activeTab: 'translate' | 'provider' = 'translate'
  @state() private mode: 'text' | 'html' = DEFAULT_CONFIG.mode
  @state() private batchSize = DEFAULT_CONFIG.batchSize
  @state() private openaiTemperature = DEFAULT_CONFIG.openai.temperature
  @state() private openaiMaxTokens = DEFAULT_CONFIG.openai.maxTokens

  @query('.ct-ball') private ballEl!: HTMLElement
  @query('dialog') private dialogEl!: HTMLDialogElement

  private config = GM_getValue<Config>(STORAGE_CONFIG_KEY, DEFAULT_CONFIG)
  private openaiProvider = new OpenAITranslator()

  private rendererCtrl?: Awaited<ReturnType<typeof useTranslate>>
  private dragging = false
  private isAllowedTranslate = true
  private startX: number | null = null
  private startY: number | null = null
  private cleanupUrlWatch?: () => void
  private cleanupScrollbarWatch?: () => void
  private throttledMouseMove!: ReturnType<typeof throttle<typeof this.onMouseMove>>

  override connectedCallback(): void {
    super.connectedCallback()
    this.config = {
      ...DEFAULT_CONFIG,
      ...this.config,
      language: { ...DEFAULT_CONFIG.language, ...this.config.language },
      openai: { ...DEFAULT_CONFIG.openai, ...this.config.openai },
    }
    this.language = { ...this.config.language }
    this.provider = this.config.provider
    this.mode = this.config.mode
    this.batchSize = this.config.batchSize
    this.openaiApiKey = this.config.openai.apiKey
    this.openaiBaseUrl = this.config.openai.baseUrl
    this.openaiModel = this.config.openai.model
    this.openaiPrompt = this.config.openai.prompt
    this.openaiTemperature = this.config.openai.temperature
    this.openaiMaxTokens = this.config.openai.maxTokens
    this.openaiProvider.updateConfig(this.config.openai)
    this.throttledMouseMove = throttle(this.onMouseMove.bind(this), 16)
    document.addEventListener('mousemove', this.throttledMouseMove)
    document.addEventListener('mouseup', this.onMouseUp)
    document.addEventListener('mousedown', this.onDocumentMouseDown)
    void this.initTranslate()
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback()
    document.removeEventListener('mousemove', this.throttledMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
    document.removeEventListener('mousedown', this.onDocumentMouseDown)
    this.throttledMouseMove.cancel()
    this.cleanupUrlWatch?.()
    this.cleanupScrollbarWatch?.()
  }

  override firstUpdated(): void {
    const y = this.config.position.y
    const ball = this.ballEl
    if (y) {
      ball.style.setProperty('--y', y)
    }

    this.cleanupScrollbarWatch = watchScrollbarChange((info) => {
      Object.assign(SCROLLBAR_INFO, info)
      this.setScrollbarProperty(this.ballEl)
    })
    this.setScrollbarProperty(this.ballEl)

    ball.getBoundingClientRect()
    ball.style.transition = 'all 0.3s ease'

    this.dialogEl.addEventListener('click', (e: MouseEvent) => {
      if (e.target === this.dialogEl) {
        this.dialogEl.close()
      }
    })
  }

  private setScrollbarProperty(el: HTMLElement): void {
    el.style.setProperty('--scrollbar-width', `${SCROLLBAR_INFO.width}px`)
    el.style.setProperty('--scrollbar-height', `${SCROLLBAR_INFO.height}px`)
  }

  private async initTranslate(): Promise<void> {
    const options: Partial<ITranslateOptions> = { ...this.config.language }
    if (options.from === 'auto') {
      Reflect.deleteProperty(options, 'from')
    }

    const t = await useTranslate(options)
    this.rendererCtrl = t
    t.instance.useHTML = this.mode === 'html'
    t.instance.batchSize = this.batchSize

    const translator = t.instance.translator
    translator.registerProvider('openai', this.openaiProvider)
    if (this.provider === 'openai') {
      translator.setProvider('openai')
    }

    const to = this.config.language.to
    if (to) {
      this.language = { ...this.language, to }
      const from = this.language.from === 'auto'
        ? await translator.detectPageLanguage()
        : this.language.from
      t.instance.setLanguage({ from, to })
    }
    else {
      this.language = { ...this.language, to: t.instance.language.to }
    }

    this.cleanupUrlWatch = useWatchUrlChange((newUrl, oldUrl) => {
      if (this.isTranslating && newUrl !== oldUrl) {
        t.instance.clearElements()
        t.start()
      }
    })
  }

  private onMouseDown = (e: MouseEvent): void => {
    if (e.button !== 0) {
      return
    }
    this.startX = e.clientX
    this.startY = e.clientY
    this.moving = false
    const ball = this.ballEl
    if (ball) {
      ball.style.transition = 'none'
    }
  }

  private onMouseMove(e: MouseEvent): void {
    const ball = this.ballEl
    if (!ball || this.startX === null || this.startY === null) {
      return
    }

    const dx = e.clientX - this.startX
    const dy = e.clientY - this.startY
    const distance = Math.sqrt(dx * dx + dy * dy)
    if (distance > 5) {
      this.dragging = true
    }
    if (!this.dragging) {
      return
    }

    this.moving = true
    ball.style.cursor = 'move'

    const bw = ball.offsetWidth
    const bh = ball.offsetHeight
    const x = clamp(e.clientX - bw / 2, 0, window.innerWidth - bw)
    const y = clamp(e.clientY - bh / 2, 0, window.innerHeight - bh)

    ball.style.setProperty('--x', `${x}px`)
    ball.style.setProperty('--y', `${y}px`)
  }

  private onMouseUp = (): void => {
    this.startX = null
    this.startY = null
    const ball = this.ballEl
    if (!ball || !this.dragging) {
      return
    }

    this.dragging = false
    this.isAllowedTranslate = false
    this.moving = false
    ball.style.transition = 'all 0.3s ease'
    ball.style.cursor = 'pointer'

    const rect = ball.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const side = centerX < window.innerWidth / 2 ? 'left' : 'right'
    ball.setAttribute('data-side', side)

    const x = ball.style.getPropertyValue('--x')
    const y = ball.style.getPropertyValue('--y')
    ball.style.removeProperty('--x')

    GM_setValue(STORAGE_CONFIG_KEY, {
      ...this.config,
      position: { x, y },
      side,
    })
  }

  private onTranslate = debounce(async () => {
    if (!this.isAllowedTranslate) {
      this.isAllowedTranslate = true
      return
    }

    const t = this.rendererCtrl
    if (!t) {
      return
    }

    const { from, to } = t.instance.language
    if (from === to) {
      console.warn('Translation from and to are the same.')
      return
    }

    if (t.isTranslating()) {
      t.stop()
      t.instance.clearElements()
    }
    else {
      t.start()
    }
    this.isTranslating = t.isTranslating()
  }, 500, true)

  private async fetchModels(): Promise<void> {
    if (this.openaiModelsLoading) {
      return
    }
    this.openaiModelsLoading = true
    this.openaiModelsError = ''
    try {
      this.openaiModels = await this.openaiProvider.fetchModels()
      if (this.openaiModels.length > 0 && !this.openaiModels.includes(this.openaiModel)) {
        this.onOpenAIConfigChange('model', this.openaiModels[0])
      }
    }
    catch (err) {
      this.openaiModelsError = err instanceof Error ? err.message : 'Unknown error'
    }
    finally {
      this.openaiModelsLoading = false
    }
  }

  private onOpenSetting = (): void => {
    this.dialogEl?.showModal()
    if (this.provider === 'openai') {
      if (this.openaiPrompt === '') {
        this.openaiPrompt = DEFAULT_CONFIG.openai.prompt
        this.onOpenAIConfigChange('prompt', DEFAULT_CONFIG.openai.prompt)
      }
      if (this.openaiModels.length === 0) {
        void this.fetchModels()
      }
    }
  }

  private onDocumentMouseDown = (e: MouseEvent): void => {
    if (this.modelDropdownOpen) {
      const modelDropdownEl = (e.composedPath() as Element[]).find(
        el => el instanceof Element && el.getAttribute('data-dropdown') === 'model',
      )
      if (!modelDropdownEl) {
        this.modelDropdownOpen = false
      }
    }

    if (!this.activeDropdown) {
      return
    }
    const dropdownEl = (e.composedPath() as Element[]).find(
      el => el instanceof Element && el.getAttribute('data-dropdown') === this.activeDropdown,
    )
    if (!dropdownEl) {
      this.activeDropdown = null
    }
  }

  private toggleDropdown(target: 'from' | 'to'): void {
    this.activeDropdown = this.activeDropdown === target ? null : target
  }

  private async onSelectLanguage(target: 'from' | 'to', value: string): Promise<void> {
    this.language = { ...this.language, [target]: value }
    this.activeDropdown = null

    const t = this.rendererCtrl
    if (!t) {
      return
    }

    const detectPageLanguage = (): Promise<string> => t.instance.translator.detectPageLanguage()

    const from = target === 'from'
      ? (value === 'auto' ? await detectPageLanguage() : value)
      : (this.language.from === 'auto' ? await detectPageLanguage() : this.language.from)
    const to = target === 'to' ? value : this.language.to

    t.instance.setLanguage({ from, to })
    GM_setValue(STORAGE_CONFIG_KEY, {
      ...this.config,
      language: this.language,
    })
  }

  private onProviderChange(value: 'chrome' | 'openai'): void {
    this.provider = value
    this.rendererCtrl?.instance.translator.setProvider(value)
    GM_setValue(STORAGE_CONFIG_KEY, {
      ...this.config,
      provider: value,
    })
    if (value === 'openai') {
      void this.fetchModels()
    }
  }

  private onOpenAIConfigChange(field: 'apiKey' | 'baseUrl' | 'model' | 'prompt' | 'temperature' | 'maxTokens', value: string): void {
    this.openaiApiKey = field === 'apiKey' ? value : this.openaiApiKey
    this.openaiBaseUrl = field === 'baseUrl' ? value : this.openaiBaseUrl
    this.openaiModel = field === 'model' ? value : this.openaiModel
    this.openaiPrompt = field === 'prompt' ? value : this.openaiPrompt
    this.openaiTemperature = field === 'temperature' ? Number(value) : this.openaiTemperature
    this.openaiMaxTokens = field === 'maxTokens' ? Number(value) : this.openaiMaxTokens

    const openai = {
      apiKey: this.openaiApiKey,
      baseUrl: this.openaiBaseUrl,
      model: this.openaiModel,
      prompt: this.openaiPrompt,
      temperature: this.openaiTemperature,
      maxTokens: this.openaiMaxTokens,
    }
    this.openaiProvider.updateConfig(openai)
    GM_setValue(STORAGE_CONFIG_KEY, {
      ...this.config,
      openai,
    })
  }

  private toggleModelDropdown(): void {
    if (!this.modelDropdownOpen) {
      const trigger = this.renderRoot.querySelector<HTMLElement>('.model-select-trigger')
      if (trigger) {
        const rect = trigger.getBoundingClientRect()
        const spaceBelow = window.innerHeight - rect.bottom
        this.modelDropdownUp = spaceBelow < 200
      }
    }

    this.modelDropdownOpen = !this.modelDropdownOpen
  }

  private onSelectModel(value: string): void {
    this.openaiModel = value
    this.modelDropdownOpen = false
    this.onOpenAIConfigChange('model', value)
  }

  private renderModelSelect() {
    const label = this.openaiModel
    const disabled = this.openaiModelsLoading || !!this.openaiModelsError

    return html`
      <div class="relative" data-dropdown="model">
        <button
          class="model-select-trigger w-full px-12px py-10px border-1px border-solid border-[#ddd] rounded-[8px] bg-[#f8f8f8] cursor-pointer text-13px text-[#333] flex items-center justify-between gap-4px transition-border-color transition-duration-0.2s [&:hover]-border-[#00c4b6] [&:disabled]-op-70 [&:disabled]-cursor-default [&:disabled]:hover-border-[#ddd]"
          ?disabled=${disabled}
          @click=${this.toggleModelDropdown}
        >
          ${this.openaiModelsLoading ? 'Loading models…' : label}
          <span class="text-#999">▾</span>
        </button>
        ${this.openaiModelsError
          ? html`<div class="text-11px text-[#e74c3c] lh-[1.4] pt-2px">${this.openaiModelsError}</div>`
          : nothing}
        ${!disabled && this.modelDropdownOpen
          ? html`
          <div class="absolute top-[calc(100%+4px)] left-0 right-0 bg-[#fff] border-1px border-solid border-[#ddd] rounded-[8px] shadow-[0_8px_24px_rgba(0,0,0,.12)] max-h-200px overflow-y-auto z-10 data-[dropup=true]:top-auto data-[dropup=true]:bottom-[calc(100%+4px)]" data-dropup=${String(this.modelDropdownUp)}>
            ${this.openaiModels.map(m => html`
              <div
                class="px-12px py-8px cursor-pointer text-13px text-[#555] [&:hover]-bg-[#f0f0f0] ${m === this.openaiModel ? 'text-[#00c4b6]! font-600 bg-[#f0fdfb]' : ''}"
                @click=${() => this.onSelectModel(m)}
              >${m}</div>
            `)}
          </div>
        `
          : nothing}
      </div>
    `
  }

  private renderSelect(target: 'from' | 'to') {
    const options = target === 'from'
      ? [{ label: 'Auto', value: 'auto' }, ...LANGUAGES]
      : [...LANGUAGES]
    const current = this.language[target]
    const label = options.find(o => o.value === current)?.label ?? current

    return html`
      <div class="relative" data-dropdown=${target}>
        <button
          class="w-[100%] px-12px py-10px border-1px border-solid border-[#ddd] rounded-[8px] bg-[#f8f8f8] cursor-pointer text-13px text-[#333] flex items-center justify-between gap-4px transition-border-color transition-duration-0.2s [&:hover]-border-[#00c4b6] [&:disabled]-op-70 [&:disabled]-cursor-default [&:disabled]:hover-border-[#ddd]"
          @click=${() => this.toggleDropdown(target)}
        >
          ${label}
          <span class="text-#999">▾</span>
        </button>
        <div
          class="absolute top-[calc(100%+4px)] left-0 right-0 bg-[#fff] border-1px border-solid border-[#ddd] rounded-[8px] shadow-[0_8px_24px_rgba(0,0,0,.12)] max-h-200px overflow-y-auto z-10"
          ?hidden=${this.activeDropdown !== target}
        >
          ${options.map(o => html`
            <div
              class="px-12px py-8px cursor-pointer text-13px text-[#555] [&:hover]-bg-[#f0f0f0] ${o.value === current ? 'text-[#00c4b6]! font-600 bg-[#f0fdfb]' : ''}"
              @click=${() => { void this.onSelectLanguage(target, o.value) }}
            >${o.label}</div>
          `)}
        </div>
      </div>
    `
  }

  private onModeChange(value: 'text' | 'html'): void {
    this.mode = value
    if (this.rendererCtrl) {
      this.rendererCtrl.instance.useHTML = value === 'html'
    }
    GM_setValue(STORAGE_CONFIG_KEY, {
      ...this.config,
      mode: value,
    })
  }

  private onBatchSizeChange(value: number): void {
    this.batchSize = value
    if (this.rendererCtrl) {
      this.rendererCtrl.instance.batchSize = value
    }
    GM_setValue(STORAGE_CONFIG_KEY, {
      ...this.config,
      batchSize: value,
    })
  }

  private onBatchSizeInput(e: Event): void {
    const v = Number((e.target as HTMLInputElement).value)
    if (v > 0) {
      this.onBatchSizeChange(v)
    }
    else {
      (e.target as HTMLInputElement).value = String(this.batchSize)
    }
  }

  private onTemperatureInput(e: Event): void {
    const v = Number((e.target as HTMLInputElement).value)
    this.openaiTemperature = v
    this.onOpenAIConfigChange('temperature', String(v))
  }

  private onMaxTokensInput(e: Event): void {
    const v = Number((e.target as HTMLInputElement).value)
    this.openaiMaxTokens = v
    this.onOpenAIConfigChange('maxTokens', String(v))
  }

  private renderSidebar(): unknown {
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

  private renderTranslateTab(): unknown {
    return html`
      <div class="text-13px font-600 text-[#888] mb-10px">Language</div>
      <div class="flex items-center gap-12px">
        <div class="flex-1">${this.renderSelect('from')}</div>
        <span class="text-#999">→</span>
        <div class="flex-1">${this.renderSelect('to')}</div>
      </div>

      <div class="h-1px bg-[#eee] mx-0 my-16px"></div>

      <div class="text-13px font-600 text-[#888] mb-10px">Translation Mode</div>
      <div class="flex gap-12px" style="flex-direction:column;gap:6px;">
        <label class="flex-1 flex items-center gap-8px px-14px py-10px border-1px border-solid border-[#ddd] rounded-[8px] cursor-pointer text-13px text-[#555] transition-all transition-duration-0.2s [&:hover]-border-[#00c4b6] ${this.mode === 'text' ? 'border-[#00c4b6]! bg-[#f0fdfb] text-[#00c4b6]! font-600' : ''}">
          <input class="hidden" type="radio" name="mode" value="text" ?checked=${this.mode === 'text'} @change=${() => this.onModeChange('text')}>
          <span>Text</span>
        </label>
        <label class="flex-1 flex items-center gap-8px px-14px py-10px border-1px border-solid border-[#ddd] rounded-[8px] cursor-pointer text-13px text-[#555] transition-all transition-duration-0.2s [&:hover]-border-[#00c4b6] ${this.mode === 'html' ? 'border-[#00c4b6]! bg-[#f0fdfb] text-[#00c4b6]! font-600' : ''}">
          <input class="hidden" type="radio" name="mode" value="html" ?checked=${this.mode === 'html'} @change=${() => this.onModeChange('html')}>
          <span>HTML</span>
        </label>
      </div>

      <div class="h-1px bg-[#eee] mx-0 my-16px"></div>

      <div class="text-13px font-600 text-[#888] mb-10px">Performance</div>
      <label class="flex flex-col gap-4px">
        <span class="text-12px text-[#888] font-500">Max concurrent requests</span>
        <input type="number" class="px-12px py-8px border-1px border-solid border-[#ddd] rounded-[6px] text-13px text-[#333] bg-[#fafafa] outline-none transition-border-color transition-duration-0.2s w-[100%] box-border [&:focus]-border-[#00c4b6] [&:focus]-bg-[#fff]" min="1" max="20" step="1" .value=${String(this.batchSize)} @change=${this.onBatchSizeInput}>
      </label>
    `
  }

  private renderProviderTab(): unknown {
    return html`
      <div class="text-13px font-600 text-[#888] mb-10px">Translation Provider</div>
      <div class="flex gap-12px">
        <label class="flex-1 flex items-center gap-8px px-14px py-10px border-1px border-solid border-[#ddd] rounded-[8px] cursor-pointer text-13px text-[#555] transition-all transition-duration-0.2s [&:hover]-border-[#00c4b6] ${this.provider === 'chrome' ? 'border-[#00c4b6]! bg-[#f0fdfb] text-[#00c4b6]! font-600' : ''}">
          <input class="hidden" type="radio" name="provider" value="chrome" ?checked=${this.provider === 'chrome'} @change=${() => this.onProviderChange('chrome')}>
          <span>Chrome AI</span>
        </label>
        <label class="flex-1 flex items-center gap-8px px-14px py-10px border-1px border-solid border-[#ddd] rounded-[8px] cursor-pointer text-13px text-[#555] transition-all transition-duration-0.2s [&:hover]-border-[#00c4b6] ${this.provider === 'openai' ? 'border-[#00c4b6]! bg-[#f0fdfb] text-[#00c4b6]! font-600' : ''}">
          <input class="hidden" type="radio" name="provider" value="openai" ?checked=${this.provider === 'openai'} @change=${() => this.onProviderChange('openai')}>
          <span>OpenAI API</span>
        </label>
      </div>

      ${this.provider === 'openai'
        ? html`
        <div class="h-1px bg-[#eee] mx-0 my-16px"></div>
        <div class="text-13px font-600 text-[#888] mb-10px">OpenAI Configuration</div>
        <div class="flex flex-col gap-12px">
          <label class="flex flex-col gap-4px">
            <span class="text-12px text-[#888] font-500">API Key</span>
            <input type="password" class="px-12px py-8px border-1px border-solid border-[#ddd] rounded-[6px] text-13px text-[#333] bg-[#fafafa] outline-none transition-border-color transition-duration-0.2s w-[100%] box-border [&:focus]-border-[#00c4b6] [&:focus]-bg-[#fff]" .value=${this.openaiApiKey} @change=${(e: Event) => this.onOpenAIConfigChange('apiKey', (e.target as HTMLInputElement).value)} placeholder="sk-...">
          </label>
          <label class="flex flex-col gap-4px">
            <span class="text-12px text-[#888] font-500">Base URL</span>
            <input type="text" class="px-12px py-8px border-1px border-solid border-[#ddd] rounded-[6px] text-13px text-[#333] bg-[#fafafa] outline-none transition-border-color transition-duration-0.2s w-[100%] box-border [&:focus]-border-[#00c4b6] [&:focus]-bg-[#fff]" .value=${this.openaiBaseUrl} @change=${(e: Event) => this.onOpenAIConfigChange('baseUrl', (e.target as HTMLInputElement).value)}>
          </label>
          <label class="flex flex-col gap-4px">
            <span class="text-12px text-[#888] font-500">Model</span>
            <div class="flex gap-6px items-start">
              <div class="flex-1 min-w-0">${this.renderModelSelect()}</div>
              <button
                @click=${() => { void this.fetchModels() }}
                class="shrink-0 w-36px h-38px border-1px border-solid border-[#ddd] rounded-[8px] bg-[#fafafa] cursor-pointer text-[#00c4b6] flex items-center justify-center p-0 box-border"
                title="Refresh models"
              >${refreshIcon}</button>
            </div>
          </label>
          <label class="flex flex-col gap-4px">
            <span class="text-12px text-[#888] font-500">Temperature</span>
            <input type="number" class="px-12px py-8px border-1px border-solid border-[#ddd] rounded-[6px] text-13px text-[#333] bg-[#fafafa] outline-none transition-border-color transition-duration-0.2s w-[100%] box-border [&:focus]-border-[#00c4b6] [&:focus]-bg-[#fff]" min="0" step="0.1" .value=${String(this.openaiTemperature)} @change=${this.onTemperatureInput}>
          </label>
          <label class="flex flex-col gap-4px">
            <span class="text-12px text-[#888] font-500">Max Tokens</span>
            <input type="number" class="px-12px py-8px border-1px border-solid border-[#ddd] rounded-[6px] text-13px text-[#333] bg-[#fafafa] outline-none transition-border-color transition-duration-0.2s w-[100%] box-border [&:focus]-border-[#00c4b6] [&:focus]-bg-[#fff]" min="0" step="1" .value=${String(this.openaiMaxTokens)} @change=${this.onMaxTokensInput}>
          </label>
          <label class="flex flex-col gap-4px">
            <span class="text-12px text-[#888] font-500">System Prompt</span>
            <textarea class="px-12px py-8px border-1px border-solid border-[#ddd] rounded-[6px] text-13px text-[#333] bg-[#fafafa] outline-none transition-border-color transition-duration-0.2s w-[100%] min-h-120px box-border resize-y font-[inherit] [&:focus]-border-[#00c4b6] [&:focus]-bg-[#fff]" .value=${this.openaiPrompt} @change=${(e: Event) => this.onOpenAIConfigChange('prompt', (e.target as HTMLInputElement).value)} placeholder="Optional: custom system prompt for translation"></textarea>
          </label>
        </div>
      `
        : nothing}
    `
  }

  override render() {
    return html`
      <div class="select-none touch-none">
        <div
          data-side=${this.config.side}
          class="ct-ball bg-white text-white flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,.25)] cursor-pointer ${this.moving ? 'rounded-full! p-0!' : ''}"
          style="--scrollbar-width: ${SCROLLBAR_INFO.width}px"
          @click=${this.onTranslate}
          @mousedown=${this.onMouseDown}
          @contextmenu=${(e: Event) => e.preventDefault()}
        >
          <div class="relative w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#00c4b6]">
            <span class="w-5 h-5 flex items-center justify-center">${languageIcon}</span>
            ${this.isTranslating
              ? html`
              <span class="ct-check-icon absolute bottom-[-2px] right-0 w-[12px] h-[12px] rounded-full bg-[rgba(0,200,0,.8)] text-white flex items-center justify-center">${checkIcon}</span>
            `
              : nothing}
          </div>
          <div class="ct-setting-wrap text-black" ?hidden=${this.moving} @click=${(e: Event) => e.stopPropagation()}>
            <div class="w-[calc(var(--size)-4px)] h-[calc(var(--size)-4px)] bg-white cursor-pointer flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,.25)] rounded-[20px]" @click=${this.onOpenSetting}>
              ${settingIcon}
            </div>
          </div>
        </div>

        <dialog class="[&::backdrop]-bg-[rgba(0,0,0,0.3)] open:flex open:flex-col open:h-full border-none rounded-[12px] shadow-[0_16px_48px_rgba(0,0,0,.2)] w-600px p-0 overflow-hidden">
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
      </div>
    `
  }
}
