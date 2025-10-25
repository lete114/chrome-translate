import { DOM_SELECTORS, REGEX_PATTERNS, TEXT_PROCESSING } from './constant'

export function getScrollbarInfo() {
  return {
    ...getScrollbarPosition(),
    ...getScrollbarWidthAndHeight(),
  }
}

export function getScrollbarWidthAndHeight() {
  const overflow = window.getComputedStyle(document.body).overflow
  if (overflow === 'hidden') {
    return {
      width: 0,
      height: 0,
    }
  }

  return {
    width: window.innerWidth - document.documentElement.clientWidth,
    height: window.innerHeight - document.documentElement.clientHeight,
  }
}

export function getScrollbarPosition() {
  const container = document.createElement('div')
  container.style.cssText = `
    width: 100px;
    height: 100px;
    overflow: scroll;
    position: absolute;
    top: -9999px;
    left: -9999px;
    direction: ltr;
  `

  const inner = document.createElement('div')
  inner.style.cssText = `
    width: 200px;
    height: 200px;
  `
  container.appendChild(inner)
  document.body.appendChild(container)

  const containerRect = container.getBoundingClientRect()
  const innerRect = inner.getBoundingClientRect()

  const vertical = innerRect.left > containerRect.left ? 'left' : 'right'
  const horizontal = innerRect.top > containerRect.top ? 'top' : 'bottom'

  document.body.removeChild(container)

  return {
    vertical,
    horizontal,
  } as const
}

export function watchScrollbarChange(callback: (info: ReturnType<typeof getScrollbarInfo>) => void) {
  let lastInfo = getScrollbarInfo()

  const check = debounce(() => {
    const newInfo = getScrollbarInfo()
    if (
      newInfo.width !== lastInfo.width
      || newInfo.height !== lastInfo.height
      || newInfo.vertical !== lastInfo.vertical
      || newInfo.horizontal !== lastInfo.horizontal
    ) {
      lastInfo = newInfo
      callback(newInfo)
    }
  }, 100)

  window.addEventListener('resize', check)

  const resizeObserver = new ResizeObserver(check)
  resizeObserver.observe(document.documentElement)
  resizeObserver.observe(document.body)

  return () => {
    resizeObserver.disconnect()
    window.removeEventListener('resize', check)
    check.cancel()
  }
}

export function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max)
}

export type TTextFlags = [boolean, boolean]

export function checkStartEndSpaces(text: string): TTextFlags {
  return [text.startsWith(' '), text.endsWith(' ')]
}

export function applySpaces([first, last]: TTextFlags, text: string): string {
  const start = first ? ' ' : ''
  const end = last ? ' ' : ''
  return `${start}${text}${end}`
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean = false,
): {
  (...args: Parameters<T>): void
  cancel: () => void
} {
  let timeout: ReturnType<typeof setTimeout> | null = null

  const debounced = function (this: any, ...args: Parameters<T>) {
    if (timeout) {
      clearTimeout(timeout)
    }

    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) {
        func.apply(this, args)
      }
    }
    else {
      timeout = setTimeout(() => {
        func.apply(this, args)
      }, wait)
    }
  }

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  return debounced
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean = false,
): {
  (...args: Parameters<T>): void
  cancel: () => void
} {
  let timeout: ReturnType<typeof setTimeout> | null = null
  let previous = 0

  const throttled = function (this: any, ...args: Parameters<T>) {
    const now = Date.now()

    if (!immediate && previous === 0) {
      previous = now
    }

    const remaining = wait - (now - previous)

    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(this, args)
    }
    else if (!timeout && immediate) {
      timeout = setTimeout(() => {
        previous = immediate ? 0 : Date.now()
        timeout = null
        if (!immediate) {
          func.apply(this, args)
        }
      }, remaining)
    }
  }

  throttled.cancel = () => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    previous = 0
  }

  return throttled
}

/**
 * Check if element should be excluded from translation
 */
export function isExcludedElement(
  element: HTMLElement,
  excludeSelectors: string[] = [],
) {
  if (!element || !element.matches) {
    return true
  }

  const tagName = element.tagName.toLowerCase()

  // Check for contenteditable elements
  if (element.contentEditable === 'true') {
    return true
  }

  // Check for form input elements (but allow option elements within select)
  if (['input', 'textarea', 'button'].includes(tagName)) {
    return true
  }

  // Exclude select elements but allow option elements
  if (tagName === 'select') {
    return true
  }

  // Check against all exclude selectors
  const allSelectors = [...DOM_SELECTORS.EXCLUDE_DEFAULT, ...excludeSelectors]

  return allSelectors.some((selector) => {
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

/**
 * Check if text contains significant content for translation
 */
export function hasSignificantText(text: string) {
  if (!text || typeof text !== 'string') {
    return false
  }

  const trimmed = text.trim()
  if (trimmed.length < TEXT_PROCESSING.MIN_TEXT_LENGTH) {
    return false
  }
  if (REGEX_PATTERNS.PURE_NUMBERS_SYMBOLS.test(trimmed)) {
    return false
  }
  if (
    trimmed.length === TEXT_PROCESSING.MIN_SIGNIFICANT_LENGTH
    && !REGEX_PATTERNS.CHINESE_CHARS.test(trimmed)
  ) {
    return false
  }

  return true
}

/**
 * Format size
 */
export function formatSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(2)} KB`
  }
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

/**
 * FNV (Fowler–Noll–Vo) Hash
 */
export function fnv1aHash(text: string) {
  let hash = 0x811C9DC5 // Offset base number
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i)
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24)
  }
  return (`0000000${(hash >>> 0).toString(16)}`).slice(-8)
}
