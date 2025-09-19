// ==UserScript==
// @name         chrome-translate
// @namespace    lete114/chrome-translate
// @version      0.0.1
// @author       Lete114 <me@imlete.cn>
// @license      MIT
// @icon         https://github.com/lete114/chrome-translate/blob/main/src/assets/logo.svg?raw=true
// @homepage     https://github.com/lete114/chrome-translate#readme
// @homepageURL  https://github.com/lete114/chrome-translate#readme
// @source       https://github.com/lete114/chrome-translate.git
// @supportURL   https://github.com/lete114/chrome-translate/issues
// @match        *://*/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.5.19/dist/vue.global.prod.js
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function (vue) {
  'use strict';

  var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {};
  const _hoisted_1$2 = { viewBox: "0 0 1024 1024" };
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
      vue.createElementVNode("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      }, null, -1)
    ])]);
  }
  const checkIcon = _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  const _sfc_main$1 = {};
  const _hoisted_1$1 = { viewBox: "0 0 24 24" };
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
      vue.createElementVNode("path", {
        fill: "currentColor",
        d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
      }, null, -1)
    ])]);
  }
  const languageIcon = _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  class Progress {
    globalBaseTitle;
    offset;
    zIndex;
    progessElements = new Set();
    constructor(options = {}) {
      this.globalBaseTitle = options.title || "Downloading...";
      this.offset = options.offset || 24;
      this.zIndex = options.zIndex || 1;
    }
    createProgressElement(options = {}) {
      const localBaseTitle = options.title || this.globalBaseTitle;
      const progressContainer = document.createElement("div");
      this.progessElements.add(progressContainer);
      Object.assign(progressContainer.style, {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "300px",
        backgroundColor: "#1e1e1e",
        borderRadius: "10px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, .8)",
        opacity: "0",
        transition: "all .3s ease",
        padding: "16px 20px",
        color: "#fff",
        fontSize: "14px",
        transform: "translateX(50%)"
      });
      const titleElement = document.createElement("div");
      Object.assign(titleElement.style, {
        marginBottom: "12px",
        fontSize: "14px",
        fontWeight: "500",
        color: "#ccc"
      });
      titleElement.textContent = localBaseTitle;
      progressContainer.appendChild(titleElement);
      const progressBarBg = document.createElement("div");
      Object.assign(progressBarBg.style, {
        width: "100%",
        height: "14px",
        backgroundColor: "#2c2c2c",
        borderRadius: "7px",
        overflow: "hidden",
        position: "relative"
      });
      const progressBar = document.createElement("div");
      Object.assign(progressBar.style, {
        height: "100%",
        width: "0%",
        background: "linear-gradient(90deg, #00c6ff, #0072ff)",
        transition: "width .3s ease",
        borderRadius: "7px 0 0 7px",
        position: "absolute",
        top: "0",
        left: "0"
      });
      const progressText = document.createElement("div");
      Object.assign(progressText.style, {
        position: "absolute",
        top: "0",
        height: "100%",
        lineHeight: "14px",
        whiteSpace: "nowrap",
        padding: "0 6px",
        fontSize: "12px",
        color: "#fff",
        textShadow: "0 0 3px rgba(0,0,0,.4)",
        transition: "left 0.3s ease, transform 0.3s ease"
      });
      progressBarBg.appendChild(progressBar);
      progressBarBg.appendChild(progressText);
      progressContainer.appendChild(progressBarBg);
      this.setPosition(this.progessElements);
      document.body.appendChild(progressContainer);
      progressContainer.offsetHeight;
      progressContainer.style.opacity = "1";
      progressContainer.style.transform = "translateX(0)";
      const controller = {
        showProgress: (percent, text = null) => {
          percent = Math.max(1, Math.min(100, percent));
          titleElement.textContent = text || localBaseTitle || this.globalBaseTitle;
          progressBar.style.width = `${percent}%`;
          progressText.textContent = `${percent}%`;
          const containerWidth = progressBarBg.clientWidth;
          const textWidth = progressText.offsetWidth || 30;
          if (percent < 98) {
            const leftPos = percent / 100 * containerWidth - textWidth;
            progressText.style.left = `${Math.max(6, leftPos)}px`;
            progressText.style.transform = `translateX(0%)`;
          } else {
            progressText.style.left = "50%";
            progressText.style.transform = "translateX(-50%)";
          }
          if (percent >= 100) {
            setTimeout(() => controller.hideProgress(), 1e3);
          }
        },
        hideProgress: () => {
          progressContainer.style.opacity = "0";
          progressContainer.style.transform = "translateX(50px)";
          this.progessElements.delete(progressContainer);
          this.setPosition(this.progessElements);
          progressContainer.addEventListener(
            "transitionend",
            () => progressContainer.remove(),
            { once: true }
);
        }
      };
      controller.showProgress(1);
      return controller;
    }
    setPosition(elements, startIndex = 0) {
      if (startIndex < -1) {
        return;
      }
      const els = Array.from(elements);
      let prevOffset = 0;
      for (let i = startIndex; i < els.length; i++) {
        const el = els[i];
        if (!el) {
          continue;
        }
        const prev = els[i - 1];
        if (prev) {
          prevOffset = Number.parseInt(prev.style.bottom) + prev.offsetHeight;
        }
        el.style.zIndex = (this.zIndex + i).toString();
        el.style.bottom = `${this.offset + prevOffset}px`;
      }
    }
  }
  function getScrollbarInfo() {
    return {
      ...getScrollbarPosition(),
      ...getScrollbarWidthAndHeight()
    };
  }
  function getScrollbarWidthAndHeight() {
    const overflow = window.getComputedStyle(document.body).overflow;
    if (overflow === "hidden") {
      return {
        width: 0,
        height: 0
      };
    }
    return {
      width: window.innerWidth - document.documentElement.clientWidth,
      height: window.innerHeight - document.documentElement.clientHeight
    };
  }
  function getScrollbarPosition() {
    const container = document.createElement("div");
    container.style.cssText = `
    width: 100px;
    height: 100px;
    overflow: scroll;
    position: absolute;
    top: -9999px;
    left: -9999px;
    direction: ltr;
  `;
    const inner = document.createElement("div");
    inner.style.cssText = `
    width: 200px;
    height: 200px;
  `;
    container.appendChild(inner);
    document.body.appendChild(container);
    const containerRect = container.getBoundingClientRect();
    const innerRect = inner.getBoundingClientRect();
    const vertical = innerRect.left > containerRect.left ? "left" : "right";
    const horizontal = innerRect.top > containerRect.top ? "top" : "bottom";
    document.body.removeChild(container);
    return {
      vertical,
      horizontal
    };
  }
  function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }
  function checkStartEndSpaces(text) {
    return [text.startsWith(" "), text.endsWith(" ")];
  }
  function applySpaces([first, last], text) {
    const start = first ? " " : "";
    const end = last ? " " : "";
    return `${start}${text}${end}`;
  }
  function debounce(func, wait, immediate = false) {
    let timeout = null;
    const debounced = function(...args) {
      if (timeout) {
        clearTimeout(timeout);
      }
      if (immediate) {
        const callNow = !timeout;
        timeout = setTimeout(() => {
          timeout = null;
        }, wait);
        if (callNow) {
          func.apply(this, args);
        }
      } else {
        timeout = setTimeout(() => {
          func.apply(this, args);
        }, wait);
      }
    };
    debounced.cancel = () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
    return debounced;
  }
  function throttle(func, wait, immediate = false) {
    let timeout = null;
    let previous = 0;
    const throttled = function(...args) {
      const now = Date.now();
      if (!immediate && previous === 0) {
        previous = now;
      }
      const remaining = wait - (now - previous);
      if (remaining <= 0) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        func.apply(this, args);
      } else if (!timeout && immediate) {
        timeout = setTimeout(() => {
          previous = immediate ? 0 : Date.now();
          timeout = null;
          if (!immediate) {
            func.apply(this, args);
          }
        }, remaining);
      }
    };
    throttled.cancel = () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = 0;
    };
    return throttled;
  }
  function isExcludedElement(element, excludeSelectors = []) {
    if (!element || !element.matches) {
      return true;
    }
    const tagName = element.tagName.toLowerCase();
    if (element.contentEditable === "true") {
      return true;
    }
    if (["input", "textarea", "button"].includes(tagName)) {
      return true;
    }
    if (tagName === "select") {
      return true;
    }
    const allSelectors = [...DOM_SELECTORS.EXCLUDE_DEFAULT, ...excludeSelectors];
    return allSelectors.some((selector) => {
      try {
        if (selector.startsWith("[") || selector.startsWith(".") || selector.startsWith("#")) {
          return element.matches(selector);
        }
        return tagName === selector;
      } catch {
        return false;
      }
    });
  }
  function hasSignificantText(text) {
    if (!text || typeof text !== "string") {
      return false;
    }
    const trimmed = text.trim();
    if (trimmed.length < TEXT_PROCESSING.MIN_TEXT_LENGTH) {
      return false;
    }
    if (REGEX_PATTERNS.PURE_NUMBERS_SYMBOLS.test(trimmed)) {
      return false;
    }
    if (trimmed.length === TEXT_PROCESSING.MIN_SIGNIFICANT_LENGTH && !REGEX_PATTERNS.CHINESE_CHARS.test(trimmed)) {
      return false;
    }
    return true;
  }
  function formatSize(bytes) {
    if (bytes < 1024) {
      return `${bytes} B`;
    }
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(2)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }
  const PREFIX = "ct";
  const STORAGE_CONFIG_KEY = `${PREFIX}-config`;
  const BILINGUAL_CONTAINER = `${PREFIX}-bilingual-container`;
  const BILINGUAL_PARAGRAPH = `${PREFIX}-bilingual-paragraph`;
  const TRANSLATE_ATTR = `data-${PREFIX}-translate`;
  const SCROLLBAR_INFO = getScrollbarInfo();
  const DOM_SELECTORS = {
    EXCLUDE_DEFAULT: [
      "script",
      "style",
      "noscript",
      "iframe",
      "object",
      "embed",
      "canvas",
      "svg",
      "math",
      "pre code",
      "pre",
      "code",
      "kbd",
      "samp",
      "var",
      '[data-translate="no"]',
      ".notranslate",
      '[translate="no"]',
      ".tooltip",
      ".alt-text",
      '[role="tooltip"]',
      'input[type="hidden"]',
      "input[placeholder]",
      "[title]:empty",
      "[alt]:empty"
    ],
    BLOCK_ELEMENTS: [
      "div",
      "p",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "article",
      "section",
      "header",
      "footer",
      "main",
      "aside",
      "nav",
      "blockquote",
      "pre",
      "li",
      "td",
      "th"
    ],
    INLINE_ELEMENTS: [
      "a",
      "b",
      "strong",
      "span",
      "em",
      "i",
      "u",
      "small",
      "sub",
      "sup",
      "font",
      "mark",
      "cite",
      "q",
      "abbr",
      "time",
      "ruby",
      "bdi",
      "bdo",
      "img",
      "br",
      "wbr",
      "svg",
      "var",
      "code",
      "big",
      "tt",
      "kbd",
      "samp"
    ],
    NON_TRANSLATABLE_TAGS: [
      "script",
      "style",
      "code",
      "pre",
      "samp",
      "kbd",
      "var",
      "textarea",
      "input",
      "select",
      "option",
      "noscript",
      "template",
      "svg",
      "canvas",
      "math",
      "iframe",
      "object",
      "embed",
      "meta",
      "link",
      "head",
"title"
    ],
    BILINGUAL_CONTAINER: `.${BILINGUAL_CONTAINER}`,
    BILINGUAL_PARAGRAPH: `.${BILINGUAL_PARAGRAPH}`
  };
  const TEXT_PROCESSING = {
    MIN_TEXT_LENGTH: 1,
    MIN_SIGNIFICANT_LENGTH: 1
  };
  const REGEX_PATTERNS = {
    PURE_NUMBERS_SYMBOLS: /^[\d\W]*$/,
    CHINESE_CHARS: /[\u4E00-\u9FFF\u3400-\u4DBF]/
  };
  class Renderer {
    textExtractor;
    translator;
    translateCache;
    language;
    el;
    useHTML = false;
    isRunning = false;
    observer;
    mutationObserver;
    translateElements = [];
    translateContainers = [];
    translateLoadingElements = [];
    currentUrl = location.href;
    constructor(options) {
      this.textExtractor = options.textExtractor;
      this.translator = options.translator;
      this.translateCache = options.LFUCache;
      this.language = { from: options.from, to: options.to };
      this.el = options.el || document.body;
      this.useHTML = options.useHTML || false;
    }
    async translate({ textNodes, from, to }) {
      const translationPromises = textNodes.map(async (node) => {
        if (node.translate) {
          return;
        }
        if (this.translateCache.has(node.text)) {
          const text = this.translateCache.get(node.text);
          node.translate = text;
          return;
        }
        node.translate = node.originalText;
        if (!isExcludedElement(node.parent)) {
          const translation = await this.translator.translate({
            text: node.text,
            from,
            to
          });
          this.translateCache.set(node.text, translation);
          node.translate = translation;
          node.translate = applySpaces(node.spaces, node.translate);
        }
      });
      await Promise.all(translationPromises);
      return textNodes;
    }
    async translateHTML({ from, to, map, text }) {
      if (this.translateCache.has(text)) {
        return this.translateCache.get(text);
      }
      const translate = await this.translator.translate({ text, from, to });
      const innerHTML = this.textExtractor.parseTextWithInlineTags(translate, map);
      return innerHTML;
    }
    setLanguage({ from, to }) {
      if (from === this.language.from && to === this.language.to) {
        return;
      }
      this.language = { from, to };
      this.start();
    }
    clear() {
      this.clearCache();
      this.clearElements();
      this.clearLoading();
    }
    clearCache() {
      this.translateCache.clear();
    }
    clearLoading() {
      this.translateLoadingElements.forEach((el) => {
        el.remove();
      });
      this.translateLoadingElements = [];
    }
    clearElements() {
      this.stop();
      this.translateElements.forEach((el) => {
        el.remove();
      });
      this.translateContainers.forEach((el) => {
        el.classList.remove(BILINGUAL_CONTAINER);
        el.removeAttribute(TRANSLATE_ATTR);
      });
      this.translateElements = [];
      this.translateContainers = [];
      this.clearLoading();
    }
    getGroupTextNodesByParagraph(rootElement) {
      return this.textExtractor.groupTextNodesByParagraph(
        this.textExtractor.extractTextNodes(rootElement)
      );
    }
    hasUrlChanged() {
      const current = window.location.href || "";
      const currentWithoutHash = current.split("#")[0];
      const previousWithoutHash = this.currentUrl.split("#")[0];
      this.currentUrl = current;
      return currentWithoutHash !== previousWithoutHash;
    }
    stop() {
      this.isRunning = false;
      this.observer?.disconnect();
      this.mutationObserver?.disconnect();
      this.observer = void 0;
      this.mutationObserver = void 0;
    }
    start() {
      if (this.language.from === this.language.to) {
        return;
      }
      this.stop();
      this.isRunning = true;
      const groupedNodes = new Map();
      const observerCallback = (entries, observer) => {
        entries.forEach(async (entry) => {
          if (this.isRunning && entry.isIntersecting) {
            const node = entry.target;
            if (node.hasAttribute(TRANSLATE_ATTR)) {
              return;
            }
            const textParagraph = groupedNodes.get(node);
            if (!textParagraph) {
              return;
            }
            node.setAttribute(TRANSLATE_ATTR, "");
            const cancelLoding = this.createLodingDisplay(node);
            try {
              if (this.useHTML) {
                const translateOptions = { from: this.language.from, to: this.language.to, map: textParagraph.combinedTextMap, text: textParagraph.combinedText };
                textParagraph.translate = await this.translateHTML(translateOptions);
                cancelLoding();
                this.isRunning && this.createParagraphBilingualDisplayHTML(textParagraph);
              } else {
                const translateOptions = { textNodes: textParagraph.textNodes, from: this.language.from, to: this.language.to };
                textParagraph.textNodes = await this.translate(translateOptions);
                cancelLoding();
                this.isRunning && this.createParagraphBilingualDisplay(textParagraph);
              }
            } catch (error) {
              console.error("Translation error:", error);
            }
            observer.unobserve(node);
          }
        });
      };
      this.observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: "50px",
        threshold: 0.1
});
      this.getGroupTextNodesByParagraph(this.el).forEach((group) => {
        groupedNodes.set(group.container, group);
        this.observer?.observe(group.container);
      });
      const mutationCallback = (mutations, _observer) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const hasUrlChanged = this.hasUrlChanged();
              if (hasUrlChanged) {
                groupedNodes.forEach((group) => this.observer?.unobserve(group.container));
                groupedNodes.clear();
              }
              this.getGroupTextNodesByParagraph(this.el).forEach((group) => {
                if (!groupedNodes.has(group.container)) {
                  groupedNodes.set(group.container, group);
                  this.observer?.observe(group.container);
                }
              });
            }
          });
        });
      };
      this.mutationObserver = new MutationObserver(debounce(mutationCallback, 500));
      this.mutationObserver.observe(this.el, { childList: true, subtree: true });
    }
    createLodingDisplay(el) {
      const loading = document.createElement("span");
      Object.assign(loading.style, {
        width: "0.6em",
        height: "0.6em",
        border: "2px solid rgba(0, 0, 0, 0.1)",
        borderTopColor: "#09f",
        borderRadius: "50%",
        pointerEvents: "none",
        display: "inline-block",
        marginLeft: "10px",
        marginRight: "10px",
        verticalAlign: "middle"
      });
      el.appendChild(loading);
      const animation = loading.animate(
        [
          { transform: "rotate(0deg)" },
          { transform: "rotate(360deg)" }
        ],
        { duration: 600, iterations: Infinity, easing: "linear" }
      );
      return () => {
        animation.cancel();
        loading.remove();
      };
    }
    createInlineBilingualWrapper(textParagraph) {
      let wrap = document.createElement("div");
      const node = textParagraph.textNodes[0];
      if (DOM_SELECTORS.INLINE_ELEMENTS.includes(
        node.parent.tagName.toLocaleLowerCase()
      )) {
        wrap = document.createElement("font");
        const nbsp = " ";
        const text = document.createTextNode(nbsp + nbsp);
        wrap.appendChild(text);
      }
      wrap.classList.add(BILINGUAL_PARAGRAPH);
      this.translateElements.push(wrap);
      return wrap;
    }
    createParagraphBilingualWrapper(textParagraph) {
      const wrap = document.createElement("div");
      wrap.classList.add(BILINGUAL_PARAGRAPH);
      this.translateElements.push(wrap);
      const container = textParagraph.container;
      container.classList.add(BILINGUAL_CONTAINER);
      this.translateContainers.push(container);
      if (isExcludedElement(container)) {
        return;
      }
      return wrap;
    }
    createInlineBilingualDisplay(textParagraph) {
      const wrap = this.createInlineBilingualWrapper(textParagraph);
      const node = textParagraph.textNodes[0];
      const translate = node.translate;
      if (translate && translate.toLocaleLowerCase() === node.originalText?.toLocaleLowerCase()) {
        return;
      }
      if (translate) {
        wrap.appendChild(document.createTextNode(translate));
        node.parent.appendChild(wrap);
      }
    }
    async createParagraphBilingualDisplay(textParagraph) {
      const wrap = this.createParagraphBilingualWrapper(textParagraph);
      if (!wrap) {
        return;
      }
      if (textParagraph.textNodes.length === 1) {
        this.createInlineBilingualDisplay(textParagraph);
        return;
      }
      const container = textParagraph.container;
      const cloneEl = container.cloneNode(true);
      const walker = document.createTreeWalker(cloneEl, NodeFilter.SHOW_TEXT);
      let textNode = walker.nextNode();
      while (textNode) {
        const matchEl = textParagraph.textNodes.find(
          (info) => info.originalText === textNode.textContent
        );
        if (matchEl?.translate && matchEl.translate.toLocaleLowerCase() !== matchEl.originalText.toLocaleLowerCase()) {
          textNode.textContent = matchEl.translate;
        }
        textNode = walker.nextNode();
      }
      while (cloneEl.firstChild) {
        wrap.appendChild(cloneEl.firstChild);
      }
      container.appendChild(wrap);
    }
    createInlineBilingualDisplayHTML(textParagraph) {
      const wrap = this.createInlineBilingualWrapper(textParagraph);
      const node = textParagraph.textNodes[0];
      if (textParagraph.translate?.toLocaleLowerCase() === textParagraph.combinedText?.toLocaleLowerCase()) {
        return;
      }
      const el = document.createElement("div");
      el.innerHTML = textParagraph.translate;
      while (el.firstChild) {
        wrap.appendChild(el.firstChild);
      }
      node.parent.appendChild(wrap);
    }
    async createParagraphBilingualDisplayHTML(textParagraph) {
      const wrap = this.createParagraphBilingualWrapper(textParagraph);
      if (!wrap) {
        return;
      }
      if (textParagraph.textNodes.length === 1) {
        this.createInlineBilingualDisplayHTML(textParagraph);
        return;
      }
      const container = textParagraph.container;
      const el = document.createElement("div");
      el.innerHTML = textParagraph.translate;
      while (el.firstChild) {
        wrap.appendChild(el.firstChild);
      }
      container.appendChild(wrap);
    }
  }
  class TextExtractor {
    excludeSelectors;
    blockElements;
    prefix;
    constructor(options = {}) {
      this.excludeSelectors = [...DOM_SELECTORS.EXCLUDE_DEFAULT];
      this.blockElements = DOM_SELECTORS.BLOCK_ELEMENTS;
      this.prefix = options.prefix || PREFIX;
    }
extractTextNodes(rootElement = document.body) {
      const textNodes = [];
      const excludeSelectors = this.excludeSelectors;
      const walker = this.createOptimizedWalker(rootElement, excludeSelectors);
      let node = walker.nextNode();
      while (node) {
        if (hasSignificantText(node.textContent)) {
          textNodes.push(this.createTextNodeInfo(node));
        }
        node = walker.nextNode();
      }
      return textNodes;
    }
findParagraphContainer(element) {
      let current = element;
      if (current && current.tagName && current.tagName.toLowerCase() === "option") {
        return current;
      }
      const paragraphElements = [
        "p",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "li",
        "td",
        "th",
        "blockquote",
        "pre",
        "div",
        "article",
        "section",
        "option"
      ];
      while (current && current !== document.body) {
        const tagName = current.tagName.toLowerCase();
        if (paragraphElements.includes(tagName)) {
          return current;
        }
        current = current.parentElement;
      }
      return element;
    }
groupTextNodesByParagraph(textNodes) {
      const paragraphGroups = new Map();
      textNodes.forEach((textNode) => {
        const paragraph = this.findParagraphContainer(textNode.parent);
        const paragraphId = this.getElementId(paragraph);
        if (!paragraphGroups.has(paragraphId)) {
          paragraphGroups.set(paragraphId, {
            id: paragraphId,
            container: paragraph,
            textNodes: [],
            combinedText: "",
            combinedTextMap: new Map(),
            htmlContent: "",
            translate: ""
          });
        }
        const group = paragraphGroups.get(paragraphId);
        group.textNodes.push(textNode);
        group.combinedText += (group.combinedText ? " " : "") + textNode.text;
      });
      paragraphGroups.forEach((group) => {
        group.htmlContent = this.extractHtmlContent(group.container);
        if (group.htmlContent && this.shouldUseHtmlContent(group.container, group.combinedText)) {
          const [content, map] = this.extractTextFromHtml(group.htmlContent);
          group.combinedText = content;
          group.combinedTextMap = map;
        }
      });
      const paragraphs = Array.from(paragraphGroups.values());
      return paragraphs.filter((item) => {
        return !paragraphs.some((other) => {
          return item !== other && item.container.contains(other.container);
        });
      });
    }
extractHtmlContent(container) {
      if (!container) {
        return "";
      }
      const clone = container.cloneNode(true);
      const selected = [
        DOM_SELECTORS.BILINGUAL_CONTAINER,
        DOM_SELECTORS.BILINGUAL_PARAGRAPH
      ].join(", ");
      const existingTranslations = clone.querySelectorAll(selected);
      existingTranslations.forEach((el) => el.remove());
      return clone.innerHTML.trim();
    }
shouldUseHtmlContent(container, plainText) {
      if (!container || !plainText) {
        return false;
      }
      const htmlElements = container.querySelectorAll(
        DOM_SELECTORS.INLINE_ELEMENTS.join(", ")
      );
      if (htmlElements.length === 0) {
        return false;
      }
      let hasSignificantHtmlText = false;
      htmlElements.forEach((el) => {
        const text = el.textContent?.trim();
        if (text && text.length > 0 && hasSignificantText(text) || el.hasAttribute("href") || el.classList.length > 0) {
          hasSignificantHtmlText = true;
        }
      });
      const htmlContent = this.extractHtmlContent(container);
      const plainTextLength = plainText.replace(/\s+/g, " ").trim().length;
      const htmlContentLength = htmlContent.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().length;
      const hasStructuralDifference = htmlContent.includes("<") && htmlContentLength > plainTextLength * 0.8;
      return hasSignificantHtmlText || hasStructuralDifference;
    }
extractTextFromHtml(htmlContent) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;
      return this.getTextWithInlineTags(tempDiv);
    }
