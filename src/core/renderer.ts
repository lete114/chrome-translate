import type { LFUCache } from '../utils/LFUCache'
import type { ITextNodeInfo, ITextParagraph, TCombinedTextMap, TextExtractor } from './textExtractor'
import type { ITranslateOptions, Translator } from './translator'
import { BILINGUAL_CONTAINER, BILINGUAL_PARAGRAPH, DOM_SELECTORS, TRANSLATE_ATTR } from '../utils/constant'
import { applySpaces, debounce, isExcludedElement } from '../utils/public'

export interface IRendererOptions extends ITranslateOptions {
  el?: HTMLElement
  useHTML?: boolean
  textExtractor: TextExtractor
  translator: Translator
  LFUCache: LFUCache
}
export class Renderer {
  textExtractor: TextExtractor
  translator: Translator
  translateCache: LFUCache<string>
  language: ITranslateOptions
  el: HTMLElement
  useHTML = false
  isRunning = false
  observer: IntersectionObserver | undefined
  mutationObserver: MutationObserver | undefined
  translateElements: HTMLElement[] = []
  translateContainers: HTMLElement[] = []
  translateLoadingElements: HTMLElement[] = []
  currentUrl = location.href
  constructor(options: IRendererOptions) {
    this.textExtractor = options.textExtractor
    this.translator = options.translator
    this.translateCache = options.LFUCache
    this.language = { from: options.from, to: options.to }
    this.el = options.el || document.body
    this.useHTML = options.useHTML || false
  }

  async translate({ textNodes, from, to }: ITranslateOptions & { textNodes: ITextNodeInfo[] }) {
    const translationPromises = textNodes.map(async (node) => {
      if (node.translate) {
        return
      }
      if (this.translateCache.has(node.text)) {
        const text = this.translateCache.get(node.text)
        node.translate = text
        return
      }
      node.translate = node.originalText
      if (!isExcludedElement(node.parent)) {
        const translation = await this.translator.translate({
          text: node.text,
          from,
          to,
        })
        this.translateCache.set(node.text, translation)
        node.translate = translation
        node.translate = applySpaces(node.spaces, node.translate)
      }
    })
    await Promise.all(translationPromises)
    return textNodes
  }

  async translateHTML({ from, to, map, text }: ITranslateOptions & { map: TCombinedTextMap, text: string }) {
    if (this.translateCache.has(text)) {
      return this.translateCache.get(text)!
    }
    const translate = await this.translator.translate({ text, from, to })
    const innerHTML = this.textExtractor.parseTextWithInlineTags(translate, map)
    return innerHTML
  }

  setLanguage({ from, to }: ITranslateOptions) {
    if (from === this.language.from && to === this.language.to) {
      return
    }
    this.language = { from, to }
    this.start()
  }

  clear() {
    this.clearCache()
    this.clearElements()
    this.clearLoading()
  }

  clearCache() {
    this.translateCache.clear()
  }

  clearLoading() {
    this.translateLoadingElements.forEach((el) => {
      el.remove()
    })
    this.translateLoadingElements = []
  }

  clearElements() {
    this.stop()

    this.translateElements.forEach((el) => {
      el.remove()
    })
    this.translateContainers.forEach((el) => {
      el.classList.remove(BILINGUAL_CONTAINER)
      el.removeAttribute(TRANSLATE_ATTR)
    })
    this.translateElements = []
    this.translateContainers = []
    this.clearLoading()
  }

  getGroupTextNodesByParagraph(rootElement: HTMLElement) {
    return this.textExtractor.groupTextNodesByParagraph(
      this.textExtractor.extractTextNodes(rootElement),
    )
  }

  hasUrlChanged() {
    const current = window.location.href || ''
    const currentWithoutHash = current.split('#')[0]
    const previousWithoutHash = this.currentUrl.split('#')[0]

    this.currentUrl = current

    return currentWithoutHash !== previousWithoutHash
  }

  stop() {
    this.isRunning = false

    this.observer?.disconnect()
    this.mutationObserver?.disconnect()
    this.observer = undefined
    this.mutationObserver = undefined
  }

  start() {
    if (this.language.from === this.language.to) {
      return
    }

    this.stop()

    this.isRunning = true
    const groupedNodes = new Map<HTMLElement, ITextParagraph>()

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(async (entry) => {
        if (this.isRunning && entry.isIntersecting) {
          const node = entry.target as HTMLElement

          if (node.hasAttribute(TRANSLATE_ATTR)) {
            return
          }

          const textParagraph = groupedNodes.get(node)
          if (!textParagraph) {
            return
          }

          node.setAttribute(TRANSLATE_ATTR, '')
          const cancelLoding = this.createLodingDisplay(node)

          try {
            if (this.useHTML) {
              const translateOptions = { from: this.language.from, to: this.language.to, map: textParagraph.combinedTextMap, text: textParagraph.combinedText }
              textParagraph.translate = await this.translateHTML(translateOptions)
              cancelLoding()
              this.isRunning && this.createParagraphBilingualDisplayHTML(textParagraph)
            }
            else {
              const translateOptions = { textNodes: textParagraph.textNodes, from: this.language.from, to: this.language.to }
              textParagraph.textNodes = await this.translate(translateOptions)
              cancelLoding()
              this.isRunning && this.createParagraphBilingualDisplay(textParagraph)
            }
          }
          catch (error) {
            console.error('Translation error:', error)
          }
          observer.unobserve(node)
        }
      })
    }
    this.observer = new IntersectionObserver(observerCallback, { root: null, rootMargin: '50px', threshold: 0.1 /* 只要出现10%就开始翻译 */ })
    this.getGroupTextNodesByParagraph(this.el).forEach((group) => {
      groupedNodes.set(group.container, group)
      this.observer?.observe(group.container)
    })

