import type { ITranslateOptions } from '../core/translator'
import { GM_getValue, GM_setValue } from '$'
import { css, html, LitElement, nothing } from 'lit'
import { customElement, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { useTranslate } from '../hooks/useTranslate'
import { useWatchUrlChange } from '../hooks/useWatchUrlChange'
import { SCROLLBAR_INFO, STORAGE_CONFIG_KEY } from '../utils/constant'
import { LANGUAGES } from '../utils/languages'
import { clamp, debounce, throttle, watchScrollbarChange } from '../utils/public'
import { checkIcon, languageIcon, settingIcon } from './icons'

interface Config {
  position: { x: string, y: string }
  side: 'left' | 'right'
  language: { from: string, to: string }
}

@customElement('chrome-translate-ball')
export class ChromeTranslateBall extends LitElement {
  static override styles = css`
    :host {
      all: initial;
      display: block;
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
      overflow: visible;
      padding: 0;
      border: none;
      border-radius: 12px;
      box-shadow: 0 16px 48px rgba(0, 0, 0, .2);
      min-width: 320px;
      max-width: 90vw;
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
      padding: 20px;
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
  `

  @state() private moving = false
  @state() private isTranslating = false
  @state() private language!: { from: string, to: string }
  @state() private activeDropdown: 'from' | 'to' | null = null

  @query('.ct-ball') private ballEl!: HTMLElement
  @query('dialog') private dialogEl!: HTMLDialogElement

  private config = GM_getValue<Config>(STORAGE_CONFIG_KEY, {
    position: { x: '', y: '' },
    side: 'right',
    language: { from: 'auto', to: '' },
  })

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
    this.language = { ...this.config.language }
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

    const to = this.config.language.to
    if (to) {
      this.language = { ...this.language, to }
      const from = this.language.from === 'auto'
        ? await t.instance.translator.detectPageLanguage()
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

  private onOpenSetting = (): void => {
    this.dialogEl?.showModal()
  }

  private onDocumentMouseDown = (e: MouseEvent): void => {
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
          <div class="ct-setting-dialog">
            <div class="ct-setting-dialog-from">${this.renderSelect('from')}</div>
            <span class="ct-arrow-icon">→</span>
            <div class="ct-setting-dialog-to">${this.renderSelect('to')}</div>
          </div>
        </dialog>
      </div>
    `
  }
}