getTextWithInlineTags(element, counter = 0) {
      let content = "";
      const map = new Map();
      for (const node of Array.from(element.childNodes)) {
        if (node.nodeType === Node.TEXT_NODE) {
          content += node.textContent;
          continue;
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node;
          const tagName = el.tagName.toLowerCase();
          if (DOM_SELECTORS.INLINE_ELEMENTS.includes(tagName)) {
            counter++;
            const textContent = el.textContent || "";
            const attrs = Array.from(el.attributes).map(
              (attr) => `${attr.name}="${this.escapeAttributeValue(attr.value)}"`
            ).join(" ");
            const [innerText, _map] = this.getTextWithInlineTags(el, counter);
            _map.forEach((value, key) => map.set(key, value));
            const tag = `c${counter}`;
            map.set(tag, { tagName, attrs, textContent });
            content += `<${tag}>${innerText}</${tag}>`;
          } else {
            const [innerText, _map] = this.getTextWithInlineTags(el);
            _map.forEach((value, key) => map.set(key, value));
            content += innerText;
          }
        }
      }
      return [content, map];
    }
parseTextWithInlineTags(text, map) {
      for (const [tag, { tagName, attrs, textContent }] of map) {
        if (DOM_SELECTORS.NON_TRANSLATABLE_TAGS.includes(tagName)) {
          const reg = new RegExp(`<${tag}>(.*?)</${tag}>`, "g");
          text = text.replaceAll(
            reg,
            `<${tagName} ${attrs}>${textContent}</${tagName}>`
          );
        } else {
          text = text.replaceAll(`<${tag}>`, `<${tagName} ${attrs}>`).replaceAll(`</${tag}>`, `</${tagName}>`);
        }
      }
      return text;
    }
