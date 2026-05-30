import type { ITranslateOptions } from '../core/translator'
import type { LFUCache } from '../utils/LFUCache'
import type { ChromeTranslateSettings } from './ct-settings'
import { GM_getValue, GM_setValue } from '$'
import { css, html, LitElement, nothing } from 'lit'
import { customElement, query, state } from 'lit/decorators.js'
import { OpenAITranslator } from '../core/provider/openai'
import { useTranslate } from '../hooks/useTranslate'
import { useWatchUrlChange } from '../hooks/useWatchUrlChange'
import { SCROLLBAR_INFO, STORAGE_CONFIG_KEY } from '../utils/constant'
import { logger } from '../utils/logger'
import { clamp, debounce, throttle, watchScrollbarChange } from '../utils/public'
import { CtConfirm } from './ct-confirm'
import { checkIcon, languageIcon, settingIcon } from './icons'
import './ct-button'
import './ct-settings'

interface Config {
  position: { x: string, y: string }
  side: 'left' | 'right'
  language: { from: string, to: string }
  provider: 'chrome' | 'openai'
  mode: 'text' | 'html'
  displayMode: 'bilingual' | 'replace'
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
  displayMode: 'bilingual',
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
  @state() private provider: 'chrome' | 'openai' = 'chrome'
  @state() private openaiApiKey = ''
  @state() private openaiBaseUrl = 'https://api.openai.com/v1'
  @state() private openaiModel = 'gpt-4o-mini'
  @state() private openaiPrompt = ''
  @state() private openaiModels: string[] = []
  @state() private openaiModelsLoading = false
  @state() private openaiModelsError = ''
  @state() private mode: 'text' | 'html' = DEFAULT_CONFIG.mode
  @state() private displayMode: 'bilingual' | 'replace' = DEFAULT_CONFIG.displayMode
  @state() private batchSize = DEFAULT_CONFIG.batchSize
  @state() private openaiTemperature = DEFAULT_CONFIG.openai.temperature
  @state() private openaiMaxTokens = DEFAULT_CONFIG.openai.maxTokens
  @state() private translateCache?: LFUCache<string>

  @query('.ct-ball') private ballEl!: HTMLElement
  @query('chrome-translate-settings') private settingsDialog!: ChromeTranslateSettings

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
    this.displayMode = this.config.displayMode
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
    void this.initTranslate()
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback()
    document.removeEventListener('mousemove', this.throttledMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
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
    this.translateCache = t.instance.translateCache
    t.instance.useHTML = this.mode === 'html'
    t.instance.batchSize = this.batchSize
    t.instance.mode = this.displayMode

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
    logger.info(`Translation engine initialized, from=${options.from ?? 'auto'}, to=${options.to}`)
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
      logger.info('Translate stopped (toggle off)')
    }
    else {
      t.start()
      logger.info(`Translate started (${from}→${to})`)
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
    this.settingsDialog?.show()
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

  private async onSelectLanguage(target: 'from' | 'to', value: string): Promise<void> {
    this.language = { ...this.language, [target]: value }
    logger.info(`Language changed: ${target}=${value}`)

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

  private onDisplayModeChange(value: 'bilingual' | 'replace'): void {
    this.displayMode = value
    if (this.rendererCtrl) {
      this.rendererCtrl.instance.mode = value
    }
    GM_setValue(STORAGE_CONFIG_KEY, {
      ...this.config,
      displayMode: value,
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

  private async resetToDefault(): Promise<void> {
    const confirmed = await CtConfirm.show({
      title: 'Reset Settings',
      message: 'Reset all settings to default values?',
      confirmText: 'Reset',
      cancelText: 'Cancel',
      danger: true,
    })

    if (!confirmed) {
      return
    }

    GM_setValue(STORAGE_CONFIG_KEY, structuredClone(DEFAULT_CONFIG))
    this.config = {
      ...DEFAULT_CONFIG,
      language: { ...DEFAULT_CONFIG.language },
      openai: { ...DEFAULT_CONFIG.openai },
    }

    this.language = { ...DEFAULT_CONFIG.language }
    this.provider = DEFAULT_CONFIG.provider
    this.mode = DEFAULT_CONFIG.mode
    this.displayMode = DEFAULT_CONFIG.displayMode
    this.batchSize = DEFAULT_CONFIG.batchSize
    this.openaiApiKey = DEFAULT_CONFIG.openai.apiKey
    this.openaiBaseUrl = DEFAULT_CONFIG.openai.baseUrl
    this.openaiModel = DEFAULT_CONFIG.openai.model
    this.openaiPrompt = DEFAULT_CONFIG.openai.prompt
    this.openaiTemperature = DEFAULT_CONFIG.openai.temperature
    this.openaiMaxTokens = DEFAULT_CONFIG.openai.maxTokens
    this.openaiModels = []
    this.openaiModelsLoading = false
    this.openaiModelsError = ''
    this.isTranslating = false

    this.openaiProvider.updateConfig(DEFAULT_CONFIG.openai)
    const t = this.rendererCtrl
    if (t) {
      t.instance.useHTML = DEFAULT_CONFIG.mode === 'html'
      t.instance.batchSize = DEFAULT_CONFIG.batchSize
      t.instance.mode = DEFAULT_CONFIG.displayMode
      t.instance.translator.setProvider('chrome')
      if (t.isTranslating()) {
        t.stop()
        t.instance.clearElements()
      }
      void t.instance.translator.detectPageLanguage().then((lang) => {
        t.instance.setLanguage({ from: lang, to: DEFAULT_CONFIG.language.to })
      })
    }

    this.settingsDialog?.close()
    logger.info('Settings reset to default')
  }

  private onSettingsEvent(e: CustomEvent): void {
    const { type, detail } = e
    switch (type) {
      case 'language-change':
        void this.onSelectLanguage(detail.target, detail.value)
        break
      case 'mode-change':
        this.onModeChange(detail.value)
        break
      case 'display-mode-change':
        this.onDisplayModeChange(detail.value)
        break
      case 'batch-size-change':
        this.onBatchSizeChange(detail.value)
        break
      case 'provider-change':
        this.onProviderChange(detail.value)
        break
      case 'openai-config-change':
        this.onOpenAIConfigChange(detail.field, detail.value)
        break
      case 'fetch-models':
        void this.fetchModels()
        break
      case 'reset-default':
        this.resetToDefault()
        break
    }
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

        <chrome-translate-settings
          .language=${this.language}
          .provider=${this.provider}
          .mode=${this.mode}
          .displayMode=${this.displayMode}
          .batchSize=${this.batchSize}
          .openaiApiKey=${this.openaiApiKey}
          .openaiBaseUrl=${this.openaiBaseUrl}
          .openaiModel=${this.openaiModel}
          .openaiPrompt=${this.openaiPrompt}
          .openaiModels=${this.openaiModels}
          .openaiModelsLoading=${this.openaiModelsLoading}
          .openaiModelsError=${this.openaiModelsError}
          .openaiTemperature=${this.openaiTemperature}
          .openaiMaxTokens=${this.openaiMaxTokens}
          .translateCache=${this.translateCache}
          @language-change=${this.onSettingsEvent}
          @mode-change=${this.onSettingsEvent}
          @display-mode-change=${this.onSettingsEvent}
          @batch-size-change=${this.onSettingsEvent}
          @provider-change=${this.onSettingsEvent}
          @openai-config-change=${this.onSettingsEvent}
          @fetch-models=${this.onSettingsEvent}
          @reset-default=${this.onSettingsEvent}
        ></chrome-translate-settings>
      </div>
    `
  }
}
