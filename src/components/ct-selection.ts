import { GM_getValue } from '$'
import { css, html, LitElement, nothing } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { OpenAITranslator } from '../core/provider/openai'
import { cache, translatorInstance } from '../hooks/useTranslate'
import { STORAGE_CONFIG_KEY } from '../utils/constant'
import { logger } from '../utils/logger'
import { closeIcon, languageIcon } from './icons'

type Phase = 'hidden' | 'button' | 'popup'

@customElement('chrome-translate-selection')
export class ChromeTranslateSelection extends LitElement {
  static override styles = css`
    :host {
      all: initial;
      display: block !important;
    }

    @keyframes ct-spin {
      to { transform: rotate(360deg); }
    }

    @unocss-placeholder;
  `

  private translator = translatorInstance
  private cache = cache
  private showButtonTimer: ReturnType<typeof setTimeout> | undefined
  private detectedFrom: string | null = null

  @state() private phase: Phase = 'hidden'
  @state() private selectedText = ''
  @state() private translatedText = ''
  @state() private loading = false
  @state() private error = ''
  @state() private posX = 0
  @state() private posY = 0

  private getSelectedText(): string {
    const sel = window.getSelection()
    if (!sel || sel.isCollapsed || !sel.rangeCount) {
      return ''
    }
    return sel.toString().trim()
  }

  private getSelectionRect(): { x: number, y: number } | null {
    const sel = window.getSelection()
    if (!sel || !sel.rangeCount) {
      return null
    }
    const rect = sel.getRangeAt(0).getBoundingClientRect()
    if (!rect || (rect.width === 0 && rect.height === 0)) {
      return null
    }
    return { x: rect.right, y: rect.top }
  }

  private onMouseDown = (e: MouseEvent): void => {
    clearTimeout(this.showButtonTimer)
    if (this.phase === 'hidden') {
      return
    }
    const target = e.target as Node
    if (this.renderRoot.contains(target)) {
      return
    }
    this.phase = 'hidden'
  }