getImportantAttributes(element) {
      let attrs = "";
      ["href", "class", "id", "target", "rel"].forEach((attr) => {
        if (element.hasAttribute(attr)) {
          const value = element.getAttribute(attr);
          if (value) {
            attrs += ` ${attr}="${this.escapeAttributeValue(value)}"`;
          }
        }
      });
      Array.from(element.attributes).forEach((attr) => {
        if (attr.name.startsWith("data-") || attr.name.startsWith("aria-")) {
          attrs += ` ${attr.name}="${this.escapeAttributeValue(attr.value)}"`;
        }
      });
      return attrs;
    }
escapeAttributeValue(value) {
      if (!value) {
        return "";
      }
      return value.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
getElementId(element) {
      if (element.id) {
        return element.id;
      }
      const path = [];
      let current = element;
      while (current && current !== document.body) {
        const tagName = current.tagName.toLowerCase();
        const siblings = Array.from(current.parentElement?.children || []).filter(
          (el) => el.tagName.toLowerCase() === tagName
        );
        const index = siblings.indexOf(current);
        path.unshift(`${tagName}${siblings.length > 1 ? `[${index}]` : ""}`);
        current = current.parentElement;
      }
      return path.join(">");
    }
createTextNodeInfo(node) {
      return {
        id: this.generateNodeId(node),
        node,
        text: node.textContent.trim(),
        parent: node.parentElement,
        originalText: node.textContent,
        spaces: checkStartEndSpaces(node.textContent)
      };
    }
generateNodeId(node) {
      const parent = node.parentElement;
      const siblings = Array.from(parent.childNodes).filter(
        (n) => n.nodeType === Node.TEXT_NODE
      );
      const index = siblings.indexOf(node);
      return `${parent.tagName.toLowerCase()}-${index}-${Date.now()}`;
    }
createOptimizedWalker(rootElement, excludeSelectors) {
      return document.createTreeWalker(rootElement, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          return this.isTranslatableTextNode(
            node,
            excludeSelectors
          ) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
    }
isTranslatableTextNode(node, excludeSelectors = this.excludeSelectors) {
      if (!node || !node.parentElement) {
        return false;
      }
      if (node.parentElement.closest(DOM_SELECTORS.BILINGUAL_CONTAINER) || node.parentElement.closest(DOM_SELECTORS.BILINGUAL_PARAGRAPH)) {
        return false;
      }
      if (node.parentElement.classList.contains(BILINGUAL_PARAGRAPH) || node.parentElement.querySelector(DOM_SELECTORS.BILINGUAL_PARAGRAPH)) {
        return false;
      }
      if (this.isInNonDisplayAttribute(node)) {
        return false;
      }
      const codeParent = node.parentElement.closest("code");
      if (codeParent) {
        if (codeParent.closest("pre")) {
          return false;
        }
        return true;
      }
      if (!this.isElementVisible(node.parentElement)) {
        return false;
      }
      const linkParent = node.parentElement.closest("a[href]");
      if (linkParent) {
        const text = node.textContent.trim();
        if (text.length < 10 && !/[.!?。！？]/.test(text) && !/[\u4E00-\u9FFF]/.test(text)) {
          return false;
        }
      }
      return !this.isStrictlyExcludedElement(node.parentElement, excludeSelectors);
    }
isInNonDisplayAttribute(node) {
      if (!node || !node.parentElement) {
        return false;
      }
      const parent = node.parentElement;
      if (parent.tagName && parent.tagName.toLowerCase() === "input") {
        const inputType = parent.getAttribute("type");
        if (inputType === "hidden" || parent.hasAttribute("placeholder")) {
          return true;
        }
      }
      if (parent.classList.contains("tooltip") || parent.classList.contains("title") || parent.classList.contains("alt-text") || parent.hasAttribute("role") && parent.getAttribute("role") === "tooltip") {
        return true;
      }
      try {
        const computedStyle = window.getComputedStyle(parent, "::before");
        if (computedStyle && computedStyle.content && computedStyle.content !== "none" && computedStyle.content !== '""') {
          return true;
        }
        const afterStyle = window.getComputedStyle(parent, "::after");
        if (afterStyle && afterStyle.content && afterStyle.content !== "none" && afterStyle.content !== '""') {
          return true;
        }
      } catch {
      }
      if (parent.style.display === "none" || parent.style.visibility === "hidden" || parent.hasAttribute("hidden")) {
        return true;
      }
      return false;
    }
isElementVisible(element) {
      if (!element) {
        return false;
      }
      if (element.style.display === "none" || element.style.visibility === "hidden" || element.hasAttribute("hidden") || element.getAttribute("aria-hidden") === "true") {
        return false;
      }
      try {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.display === "none" || computedStyle.visibility === "hidden" || computedStyle.opacity === "0") {
          return false;
        }
        const rect = element.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) {
          return false;
        }
      } catch {
        return true;
      }
      return true;
    }
