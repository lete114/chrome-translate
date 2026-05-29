import type { ITranslateOptions } from '../core/translator'
import { GM_getValue, GM_setValue } from '$'
import { css, html, LitElement, nothing } from 'lit'
import { customElement, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
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
    prompt: 'You are a professional translator. Translate the following text from {from} to {to}. Return only the translated text, no explanation, no notes.',
    temperature: 0.3,
    maxTokens: 1024,
  },
}

@customElement('chrome-translate-ball')
export class ChromeTranslateBall extends LitElement {
  static override styles = css`
    :host {
      all: initial;
      display: block;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .ct-root {
      --size: 40px;
      --bg: #fff;
      user-select: none;
      touch-action: none;
    }

    .ct-ball {
      --x: 0px;
      --y: calc(50vh - var(--size)/2);
      position: fixed;
      z-index: 999999999;
      top: 0;
      width: var(--size);
      height: var(--size);
      background-color: var(--bg);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 16px rgba(0, 0, 0, .25);
      cursor: pointer;
      user-select: none;
      touch-action: none;
      transform: translate(var(--x), var(--y));
    }

    .ct-ball.ct-moving {
      border-radius: 50%;
      padding: unset !important;
    }

    .ct-ball.ct-moving .ct-setting-wrap {
      display: none;
    }

    .ct-icon {
      --size: 28px;
      width: var(--size);
      height: var(--size);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #00c4b6;
    }

    .ct-language-icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ct-language-icon svg {
      width: 20px;
      height: 20px;
    }

    .ct-check-icon {
      position: absolute;
      bottom: -2px;
      right: 0;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgba(0, 200, 0, .8);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ct-check-icon svg {
      width: 8px;
      height: 8px;
    }

    .ct-setting-wrap {
      --x: 0px;
      --y: calc(50vh - var(--size)/2);
      position: absolute;
      user-select: none;
      touch-action: none;
      transition: all 0.3s ease;
      top: calc(var(--size));
      padding-top: 10px;
      color: #000;
    }

    .ct-ball[data-side="left"] .ct-setting-wrap {
      left: calc(var(--size) * -1);
    }

    .ct-ball[data-side="left"] .ct-setting-wrap:hover {
      left: 6px;
    }

    .ct-ball[data-side="right"] .ct-setting-wrap {
      right: calc(var(--size) * -1);
    }

    .ct-ball[data-side="right"] .ct-setting-wrap:hover {
      right: 6px;
    }

    .ct-setting {
      width: calc(var(--size) - 4px);
      height: calc(var(--size) - 4px);
      background-color: var(--bg);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 16px rgba(0, 0, 0, .25);
      border-radius: 20px;
    }

    .ct-setting svg {
      width: 20px;
      height: 20px;
    }

    .ct-ball[data-side="left"] {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }

    .ct-ball[data-side="left"]:hover {
      --x: 0;
      padding-left: 10px;
    }

    .ct-ball[data-side="left"]:hover .ct-setting-wrap {
      left: 6px;
    }

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

    .ct-ball[data-side="right"]:hover .ct-setting-wrap {
      right: calc(var(--scrollbar-width) + 6px);
    }

    .ct-ball[data-side="right"] .ct-icon .ct-check-icon {
      left: 0;
      right: unset;
    }

    dialog {
      border: none;
      border-radius: 12px;
      box-shadow: 0 16px 48px rgba(0, 0, 0, .2);
      width: 600px;
      padding: 0;
      overflow: hidden;
    }

    dialog[open] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.3);
    }

    .ct-dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid #eee;
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }

    .ct-dialog-close {
      width: 28px;
      height: 28px;
      border: none;
      background: #f5f5f5;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #999;
    }

    .ct-dialog-close:hover {
      background: #e8e8e8;
      color: #333;
    }

    .ct-setting-dialog {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .ct-setting-dialog-from,
    .ct-setting-dialog-to {
      flex: 1;
    }

    .ct-arrow-icon {
      color: #999;
      font-size: 18px;
      flex-shrink: 0;
    }

    .ct-custom-select {
      position: relative;
    }

    .ct-select-trigger {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #f8f8f8;
      cursor: pointer;
      font-size: 13px;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
      transition: border-color 0.2s;
    }

    .ct-select-trigger:hover {
      border-color: #00c4b6;
    }

    .ct-select-trigger:disabled {
      opacity: 0.7;
      cursor: default;
    }

    .ct-select-trigger:disabled:hover {
      border-color: #ddd;
    }

    .ct-arrow {
      font-size: 10px;
      color: #999;
      transition: transform 0.2s;
    }

    .ct-select-dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, .12);
      max-height: 200px;
      overflow-y: auto;
      z-index: 10;
    }

    .ct-select-dropdown[data-dropup="true"] {
      top: auto;
      bottom: calc(100% + 4px);
    }

    .ct-select-option {
      padding: 8px 12px;
      cursor: pointer;
      font-size: 13px;
      color: #555;
      transition: background 0.15s;
    }

    .ct-select-option:hover {
      background: #f0f0f0;
    }

    .ct-select-option.ct-selected {
      color: #00c4b6;
      font-weight: 600;
      background: #f0fdfb;
    }

    .ct-dialog-body {
      padding: 20px;
    }

    .ct-section-divider {
      height: 1px;
      background: #eee;
      margin: 16px 0;
    }

    .ct-section-label {
      font-size: 13px;
      font-weight: 600;
      color: #888;
      margin-bottom: 10px;
    }

    .ct-provider-options {
      display: flex;
      gap: 12px;
    }

    .ct-radio {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      border: 1px solid #ddd;
      border-radius: 8px;
      cursor: pointer;
      font-size: 13px;
      color: #555;
      transition: all 0.2s;
    }

    .ct-radio:hover {
      border-color: #00c4b6;
    }

    .ct-radio.ct-radio-active {
      border-color: #00c4b6;
      background: #f0fdfb;
      color: #00c4b6;
      font-weight: 600;
    }

    .ct-radio input {
      display: none;
    }

    .ct-openai-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .ct-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .ct-field-label {
      font-size: 12px;
      color: #888;
      font-weight: 500;
    }

    .ct-input {
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 13px;
      color: #333;
      background: #fafafa;
      outline: none;
      transition: border-color 0.2s;
      width: 100%;
      box-sizing: border-box;
    }

    .ct-input:focus {
      border-color: #00c4b6;
      background: #fff;
    }

    .ct-textarea {
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 13px;
      color: #333;
      background: #fafafa;
      outline: none;
      transition: border-color 0.2s;
      width: 100%;
      min-height: 80px;
      box-sizing: border-box;
      resize: none;
      font-family: inherit;
    }

    .ct-textarea:focus {
      border-color: #00c4b6;
      background: #fff;
    }

    .ct-dialog-body-with-sidebar {
      display: flex;
      flex: 1;
      overflow: hidden;
    }

    .ct-sidebar {
      flex: 0 0 auto;
      border-right: 1px solid #eee;
      padding: 12px 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
      width: 140px;
    }

    .ct-sidebar-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      cursor: pointer;
      font-size: 13px;
      color: #666;
      border-left: 3px solid transparent;
      transition: all 0.15s;
      user-select: none;
    }

    .ct-sidebar-item:hover {
      background: #f5f5f5;
      color: #333;
    }

    .ct-sidebar-active {
      border-left-color: #00c4b6;
      background: #f0fdfb;
      color: #00c4b6;
      font-weight: 600;
    }

    .ct-sidebar-icon {
      font-size: 16px;
      line-height: 1;
      flex-shrink: 0;
    }

    .ct-sidebar-label {
      white-space: nowrap;
    }

    .ct-content {
      flex: 1;
      min-height: 0;
      padding: 20px;
      overflow-y: auto;
    }

    .ct-section-title {
      font-size: 13px;
      font-weight: 600;
      color: #888;
      margin-bottom: 10px;
    }

    .ct-slider-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .ct-slider {
      flex: 1;
      -webkit-appearance: none;
      appearance: none;
      height: 4px;
      border-radius: 2px;
      background: #ddd;
      outline: none;
      cursor: pointer;
    }

    .ct-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #00c4b6;
      cursor: pointer;
      border: 2px solid #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .ct-slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #00c4b6;
      cursor: pointer;
      border: 2px solid #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .ct-slider-value {
      min-width: 32px;
      font-size: 13px;
      color: #333;
      font-weight: 500;
      text-align: right;
    }

    @media (max-width: 500px) {
      .ct-sidebar {
        width: 60px;
      }
      .ct-sidebar-item {
        padding: 10px 8px;
        justify-content: center;
      }
      .ct-sidebar-label {
        display: none;
      }
    }
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
    ball.setAttribute('data-side', this.config.side)

    const root = this.renderRoot.querySelector('.ct-root') as HTMLElement
    this.cleanupScrollbarWatch = watchScrollbarChange((info) => {
      Object.assign(SCROLLBAR_INFO, info)
      this.setScrollbarProperty(root)
    })
    this.setScrollbarProperty(root)

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
      const trigger = this.renderRoot.querySelector<HTMLElement>('.ct-model-select-trigger')
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
      <div class="ct-custom-select" data-dropdown="model">
        <button
          class="ct-select-trigger ct-model-select-trigger"
          ?disabled=${disabled}
          @click=${this.toggleModelDropdown}
        >
          ${this.openaiModelsLoading ? 'Loading models…' : label}
          <span class="ct-arrow">▾</span>
        </button>
        ${this.openaiModelsError
          ? html`<div style="font-size:11px;color:#e74c3c;line-height:1.4;padding-top:2px;">${this.openaiModelsError}</div>`
          : nothing}
        ${!disabled && this.modelDropdownOpen
          ? html`
          <div class="ct-select-dropdown" data-dropup=${String(this.modelDropdownUp)}>
            ${this.openaiModels.map(m => html`
              <div
                class="ct-select-option ${m === this.openaiModel ? 'ct-selected' : ''}"
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
      <div class="ct-custom-select" data-dropdown=${target}>
        <button
          class="ct-select-trigger"
          @click=${() => this.toggleDropdown(target)}
        >
          ${label}
          <span class="ct-arrow">▾</span>
        </button>
        <div
          class="ct-select-dropdown"
          ?hidden=${this.activeDropdown !== target}
        >
          ${options.map(o => html`
            <div
              class="ct-select-option ${o.value === current ? 'ct-selected' : ''}"
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
      <div class="ct-sidebar">
        <div
          class="ct-sidebar-item ${this.activeTab === 'translate' ? 'ct-sidebar-active' : ''}"
          @click=${() => { this.activeTab = 'translate' }}
        >
          <span class="ct-sidebar-icon">🌐</span>
          <span class="ct-sidebar-label">Translate</span>
        </div>
        <div
          class="ct-sidebar-item ${this.activeTab === 'provider' ? 'ct-sidebar-active' : ''}"
          @click=${() => { this.activeTab = 'provider' }}
        >
          <span class="ct-sidebar-icon">⚙️</span>
          <span class="ct-sidebar-label">Provider</span>
        </div>
      </div>
    `
  }

  private renderTranslateTab(): unknown {
    return html`
      <div class="ct-section-title">Language</div>
      <div class="ct-setting-dialog">
        <div class="ct-setting-dialog-from">${this.renderSelect('from')}</div>
        <span class="ct-arrow-icon">→</span>
        <div class="ct-setting-dialog-to">${this.renderSelect('to')}</div>
      </div>

      <div class="ct-section-divider"></div>

      <div class="ct-section-title">Translation Mode</div>
      <div class="ct-provider-options" style="flex-direction:column;gap:6px;">
        <label class="ct-radio ${this.mode === 'text' ? 'ct-radio-active' : ''}">
          <input type="radio" name="mode" value="text" ?checked=${this.mode === 'text'} @change=${() => this.onModeChange('text')}>
          <span>Text</span>
        </label>
        <label class="ct-radio ${this.mode === 'html' ? 'ct-radio-active' : ''}">
          <input type="radio" name="mode" value="html" ?checked=${this.mode === 'html'} @change=${() => this.onModeChange('html')}>
          <span>HTML</span>
        </label>
      </div>

      <div class="ct-section-divider"></div>

      <div class="ct-section-title">Performance</div>
      <label class="ct-field">
        <span class="ct-field-label">Max concurrent requests</span>
        <input type="number" class="ct-input" min="1" max="20" step="1" .value=${String(this.batchSize)} @change=${this.onBatchSizeInput}>
      </label>
    `
  }

  private renderProviderTab(): unknown {
    return html`
      <div class="ct-section-title">Translation Provider</div>
      <div class="ct-provider-options">
        <label class="ct-radio ${this.provider === 'chrome' ? 'ct-radio-active' : ''}">
          <input type="radio" name="provider" value="chrome" ?checked=${this.provider === 'chrome'} @change=${() => this.onProviderChange('chrome')}>
          <span>Chrome AI</span>
        </label>
        <label class="ct-radio ${this.provider === 'openai' ? 'ct-radio-active' : ''}">
          <input type="radio" name="provider" value="openai" ?checked=${this.provider === 'openai'} @change=${() => this.onProviderChange('openai')}>
          <span>OpenAI API</span>
        </label>
      </div>

      ${this.provider === 'openai'
        ? html`
        <div class="ct-section-divider"></div>
        <div class="ct-section-title">OpenAI Configuration</div>
        <div class="ct-openai-section">
          <label class="ct-field">
            <span class="ct-field-label">API Key</span>
            <input type="password" class="ct-input" .value=${this.openaiApiKey} @change=${(e: Event) => this.onOpenAIConfigChange('apiKey', (e.target as HTMLInputElement).value)} placeholder="sk-...">
          </label>
          <label class="ct-field">
            <span class="ct-field-label">Base URL</span>
            <input type="text" class="ct-input" .value=${this.openaiBaseUrl} @change=${(e: Event) => this.onOpenAIConfigChange('baseUrl', (e.target as HTMLInputElement).value)}>
          </label>
          <label class="ct-field">
            <span class="ct-field-label">Model</span>
            <div style="display:flex;gap:6px;align-items:flex-start;">
              <div style="flex:1;min-width:0;">${this.renderModelSelect()}</div>
              <button
                @click=${() => { void this.fetchModels() }}
                style="flex-shrink:0;width:36px;height:38px;border:1px solid #ddd;border-radius:8px;background:#fafafa;cursor:pointer;color:#00c4b6;display:flex;align-items:center;justify-content:center;padding:0;box-sizing:border-box;"
                title="Refresh models"
              >${refreshIcon}</button>
            </div>
          </label>
          <label class="ct-field">
            <span class="ct-field-label">Temperature</span>
            <div class="ct-slider-row">
              <input type="range" class="ct-slider" min="0" max="2" step="0.1" .value=${String(this.openaiTemperature)} @input=${this.onTemperatureInput}>
              <span class="ct-slider-value">${this.openaiTemperature}</span>
            </div>
          </label>
          <label class="ct-field">
            <span class="ct-field-label">Max Tokens</span>
            <input type="number" class="ct-input" min="0" step="1" .value=${String(this.openaiMaxTokens)} @change=${this.onMaxTokensInput}>
          </label>
          <label class="ct-field">
            <span class="ct-field-label">System Prompt</span>
            <textarea class="ct-textarea" .value=${this.openaiPrompt} @change=${(e: Event) => this.onOpenAIConfigChange('prompt', (e.target as HTMLInputElement).value)} placeholder="Optional: custom system prompt for translation"></textarea>
          </label>
        </div>
      `
        : nothing}
    `
  }

  override render() {
    return html`
      <div class="ct-root">
        <div
          class="ct-ball ${classMap({ 'ct-moving': this.moving })}"
          @click=${this.onTranslate}
          @mousedown=${this.onMouseDown}
          @contextmenu=${(e: Event) => e.preventDefault()}
        >
          <div class="ct-icon">
            <span class="ct-language-icon">${languageIcon}</span>
            ${this.isTranslating
              ? html`
              <span class="ct-check-icon">${checkIcon}</span>
            `
              : nothing}
          </div>
          <div class="ct-setting-wrap" @click=${(e: Event) => e.stopPropagation()}>
            <div class="ct-setting" @click=${this.onOpenSetting}>
              ${settingIcon}
            </div>
          </div>
        </div>

        <dialog>
          <div class="ct-dialog-header">
            <span>Setting</span>
            <button class="ct-dialog-close" @click=${() => this.dialogEl?.close()}>✕</button>
          </div>
          <div class="ct-dialog-body-with-sidebar">
            ${this.renderSidebar()}
            <div class="ct-content">
              ${this.activeTab === 'translate' ? this.renderTranslateTab() : this.renderProviderTab()}
            </div>
          </div>
        </dialog>
      </div>
    `
  }
}