  private onMouseUp = (): void => {
    if (this.phase !== 'hidden') {
      return
    }
    const stored = GM_getValue(STORAGE_CONFIG_KEY, {}) as any
    if (stored?.selectionTranslate === false) {
      return
    }
    const text = this.getSelectedText()
    if (!text || text.length > 2000) {
      return
    }
    const pos = this.getSelectionRect()
    if (!pos) {
      return
    }
    this.selectedText = text
    this.posX = pos.x + 12
    this.posY = pos.y - 20
    clearTimeout(this.showButtonTimer)
    this.showButtonTimer = setTimeout(() => {
      logger.info(`Selection translate button shown (${text.length} chars)`)
      this.phase = 'button'
    }, 500)
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && this.phase !== 'hidden') {
      clearTimeout(this.showButtonTimer)
      this.phase = 'hidden'
    }
  }

  private onScroll = (): void => {
    clearTimeout(this.showButtonTimer)
    this.phase = 'hidden'
  }

  private async onTranslate(e: Event): Promise<void> {
    const btn = e.currentTarget as HTMLElement
    const btnRect = btn.getBoundingClientRect()
    this.posX = btnRect.left + btnRect.width / 2
    this.posY = btnRect.bottom + 8

    const margin = 8
    this.posX = Math.max(margin, Math.min(innerWidth - margin, this.posX))
    this.posY = Math.max(margin, Math.min(innerHeight - margin, this.posY))

    this.loading = true
    this.error = ''
    this.phase = 'popup'
    window.getSelection()?.removeAllRanges()

    try {
      const stored = GM_getValue(STORAGE_CONFIG_KEY, {}) as any
      const language = stored?.language

      if (!language?.to) {
        logger.info('Selection translate skipped (no target language configured)')
        return
      }

      let from = language.from
      if (from === 'auto') {
        if (!this.detectedFrom) {
          this.detectedFrom = await this.translator.detectPageLanguage()
        }
        from = this.detectedFrom
      }

      if (from && from === language.to) {
        logger.info(`Selection translate skipped (${from} === ${language.to})`)
        this.translatedText = this.selectedText
        return
      }

      logger.info(`Selection translate started (${from}→${language.to})`)

      let openaiProvider = this.translator.getProvider('openai') as OpenAITranslator | undefined
      if (!openaiProvider) {
        openaiProvider = new OpenAITranslator()
        this.translator.registerProvider('openai', openaiProvider)
      }

      if (stored?.openai) {
        openaiProvider.updateConfig(stored.openai)
      }

      if (stored?.provider === 'openai') {
        this.translator.setProvider('openai')
      }
      else {
        this.translator.setProvider('chrome')
      }

      const cacheKey = `${from}->${language.to}:${this.selectedText}`
      const cached = this.cache.get(cacheKey)
      if (cached) {
        logger.info(`Selection translate cache hit (${from}→${language.to})`)
        this.translatedText = cached
        return
      }

      const result = await this.translator.translate({
        from,
        to: language.to,
        text: this.selectedText,
      })

      this.cache.set(cacheKey, result)
      this.translatedText = result
      logger.info(`Selection translate completed (${from}→${language.to})`)
    }
    catch (e: any) {
      const msg = typeof e === 'string' ? e : e?.message ?? ''
      logger.error(`Selection translate failed: ${msg}`)
      if (!msg) {
        this.error = 'Translation failed. Check your provider configuration.'
      }
      else {
        this.error = msg
      }
    }
    finally {
      this.loading = false
    }
  }

  private onClose(): void {
    this.phase = 'hidden'
  }

  private onBtnMouseDown(e: Event): void {
    e.stopPropagation()
  }

  private onBtnMouseUp(e: Event): void {
    e.stopPropagation()
  }

  private onPopupMouseDown(e: Event): void {
    e.stopPropagation()
  }

  override connectedCallback(): void {
    super.connectedCallback()
    document.addEventListener('mousedown', this.onMouseDown)
    document.addEventListener('mouseup', this.onMouseUp)
    document.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('scroll', this.onScroll, true)
    window.addEventListener('resize', this.onScroll)
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback()
    document.removeEventListener('mousedown', this.onMouseDown)
    document.removeEventListener('mouseup', this.onMouseUp)
    document.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('scroll', this.onScroll, true)
    window.removeEventListener('resize', this.onScroll)
  }

  override render() {
    return html`
      <div>
        ${this.phase === 'button'
          ? html`
          <button
            class="fixed z-[2147483647] w-10 h-10 bg-white rounded-full border-none cursor-pointer flex items-center justify-center p-0 outline-none shadow-[0_8px_16px_rgba(0,0,0,.25)] hover:shadow-[0_12px_24px_rgba(0,0,0,.35)] active:shadow-[0_4px_8px_rgba(0,0,0,.2)] hover:[--sel-btn-y:calc(-50%_-_2px)] active:[--sel-btn-y:calc(-50%_+_1px)] transition-all duration-100 ease-out"
            style="left: ${this.posX}px; top: ${this.posY}px; --sel-btn-y: -50%; transform: translate(-50%, var(--sel-btn-y))"
            @mousedown=${this.onBtnMouseDown}
            @mouseup=${this.onBtnMouseUp}
            @click=${this.onTranslate}
          >
            <div class="w-[28px] h-[28px] rounded-full bg-[#00c4b6] text-white flex items-center justify-center hover:bg-[#00a89a] transition-colors duration-100">${languageIcon}</div>
          </button>
        `
          : nothing}

        ${this.phase === 'popup'
          ? html`
          <div
            class="fixed gap-8px z-[2147483647] w-[420px] max-h-[320px] bg-white rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,.2)] flex flex-col p-[14px_16px] text-[#333] text-[14px] leading-[1.5]"
            style="left: ${this.posX}px; top: ${this.posY}px; transform: translate(-50%, 0)"
            @mousedown=${this.onPopupMouseDown}
          >
            <div class="flex items-center justify-end flex-shrink-0">
              <button class="w-[22px] h-[22px] border-none rounded-full bg-[#f0f0f0] text-[#888] cursor-pointer flex items-center justify-center p-0 hover:bg-[#e0e0e0] hover:text-[#555] transition-[background_0.15s]" @click=${this.onClose}>
                ${closeIcon}
              </button>
            </div>

            <div class="flex-1 overflow-y-auto min-h-0">
              ${this.loading
                ? html`
                <div class="flex items-center gap-2 py-2 text-[#888] text-[13px]">
                  <span class="w-4 h-4 border-2 border-[#e0e0e0] border-t-[#00c4b6] rounded-full flex-shrink-0 animate-[ct-spin_0.6s_linear_infinite]"></span>
                  <span>Translating...</span>
                </div>
              `
                : this.error
                  ? html`
                <div class="flex items-center gap-2 py-2 text-[#e74c3c] text-[13px]">${this.error}</div>
              `
                  : html`
                <div class="break-words whitespace-pre-wrap text-[#222] text-[15px] font-medium">${this.translatedText}</div>
                <div class="h-[1px] bg-[#eee] my-[6px]"></div>
                <div class="break-words whitespace-pre-wrap text-[#888] text-[13px] mb-[6px]">${this.selectedText}</div>
              `}
            </div>
          </div>
        `
          : nothing}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chrome-translate-selection': ChromeTranslateSelection
  }
}