isStrictlyExcludedElement(element, excludeSelectors = []) {
      if (!element || !element.matches) {
        return true;
      }
      const tagName = element.tagName.toLowerCase();
      const strictExcludeElements = [
        "script",
        "style",
        "noscript",
        "iframe",
        "object",
        "embed",
        "canvas",
        "svg",
        "math",
        "pre",
        "kbd",
        "samp",
        "var"
      ];
      if (strictExcludeElements.includes(tagName)) {
        return true;
      }
      if (element.matches('[data-translate="no"], .notranslate, [translate="no"]')) {
        return true;
      }
      if (element.contentEditable === "true") {
        return true;
      }
      if (["input", "textarea", "button", "select"].includes(tagName)) {
        return true;
      }
      if (excludeSelectors.length > 0) {
        return excludeSelectors.some((selector) => {
          try {
            if (selector.startsWith("[") || selector.startsWith(".") || selector.startsWith("#")) {
              return element.matches(selector);
            }
            return tagName === selector;
          } catch {
            return false;
          }
        });
      }
      return false;
    }
  }
  class Translator {
    translatorCacheMap = new Map();
    progress;
    constructor(options = {}) {
      this.progress = options.progress;
    }
    async translate(options) {
      const translator = await this.getTranslator({ from: options.from, to: options.to });
      return translator.translate(options.text);
    }
    async createTranslator(options) {
      const languages = {
        sourceLanguage: options.from,
        targetLanguage: options.to
      };
      const availability = await window.Translator.availability(
        languages
      );
      if (availability === "unavailable") {
        console.warn(
          `Translation not supported; try a different language combination.`
        );
        return void 0;
      } else if (availability === "available") {
        return window.Translator.create(languages);
      }
      return window.Translator.create({
        ...languages,
        monitor: (monitor) => {
          const progess = this.progress?.createProgressElement({ title: "Downloading Translator..." });
          monitor.addEventListener("downloadprogress", (e) => {
            const percentage = Math.floor(e.loaded * 100);
            progess?.showProgress(percentage);
          });
        }
      });
    }
    async getTranslator(options) {
      const key = Object.values(options).join("-");
      let translatorPromise = this.translatorCacheMap.get(key);
      if (!translatorPromise) {
        translatorPromise = this.createTranslator(options).then((translator) => {
          if (!translator) {
            this.translatorCacheMap.delete(key);
            throw new Error("Translator creation failed");
          }
          return translator;
        }).catch((err) => {
          this.translatorCacheMap.delete(key);
          console.error("Error creating translator:", err);
        });
        this.translatorCacheMap.set(key, translatorPromise);
      }
      return translatorPromise;
    }
    async detectLanguage(text) {
      const detector = await window.LanguageDetector.create({
        monitor: (monitor) => {
          const progress = this.progress?.createProgressElement({ title: "Downloading LanguageDetector..." });
          monitor.addEventListener("downloadprogress", (e) => {
            const percentage = Math.floor(e.loaded * 100);
            progress?.showProgress(percentage);
          });
        }
      });
      const langs = await detector.detect(text);
      return langs[0].detectedLanguage;
    }
    async detectPageLanguage() {
      const lang = document.documentElement.lang;
      if (lang) {
        return lang;
      }
      const textContent = document.body.textContent;
      return textContent ? this.detectLanguage(textContent) : "en";
    }
  }
  class LFUCache {
    #cache;
#storageKey;
#maxSizeBytes;

constructor(storageKey = "lfu_cache", maxSizeKB = 512) {
      this.#storageKey = storageKey;
      this.#maxSizeBytes = maxSizeKB * 1024;
      this.#cache = new Map();
      this.#load();
    }
#load() {
      const raw = _GM_getValue(this.#storageKey, {});
      try {
        for (const [key, item] of Object.entries(raw)) {
          this.#cache.set(key, item);
        }
      } catch (e) {
        console.warn("[LFUCache] Load failed:", e);
        this.#cache.clear();
      }
    }
#save() {
      const obj = {};
      for (const [key, item] of this.#cache.entries()) {
        obj[key] = item;
      }
      _GM_setValue(this.#storageKey, obj);
    }
#getSizeBytes() {
      const obj = {};
      for (const [key, item] of this.#cache.entries()) {
        obj[key] = item;
      }
      return new Blob([JSON.stringify(obj)]).size;
    }
