import type { TTextFlags } from '../utils/public'
import { BILINGUAL_PARAGRAPH, DOM_SELECTORS, PREFIX } from '../utils/constant'
import { checkStartEndSpaces, hasSignificantText } from '../utils/public'

export interface ITextNodeInfo {
  id: string
  node: HTMLElement
  text: string
  parent: HTMLElement
  originalText: string
  spaces: TTextFlags
  translate?: string
  container?: HTMLElement
}

export interface IElementInfo {
  tagName: string
  attrs: string
  textContent: string
}

export type TCombinedTextMap = Map<string, IElementInfo>
export interface ITextParagraph {
  id: string
  container: HTMLElement
  textNodes: ITextNodeInfo[]
  combinedText: string
  combinedTextMap: TCombinedTextMap
  htmlContent: string
  translate: string
}

export interface ITextExtractorOptions {
  prefix: string
}
export class TextExtractor {
  excludeSelectors: string[]
  blockElements: string[]
  prefix: string
  constructor(options: Partial<ITextExtractorOptions> = {}) {
    this.excludeSelectors = [...DOM_SELECTORS.EXCLUDE_DEFAULT]
    this.blockElements = DOM_SELECTORS.BLOCK_ELEMENTS
    this.prefix = options.prefix || PREFIX
  }

  /**
   * Extract translatable text nodes
   */
  extractTextNodes(rootElement = document.body) {
    const textNodes: ITextNodeInfo[] = []
    const excludeSelectors = this.excludeSelectors

    // Tree walker with filtering
    const walker = this.createOptimizedWalker(rootElement, excludeSelectors)

    let node = walker.nextNode() as HTMLElement | null
    while (node) {
      if (hasSignificantText(node.textContent!)) {
        textNodes.push(this.createTextNodeInfo(node))
      }
      node = walker.nextNode() as HTMLElement | null
    }
    return textNodes
  }

  /**
   * Find paragraph container for concurrent translation
   */
  findParagraphContainer(element: HTMLElement) {
    let current: HTMLElement | null = element

    // Special handling for option elements - they are their own containers
    if (
      current
      && current.tagName
      && current.tagName.toLowerCase() === 'option'
    ) {
      return current
    }

    // Look for paragraph-level containers
    const paragraphElements = [
      'p',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'li',
      'td',
      'th',
      'blockquote',
      'pre',
      'div',
      'article',
      'section',
      'option',
    ]

    while (current && current !== document.body) {
      const tagName = current.tagName.toLowerCase()
      if (paragraphElements.includes(tagName)) {
        return current
      }
      current = current.parentElement
    }

    return element
  }

  /**
   * Group text nodes by paragraphs for concurrent translation
   */
  groupTextNodesByParagraph(textNodes: ITextNodeInfo[]) {
    const paragraphGroups = new Map<string, ITextParagraph>()

    textNodes.forEach((textNode) => {
      const paragraph = this.findParagraphContainer(textNode.parent)
      const paragraphId = this.getElementId(paragraph)

      if (!paragraphGroups.has(paragraphId)) {
        paragraphGroups.set(paragraphId, {
          id: paragraphId,
          container: paragraph,
          textNodes: [],
          combinedText: '',
          combinedTextMap: new Map(),
          htmlContent: '',
          translate: '',
        })
      }

      const group = paragraphGroups.get(paragraphId)!
      group.textNodes.push(textNode)

      // 统一使用原始文本内容，确保所有模式都能翻译相同的文本
      group.combinedText += (group.combinedText ? ' ' : '') + textNode.text
    })

    paragraphGroups.forEach((group) => {
      group.htmlContent = this.extractHtmlContent(group.container)

      if (
        group.htmlContent
        && this.shouldUseHtmlContent(group.container, group.combinedText)
      ) {
        const [content, map] = this.extractTextFromHtml(group.htmlContent)
        group.combinedText = content
        group.combinedTextMap = map
      }
    })
    const paragraphs = Array.from(paragraphGroups.values())
    return paragraphs.filter((item) => {
      return !paragraphs.some((other) => {
        return item !== other && item.container.contains(other.container)
      })
    })
  }

