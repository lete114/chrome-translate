import { GM_getValue } from '$'
import { css, html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { Translator } from '../core/translator'
import { LFUCache } from '../utils/LFUCache'
import { STORAGE_CONFIG_KEY } from '../utils/constant'

interface SelectionConfig {
  language: { from: string; to: string }
}

type Phase = 'hidden' | 'button' | 'popup'

@customElement('chrome-translate-selection')
export class ChromeTranslateSelection extends LitElement {
  static override styles = css`
    :host {
      all: initial;
      display: block !important;
    }

    .ct-sel-btn {
      position: fixed;
      z-index: 2147483647;
      width: 32px;
      height: 32px;
      border: 2px solid #fff;
      border-radius: 50%;
      background: #00c4b6;
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      transform: translate(-50%, -50%);
      transition: transform 0.12s ease;
      padding: 0;
      outline: none;
    }

    .ct-sel-btn:hover {
      background: #00a89a;
      transform: translate(-50%, -50%) scale(1.1);
    }

    .ct-sel-btn:active {
      transform: translate(-50%, -50%) scale(0.92);
    }

    .ct-sel-popup {
      position: fixed;
      z-index: 2147483647;
      min-width: 200px;
      max-width: 420px;
      max-height: 320px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
      padding: 14px 16px;
      transform: translate(-50%, 0);
      overflow-y: auto;
      color: #333;
      font-size: 14px;
      line-height: 1.5;
    }

    .ct-sel-close {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 22px;
      height: 22px;
      border: none;
      border-radius: 50%;
      background: #f0f0f0;
      color: #888;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      transition: background 0.15s;
    }

    .ct-sel-close:hover {
      background: #e0e0e0;
      color: #555;
    }

    .ct-sel-text {
      word-break: break-word;
      white-space: pre-wrap;
      padding-right: 20px;
    }

    .ct-sel-original {
      color: #888;
      font-size: 13px;
      margin-bottom: 6px;
    }

    .ct-sel-translated {
      color: #222;
      font-size: 15px;
      font-weight: 500;
    }

    .ct-sel-divider {
      height: 1px;
      background: #eee;
      margin: 6px 0;
    }

    .ct-sel-status {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0;
      color: #888;
      font-size: 13px;
    }

    .ct-sel-error {
      color: #e74c3c;
    }

    .ct-sel-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid #e0e0e0;
      border-top-color: #00c4b6;
      border-radius: 50%;
      animation: ct-spin 0.6s linear infinite;
      flex-shrink: 0;
    }

    @keyframes ct-spin {
      to { transform: rotate(360deg); }
    }
  `

  private translator = new Translator()
  private cache = new LFUCache<string>('ct-selection-cache')

  @state() private phase: Phase = 'hidden'
  @state() private selectedText = ''
  @state() private translatedText = ''
  @state() private loading = false
  @state() private error = ''
  @state() private posX = 0
  @state() private posY = 0

  private getSelectedText(): string {
    const sel = window.getSelection()
    if (!sel || sel.isCollapsed || !sel.rangeCount) return ''
    return sel.toString().trim()
  }

  private getSelectionRect(): { x: number; y: number } | null {
    const sel = window.getSelection()
    if (!sel || !sel.rangeCount) return null
    const rect = sel.getRangeAt(0).getBoundingClientRect()
    if (!rect || (rect.width === 0 && rect.height === 0)) return null
    return { x: rect.right, y: rect.top }
  }

  private onMouseDown = (e: MouseEvent): void => {
    if (this.phase === 'hidden') return
    const target = e.target as Node
    if (this.renderRoot.contains(target)) return
    this.phase = 'hidden'
  }

  private onMouseUp = (): void => {
    if (this.phase !== 'hidden') return
    const text = this.getSelectedText()
    if (!text || text.length > 2000) return
    const pos = this.getSelectionRect()
    if (!pos) return
    this.selectedText = text
    this.posX = pos.x
    this.posY = pos.y
    this.phase = 'button'
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && this.phase !== 'hidden') {
      this.phase = 'hidden'
    }
  }

  private onScroll = (): void => {
    this.phase = 'hidden'
  }

  private async onTranslate(): Promise<void> {
    if (!(window as any).Translator?.availability) {
      this.error = 'Translator API is not available（需要 Chrome 138+）'
      this.phase = 'popup'
      window.getSelection()?.removeAllRanges()
      return
    }

    this.loading = true
    this.error = ''
    this.phase = 'popup'
    this.posY = this.posY + 20
    window.getSelection()?.removeAllRanges()

    try {
      const config = GM_getValue<SelectionConfig>(STORAGE_CONFIG_KEY, {
        language: { from: 'auto', to: '' },
      })

      const from = config.language.from
      const to = config.language.to || navigator.languages[0]

      let sourceLang = from
      if (sourceLang === 'auto') {
        sourceLang = await this.translator.detectLanguage(this.selectedText)
      }

      if (sourceLang === to) {
        this.translatedText = this.selectedText
        return
      }

      const cacheKey = `${sourceLang}:${to}:${this.selectedText}`
      const cached = this.cache.get(cacheKey)
      if (cached) {
        this.translatedText = cached
        return
      }

      const result = await this.translator.translate({
        from: sourceLang,
        to,
        text: this.selectedText,
      })

      this.cache.set(cacheKey, result)
      this.translatedText = result
    } catch (e: any) {
      this.error = e.message || '翻译失败'
    } finally {
      this.loading = false
    }
  }

  private onClose(): void {
    this.phase = 'hidden'
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
        ${this.phase === 'button' ? html`
          <button
            class="ct-sel-btn"
            style="left: ${this.posX}px; top: ${this.posY}px"
            @mousedown=${(e: Event) => e.stopPropagation()}
            @mouseup=${(e: Event) => e.stopPropagation()}
            @click=${this.onTranslate}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 8l6 6" />
              <path d="M4 14l6-6 2-3" />
              <path d="M2 5h12" />
              <path d="M7 2h1" />
              <path d="M14 22l2.5-5L19 22" />
              <path d="M12 17h8" />
            </svg>
          </button>
        ` : nothing}

        ${this.phase === 'popup' ? html`
          <div
            class="ct-sel-popup"
            style="left: ${this.posX}px; top: ${this.posY}px"
            @mousedown=${(e: Event) => e.stopPropagation()}
          >
            <button class="ct-sel-close" @click=${this.onClose}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            ${this.loading ? html`
              <div class="ct-sel-status">
                <span class="ct-sel-spinner"></span>
                <span>翻译中...</span>
              </div>
            ` : this.error ? html`
              <div class="ct-sel-status ct-sel-error">${this.error}</div>
            ` : html`
              <div class="ct-sel-text ct-sel-original">${this.selectedText}</div>
              <div class="ct-sel-divider"></div>
              <div class="ct-sel-text ct-sel-translated">${this.translatedText}</div>
            `}
          </div>
        ` : nothing}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chrome-translate-selection': ChromeTranslateSelection
  }
}