#evictIfNeeded() {
      let size = this.#getSizeBytes();
      if (size <= this.#maxSizeBytes) {
        return;
      }
      const entries = Array.from(this.#cache.entries());
      entries.sort((a, b) => {
        const A = a[1];
        const B = b[1];
        if (A.freq === B.freq) {
          return A.timestamp - B.timestamp;
        }
        return A.freq - B.freq;
      });
      for (const [key] of entries) {
        if (size <= this.#maxSizeBytes) {
          break;
        }
        this.#cache.delete(key);
        size = this.#getSizeBytes();
      }
    }
get(key) {
      const item = this.#cache.get(key);
      if (!item) {
        return;
      }
      item.freq += 1;
      item.timestamp = Date.now();
      this.#cache.set(key, item);
      this.#save();
      return item.value;
    }
set(key, value) {
      const existing = this.#cache.get(key);
      const item = {
        value,
        freq: existing ? existing.freq + 1 : 1,
        timestamp: Date.now()
      };
      this.#cache.set(key, item);
      this.#evictIfNeeded();
      this.#save();
    }
clear() {
      this.#cache.clear();
      _GM_setValue(this.#storageKey, {});
    }
remove(key) {
      this.#cache.delete(key);
      this.#save();
    }
has(key) {
      return this.#cache.has(key);
    }
size() {
      return this.#cache.size;
    }
info() {
      const usedBytes = this.#getSizeBytes();
      const maxBytes = this.#maxSizeBytes;
      const sortedItems = Array.from(this.#cache.entries()).sort((a, b) => {
        const A = a[1];
        const B = b[1];
        if (B.freq === A.freq) {
          return B.timestamp - A.timestamp;
        }
        return B.freq - A.freq;
      }).map(([key, item]) => ({
        key,
        freq: item.freq,
        timestamp: item.timestamp
      }));
      return {
        totalItems: this.#cache.size,
        maxSize: formatSize(maxBytes),
        usedSize: formatSize(usedBytes),
        freeSize: formatSize(maxBytes - usedBytes),
        items: sortedItems
      };
    }
  }
  const textExtractorInstance = new TextExtractor();
  const progressInstance = new Progress();
  const translatorInstance = new Translator({ progress: progressInstance });
  const cache = new LFUCache();
  let rendererInstance = null;
  async function useTranslate() {
    if (rendererInstance) {
      return {
        instance: rendererInstance,
        isTranslating: () => !!rendererInstance?.isRunning,
        start: () => rendererInstance?.start(),
        stop: () => rendererInstance?.stop?.()
      };
    }
    const from = await translatorInstance.detectPageLanguage();
    const to = navigator.languages[0];
    rendererInstance = new Renderer({
      textExtractor: textExtractorInstance,
      translator: translatorInstance,
      LFUCache: cache,
      from,
      to
    });
    const start = () => {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
          rendererInstance?.start();
        });
      } else {
        rendererInstance?.start();
      }
    };
    return {
      instance: rendererInstance,
      isTranslating: () => !!rendererInstance?.isRunning,
      start,
      stop: () => rendererInstance?.stop?.()
    };
  }
  const _hoisted_1 = { class: "ct-root" };
  const _hoisted_2 = { class: "ct-icon" };
  const _sfc_main = vue.defineComponent({
    __name: "ball.ce",
    setup(__props) {
      const ball2 = vue.useTemplateRef("ball");
      const config = _GM_getValue(STORAGE_CONFIG_KEY, {
        position: { x: "", y: "" },
        side: "right"
      });
      const states = vue.reactive({
        moving: false,
        isTranslating: false
      });
      let dragging = false;
      vue.onMounted(() => {
        const el = ball2.value;
        const y = config.position.y;
        el.style.setProperty("--scrollbar-width", `${SCROLLBAR_INFO.width}px`);
        el.style.setProperty("--scrollbar-height", `${SCROLLBAR_INFO.height}px`);
        if (y) {
          el.style.setProperty("--y", y);
        }
        el.setAttribute("data-side", config.side);
        const onMouseDown = (event) => {
          if (event.button !== 0) {
            return;
          }
          states.moving = false;
          dragging = true;
          el.style.transition = "none";
        };
        const onMouseMove = (event) => {
          if (!dragging) {
            return;
          }
          states.moving = true;
          el.style.cursor = "move";
          const ballWidth = el.offsetWidth;
          const ballHeight = el.offsetHeight;
          const x = clamp(event.clientX - ballWidth / 2, 0, window.innerWidth - ballWidth);
          const y2 = clamp(event.clientY - ballHeight / 2, 0, window.innerHeight - ballHeight);
          el.style.setProperty("--x", `${x}px`);
          el.style.setProperty("--y", `${y2}px`);
        };
        const onMouseUp = (_event) => {
          if (!dragging) {
            return;
          }
          dragging = false;
          el.style.transition = "all 0.3s ease";
          el.style.cursor = "pointer";
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const side = centerX < window.innerWidth / 2 ? "left" : "right";
          el.setAttribute("data-side", side);
          const scrollbarWidth = side === SCROLLBAR_INFO.vertical ? SCROLLBAR_INFO.width : 0;
          el.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
          const x = el.style.getPropertyValue("--x");
          const y2 = el.style.getPropertyValue("--y");
          el.style.removeProperty("--x");
          _GM_setValue(STORAGE_CONFIG_KEY, { ...config, position: { x, y: y2 }, side });
          if (states.moving) {
            const stopClick = (event) => {
              event.stopImmediatePropagation();
              event.preventDefault();
              states.moving = false;
              window.removeEventListener("click", stopClick, true);
            };
            window.addEventListener("click", stopClick, true);
          }
        };
        const throttledMouseMove = throttle(onMouseMove, 16);
        el.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", throttledMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        el.addEventListener("contextmenu", (event) => {
          event.preventDefault();
        });
        vue.onBeforeUnmount(() => {
          el.removeEventListener("mousedown", onMouseDown);
          window.removeEventListener("mousemove", throttledMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        });
      });
      async function onTranslate() {
        const translate = await useTranslate();
        if (translate.isTranslating()) {
          translate.instance.clearElements();
          states.isTranslating = translate.isTranslating();
          return;
        }
        translate.start();
        states.isTranslating = translate.isTranslating();
      }
      const onTranslateDebounced = debounce(onTranslate, 500, true);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("div", {
            ref_key: "ball",
            ref: ball2,
            class: vue.normalizeClass(["ct-ball", { "ct-moving": states.moving }]),
            onClick: _cache[0] || (_cache[0] =
(...args) => vue.unref(onTranslateDebounced) && vue.unref(onTranslateDebounced)(...args))
          }, [
            vue.createElementVNode("div", _hoisted_2, [
              vue.createVNode(languageIcon, { class: "ct-language" }),
              states.isTranslating ? (vue.openBlock(), vue.createBlock(checkIcon, {
                key: 0,
                class: "ct-check"
              })) : vue.createCommentVNode("", true)
            ])
          ], 2)
        ]);
      };
    }
  });
  const _style_0 = ".ct-root[data-v-2ad554f3]{--size: 40px}.ct-root .ct-ball[data-v-2ad554f3]{--x: 0px;--y: calc(50vh - var(--size)/2);position:fixed;z-index:999999999;top:0;width:var(--size);height:var(--size);background:#09f;background-color:#fff;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 16px #00000040;cursor:pointer;-webkit-user-select:none;user-select:none;touch-action:none;transform:translate(var(--x),var(--y));transition:all .3s ease}.ct-root .ct-ball.ct-moving[data-v-2ad554f3]{border-radius:50%;padding:unset!important}.ct-root .ct-ball .ct-icon[data-v-2ad554f3]{--size: 28px;width:var(--size);height:var(--size);position:relative;display:flex;align-items:center;justify-content:center;border-radius:50%;background-color:#00c4b6}.ct-root .ct-ball .ct-icon .ct-language[data-v-2ad554f3]{width:20px;height:20px}.ct-root .ct-ball .ct-icon .ct-check[data-v-2ad554f3]{position:absolute;bottom:-2px;right:0;width:10px;height:10px;border-radius:50%;background-color:#00c800cc;color:#fff}.ct-root .ct-ball[data-side=left][data-v-2ad554f3]{border-top-right-radius:20px;border-bottom-right-radius:20px}.ct-root .ct-ball[data-side=left][data-v-2ad554f3]:hover{--x: 0;padding-left:10px}.ct-root .ct-ball[data-side=right][data-v-2ad554f3]{--x: calc(100vw - var(--size) - var(--scrollbar-width));--offset: calc(var(--scrollbar-width) + 10px);border-top-left-radius:20px;border-bottom-left-radius:20px;padding-right:var(--offset)}.ct-root .ct-ball[data-side=right][data-v-2ad554f3]:hover{--x: calc(100vw - var(--size) - var(--offset))}.ct-root .ct-ball[data-side=right] .ct-icon .ct-check[data-v-2ad554f3]{left:0;right:unset}";
  const ball = _export_sfc(_sfc_main, [["styles", [_style_0]], ["__scopeId", "data-v-2ad554f3"]]);
  customElements.define("chrome-translate-ball", vue.defineCustomElement(ball));
  document.documentElement.append(document.createElement("chrome-translate-ball"));

})(Vue);