    const mutationCallback: MutationCallback = (mutations, _observer) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const hasUrlChanged = this.hasUrlChanged()
            if (hasUrlChanged) {
              groupedNodes.forEach(group => this.observer?.unobserve(group.container))
              groupedNodes.clear()
            }

            this.getGroupTextNodesByParagraph(this.el).forEach((group) => {
              if (!groupedNodes.has(group.container)) {
                groupedNodes.set(group.container, group)
                this.observer?.observe(group.container)
              }
            })
          }
        })
      })
    }
    this.mutationObserver = new MutationObserver(debounce(mutationCallback, 500))
    this.mutationObserver.observe(this.el, { childList: true, subtree: true })
  }

  createLodingDisplay(el: HTMLElement) {
    const loading = document.createElement('span')
    Object.assign(loading.style, {
      width: '0.6em',
      height: '0.6em',
      border: '2px solid rgba(0, 0, 0, 0.1)',
      borderTopColor: '#09f',
      borderRadius: '50%',
      pointerEvents: 'none',
      display: 'inline-block',
      marginLeft: '10px',
      marginRight: '10px',
      verticalAlign: 'middle',
    } as CSSStyleDeclaration)

    el.appendChild(loading)

    const animation = loading.animate(
      [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' },
      ],
      { duration: 600, iterations: Infinity, easing: 'linear' },
    )

    return () => {
      animation.cancel()
      loading.remove()
    }
  }

  createInlineBilingualWrapper(textParagraph: ITextParagraph) {
    let wrap: HTMLElement = document.createElement('div')
    const node = textParagraph.textNodes[0]

    // 如果是内联元素，则弃用 div 改用 font 并插入 (同时插入两个空格符号避免原内容与翻译贴合)
    if (
      DOM_SELECTORS.INLINE_ELEMENTS.includes(
        node.parent.tagName.toLocaleLowerCase(),
      )
    ) {
      wrap = document.createElement('font')
      const nbsp = '\u00A0' // Unicode 空格
      const text = document.createTextNode(nbsp + nbsp)
      wrap.appendChild(text)
    }
    wrap.classList.add(BILINGUAL_PARAGRAPH)
    this.translateElements.push(wrap)
    return wrap
  }

  createParagraphBilingualWrapper(textParagraph: ITextParagraph) {
    const wrap: HTMLElement = document.createElement('div')
    wrap.classList.add(BILINGUAL_PARAGRAPH)
    this.translateElements.push(wrap)

    const container = textParagraph.container
    container.classList.add(BILINGUAL_CONTAINER)
    this.translateContainers.push(container)

    // 跳过非内容区域的容器
    if (isExcludedElement(container)) {
      return
    }

    return wrap
  }

  createInlineBilingualDisplay(textParagraph: ITextParagraph) {
    const wrap = this.createInlineBilingualWrapper(textParagraph)
    const node = textParagraph.textNodes[0]
    const translate = node.translate
    if (
      translate
      && translate.toLocaleLowerCase() === node.originalText?.toLocaleLowerCase()
    ) {
      return
    }

    if (translate) {
      wrap.appendChild(document.createTextNode(translate))
      node.parent.appendChild(wrap)
    }
  }

  async createParagraphBilingualDisplay(textParagraph: ITextParagraph) {
    const wrap = this.createParagraphBilingualWrapper(textParagraph)
    if (!wrap) {
      return
    }

    // 如果只有一个文本节点，直接翻译
    if (textParagraph.textNodes.length === 1) {
      this.createInlineBilingualDisplay(textParagraph)
      return
    }

    const container = textParagraph.container
    const cloneEl = container.cloneNode(true) as HTMLElement
    const walker = document.createTreeWalker(cloneEl, NodeFilter.SHOW_TEXT)
    let textNode = walker.nextNode() as Text
    while (textNode) {
      const matchEl = textParagraph.textNodes.find(
        info => info.originalText === textNode.textContent,
      )
      if (
        matchEl?.translate
        && matchEl.translate.toLocaleLowerCase()
        !== matchEl.originalText.toLocaleLowerCase()
      ) {
        textNode.textContent = matchEl.translate
      }
      textNode = walker.nextNode() as Text
    }

    while (cloneEl.firstChild) {
      wrap.appendChild(cloneEl.firstChild)
    }

    container.appendChild(wrap)
  }

  createInlineBilingualDisplayHTML(textParagraph: ITextParagraph) {
    const wrap = this.createInlineBilingualWrapper(textParagraph)
    const node = textParagraph.textNodes[0]

    if (
      textParagraph.translate?.toLocaleLowerCase()
      === textParagraph.combinedText?.toLocaleLowerCase()
    ) {
      return
    }

    const el = document.createElement('div')
    el.innerHTML = textParagraph.translate
    while (el.firstChild) {
      wrap.appendChild(el.firstChild)
    }

    node.parent.appendChild(wrap)
  }

  async createParagraphBilingualDisplayHTML(textParagraph: ITextParagraph) {
    const wrap = this.createParagraphBilingualWrapper(textParagraph)
    if (!wrap) {
      return
    }

    // 如果只有一个文本节点，直接翻译
    if (textParagraph.textNodes.length === 1) {
      this.createInlineBilingualDisplayHTML(textParagraph)
      return
    }

    const container = textParagraph.container
    const el = document.createElement('div')
    el.innerHTML = textParagraph.translate

    while (el.firstChild) {
      wrap.appendChild(el.firstChild)
    }

    container.appendChild(wrap)
  }
}