  /**
   * Extract HTML content while preserving structure for translation
   */
  extractHtmlContent(container: HTMLElement) {
    if (!container) {
      return ''
    }

    // Clone the container to avoid modifying the original
    const clone = container.cloneNode(true) as HTMLElement

    // Remove any existing translation elements
    const selected = [
      DOM_SELECTORS.BILINGUAL_CONTAINER,
      DOM_SELECTORS.BILINGUAL_PARAGRAPH,
    ].join(', ')
    const existingTranslations = clone.querySelectorAll(selected)
    existingTranslations.forEach(el => el.remove())

    // Get the inner HTML which preserves the structure
    return clone.innerHTML.trim()
  }

  /**
   * Check if we should use HTML content instead of plain text for translation
   */
  shouldUseHtmlContent(container: HTMLElement, plainText: string) {
    if (!container || !plainText) {
      return false
    }

    // Check if container has significant HTML structure
    const htmlElements = container.querySelectorAll(
      DOM_SELECTORS.INLINE_ELEMENTS.join(', '),
    )
    if (htmlElements.length === 0) {
      return false
    }

    // Check if any of these elements contain significant text or important display attributes
    let hasSignificantHtmlText = false
    htmlElements.forEach((el) => {
      const text = el.textContent?.trim()
      if (
        (text && text.length > 0 && hasSignificantText(text))
        || el.hasAttribute('href')
        || el.classList.length > 0
      ) {
        hasSignificantHtmlText = true
      }
    })

    // Also check if the HTML content is significantly different from plain text
    const htmlContent = this.extractHtmlContent(container)
    const plainTextLength = plainText.replace(/\s+/g, ' ').trim().length
    const htmlContentLength = htmlContent
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .length

    // If HTML content has significantly more structure, use HTML
    const hasStructuralDifference
      = htmlContent.includes('<') && htmlContentLength > plainTextLength * 0.8

    return hasSignificantHtmlText || hasStructuralDifference
  }

  /**
   * Extract text from HTML while preserving inline tags
   */
  extractTextFromHtml(
    htmlContent: string,
  ): [string, TCombinedTextMap] {
    // if (!htmlContent) return ['', new Map()];

    // Create a temporary element to parse HTML
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = htmlContent

    // Get text content but preserve important inline tags
    return this.getTextWithInlineTags(tempDiv)
  }

  /**
   * Get text content while preserving important inline HTML tags
   */
  getTextWithInlineTags(
    element: HTMLElement,
    counter = 0,
  ): [string, TCombinedTextMap] {
    let content = ''
    const map: TCombinedTextMap = new Map()

    for (const node of Array.from(element.childNodes)) {
      if (node.nodeType === Node.TEXT_NODE) {
        content += node.textContent
        continue
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement
        const tagName = el.tagName.toLowerCase()

        // Preserve important inline tags and their nested content
        if (DOM_SELECTORS.INLINE_ELEMENTS.includes(tagName)) {
          counter++
          const textContent = el.textContent || ''
          const attrs = Array.from(el.attributes)
            .map(
              attr =>
                `${attr.name}="${this.escapeAttributeValue(attr.value)}"`,
            )
            .join(' ')
          const [innerText, _map] = this.getTextWithInlineTags(el, counter)
          _map.forEach((value, key) => map.set(key, value))
          const tag = `c${counter}`
          map.set(tag, { tagName, attrs, textContent })
          content += `<${tag}>${innerText}</${tag}>`
        }
        else {
          // For other elements, recursively process their content
          const [innerText, _map] = this.getTextWithInlineTags(el)
          _map.forEach((value, key) => map.set(key, value))
          content += innerText
        }
      }
    }

    return [content, map]
  }

  /**
   * Parse text content while preserving important inline HTML tags
   */
  parseTextWithInlineTags(
    text: string,
    map: TCombinedTextMap,
  ) {
    for (const [tag, { tagName, attrs, textContent }] of map) {
      if (DOM_SELECTORS.NON_TRANSLATABLE_TAGS.includes(tagName)) {
        const reg = new RegExp(`<${tag}>(.*?)</${tag}>`, 'g')
        text = text.replaceAll(
          reg,
          `<${tagName} ${attrs}>${textContent}</${tagName}>`,
        )
      }
      else {
        text = text
          .replaceAll(`<${tag}>`, `<${tagName} ${attrs}>`)
          .replaceAll(`</${tag}>`, `</${tagName}>`)
      }
    }
    return text
  }

  /**
   * Get important attributes from an element (excluding non-display attributes)
   */
  getImportantAttributes(element: HTMLElement) {
    let attrs = ''

      // 只保留影响显示的属性，排除title、alt、placeholder等非显示属性
      ;['href', 'class', 'id', 'target', 'rel'].forEach((attr) => {
      if (element.hasAttribute(attr)) {
        const value = element.getAttribute(attr)
        if (value) {
          attrs += ` ${attr}="${this.escapeAttributeValue(value)}"`
        }
      }
    })

    // 只保留必要的data-*和aria-*属性
    Array.from(element.attributes).forEach((attr) => {
      if (attr.name.startsWith('data-') || attr.name.startsWith('aria-')) {
        attrs += ` ${attr.name}="${this.escapeAttributeValue(attr.value)}"`
      }
    })

    return attrs
  }

  /**
   * Escape attribute values to prevent HTML injection
   */
  escapeAttributeValue(value: string) {
    if (!value) {
      return ''
    }
    return value.replace(/"/g, '&quot;').replace(/'/g, '&#39;')
  }

  /**
   * Generate unique identifier for element
   */
  getElementId(element: HTMLElement) {
    if (element.id) {
      return element.id
    }

    // Generate path-based identifier
    const path = []
    let current = element

    while (current && current !== document.body) {
      const tagName = current.tagName.toLowerCase()
      const siblings = Array.from(current.parentElement?.children || []).filter(
        el => el.tagName.toLowerCase() === tagName,
      )
      const index = siblings.indexOf(current)

      path.unshift(`${tagName}${siblings.length > 1 ? `[${index}]` : ''}`)
      current = current.parentElement!
    }

    return path.join('>')
  }

  /**
   * Create text node information object
   */
  createTextNodeInfo(node: HTMLElement): ITextNodeInfo {
    return {
      id: this.generateNodeId(node),
      node,
      text: node.textContent!.trim(),
      parent: node.parentElement!,
      originalText: node.textContent!,
      spaces: checkStartEndSpaces(node.textContent!),
    }
  }

  /**
   * Generate unique ID for text node
   */
  generateNodeId(node: HTMLElement) {
    const parent = node.parentElement!
    const siblings = Array.from(parent.childNodes).filter(
      n => n.nodeType === Node.TEXT_NODE,
    )
    const index = siblings.indexOf(node)
    return `${parent.tagName.toLowerCase()}-${index}-${Date.now()}`
  }

  /**
   * Create tree walker
   */
  createOptimizedWalker(rootElement: HTMLElement, excludeSelectors: string[]) {
    return document.createTreeWalker(rootElement, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        return this.isTranslatableTextNode(
          node as HTMLElement,
          excludeSelectors,
        )
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT
      },
    })
  }

  /**
   * Check if a text node should be translated
   */
  isTranslatableTextNode(
    node: HTMLElement,
    excludeSelectors = this.excludeSelectors,
  ) {
    if (!node || !node.parentElement) {
      return false
    }

    // 检查是否在已翻译的双语容器中
    if (
      node.parentElement.closest(DOM_SELECTORS.BILINGUAL_CONTAINER)
      || node.parentElement.closest(DOM_SELECTORS.BILINGUAL_PARAGRAPH)
    ) {
      return false
    }

    // 检查父元素是否已经被标记为已翻译
    if (
      node.parentElement.classList.contains(BILINGUAL_PARAGRAPH)
      || node.parentElement.querySelector(DOM_SELECTORS.BILINGUAL_PARAGRAPH)
    ) {
      return false
    }

    // 排除非显示属性中的文本（如title、alt、placeholder等）
    if (this.isInNonDisplayAttribute(node)) {
      return false
    }

    // 特殊处理：允许内联代码标签中的文本被翻译
    const codeParent = node.parentElement.closest('code')
    if (codeParent) {
      // 如果是在 pre > code 结构中，则排除
      if (codeParent.closest('pre')) {
        return false
      }
      // 内联代码标签中的文本可以翻译
      return true
    }

    // 检查元素可见性
    if (!this.isElementVisible(node.parentElement)) {
      return false
    }

    // 更宽松的链接文本检查
    const linkParent = node.parentElement.closest('a[href]')
    if (linkParent) {
      const text = node.textContent!.trim()
      // 降低链接文本的长度要求，允许更多链接文本被翻译
      if (
        text.length < 10
        && !/[.!?。！？]/.test(text)
        && !/[\u4E00-\u9FFF]/.test(text)
      ) {
        return false
      }
    }

    // 使用更宽松的排除检查
    return !this.isStrictlyExcludedElement(node.parentElement, excludeSelectors)
  }

  /**
   * Check if text node is from non-display attributes
   */
  isInNonDisplayAttribute(node: HTMLElement) {
    if (!node || !node.parentElement) {
      return false
    }

    const parent = node.parentElement

    // 检查父元素是否是表单元素的占位符或隐藏输入
    if (parent.tagName && parent.tagName.toLowerCase() === 'input') {
      const inputType = parent.getAttribute('type')
      if (inputType === 'hidden' || parent.hasAttribute('placeholder')) {
        return true
      }
    }

    // 检查是否是专门用于显示属性内容的元素
    if (
      parent.classList.contains('tooltip')
      || parent.classList.contains('title')
      || parent.classList.contains('alt-text')
      || (parent.hasAttribute('role') && parent.getAttribute('role') === 'tooltip')
    ) {
      return true
    }

    // 检查是否是通过CSS生成的内容（伪元素）
    try {
      const computedStyle = window.getComputedStyle(parent, '::before')
      if (
        computedStyle
        && computedStyle.content
        && computedStyle.content !== 'none'
        && computedStyle.content !== '""'
      ) {
        return true
      }

      const afterStyle = window.getComputedStyle(parent, '::after')
      if (
        afterStyle
        && afterStyle.content
        && afterStyle.content !== 'none'
        && afterStyle.content !== '""'
      ) {
        return true
      }
    }
    catch {
      // 忽略样式检查错误
    }

    // 检查是否在隐藏元素中
    if (
      parent.style.display === 'none'
      || parent.style.visibility === 'hidden'
      || parent.hasAttribute('hidden')
    ) {
      return true
    }

    return false
  }

  /**
   * Check if element is visible to the user
   */
  isElementVisible(element: HTMLElement) {
    if (!element) {
      return false
    }

    // 基本可见性检查
    if (
      element.style.display === 'none'
      || element.style.visibility === 'hidden'
      || element.hasAttribute('hidden')
      || element.getAttribute('aria-hidden') === 'true'
    ) {
      return false
    }

    // 检查计算样式
    try {
      const computedStyle = window.getComputedStyle(element)
      if (
        computedStyle.display === 'none'
        || computedStyle.visibility === 'hidden'
        || computedStyle.opacity === '0'
      ) {
        return false
      }

      // 检查元素尺寸
      const rect = element.getBoundingClientRect()
      if (rect.width === 0 && rect.height === 0) {
        return false
      }
    }
    catch {
      // 如果无法获取样式信息，假设元素可见
      return true
    }

    return true
  }

  /**
   * More lenient exclusion check for better coverage
   */
  isStrictlyExcludedElement(
    element: HTMLElement,
    excludeSelectors: string[] = [],
  ) {
    if (!element || !element.matches) {
      return true
    }

    const tagName = element.tagName.toLowerCase()

    // 只排除明确不应翻译的元素
    const strictExcludeElements = [
      'script',
      'style',
      'noscript',
      'iframe',
      'object',
      'embed',
      'canvas',
      'svg',
      'math',
      'pre',
      'kbd',
      'samp',
      'var',
    ]

    if (strictExcludeElements.includes(tagName)) {
      return true
    }

    // 检查明确的不翻译标记
    if (
      element.matches('[data-translate="no"], .notranslate, [translate="no"]')
    ) {
      return true
    }

    // 检查表单元素
    if (element.contentEditable === 'true') {
      return true
    }
    if (['input', 'textarea', 'button', 'select'].includes(tagName)) {
      return true
    }

    // 检查用户自定义排除选择器
    if (excludeSelectors.length > 0) {
      return excludeSelectors.some((selector) => {
        try {
          if (
            selector.startsWith('[')
            || selector.startsWith('.')
            || selector.startsWith('#')
          ) {
            return element.matches(selector)
          }
          return tagName === selector
        }
        catch {
          return false
        }
      })
    }

    return false
  }
}
