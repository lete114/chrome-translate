// ==UserScript==
// @name         chrome-translate
// @namespace    lete114/chrome-translate
// @version      0.0.2
// @author       Lete114 <me@imlete.cn>
// @license      MIT
// @icon         https://github.com/lete114/chrome-translate/blob/main/src/assets/logo.svg?raw=true
// @homepage     https://github.com/lete114/chrome-translate#readme
// @homepageURL  https://github.com/lete114/chrome-translate#readme
// @source       https://github.com/lete114/chrome-translate.git
// @supportURL   https://github.com/lete114/chrome-translate/issues
// @match        *://*/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.5.19/dist/vue.global.prod.js
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function (vue) {
  'use strict';

  const d$2=new Set;const importCSS = async e=>{d$2.has(e)||(d$2.add(e),(t=>{typeof GM_addStyle=="function"?GM_addStyle(t):document.head.appendChild(document.createElement("style")).append(t);})(e));};

  var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {};
  const _hoisted_1$3 = { viewBox: "0 0 1024 1024" };
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
      vue.createElementVNode("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      }, null, -1)
    ])]);
  }
  const checkIcon = _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
  const _sfc_main$2 = {};
  const _hoisted_1$2 = { viewBox: "0 0 24 24" };
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
      vue.createElementVNode("path", {
        fill: "currentColor",
        d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
      }, null, -1)
    ])]);
  }
  const languageIcon = _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  const _sfc_main$1 = {};
  const _hoisted_1$1 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
  };
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
      vue.createElementVNode("path", {
        fill: "currentColor",
        d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256"
      }, null, -1)
    ])]);
  }
  const settingIcon = _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
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
      for (let i4 = startIndex; i4 < els.length; i4++) {
        const el = els[i4];
        if (!el) {
          continue;
        }
        const prev = els[i4 - 1];
        if (prev) {
          prevOffset = Number.parseInt(prev.style.bottom) + prev.offsetHeight;
        }
        el.style.zIndex = (this.zIndex + i4).toString();
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
  function watchScrollbarChange(callback) {
    let lastInfo = getScrollbarInfo();
    const check = debounce(() => {
      const newInfo = getScrollbarInfo();
      if (newInfo.width !== lastInfo.width || newInfo.height !== lastInfo.height || newInfo.vertical !== lastInfo.vertical || newInfo.horizontal !== lastInfo.horizontal) {
        lastInfo = newInfo;
        callback(newInfo);
      }
    }, 100);
    window.addEventListener("resize", check);
    const resizeObserver = new ResizeObserver(check);
    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(document.body);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", check);
      check.cancel();
    };
  }
  function clamp$1(v2, min2, max2) {
    return Math.min(Math.max(v2, min2), max2);
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
        const key = `${from}->${to}:${node.text}`;
        if (this.translateCache.has(key)) {
          const text = this.translateCache.get(key);
          node.translate = text;
          return;
        }
        node.translate = node.originalText;
        if (!isExcludedElement(node.parent)) {
          const options = { text: node.text, from, to };
          const translation2 = await this.translator.translate(options);
          this.translateCache.set(key, translation2);
          node.translate = translation2;
          node.translate = applySpaces(node.spaces, node.translate);
        }
      });
      await Promise.all(translationPromises);
      return textNodes;
    }
    async translateHTML({ from, to, map, text }) {
      const key = `${from}->${to}:${text}`;
      if (this.translateCache.has(key)) {
        return this.translateCache.get(key);
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
      wrap.style.margin = "8px 0";
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
        (n3) => n3.nodeType === Node.TEXT_NODE
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
          monitor.addEventListener("downloadprogress", (e3) => {
            const percentage = Math.floor(e3.loaded * 100);
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
          monitor.addEventListener("downloadprogress", (e3) => {
            const percentage = Math.floor(e3.loaded * 100);
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
      } catch (e3) {
        console.warn("[LFUCache] Load failed:", e3);
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
      let size2 = this.#getSizeBytes();
      if (size2 <= this.#maxSizeBytes) {
        return;
      }
      const entries = Array.from(this.#cache.entries());
      entries.sort((a2, b2) => {
        const A2 = a2[1];
        const B2 = b2[1];
        if (A2.freq === B2.freq) {
          return A2.timestamp - B2.timestamp;
        }
        return A2.freq - B2.freq;
      });
      for (const [key] of entries) {
        if (size2 <= this.#maxSizeBytes) {
          break;
        }
        this.#cache.delete(key);
        size2 = this.#getSizeBytes();
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
      const sortedItems = Array.from(this.#cache.entries()).sort((a2, b2) => {
        const A2 = a2[1];
        const B2 = b2[1];
        if (B2.freq === A2.freq) {
          return B2.timestamp - A2.timestamp;
        }
        return B2.freq - A2.freq;
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
  async function useTranslate(options = {}) {
    if (rendererInstance) {
      return {
        instance: rendererInstance,
        isTranslating: () => !!rendererInstance?.isRunning,
        start: () => rendererInstance?.start(),
        stop: () => rendererInstance?.stop?.()
      };
    }
    if (!options.from) {
      options.from = await translatorInstance.detectPageLanguage();
    }
    if (!options.to) {
      options.to = navigator.languages[0];
    }
    rendererInstance = new Renderer({
      textExtractor: textExtractorInstance,
      translator: translatorInstance,
      LFUCache: cache,
      from: options.from,
      to: options.to
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
  const LANGUAGES = [
{ label: "EN", value: "en" },
    { label: "ZH-CN", value: "zh-CN" },
    { label: "ZH-TW", value: "zh-TW" },
    { label: "ES", value: "es" },
    { label: "FR", value: "fr" },
    { label: "DE", value: "de" },
    { label: "JA", value: "ja" },
    { label: "KO", value: "ko" },
    { label: "RU", value: "ru" },
    { label: "AR", value: "ar" },
    { label: "PT", value: "pt" },
    { label: "IT", value: "it" },
{ label: "HI", value: "hi" },
    { label: "BN", value: "bn" },
    { label: "UR", value: "ur" },
    { label: "TH", value: "th" },
    { label: "VI", value: "vi" },
    { label: "ID", value: "id" },
    { label: "MS", value: "ms" },
    { label: "TL", value: "fil" },
    { label: "TA", value: "ta" },
    { label: "TE", value: "te" },
    { label: "ML", value: "ml" },
    { label: "KN", value: "kn" },
    { label: "MR", value: "mr" },
    { label: "NE", value: "ne" },
    { label: "MY", value: "my" },
    { label: "SI", value: "si" },
{ label: "NL", value: "nl" },
    { label: "PL", value: "pl" },
    { label: "TR", value: "tr" },
    { label: "EL", value: "el" },
    { label: "SV", value: "sv" },
    { label: "DA", value: "da" },
    { label: "NO", value: "no" },
    { label: "FI", value: "fi" },
    { label: "HU", value: "hu" },
    { label: "CS", value: "cs" },
    { label: "SK", value: "sk" },
    { label: "SL", value: "sl" },
    { label: "HR", value: "hr" },
    { label: "SR", value: "sr" },
    { label: "RO", value: "ro" },
    { label: "BG", value: "bg" },
    { label: "UK", value: "uk" },
    { label: "LV", value: "lv" },
    { label: "LT", value: "lt" },
    { label: "ET", value: "et" },
{ label: "FA", value: "fa" },
    { label: "SW", value: "sw" },
    { label: "AF", value: "af" },
    { label: "HE", value: "he" },
{ label: "CA", value: "ca" },
    { label: "GL", value: "gl" },
    { label: "IS", value: "is" },
    { label: "MK", value: "mk" },
    { label: "KA", value: "ka" },
    { label: "KK", value: "kk" },
    { label: "MN", value: "mn" }
  ];
  const defaultCss = ':where(:root),:host{--wa-color-red-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1)*100%)) ;--wa-color-orange-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1)*100%)) ;--wa-color-yellow-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1)*100%)) ;--wa-color-green-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1)*100%)) ;--wa-color-cyan-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1)*100%)) ;--wa-color-blue-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1)*100%)) ;--wa-color-indigo-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1)*100%)) ;--wa-color-purple-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1)*100%)) ;--wa-color-pink-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1)*100%)) ;--wa-color-gray-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1)*100%)) ;--wa-color-red-on: color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);--wa-color-orange-on: color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);--wa-color-yellow-on: color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);--wa-color-green-on: color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);--wa-color-cyan-on: color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);--wa-color-blue-on: color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);--wa-color-indigo-on: color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);--wa-color-purple-on: color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);--wa-color-pink-on: color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);--wa-color-gray-on: color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white)}@layer wa-color-palette{:where(:root),.wa-palette-default{--wa-color-red-95: #fff0ef ;--wa-color-red-90: #ffdedc ;--wa-color-red-80: #ffb8b6 ;--wa-color-red-70: #fd8f90 ;--wa-color-red-60: #f3676c ;--wa-color-red-50: #dc3146 ;--wa-color-red-40: #b30532 ;--wa-color-red-30: #8a132c ;--wa-color-red-20: #631323 ;--wa-color-red-10: #3e0913 ;--wa-color-red-05: #2a040b ;--wa-color-red: var(--wa-color-red-50);--wa-color-red-key: 50;--wa-color-orange-95: #fff0e6 ;--wa-color-orange-90: #ffdfca ;--wa-color-orange-80: #ffbb94 ;--wa-color-orange-70: #ff9266 ;--wa-color-orange-60: #f46a45 ;--wa-color-orange-50: #cd491c ;--wa-color-orange-40: #9f3501 ;--wa-color-orange-30: #802700 ;--wa-color-orange-20: #601b00 ;--wa-color-orange-10: #3c0d00 ;--wa-color-orange-05: #280600 ;--wa-color-orange: var(--wa-color-orange-60);--wa-color-orange-key: 60;--wa-color-yellow-95: #fef3cd ;--wa-color-yellow-90: #ffe495 ;--wa-color-yellow-80: #fac22b ;--wa-color-yellow-70: #ef9d00 ;--wa-color-yellow-60: #da7e00 ;--wa-color-yellow-50: #b45f04 ;--wa-color-yellow-40: #8c4602 ;--wa-color-yellow-30: #6f3601 ;--wa-color-yellow-20: #532600 ;--wa-color-yellow-10: #331600 ;--wa-color-yellow-05: #220c00 ;--wa-color-yellow: var(--wa-color-yellow-80);--wa-color-yellow-key: 80;--wa-color-green-95: #e3f9e3 ;--wa-color-green-90: #c2f2c1 ;--wa-color-green-80: #93da98 ;--wa-color-green-70: #5dc36f ;--wa-color-green-60: #00ac49 ;--wa-color-green-50: #00883c ;--wa-color-green-40: #036730 ;--wa-color-green-30: #0a5027 ;--wa-color-green-20: #0a3a1d ;--wa-color-green-10: #052310 ;--wa-color-green-05: #031608 ;--wa-color-green: var(--wa-color-green-60);--wa-color-green-key: 60;--wa-color-cyan-95: #e3f6fb ;--wa-color-cyan-90: #c5ecf7 ;--wa-color-cyan-80: #7fd6ec ;--wa-color-cyan-70: #2fbedc ;--wa-color-cyan-60: #00a3c0 ;--wa-color-cyan-50: #078098 ;--wa-color-cyan-40: #026274 ;--wa-color-cyan-30: #014c5b ;--wa-color-cyan-20: #003844 ;--wa-color-cyan-10: #002129 ;--wa-color-cyan-05: #00151b ;--wa-color-cyan: var(--wa-color-cyan-70);--wa-color-cyan-key: 70;--wa-color-blue-95: #e8f3ff ;--wa-color-blue-90: #d1e8ff ;--wa-color-blue-80: #9fceff ;--wa-color-blue-70: #6eb3ff ;--wa-color-blue-60: #3e96ff ;--wa-color-blue-50: #0071ec ;--wa-color-blue-40: #0053c0 ;--wa-color-blue-30: #003f9c ;--wa-color-blue-20: #002d77 ;--wa-color-blue-10: #001a4e ;--wa-color-blue-05: #000f35 ;--wa-color-blue: var(--wa-color-blue-50);--wa-color-blue-key: 50;--wa-color-indigo-95: #f0f2ff ;--wa-color-indigo-90: #dfe5ff ;--wa-color-indigo-80: #bcc7ff ;--wa-color-indigo-70: #9da9ff ;--wa-color-indigo-60: #808aff ;--wa-color-indigo-50: #6163f2 ;--wa-color-indigo-40: #4945cb ;--wa-color-indigo-30: #3933a7 ;--wa-color-indigo-20: #292381 ;--wa-color-indigo-10: #181255 ;--wa-color-indigo-05: #0d0a3a ;--wa-color-indigo: var(--wa-color-indigo-50);--wa-color-indigo-key: 50;--wa-color-purple-95: #f7f0ff ;--wa-color-purple-90: #eedfff ;--wa-color-purple-80: #ddbdff ;--wa-color-purple-70: #ca99ff ;--wa-color-purple-60: #b678f5 ;--wa-color-purple-50: #9951db ;--wa-color-purple-40: #7936b3 ;--wa-color-purple-30: #612692 ;--wa-color-purple-20: #491870 ;--wa-color-purple-10: #2d0b48 ;--wa-color-purple-05: #1e0532 ;--wa-color-purple: var(--wa-color-purple-50);--wa-color-purple-key: 50;--wa-color-pink-95: #feeff9 ;--wa-color-pink-90: #feddf0 ;--wa-color-pink-80: #fcb5d8 ;--wa-color-pink-70: #f78dbf ;--wa-color-pink-60: #e66ba3 ;--wa-color-pink-50: #c84382 ;--wa-color-pink-40: #9e2a6c ;--wa-color-pink-30: #7d1e58 ;--wa-color-pink-20: #5e1342 ;--wa-color-pink-10: #3c0828 ;--wa-color-pink-05: #28041a ;--wa-color-pink: var(--wa-color-pink-50);--wa-color-pink-key: 50;--wa-color-gray-95: #f1f2f3 ;--wa-color-gray-90: #e4e5e9 ;--wa-color-gray-80: #c7c9d0 ;--wa-color-gray-70: #abaeb9 ;--wa-color-gray-60: #9194a2 ;--wa-color-gray-50: #717584 ;--wa-color-gray-40: #545868 ;--wa-color-gray-30: #424554 ;--wa-color-gray-20: #2f323f ;--wa-color-gray-10: #1b1d26 ;--wa-color-gray-05: #101219 ;--wa-color-gray: var(--wa-color-gray-40);--wa-color-gray-key: 40}}@layer wa-color-variant{:where(:root),.wa-brand-blue{--wa-color-brand-95: var(--wa-color-blue-95);--wa-color-brand-90: var(--wa-color-blue-90);--wa-color-brand-80: var(--wa-color-blue-80);--wa-color-brand-70: var(--wa-color-blue-70);--wa-color-brand-60: var(--wa-color-blue-60);--wa-color-brand-50: var(--wa-color-blue-50);--wa-color-brand-40: var(--wa-color-blue-40);--wa-color-brand-30: var(--wa-color-blue-30);--wa-color-brand-20: var(--wa-color-blue-20);--wa-color-brand-10: var(--wa-color-blue-10);--wa-color-brand-05: var(--wa-color-blue-05);--wa-color-brand: var(--wa-color-blue);--wa-color-brand-on: var(--wa-color-blue-on)}.wa-brand-red{--wa-color-brand-95: var(--wa-color-red-95);--wa-color-brand-90: var(--wa-color-red-90);--wa-color-brand-80: var(--wa-color-red-80);--wa-color-brand-70: var(--wa-color-red-70);--wa-color-brand-60: var(--wa-color-red-60);--wa-color-brand-50: var(--wa-color-red-50);--wa-color-brand-40: var(--wa-color-red-40);--wa-color-brand-30: var(--wa-color-red-30);--wa-color-brand-20: var(--wa-color-red-20);--wa-color-brand-10: var(--wa-color-red-10);--wa-color-brand-05: var(--wa-color-red-05);--wa-color-brand: var(--wa-color-red);--wa-color-brand-on: var(--wa-color-red-on)}.wa-brand-orange{--wa-color-brand-95: var(--wa-color-orange-95);--wa-color-brand-90: var(--wa-color-orange-90);--wa-color-brand-80: var(--wa-color-orange-80);--wa-color-brand-70: var(--wa-color-orange-70);--wa-color-brand-60: var(--wa-color-orange-60);--wa-color-brand-50: var(--wa-color-orange-50);--wa-color-brand-40: var(--wa-color-orange-40);--wa-color-brand-30: var(--wa-color-orange-30);--wa-color-brand-20: var(--wa-color-orange-20);--wa-color-brand-10: var(--wa-color-orange-10);--wa-color-brand-05: var(--wa-color-orange-05);--wa-color-brand: var(--wa-color-orange);--wa-color-brand-on: var(--wa-color-orange-on)}.wa-brand-yellow{--wa-color-brand-95: var(--wa-color-yellow-95);--wa-color-brand-90: var(--wa-color-yellow-90);--wa-color-brand-80: var(--wa-color-yellow-80);--wa-color-brand-70: var(--wa-color-yellow-70);--wa-color-brand-60: var(--wa-color-yellow-60);--wa-color-brand-50: var(--wa-color-yellow-50);--wa-color-brand-40: var(--wa-color-yellow-40);--wa-color-brand-30: var(--wa-color-yellow-30);--wa-color-brand-20: var(--wa-color-yellow-20);--wa-color-brand-10: var(--wa-color-yellow-10);--wa-color-brand-05: var(--wa-color-yellow-05);--wa-color-brand: var(--wa-color-yellow);--wa-color-brand-on: var(--wa-color-yellow-on)}.wa-brand-green{--wa-color-brand-95: var(--wa-color-green-95);--wa-color-brand-90: var(--wa-color-green-90);--wa-color-brand-80: var(--wa-color-green-80);--wa-color-brand-70: var(--wa-color-green-70);--wa-color-brand-60: var(--wa-color-green-60);--wa-color-brand-50: var(--wa-color-green-50);--wa-color-brand-40: var(--wa-color-green-40);--wa-color-brand-30: var(--wa-color-green-30);--wa-color-brand-20: var(--wa-color-green-20);--wa-color-brand-10: var(--wa-color-green-10);--wa-color-brand-05: var(--wa-color-green-05);--wa-color-brand: var(--wa-color-green);--wa-color-brand-on: var(--wa-color-green-on)}.wa-brand-cyan{--wa-color-brand-95: var(--wa-color-cyan-95);--wa-color-brand-90: var(--wa-color-cyan-90);--wa-color-brand-80: var(--wa-color-cyan-80);--wa-color-brand-70: var(--wa-color-cyan-70);--wa-color-brand-60: var(--wa-color-cyan-60);--wa-color-brand-50: var(--wa-color-cyan-50);--wa-color-brand-40: var(--wa-color-cyan-40);--wa-color-brand-30: var(--wa-color-cyan-30);--wa-color-brand-20: var(--wa-color-cyan-20);--wa-color-brand-10: var(--wa-color-cyan-10);--wa-color-brand-05: var(--wa-color-cyan-05);--wa-color-brand: var(--wa-color-cyan);--wa-color-brand-on: var(--wa-color-cyan-on)}.wa-brand-indigo{--wa-color-brand-95: var(--wa-color-indigo-95);--wa-color-brand-90: var(--wa-color-indigo-90);--wa-color-brand-80: var(--wa-color-indigo-80);--wa-color-brand-70: var(--wa-color-indigo-70);--wa-color-brand-60: var(--wa-color-indigo-60);--wa-color-brand-50: var(--wa-color-indigo-50);--wa-color-brand-40: var(--wa-color-indigo-40);--wa-color-brand-30: var(--wa-color-indigo-30);--wa-color-brand-20: var(--wa-color-indigo-20);--wa-color-brand-10: var(--wa-color-indigo-10);--wa-color-brand-05: var(--wa-color-indigo-05);--wa-color-brand: var(--wa-color-indigo);--wa-color-brand-on: var(--wa-color-indigo-on)}.wa-brand-purple{--wa-color-brand-95: var(--wa-color-purple-95);--wa-color-brand-90: var(--wa-color-purple-90);--wa-color-brand-80: var(--wa-color-purple-80);--wa-color-brand-70: var(--wa-color-purple-70);--wa-color-brand-60: var(--wa-color-purple-60);--wa-color-brand-50: var(--wa-color-purple-50);--wa-color-brand-40: var(--wa-color-purple-40);--wa-color-brand-30: var(--wa-color-purple-30);--wa-color-brand-20: var(--wa-color-purple-20);--wa-color-brand-10: var(--wa-color-purple-10);--wa-color-brand-05: var(--wa-color-purple-05);--wa-color-brand: var(--wa-color-purple);--wa-color-brand-on: var(--wa-color-purple-on)}.wa-brand-pink{--wa-color-brand-95: var(--wa-color-pink-95);--wa-color-brand-90: var(--wa-color-pink-90);--wa-color-brand-80: var(--wa-color-pink-80);--wa-color-brand-70: var(--wa-color-pink-70);--wa-color-brand-60: var(--wa-color-pink-60);--wa-color-brand-50: var(--wa-color-pink-50);--wa-color-brand-40: var(--wa-color-pink-40);--wa-color-brand-30: var(--wa-color-pink-30);--wa-color-brand-20: var(--wa-color-pink-20);--wa-color-brand-10: var(--wa-color-pink-10);--wa-color-brand-05: var(--wa-color-pink-05);--wa-color-brand: var(--wa-color-pink);--wa-color-brand-on: var(--wa-color-pink-on)}.wa-brand-gray{--wa-color-brand-95: var(--wa-color-gray-95);--wa-color-brand-90: var(--wa-color-gray-90);--wa-color-brand-80: var(--wa-color-gray-80);--wa-color-brand-70: var(--wa-color-gray-70);--wa-color-brand-60: var(--wa-color-gray-60);--wa-color-brand-50: var(--wa-color-gray-50);--wa-color-brand-40: var(--wa-color-gray-40);--wa-color-brand-30: var(--wa-color-gray-30);--wa-color-brand-20: var(--wa-color-gray-20);--wa-color-brand-10: var(--wa-color-gray-10);--wa-color-brand-05: var(--wa-color-gray-05);--wa-color-brand: var(--wa-color-gray);--wa-color-brand-on: var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-neutral-gray{--wa-color-neutral-95: var(--wa-color-gray-95);--wa-color-neutral-90: var(--wa-color-gray-90);--wa-color-neutral-80: var(--wa-color-gray-80);--wa-color-neutral-70: var(--wa-color-gray-70);--wa-color-neutral-60: var(--wa-color-gray-60);--wa-color-neutral-50: var(--wa-color-gray-50);--wa-color-neutral-40: var(--wa-color-gray-40);--wa-color-neutral-30: var(--wa-color-gray-30);--wa-color-neutral-20: var(--wa-color-gray-20);--wa-color-neutral-10: var(--wa-color-gray-10);--wa-color-neutral-05: var(--wa-color-gray-05);--wa-color-neutral: var(--wa-color-gray);--wa-color-neutral-on: var(--wa-color-gray-on)}.wa-neutral-red{--wa-color-neutral-95: var(--wa-color-red-95);--wa-color-neutral-90: var(--wa-color-red-90);--wa-color-neutral-80: var(--wa-color-red-80);--wa-color-neutral-70: var(--wa-color-red-70);--wa-color-neutral-60: var(--wa-color-red-60);--wa-color-neutral-50: var(--wa-color-red-50);--wa-color-neutral-40: var(--wa-color-red-40);--wa-color-neutral-30: var(--wa-color-red-30);--wa-color-neutral-20: var(--wa-color-red-20);--wa-color-neutral-10: var(--wa-color-red-10);--wa-color-neutral-05: var(--wa-color-red-05);--wa-color-neutral: var(--wa-color-red);--wa-color-neutral-on: var(--wa-color-red-on)}.wa-neutral-orange{--wa-color-neutral-95: var(--wa-color-orange-95);--wa-color-neutral-90: var(--wa-color-orange-90);--wa-color-neutral-80: var(--wa-color-orange-80);--wa-color-neutral-70: var(--wa-color-orange-70);--wa-color-neutral-60: var(--wa-color-orange-60);--wa-color-neutral-50: var(--wa-color-orange-50);--wa-color-neutral-40: var(--wa-color-orange-40);--wa-color-neutral-30: var(--wa-color-orange-30);--wa-color-neutral-20: var(--wa-color-orange-20);--wa-color-neutral-10: var(--wa-color-orange-10);--wa-color-neutral-05: var(--wa-color-orange-05);--wa-color-neutral: var(--wa-color-orange);--wa-color-neutral-on: var(--wa-color-orange-on)}.wa-neutral-yellow{--wa-color-neutral-95: var(--wa-color-yellow-95);--wa-color-neutral-90: var(--wa-color-yellow-90);--wa-color-neutral-80: var(--wa-color-yellow-80);--wa-color-neutral-70: var(--wa-color-yellow-70);--wa-color-neutral-60: var(--wa-color-yellow-60);--wa-color-neutral-50: var(--wa-color-yellow-50);--wa-color-neutral-40: var(--wa-color-yellow-40);--wa-color-neutral-30: var(--wa-color-yellow-30);--wa-color-neutral-20: var(--wa-color-yellow-20);--wa-color-neutral-10: var(--wa-color-yellow-10);--wa-color-neutral-05: var(--wa-color-yellow-05);--wa-color-neutral: var(--wa-color-yellow);--wa-color-neutral-on: var(--wa-color-yellow-on)}.wa-neutral-green{--wa-color-neutral-95: var(--wa-color-green-95);--wa-color-neutral-90: var(--wa-color-green-90);--wa-color-neutral-80: var(--wa-color-green-80);--wa-color-neutral-70: var(--wa-color-green-70);--wa-color-neutral-60: var(--wa-color-green-60);--wa-color-neutral-50: var(--wa-color-green-50);--wa-color-neutral-40: var(--wa-color-green-40);--wa-color-neutral-30: var(--wa-color-green-30);--wa-color-neutral-20: var(--wa-color-green-20);--wa-color-neutral-10: var(--wa-color-green-10);--wa-color-neutral-05: var(--wa-color-green-05);--wa-color-neutral: var(--wa-color-green);--wa-color-neutral-on: var(--wa-color-green-on)}.wa-neutral-cyan{--wa-color-neutral-95: var(--wa-color-cyan-95);--wa-color-neutral-90: var(--wa-color-cyan-90);--wa-color-neutral-80: var(--wa-color-cyan-80);--wa-color-neutral-70: var(--wa-color-cyan-70);--wa-color-neutral-60: var(--wa-color-cyan-60);--wa-color-neutral-50: var(--wa-color-cyan-50);--wa-color-neutral-40: var(--wa-color-cyan-40);--wa-color-neutral-30: var(--wa-color-cyan-30);--wa-color-neutral-20: var(--wa-color-cyan-20);--wa-color-neutral-10: var(--wa-color-cyan-10);--wa-color-neutral-05: var(--wa-color-cyan-05);--wa-color-neutral: var(--wa-color-cyan);--wa-color-neutral-on: var(--wa-color-cyan-on)}.wa-neutral-blue{--wa-color-neutral-95: var(--wa-color-blue-95);--wa-color-neutral-90: var(--wa-color-blue-90);--wa-color-neutral-80: var(--wa-color-blue-80);--wa-color-neutral-70: var(--wa-color-blue-70);--wa-color-neutral-60: var(--wa-color-blue-60);--wa-color-neutral-50: var(--wa-color-blue-50);--wa-color-neutral-40: var(--wa-color-blue-40);--wa-color-neutral-30: var(--wa-color-blue-30);--wa-color-neutral-20: var(--wa-color-blue-20);--wa-color-neutral-10: var(--wa-color-blue-10);--wa-color-neutral-05: var(--wa-color-blue-05);--wa-color-neutral: var(--wa-color-blue);--wa-color-neutral-on: var(--wa-color-blue-on)}.wa-neutral-indigo{--wa-color-neutral-95: var(--wa-color-indigo-95);--wa-color-neutral-90: var(--wa-color-indigo-90);--wa-color-neutral-80: var(--wa-color-indigo-80);--wa-color-neutral-70: var(--wa-color-indigo-70);--wa-color-neutral-60: var(--wa-color-indigo-60);--wa-color-neutral-50: var(--wa-color-indigo-50);--wa-color-neutral-40: var(--wa-color-indigo-40);--wa-color-neutral-30: var(--wa-color-indigo-30);--wa-color-neutral-20: var(--wa-color-indigo-20);--wa-color-neutral-10: var(--wa-color-indigo-10);--wa-color-neutral-05: var(--wa-color-indigo-05);--wa-color-neutral: var(--wa-color-indigo);--wa-color-neutral-on: var(--wa-color-indigo-on)}.wa-neutral-purple{--wa-color-neutral-95: var(--wa-color-purple-95);--wa-color-neutral-90: var(--wa-color-purple-90);--wa-color-neutral-80: var(--wa-color-purple-80);--wa-color-neutral-70: var(--wa-color-purple-70);--wa-color-neutral-60: var(--wa-color-purple-60);--wa-color-neutral-50: var(--wa-color-purple-50);--wa-color-neutral-40: var(--wa-color-purple-40);--wa-color-neutral-30: var(--wa-color-purple-30);--wa-color-neutral-20: var(--wa-color-purple-20);--wa-color-neutral-10: var(--wa-color-purple-10);--wa-color-neutral-05: var(--wa-color-purple-05);--wa-color-neutral: var(--wa-color-purple);--wa-color-neutral-on: var(--wa-color-purple-on)}.wa-neutral-pink{--wa-color-neutral-95: var(--wa-color-pink-95);--wa-color-neutral-90: var(--wa-color-pink-90);--wa-color-neutral-80: var(--wa-color-pink-80);--wa-color-neutral-70: var(--wa-color-pink-70);--wa-color-neutral-60: var(--wa-color-pink-60);--wa-color-neutral-50: var(--wa-color-pink-50);--wa-color-neutral-40: var(--wa-color-pink-40);--wa-color-neutral-30: var(--wa-color-pink-30);--wa-color-neutral-20: var(--wa-color-pink-20);--wa-color-neutral-10: var(--wa-color-pink-10);--wa-color-neutral-05: var(--wa-color-pink-05);--wa-color-neutral: var(--wa-color-pink);--wa-color-neutral-on: var(--wa-color-pink-on)}}@layer wa-color-variant{:where(:root),.wa-success-green{--wa-color-success-95: var(--wa-color-green-95);--wa-color-success-90: var(--wa-color-green-90);--wa-color-success-80: var(--wa-color-green-80);--wa-color-success-70: var(--wa-color-green-70);--wa-color-success-60: var(--wa-color-green-60);--wa-color-success-50: var(--wa-color-green-50);--wa-color-success-40: var(--wa-color-green-40);--wa-color-success-30: var(--wa-color-green-30);--wa-color-success-20: var(--wa-color-green-20);--wa-color-success-10: var(--wa-color-green-10);--wa-color-success-05: var(--wa-color-green-05);--wa-color-success: var(--wa-color-green);--wa-color-success-on: var(--wa-color-green-on)}.wa-success-red{--wa-color-success-95: var(--wa-color-red-95);--wa-color-success-90: var(--wa-color-red-90);--wa-color-success-80: var(--wa-color-red-80);--wa-color-success-70: var(--wa-color-red-70);--wa-color-success-60: var(--wa-color-red-60);--wa-color-success-50: var(--wa-color-red-50);--wa-color-success-40: var(--wa-color-red-40);--wa-color-success-30: var(--wa-color-red-30);--wa-color-success-20: var(--wa-color-red-20);--wa-color-success-10: var(--wa-color-red-10);--wa-color-success-05: var(--wa-color-red-05);--wa-color-success: var(--wa-color-red);--wa-color-success-on: var(--wa-color-red-on)}.wa-success-orange{--wa-color-success-95: var(--wa-color-orange-95);--wa-color-success-90: var(--wa-color-orange-90);--wa-color-success-80: var(--wa-color-orange-80);--wa-color-success-70: var(--wa-color-orange-70);--wa-color-success-60: var(--wa-color-orange-60);--wa-color-success-50: var(--wa-color-orange-50);--wa-color-success-40: var(--wa-color-orange-40);--wa-color-success-30: var(--wa-color-orange-30);--wa-color-success-20: var(--wa-color-orange-20);--wa-color-success-10: var(--wa-color-orange-10);--wa-color-success-05: var(--wa-color-orange-05);--wa-color-success: var(--wa-color-orange);--wa-color-success-on: var(--wa-color-orange-on)}.wa-success-yellow{--wa-color-success-95: var(--wa-color-yellow-95);--wa-color-success-90: var(--wa-color-yellow-90);--wa-color-success-80: var(--wa-color-yellow-80);--wa-color-success-70: var(--wa-color-yellow-70);--wa-color-success-60: var(--wa-color-yellow-60);--wa-color-success-50: var(--wa-color-yellow-50);--wa-color-success-40: var(--wa-color-yellow-40);--wa-color-success-30: var(--wa-color-yellow-30);--wa-color-success-20: var(--wa-color-yellow-20);--wa-color-success-10: var(--wa-color-yellow-10);--wa-color-success-05: var(--wa-color-yellow-05);--wa-color-success: var(--wa-color-yellow);--wa-color-success-on: var(--wa-color-yellow-on)}.wa-success-cyan{--wa-color-success-95: var(--wa-color-cyan-95);--wa-color-success-90: var(--wa-color-cyan-90);--wa-color-success-80: var(--wa-color-cyan-80);--wa-color-success-70: var(--wa-color-cyan-70);--wa-color-success-60: var(--wa-color-cyan-60);--wa-color-success-50: var(--wa-color-cyan-50);--wa-color-success-40: var(--wa-color-cyan-40);--wa-color-success-30: var(--wa-color-cyan-30);--wa-color-success-20: var(--wa-color-cyan-20);--wa-color-success-10: var(--wa-color-cyan-10);--wa-color-success-05: var(--wa-color-cyan-05);--wa-color-success: var(--wa-color-cyan);--wa-color-success-on: var(--wa-color-cyan-on)}.wa-success-blue{--wa-color-success-95: var(--wa-color-blue-95);--wa-color-success-90: var(--wa-color-blue-90);--wa-color-success-80: var(--wa-color-blue-80);--wa-color-success-70: var(--wa-color-blue-70);--wa-color-success-60: var(--wa-color-blue-60);--wa-color-success-50: var(--wa-color-blue-50);--wa-color-success-40: var(--wa-color-blue-40);--wa-color-success-30: var(--wa-color-blue-30);--wa-color-success-20: var(--wa-color-blue-20);--wa-color-success-10: var(--wa-color-blue-10);--wa-color-success-05: var(--wa-color-blue-05);--wa-color-success: var(--wa-color-blue);--wa-color-success-on: var(--wa-color-blue-on)}.wa-success-indigo{--wa-color-success-95: var(--wa-color-indigo-95);--wa-color-success-90: var(--wa-color-indigo-90);--wa-color-success-80: var(--wa-color-indigo-80);--wa-color-success-70: var(--wa-color-indigo-70);--wa-color-success-60: var(--wa-color-indigo-60);--wa-color-success-50: var(--wa-color-indigo-50);--wa-color-success-40: var(--wa-color-indigo-40);--wa-color-success-30: var(--wa-color-indigo-30);--wa-color-success-20: var(--wa-color-indigo-20);--wa-color-success-10: var(--wa-color-indigo-10);--wa-color-success-05: var(--wa-color-indigo-05);--wa-color-success: var(--wa-color-indigo);--wa-color-success-on: var(--wa-color-indigo-on)}.wa-success-purple{--wa-color-success-95: var(--wa-color-purple-95);--wa-color-success-90: var(--wa-color-purple-90);--wa-color-success-80: var(--wa-color-purple-80);--wa-color-success-70: var(--wa-color-purple-70);--wa-color-success-60: var(--wa-color-purple-60);--wa-color-success-50: var(--wa-color-purple-50);--wa-color-success-40: var(--wa-color-purple-40);--wa-color-success-30: var(--wa-color-purple-30);--wa-color-success-20: var(--wa-color-purple-20);--wa-color-success-10: var(--wa-color-purple-10);--wa-color-success-05: var(--wa-color-purple-05);--wa-color-success: var(--wa-color-purple);--wa-color-success-on: var(--wa-color-purple-on)}.wa-success-pink{--wa-color-success-95: var(--wa-color-pink-95);--wa-color-success-90: var(--wa-color-pink-90);--wa-color-success-80: var(--wa-color-pink-80);--wa-color-success-70: var(--wa-color-pink-70);--wa-color-success-60: var(--wa-color-pink-60);--wa-color-success-50: var(--wa-color-pink-50);--wa-color-success-40: var(--wa-color-pink-40);--wa-color-success-30: var(--wa-color-pink-30);--wa-color-success-20: var(--wa-color-pink-20);--wa-color-success-10: var(--wa-color-pink-10);--wa-color-success-05: var(--wa-color-pink-05);--wa-color-success: var(--wa-color-pink);--wa-color-success-on: var(--wa-color-pink-on)}.wa-success-gray{--wa-color-success-95: var(--wa-color-gray-95);--wa-color-success-90: var(--wa-color-gray-90);--wa-color-success-80: var(--wa-color-gray-80);--wa-color-success-70: var(--wa-color-gray-70);--wa-color-success-60: var(--wa-color-gray-60);--wa-color-success-50: var(--wa-color-gray-50);--wa-color-success-40: var(--wa-color-gray-40);--wa-color-success-30: var(--wa-color-gray-30);--wa-color-success-20: var(--wa-color-gray-20);--wa-color-success-10: var(--wa-color-gray-10);--wa-color-success-05: var(--wa-color-gray-05);--wa-color-success: var(--wa-color-gray);--wa-color-success-on: var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-warning-yellow{--wa-color-warning-95: var(--wa-color-yellow-95);--wa-color-warning-90: var(--wa-color-yellow-90);--wa-color-warning-80: var(--wa-color-yellow-80);--wa-color-warning-70: var(--wa-color-yellow-70);--wa-color-warning-60: var(--wa-color-yellow-60);--wa-color-warning-50: var(--wa-color-yellow-50);--wa-color-warning-40: var(--wa-color-yellow-40);--wa-color-warning-30: var(--wa-color-yellow-30);--wa-color-warning-20: var(--wa-color-yellow-20);--wa-color-warning-10: var(--wa-color-yellow-10);--wa-color-warning-05: var(--wa-color-yellow-05);--wa-color-warning: var(--wa-color-yellow);--wa-color-warning-on: var(--wa-color-yellow-on)}.wa-warning-red{--wa-color-warning-95: var(--wa-color-red-95);--wa-color-warning-90: var(--wa-color-red-90);--wa-color-warning-80: var(--wa-color-red-80);--wa-color-warning-70: var(--wa-color-red-70);--wa-color-warning-60: var(--wa-color-red-60);--wa-color-warning-50: var(--wa-color-red-50);--wa-color-warning-40: var(--wa-color-red-40);--wa-color-warning-30: var(--wa-color-red-30);--wa-color-warning-20: var(--wa-color-red-20);--wa-color-warning-10: var(--wa-color-red-10);--wa-color-warning-05: var(--wa-color-red-05);--wa-color-warning: var(--wa-color-red);--wa-color-warning-on: var(--wa-color-red-on)}.wa-warning-orange{--wa-color-warning-95: var(--wa-color-orange-95);--wa-color-warning-90: var(--wa-color-orange-90);--wa-color-warning-80: var(--wa-color-orange-80);--wa-color-warning-70: var(--wa-color-orange-70);--wa-color-warning-60: var(--wa-color-orange-60);--wa-color-warning-50: var(--wa-color-orange-50);--wa-color-warning-40: var(--wa-color-orange-40);--wa-color-warning-30: var(--wa-color-orange-30);--wa-color-warning-20: var(--wa-color-orange-20);--wa-color-warning-10: var(--wa-color-orange-10);--wa-color-warning-05: var(--wa-color-orange-05);--wa-color-warning: var(--wa-color-orange);--wa-color-warning-on: var(--wa-color-orange-on)}.wa-warning-green{--wa-color-warning-95: var(--wa-color-green-95);--wa-color-warning-90: var(--wa-color-green-90);--wa-color-warning-80: var(--wa-color-green-80);--wa-color-warning-70: var(--wa-color-green-70);--wa-color-warning-60: var(--wa-color-green-60);--wa-color-warning-50: var(--wa-color-green-50);--wa-color-warning-40: var(--wa-color-green-40);--wa-color-warning-30: var(--wa-color-green-30);--wa-color-warning-20: var(--wa-color-green-20);--wa-color-warning-10: var(--wa-color-green-10);--wa-color-warning-05: var(--wa-color-green-05);--wa-color-warning: var(--wa-color-green);--wa-color-warning-on: var(--wa-color-green-on)}.wa-warning-cyan{--wa-color-warning-95: var(--wa-color-cyan-95);--wa-color-warning-90: var(--wa-color-cyan-90);--wa-color-warning-80: var(--wa-color-cyan-80);--wa-color-warning-70: var(--wa-color-cyan-70);--wa-color-warning-60: var(--wa-color-cyan-60);--wa-color-warning-50: var(--wa-color-cyan-50);--wa-color-warning-40: var(--wa-color-cyan-40);--wa-color-warning-30: var(--wa-color-cyan-30);--wa-color-warning-20: var(--wa-color-cyan-20);--wa-color-warning-10: var(--wa-color-cyan-10);--wa-color-warning-05: var(--wa-color-cyan-05);--wa-color-warning: var(--wa-color-cyan);--wa-color-warning-on: var(--wa-color-cyan-on)}.wa-warning-blue{--wa-color-warning-95: var(--wa-color-blue-95);--wa-color-warning-90: var(--wa-color-blue-90);--wa-color-warning-80: var(--wa-color-blue-80);--wa-color-warning-70: var(--wa-color-blue-70);--wa-color-warning-60: var(--wa-color-blue-60);--wa-color-warning-50: var(--wa-color-blue-50);--wa-color-warning-40: var(--wa-color-blue-40);--wa-color-warning-30: var(--wa-color-blue-30);--wa-color-warning-20: var(--wa-color-blue-20);--wa-color-warning-10: var(--wa-color-blue-10);--wa-color-warning-05: var(--wa-color-blue-05);--wa-color-warning: var(--wa-color-blue);--wa-color-warning-on: var(--wa-color-blue-on)}.wa-warning-indigo{--wa-color-warning-95: var(--wa-color-indigo-95);--wa-color-warning-90: var(--wa-color-indigo-90);--wa-color-warning-80: var(--wa-color-indigo-80);--wa-color-warning-70: var(--wa-color-indigo-70);--wa-color-warning-60: var(--wa-color-indigo-60);--wa-color-warning-50: var(--wa-color-indigo-50);--wa-color-warning-40: var(--wa-color-indigo-40);--wa-color-warning-30: var(--wa-color-indigo-30);--wa-color-warning-20: var(--wa-color-indigo-20);--wa-color-warning-10: var(--wa-color-indigo-10);--wa-color-warning-05: var(--wa-color-indigo-05);--wa-color-warning: var(--wa-color-indigo);--wa-color-warning-on: var(--wa-color-indigo-on)}.wa-warning-purple{--wa-color-warning-95: var(--wa-color-purple-95);--wa-color-warning-90: var(--wa-color-purple-90);--wa-color-warning-80: var(--wa-color-purple-80);--wa-color-warning-70: var(--wa-color-purple-70);--wa-color-warning-60: var(--wa-color-purple-60);--wa-color-warning-50: var(--wa-color-purple-50);--wa-color-warning-40: var(--wa-color-purple-40);--wa-color-warning-30: var(--wa-color-purple-30);--wa-color-warning-20: var(--wa-color-purple-20);--wa-color-warning-10: var(--wa-color-purple-10);--wa-color-warning-05: var(--wa-color-purple-05);--wa-color-warning: var(--wa-color-purple);--wa-color-warning-on: var(--wa-color-purple-on)}.wa-warning-pink{--wa-color-warning-95: var(--wa-color-pink-95);--wa-color-warning-90: var(--wa-color-pink-90);--wa-color-warning-80: var(--wa-color-pink-80);--wa-color-warning-70: var(--wa-color-pink-70);--wa-color-warning-60: var(--wa-color-pink-60);--wa-color-warning-50: var(--wa-color-pink-50);--wa-color-warning-40: var(--wa-color-pink-40);--wa-color-warning-30: var(--wa-color-pink-30);--wa-color-warning-20: var(--wa-color-pink-20);--wa-color-warning-10: var(--wa-color-pink-10);--wa-color-warning-05: var(--wa-color-pink-05);--wa-color-warning: var(--wa-color-pink);--wa-color-warning-on: var(--wa-color-pink-on)}.wa-warning-gray{--wa-color-warning-95: var(--wa-color-gray-95);--wa-color-warning-90: var(--wa-color-gray-90);--wa-color-warning-80: var(--wa-color-gray-80);--wa-color-warning-70: var(--wa-color-gray-70);--wa-color-warning-60: var(--wa-color-gray-60);--wa-color-warning-50: var(--wa-color-gray-50);--wa-color-warning-40: var(--wa-color-gray-40);--wa-color-warning-30: var(--wa-color-gray-30);--wa-color-warning-20: var(--wa-color-gray-20);--wa-color-warning-10: var(--wa-color-gray-10);--wa-color-warning-05: var(--wa-color-gray-05);--wa-color-warning: var(--wa-color-gray);--wa-color-warning-on: var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-danger-red{--wa-color-danger-95: var(--wa-color-red-95);--wa-color-danger-90: var(--wa-color-red-90);--wa-color-danger-80: var(--wa-color-red-80);--wa-color-danger-70: var(--wa-color-red-70);--wa-color-danger-60: var(--wa-color-red-60);--wa-color-danger-50: var(--wa-color-red-50);--wa-color-danger-40: var(--wa-color-red-40);--wa-color-danger-30: var(--wa-color-red-30);--wa-color-danger-20: var(--wa-color-red-20);--wa-color-danger-10: var(--wa-color-red-10);--wa-color-danger-05: var(--wa-color-red-05);--wa-color-danger: var(--wa-color-red);--wa-color-danger-on: var(--wa-color-red-on)}.wa-danger-orange{--wa-color-danger-95: var(--wa-color-orange-95);--wa-color-danger-90: var(--wa-color-orange-90);--wa-color-danger-80: var(--wa-color-orange-80);--wa-color-danger-70: var(--wa-color-orange-70);--wa-color-danger-60: var(--wa-color-orange-60);--wa-color-danger-50: var(--wa-color-orange-50);--wa-color-danger-40: var(--wa-color-orange-40);--wa-color-danger-30: var(--wa-color-orange-30);--wa-color-danger-20: var(--wa-color-orange-20);--wa-color-danger-10: var(--wa-color-orange-10);--wa-color-danger-05: var(--wa-color-orange-05);--wa-color-danger: var(--wa-color-orange);--wa-color-danger-on: var(--wa-color-orange-on)}.wa-danger-yellow{--wa-color-danger-95: var(--wa-color-yellow-95);--wa-color-danger-90: var(--wa-color-yellow-90);--wa-color-danger-80: var(--wa-color-yellow-80);--wa-color-danger-70: var(--wa-color-yellow-70);--wa-color-danger-60: var(--wa-color-yellow-60);--wa-color-danger-50: var(--wa-color-yellow-50);--wa-color-danger-40: var(--wa-color-yellow-40);--wa-color-danger-30: var(--wa-color-yellow-30);--wa-color-danger-20: var(--wa-color-yellow-20);--wa-color-danger-10: var(--wa-color-yellow-10);--wa-color-danger-05: var(--wa-color-yellow-05);--wa-color-danger: var(--wa-color-yellow);--wa-color-danger-on: var(--wa-color-yellow-on)}.wa-danger-green{--wa-color-danger-95: var(--wa-color-green-95);--wa-color-danger-90: var(--wa-color-green-90);--wa-color-danger-80: var(--wa-color-green-80);--wa-color-danger-70: var(--wa-color-green-70);--wa-color-danger-60: var(--wa-color-green-60);--wa-color-danger-50: var(--wa-color-green-50);--wa-color-danger-40: var(--wa-color-green-40);--wa-color-danger-30: var(--wa-color-green-30);--wa-color-danger-20: var(--wa-color-green-20);--wa-color-danger-10: var(--wa-color-green-10);--wa-color-danger-05: var(--wa-color-green-05);--wa-color-danger: var(--wa-color-green);--wa-color-danger-on: var(--wa-color-green-on)}.wa-danger-cyan{--wa-color-danger-95: var(--wa-color-cyan-95);--wa-color-danger-90: var(--wa-color-cyan-90);--wa-color-danger-80: var(--wa-color-cyan-80);--wa-color-danger-70: var(--wa-color-cyan-70);--wa-color-danger-60: var(--wa-color-cyan-60);--wa-color-danger-50: var(--wa-color-cyan-50);--wa-color-danger-40: var(--wa-color-cyan-40);--wa-color-danger-30: var(--wa-color-cyan-30);--wa-color-danger-20: var(--wa-color-cyan-20);--wa-color-danger-10: var(--wa-color-cyan-10);--wa-color-danger-05: var(--wa-color-cyan-05);--wa-color-danger: var(--wa-color-cyan);--wa-color-danger-on: var(--wa-color-cyan-on)}.wa-danger-blue{--wa-color-danger-95: var(--wa-color-blue-95);--wa-color-danger-90: var(--wa-color-blue-90);--wa-color-danger-80: var(--wa-color-blue-80);--wa-color-danger-70: var(--wa-color-blue-70);--wa-color-danger-60: var(--wa-color-blue-60);--wa-color-danger-50: var(--wa-color-blue-50);--wa-color-danger-40: var(--wa-color-blue-40);--wa-color-danger-30: var(--wa-color-blue-30);--wa-color-danger-20: var(--wa-color-blue-20);--wa-color-danger-10: var(--wa-color-blue-10);--wa-color-danger-05: var(--wa-color-blue-05);--wa-color-danger: var(--wa-color-blue);--wa-color-danger-on: var(--wa-color-blue-on)}.wa-danger-indigo{--wa-color-danger-95: var(--wa-color-indigo-95);--wa-color-danger-90: var(--wa-color-indigo-90);--wa-color-danger-80: var(--wa-color-indigo-80);--wa-color-danger-70: var(--wa-color-indigo-70);--wa-color-danger-60: var(--wa-color-indigo-60);--wa-color-danger-50: var(--wa-color-indigo-50);--wa-color-danger-40: var(--wa-color-indigo-40);--wa-color-danger-30: var(--wa-color-indigo-30);--wa-color-danger-20: var(--wa-color-indigo-20);--wa-color-danger-10: var(--wa-color-indigo-10);--wa-color-danger-05: var(--wa-color-indigo-05);--wa-color-danger: var(--wa-color-indigo);--wa-color-danger-on: var(--wa-color-indigo-on)}.wa-danger-purple{--wa-color-danger-95: var(--wa-color-purple-95);--wa-color-danger-90: var(--wa-color-purple-90);--wa-color-danger-80: var(--wa-color-purple-80);--wa-color-danger-70: var(--wa-color-purple-70);--wa-color-danger-60: var(--wa-color-purple-60);--wa-color-danger-50: var(--wa-color-purple-50);--wa-color-danger-40: var(--wa-color-purple-40);--wa-color-danger-30: var(--wa-color-purple-30);--wa-color-danger-20: var(--wa-color-purple-20);--wa-color-danger-10: var(--wa-color-purple-10);--wa-color-danger-05: var(--wa-color-purple-05);--wa-color-danger: var(--wa-color-purple);--wa-color-danger-on: var(--wa-color-purple-on)}.wa-danger-pink{--wa-color-danger-95: var(--wa-color-pink-95);--wa-color-danger-90: var(--wa-color-pink-90);--wa-color-danger-80: var(--wa-color-pink-80);--wa-color-danger-70: var(--wa-color-pink-70);--wa-color-danger-60: var(--wa-color-pink-60);--wa-color-danger-50: var(--wa-color-pink-50);--wa-color-danger-40: var(--wa-color-pink-40);--wa-color-danger-30: var(--wa-color-pink-30);--wa-color-danger-20: var(--wa-color-pink-20);--wa-color-danger-10: var(--wa-color-pink-10);--wa-color-danger-05: var(--wa-color-pink-05);--wa-color-danger: var(--wa-color-pink);--wa-color-danger-on: var(--wa-color-pink-on)}.wa-danger-gray{--wa-color-danger-95: var(--wa-color-gray-95);--wa-color-danger-90: var(--wa-color-gray-90);--wa-color-danger-80: var(--wa-color-gray-80);--wa-color-danger-70: var(--wa-color-gray-70);--wa-color-danger-60: var(--wa-color-gray-60);--wa-color-danger-50: var(--wa-color-gray-50);--wa-color-danger-40: var(--wa-color-gray-40);--wa-color-danger-30: var(--wa-color-gray-30);--wa-color-danger-20: var(--wa-color-gray-20);--wa-color-danger-10: var(--wa-color-gray-10);--wa-color-danger-05: var(--wa-color-gray-05);--wa-color-danger: var(--wa-color-gray);--wa-color-danger-on: var(--wa-color-gray-on)}}@layer wa-theme{:where(:root),.wa-theme-default,.wa-light,.wa-dark .wa-invert,.wa-light .wa-theme-default,.wa-dark .wa-theme-default.wa-invert,.wa-dark .wa-theme-default .wa-invert{color-scheme:light;color:var(--wa-color-text-normal);--wa-color-surface-raised: white;--wa-color-surface-default: white;--wa-color-surface-lowered: var(--wa-color-neutral-95);--wa-color-surface-border: var(--wa-color-neutral-90);--wa-color-text-normal: var(--wa-color-neutral-10);--wa-color-text-quiet: var(--wa-color-neutral-40);--wa-color-text-link: var(--wa-color-brand-40);--wa-color-overlay-modal: color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);--wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);--wa-color-shadow: color-mix( in oklab, var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%), transparent );--wa-color-focus: var(--wa-color-brand-60);--wa-color-mix-hover: black 10%;--wa-color-mix-active: black 20%;--wa-color-brand-fill-quiet: var(--wa-color-brand-95);--wa-color-brand-fill-normal: var(--wa-color-brand-90);--wa-color-brand-fill-loud: var(--wa-color-brand-50);--wa-color-brand-border-quiet: var(--wa-color-brand-90);--wa-color-brand-border-normal: var(--wa-color-brand-80);--wa-color-brand-border-loud: var(--wa-color-brand-60);--wa-color-brand-on-quiet: var(--wa-color-brand-40);--wa-color-brand-on-normal: var(--wa-color-brand-30);--wa-color-brand-on-loud: white;--wa-color-success-fill-quiet: var(--wa-color-success-95);--wa-color-success-fill-normal: var(--wa-color-success-90);--wa-color-success-fill-loud: var(--wa-color-success-50);--wa-color-success-border-quiet: var(--wa-color-success-90);--wa-color-success-border-normal: var(--wa-color-success-80);--wa-color-success-border-loud: var(--wa-color-success-60);--wa-color-success-on-quiet: var(--wa-color-success-40);--wa-color-success-on-normal: var(--wa-color-success-30);--wa-color-success-on-loud: white;--wa-color-warning-fill-quiet: var(--wa-color-warning-95);--wa-color-warning-fill-normal: var(--wa-color-warning-90);--wa-color-warning-fill-loud: var(--wa-color-warning-50);--wa-color-warning-border-quiet: var(--wa-color-warning-90);--wa-color-warning-border-normal: var(--wa-color-warning-80);--wa-color-warning-border-loud: var(--wa-color-warning-60);--wa-color-warning-on-quiet: var(--wa-color-warning-40);--wa-color-warning-on-normal: var(--wa-color-warning-30);--wa-color-warning-on-loud: white;--wa-color-danger-fill-quiet: var(--wa-color-danger-95);--wa-color-danger-fill-normal: var(--wa-color-danger-90);--wa-color-danger-fill-loud: var(--wa-color-danger-50);--wa-color-danger-border-quiet: var(--wa-color-danger-90);--wa-color-danger-border-normal: var(--wa-color-danger-80);--wa-color-danger-border-loud: var(--wa-color-danger-60);--wa-color-danger-on-quiet: var(--wa-color-danger-40);--wa-color-danger-on-normal: var(--wa-color-danger-30);--wa-color-danger-on-loud: white;--wa-color-neutral-fill-quiet: var(--wa-color-neutral-95);--wa-color-neutral-fill-normal: var(--wa-color-neutral-90);--wa-color-neutral-fill-loud: var(--wa-color-neutral-20);--wa-color-neutral-border-quiet: var(--wa-color-neutral-90);--wa-color-neutral-border-normal: var(--wa-color-neutral-80);--wa-color-neutral-border-loud: var(--wa-color-neutral-60);--wa-color-neutral-on-quiet: var(--wa-color-neutral-40);--wa-color-neutral-on-normal: var(--wa-color-neutral-30);--wa-color-neutral-on-loud: white}.wa-dark,.wa-invert,.wa-dark .wa-theme-default,.wa-light .wa-theme-default.wa-invert,.wa-light .wa-theme-default .wa-invert{color-scheme:dark;color:var(--wa-color-text-normal);--wa-color-surface-raised: var(--wa-color-neutral-10);--wa-color-surface-default: var(--wa-color-neutral-05);--wa-color-surface-lowered: color-mix(in oklab, var(--wa-color-surface-default), black 20%);--wa-color-surface-border: var(--wa-color-neutral-20);--wa-color-text-normal: var(--wa-color-neutral-95);--wa-color-text-quiet: var(--wa-color-neutral-60);--wa-color-text-link: var(--wa-color-brand-70);--wa-color-overlay-modal: color-mix(in oklab, black 60%, transparent);--wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);--wa-color-shadow: color-mix( in oklab, var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%), transparent );--wa-color-focus: var(--wa-color-brand-60);--wa-color-mix-hover: black 8%;--wa-color-mix-active: black 16%;--wa-color-brand-fill-quiet: var(--wa-color-brand-10);--wa-color-brand-fill-normal: var(--wa-color-brand-20);--wa-color-brand-fill-loud: var(--wa-color-brand-50);--wa-color-brand-border-quiet: var(--wa-color-brand-20);--wa-color-brand-border-normal: var(--wa-color-brand-30);--wa-color-brand-border-loud: var(--wa-color-brand-40);--wa-color-brand-on-quiet: var(--wa-color-brand-60);--wa-color-brand-on-normal: var(--wa-color-brand-70);--wa-color-brand-on-loud: white;--wa-color-success-fill-quiet: var(--wa-color-success-10);--wa-color-success-fill-normal: var(--wa-color-success-20);--wa-color-success-fill-loud: var(--wa-color-success-50);--wa-color-success-border-quiet: var(--wa-color-success-20);--wa-color-success-border-normal: var(--wa-color-success-30);--wa-color-success-border-loud: var(--wa-color-success-40);--wa-color-success-on-quiet: var(--wa-color-success-60);--wa-color-success-on-normal: var(--wa-color-success-70);--wa-color-success-on-loud: white;--wa-color-warning-fill-quiet: var(--wa-color-warning-10);--wa-color-warning-fill-normal: var(--wa-color-warning-20);--wa-color-warning-fill-loud: var(--wa-color-warning-50);--wa-color-warning-border-quiet: var(--wa-color-warning-20);--wa-color-warning-border-normal: var(--wa-color-warning-30);--wa-color-warning-border-loud: var(--wa-color-warning-40);--wa-color-warning-on-quiet: var(--wa-color-warning-60);--wa-color-warning-on-normal: var(--wa-color-warning-70);--wa-color-warning-on-loud: white;--wa-color-danger-fill-quiet: var(--wa-color-danger-10);--wa-color-danger-fill-normal: var(--wa-color-danger-20);--wa-color-danger-fill-loud: var(--wa-color-danger-50);--wa-color-danger-border-quiet: var(--wa-color-danger-20);--wa-color-danger-border-normal: var(--wa-color-danger-30);--wa-color-danger-border-loud: var(--wa-color-danger-40);--wa-color-danger-on-quiet: var(--wa-color-danger-60);--wa-color-danger-on-normal: var(--wa-color-danger-70);--wa-color-danger-on-loud: white;--wa-color-neutral-fill-quiet: var(--wa-color-neutral-10);--wa-color-neutral-fill-normal: var(--wa-color-neutral-20);--wa-color-neutral-fill-loud: var(--wa-color-neutral-90);--wa-color-neutral-border-quiet: var(--wa-color-neutral-20);--wa-color-neutral-border-normal: var(--wa-color-neutral-30);--wa-color-neutral-border-loud: var(--wa-color-neutral-40);--wa-color-neutral-on-quiet: var(--wa-color-neutral-60);--wa-color-neutral-on-normal: var(--wa-color-neutral-70);--wa-color-neutral-on-loud: var(--wa-color-neutral-05)}:where(:root),.wa-theme-default,.wa-light,.wa-dark,.wa-invert{font-family:var(--wa-font-family-body);--wa-font-family-body: ui-sans-serif, system-ui, sans-serif;--wa-font-family-heading: var(--wa-font-family-body);--wa-font-family-code: ui-monospace, monospace;--wa-font-family-longform: ui-serif, serif;--wa-font-size-scale: 1;--wa-font-size-2xs: round(calc(var(--wa-font-size-xs) / 1.125), 1px);--wa-font-size-xs: round(calc(var(--wa-font-size-s) / 1.125), 1px);--wa-font-size-s: round(calc(var(--wa-font-size-m) / 1.125), 1px);--wa-font-size-m: calc(1rem * var(--wa-font-size-scale));--wa-font-size-l: round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px);--wa-font-size-xl: round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px);--wa-font-size-2xl: round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px);--wa-font-size-3xl: round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px);--wa-font-size-4xl: round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px);--wa-font-size-smaller: round(calc(1em / 1.125), 1px);--wa-font-size-larger: round(calc(1em * 1.125 * 1.125), 1px);--wa-font-weight-light: 300;--wa-font-weight-normal: 400;--wa-font-weight-semibold: 500;--wa-font-weight-bold: 600;--wa-font-weight-body: var(--wa-font-weight-normal);--wa-font-weight-heading: var(--wa-font-weight-bold);--wa-font-weight-code: var(--wa-font-weight-normal);--wa-font-weight-longform: var(--wa-font-weight-normal);--wa-font-weight-action: var(--wa-font-weight-semibold);--wa-line-height-condensed: 1.2;--wa-line-height-normal: 1.6;--wa-line-height-expanded: 2;--wa-link-decoration-default: underline color-mix(in oklab, currentColor 70%, transparent) dotted;--wa-link-decoration-hover: underline;--wa-space-scale: 1;--wa-space-3xs: calc(var(--wa-space-scale) * .125rem);--wa-space-2xs: calc(var(--wa-space-scale) * .25rem);--wa-space-xs: calc(var(--wa-space-scale) * .5rem);--wa-space-s: calc(var(--wa-space-scale) * .75rem);--wa-space-m: calc(var(--wa-space-scale) * 1rem);--wa-space-l: calc(var(--wa-space-scale) * 1.5rem);--wa-space-xl: calc(var(--wa-space-scale) * 2rem);--wa-space-2xl: calc(var(--wa-space-scale) * 2.5rem);--wa-space-3xl: calc(var(--wa-space-scale) * 3rem);--wa-space-4xl: calc(var(--wa-space-scale) * 4rem);--wa-content-spacing: var(--wa-space-l);--wa-border-style: solid;--wa-border-width-scale: 1;--wa-border-width-s: calc(var(--wa-border-width-scale) * .0625rem);--wa-border-width-m: calc(var(--wa-border-width-scale) * .125rem);--wa-border-width-l: calc(var(--wa-border-width-scale) * .1875rem);--wa-border-radius-scale: 1;--wa-border-radius-s: calc(var(--wa-border-radius-scale) * .1875rem);--wa-border-radius-m: calc(var(--wa-border-radius-scale) * .375rem);--wa-border-radius-l: calc(var(--wa-border-radius-scale) * .75rem);--wa-border-radius-pill: 9999px;--wa-border-radius-circle: 50%;--wa-border-radius-square: 0px;--wa-focus-ring-style: solid;--wa-focus-ring-width: .1875rem;--wa-focus-ring: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);--wa-focus-ring-offset: .0625rem;--wa-shadow-offset-x-scale: 0;--wa-shadow-offset-x-s: calc(var(--wa-shadow-offset-x-scale) * .125rem);--wa-shadow-offset-x-m: calc(var(--wa-shadow-offset-x-scale) * .25rem);--wa-shadow-offset-x-l: calc(var(--wa-shadow-offset-x-scale) * .5rem);--wa-shadow-offset-y-scale: 1;--wa-shadow-offset-y-s: calc(var(--wa-shadow-offset-y-scale) * .125rem);--wa-shadow-offset-y-m: calc(var(--wa-shadow-offset-y-scale) * .25rem);--wa-shadow-offset-y-l: calc(var(--wa-shadow-offset-y-scale) * .5rem);--wa-shadow-blur-scale: 1;--wa-shadow-blur-s: calc(var(--wa-shadow-blur-scale) * .125rem);--wa-shadow-blur-m: calc(var(--wa-shadow-blur-scale) * .25rem);--wa-shadow-blur-l: calc(var(--wa-shadow-blur-scale) * .5rem);--wa-shadow-spread-scale: -.5;--wa-shadow-spread-s: calc(var(--wa-shadow-spread-scale) * .125rem);--wa-shadow-spread-m: calc(var(--wa-shadow-spread-scale) * .25rem);--wa-shadow-spread-l: calc(var(--wa-shadow-spread-scale) * .5rem);--wa-shadow-s: var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s) var(--wa-shadow-spread-s) var(--wa-color-shadow);--wa-shadow-m: var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m) var(--wa-shadow-spread-m) var(--wa-color-shadow);--wa-shadow-l: var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l) var(--wa-shadow-spread-l) var(--wa-color-shadow);--wa-transition-easing: ease;--wa-transition-slow: .3s;--wa-transition-normal: .15s;--wa-transition-fast: 75ms;--wa-form-control-background-color: var(--wa-color-surface-default);--wa-form-control-border-color: var(--wa-color-neutral-border-loud);--wa-form-control-border-style: var(--wa-border-style);--wa-form-control-border-width: var(--wa-border-width-s);--wa-form-control-border-radius: var(--wa-border-radius-m);--wa-form-control-activated-color: var(--wa-color-brand-fill-loud);--wa-form-control-label-color: var(--wa-color-text-normal);--wa-form-control-label-font-weight: var(--wa-font-weight-semibold);--wa-form-control-label-line-height: var(--wa-line-height-condensed);--wa-form-control-value-color: var(--wa-color-text-normal);--wa-form-control-value-font-weight: var(--wa-font-weight-body);--wa-form-control-value-line-height: var(--wa-line-height-condensed);--wa-form-control-hint-color: var(--wa-color-text-quiet);--wa-form-control-hint-font-weight: var(--wa-font-weight-body);--wa-form-control-hint-line-height: var(--wa-line-height-normal);--wa-form-control-placeholder-color: var(--wa-color-gray-50);--wa-form-control-required-content: "*";--wa-form-control-required-content-color: inherit;--wa-form-control-required-content-offset: -.1em;--wa-form-control-padding-block: .75em;--wa-form-control-padding-inline: 1em;--wa-form-control-height: round( calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)), 1px );--wa-form-control-toggle-size: round(1.25em, 1px);--wa-panel-border-style: var(--wa-border-style);--wa-panel-border-width: var(--wa-border-width-s);--wa-panel-border-radius: var(--wa-border-radius-l);--wa-tooltip-arrow-size: .375rem;--wa-tooltip-background-color: var(--wa-color-text-normal);--wa-tooltip-border-color: var(--wa-tooltip-background-color);--wa-tooltip-border-style: var(--wa-border-style);--wa-tooltip-border-width: var(--wa-border-width-s);--wa-tooltip-border-radius: var(--wa-border-radius-s);--wa-tooltip-content-color: var(--wa-color-surface-default);--wa-tooltip-font-size: var(--wa-font-size-s);--wa-tooltip-line-height: var(--wa-line-height-normal)}}';
  importCSS(defaultCss);
  function getOffset(element, parent) {
    return {
      top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
      left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
    };
  }
  var locks = new Set();
  function getScrollbarWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  function getExistingBodyPadding() {
    const padding = Number(getComputedStyle(document.body).paddingRight.replace(/px/, ""));
    if (isNaN(padding) || !padding) {
      return 0;
    }
    return padding;
  }
  function lockBodyScrolling(lockingEl) {
    locks.add(lockingEl);
    if (!document.documentElement.classList.contains("wa-scroll-lock")) {
      const scrollbarWidth = getScrollbarWidth() + getExistingBodyPadding();
      let scrollbarGutterProperty = getComputedStyle(document.documentElement).scrollbarGutter;
      if (!scrollbarGutterProperty || scrollbarGutterProperty === "auto") {
        scrollbarGutterProperty = "stable";
      }
      if (scrollbarWidth < 2) {
        scrollbarGutterProperty = "";
      }
      document.documentElement.style.setProperty("--wa-scroll-lock-gutter", scrollbarGutterProperty);
      document.documentElement.classList.add("wa-scroll-lock");
      document.documentElement.style.setProperty("--wa-scroll-lock-size", `${scrollbarWidth}px`);
    }
  }
  function unlockBodyScrolling(lockingEl) {
    locks.delete(lockingEl);
    if (locks.size === 0) {
      document.documentElement.classList.remove("wa-scroll-lock");
      document.documentElement.style.removeProperty("--wa-scroll-lock-size");
    }
  }
  function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
    const offset2 = getOffset(element, container);
    const offsetTop = offset2.top + container.scrollTop;
    const offsetLeft = offset2.left + container.scrollLeft;
    const minX = container.scrollLeft;
    const maxX = container.scrollLeft + container.offsetWidth;
    const minY = container.scrollTop;
    const maxY = container.scrollTop + container.offsetHeight;
    if (direction === "horizontal" || direction === "both") {
      if (offsetLeft < minX) {
        container.scrollTo({ left: offsetLeft, behavior });
      } else if (offsetLeft + element.clientWidth > maxX) {
        container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
      }
    }
    if (direction === "vertical" || direction === "both") {
      if (offsetTop < minY) {
        container.scrollTo({ top: offsetTop, behavior });
      } else if (offsetTop + element.clientHeight > maxY) {
        container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
      }
    }
  }
  function parseSpaceDelimitedTokens(input) {
    return input.split(" ").map((token) => token.trim()).filter((token) => token !== "");
  }
  var WaAfterHideEvent = class extends Event {
    constructor() {
      super("wa-after-hide", { bubbles: true, cancelable: false, composed: true });
    }
  };
  var WaAfterShowEvent = class extends Event {
    constructor() {
      super("wa-after-show", { bubbles: true, cancelable: false, composed: true });
    }
  };
  var WaHideEvent = class extends Event {
    constructor(detail) {
      super("wa-hide", { bubbles: true, cancelable: true, composed: true });
      this.detail = detail;
    }
  };
  var WaShowEvent = class extends Event {
    constructor() {
      super("wa-show", { bubbles: true, cancelable: true, composed: true });
    }
  };
  var HasSlotController = class {
    constructor(host, ...slotNames) {
      this.slotNames = [];
      this.handleSlotChange = (event) => {
        const slot = event.target;
        if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
          this.host.requestUpdate();
        }
      };
      (this.host = host).addController(this);
      this.slotNames = slotNames;
    }
    hasDefaultSlot() {
      return [...this.host.childNodes].some((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
          return true;
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node;
          const tagName = el.tagName.toLowerCase();
          if (tagName === "wa-visually-hidden") {
            return false;
          }
          if (!el.hasAttribute("slot")) {
            return true;
          }
        }
        return false;
      });
    }
    hasNamedSlot(name) {
      return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
      return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
      this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    }
    hostDisconnected() {
      this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
  };
  function animateWithClass(el, className) {
    return new Promise((resolve) => {
      const controller = new AbortController();
      const { signal } = controller;
      if (el.classList.contains(className)) {
        return;
      }
      el.classList.remove(className);
      el.classList.add(className);
      let onEnd = () => {
        el.classList.remove(className);
        resolve();
        controller.abort();
      };
      el.addEventListener("animationend", onEnd, { once: true, signal });
      el.addEventListener("animationcancel", onEnd, { once: true, signal });
    });
  }
  const connectedElements = new Set();
  const translations = new Map();
  let fallback;
  let documentDirection = "ltr";
  let documentLanguage = "en";
  const isClient = typeof MutationObserver !== "undefined" && typeof document !== "undefined" && typeof document.documentElement !== "undefined";
  if (isClient) {
    const documentElementObserver = new MutationObserver(update);
    documentDirection = document.documentElement.dir || "ltr";
    documentLanguage = document.documentElement.lang || navigator.language;
    documentElementObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir", "lang"]
    });
  }
  function registerTranslation(...translation2) {
    translation2.map((t2) => {
      const code = t2.$code.toLowerCase();
      if (translations.has(code)) {
        translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t2));
      } else {
        translations.set(code, t2);
      }
      if (!fallback) {
        fallback = t2;
      }
    });
    update();
  }
  function update() {
    if (isClient) {
      documentDirection = document.documentElement.dir || "ltr";
      documentLanguage = document.documentElement.lang || navigator.language;
    }
    [...connectedElements.keys()].map((el) => {
      if (typeof el.requestUpdate === "function") {
        el.requestUpdate();
      }
    });
  }
  let LocalizeController$1 = class LocalizeController {
    constructor(host) {
      this.host = host;
      this.host.addController(this);
    }
    hostConnected() {
      connectedElements.add(this.host);
    }
    hostDisconnected() {
      connectedElements.delete(this.host);
    }
    dir() {
      return `${this.host.dir || documentDirection}`.toLowerCase();
    }
    lang() {
      return `${this.host.lang || documentLanguage}`.toLowerCase();
    }
    getTranslationData(lang) {
      var _a, _b;
      const locale = new Intl.Locale(lang.replace(/_/g, "-"));
      const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
      const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "";
      const primary = translations.get(`${language}-${region}`);
      const secondary = translations.get(language);
      return { locale, language, region, primary, secondary };
    }
    exists(key, options) {
      var _a;
      const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
      options = Object.assign({ includeFallback: false }, options);
      if (primary && primary[key] || secondary && secondary[key] || options.includeFallback && fallback && fallback[key]) {
        return true;
      }
      return false;
    }
    term(key, ...args) {
      const { primary, secondary } = this.getTranslationData(this.lang());
      let term;
      if (primary && primary[key]) {
        term = primary[key];
      } else if (secondary && secondary[key]) {
        term = secondary[key];
      } else if (fallback && fallback[key]) {
        term = fallback[key];
      } else {
        console.error(`No translation found for: ${String(key)}`);
        return String(key);
      }
      if (typeof term === "function") {
        return term(...args);
      }
      return term;
    }
    date(dateToFormat, options) {
      dateToFormat = new Date(dateToFormat);
      return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
    }
    number(numberToFormat, options) {
      numberToFormat = Number(numberToFormat);
      return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
    }
    relativeTime(value, unit, options) {
      return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
    }
  };
  var translation = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    carousel: "Carousel",
    clearEntry: "Clear entry",
    close: "Close",
    copied: "Copied",
    copy: "Copy",
    currentValue: "Current value",
    error: "Error",
    goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
    hidePassword: "Hide password",
    loading: "Loading",
    nextSlide: "Next slide",
    numOptionsSelected: (num) => {
      if (num === 0) return "No options selected";
      if (num === 1) return "1 option selected";
      return `${num} options selected`;
    },
    pauseAnimation: "Pause animation",
    playAnimation: "Play animation",
    previousSlide: "Previous slide",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollableRegion: "Scrollable region",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    slideNum: (slide) => `Slide ${slide}`,
    toggleColorFormat: "Toggle color format",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out"
  };
  registerTranslation(translation);
  var en_default = translation;
  var LocalizeController2 = class extends LocalizeController$1 {
  };
  registerTranslation(en_default);
  function watch(propertyName, options) {
    const resolvedOptions = {
      waitUntilFirstUpdate: false,
      ...options
    };
    return (proto, decoratedFnName) => {
      const { update: update2 } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function(changedProps) {
        watchedProperties.forEach((property) => {
          const key = property;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                this[decoratedFnName](oldValue, newValue);
              }
            }
          }
        });
        update2.call(this, changedProps);
      };
    };
  }
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i4 = decorators.length - 1, decorator; i4 >= 0; i4--)
      if (decorator = decorators[i4])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$3 = globalThis, e$9 = t$3.ShadowRoot && (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$8 = new WeakMap();
  let n$4 = class n {
    constructor(t2, e3, o2) {
      if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t2, this.t = e3;
    }
    get styleSheet() {
      let t2 = this.o;
      const s2 = this.t;
      if (e$9 && void 0 === t2) {
        const e3 = void 0 !== s2 && 1 === s2.length;
        e3 && (t2 = o$8.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e3 && o$8.set(s2, t2));
      }
      return t2;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$5 = (t2) => new n$4("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), S$1 = (s2, o2) => {
    if (e$9) s2.adoptedStyleSheets = o2.map(((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet));
    else for (const e3 of o2) {
      const o3 = document.createElement("style"), n3 = t$3.litNonce;
      void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e3.cssText, s2.appendChild(o3);
    }
  }, c$2 = e$9 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
    let e3 = "";
    for (const s2 of t3.cssRules) e3 += s2.cssText;
    return r$5(e3);
  })(t2) : t2;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const { is: i$5, defineProperty: e$8, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$4, getOwnPropertySymbols: o$7, getPrototypeOf: n$3 } = Object, a$2 = globalThis, c$1 = a$2.trustedTypes, l$2 = c$1 ? c$1.emptyScript : "", p$1 = a$2.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$2 = { toAttribute(t2, s2) {
    switch (s2) {
      case Boolean:
        t2 = t2 ? l$2 : null;
        break;
      case Object:
      case Array:
        t2 = null == t2 ? t2 : JSON.stringify(t2);
    }
    return t2;
  }, fromAttribute(t2, s2) {
    let i4 = t2;
    switch (s2) {
      case Boolean:
        i4 = null !== t2;
        break;
      case Number:
        i4 = null === t2 ? null : Number(t2);
        break;
      case Object:
      case Array:
        try {
          i4 = JSON.parse(t2);
        } catch (t3) {
          i4 = null;
        }
    }
    return i4;
  } }, f$1 = (t2, s2) => !i$5(t2, s2), b = { attribute: true, type: String, converter: u$2, reflect: false, useDefault: false, hasChanged: f$1 };
  Symbol.metadata ??= Symbol("metadata"), a$2.litPropertyMetadata ??= new WeakMap();
  let y$1 = class y extends HTMLElement {
    static addInitializer(t2) {
      this._$Ei(), (this.l ??= []).push(t2);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t2, s2 = b) {
      if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
        const i4 = Symbol(), h2 = this.getPropertyDescriptor(t2, i4, s2);
        void 0 !== h2 && e$8(this.prototype, t2, h2);
      }
    }
    static getPropertyDescriptor(t2, s2, i4) {
      const { get: e3, set: r2 } = h$1(this.prototype, t2) ?? { get() {
        return this[s2];
      }, set(t3) {
        this[s2] = t3;
      } };
      return { get: e3, set(s3) {
        const h2 = e3?.call(this);
        r2?.call(this, s3), this.requestUpdate(t2, h2, i4);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t2) {
      return this.elementProperties.get(t2) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d$1("elementProperties"))) return;
      const t2 = n$3(this);
      t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d$1("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
        const t3 = this.properties, s2 = [...r$4(t3), ...o$7(t3)];
        for (const i4 of s2) this.createProperty(i4, t3[i4]);
      }
      const t2 = this[Symbol.metadata];
      if (null !== t2) {
        const s2 = litPropertyMetadata.get(t2);
        if (void 0 !== s2) for (const [t3, i4] of s2) this.elementProperties.set(t3, i4);
      }
      this._$Eh = new Map();
      for (const [t3, s2] of this.elementProperties) {
        const i4 = this._$Eu(t3, s2);
        void 0 !== i4 && this._$Eh.set(i4, t3);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s2) {
      const i4 = [];
      if (Array.isArray(s2)) {
        const e3 = new Set(s2.flat(1 / 0).reverse());
        for (const s3 of e3) i4.unshift(c$2(s3));
      } else void 0 !== s2 && i4.push(c$2(s2));
      return i4;
    }
    static _$Eu(t2, s2) {
      const i4 = s2.attribute;
      return false === i4 ? void 0 : "string" == typeof i4 ? i4 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise(((t2) => this.enableUpdating = t2)), this._$AL = new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((t2) => t2(this)));
    }
    addController(t2) {
      (this._$EO ??= new Set()).add(t2), void 0 !== this.renderRoot && this.isConnected && t2.hostConnected?.();
    }
    removeController(t2) {
      this._$EO?.delete(t2);
    }
    _$E_() {
      const t2 = new Map(), s2 = this.constructor.elementProperties;
      for (const i4 of s2.keys()) this.hasOwnProperty(i4) && (t2.set(i4, this[i4]), delete this[i4]);
      t2.size > 0 && (this._$Ep = t2);
    }
    createRenderRoot() {
      const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S$1(t2, this.constructor.elementStyles), t2;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach(((t2) => t2.hostConnected?.()));
    }
    enableUpdating(t2) {
    }
    disconnectedCallback() {
      this._$EO?.forEach(((t2) => t2.hostDisconnected?.()));
    }
    attributeChangedCallback(t2, s2, i4) {
      this._$AK(t2, i4);
    }
    _$ET(t2, s2) {
      const i4 = this.constructor.elementProperties.get(t2), e3 = this.constructor._$Eu(t2, i4);
      if (void 0 !== e3 && true === i4.reflect) {
        const h2 = (void 0 !== i4.converter?.toAttribute ? i4.converter : u$2).toAttribute(s2, i4.type);
        this._$Em = t2, null == h2 ? this.removeAttribute(e3) : this.setAttribute(e3, h2), this._$Em = null;
      }
    }
    _$AK(t2, s2) {
      const i4 = this.constructor, e3 = i4._$Eh.get(t2);
      if (void 0 !== e3 && this._$Em !== e3) {
        const t3 = i4.getPropertyOptions(e3), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== t3.converter?.fromAttribute ? t3.converter : u$2;
        this._$Em = e3;
        const r2 = h2.fromAttribute(s2, t3.type);
        this[e3] = r2 ?? this._$Ej?.get(e3) ?? r2, this._$Em = null;
      }
    }
    requestUpdate(t2, s2, i4) {
      if (void 0 !== t2) {
        const e3 = this.constructor, h2 = this[t2];
        if (i4 ??= e3.getPropertyOptions(t2), !((i4.hasChanged ?? f$1)(h2, s2) || i4.useDefault && i4.reflect && h2 === this._$Ej?.get(t2) && !this.hasAttribute(e3._$Eu(t2, i4)))) return;
        this.C(t2, s2, i4);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t2, s2, { useDefault: i4, reflect: e3, wrapped: h2 }, r2) {
      i4 && !(this._$Ej ??= new Map()).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h2 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i4 || (s2 = void 0), this._$AL.set(t2, s2)), true === e3 && this._$Em !== t2 && (this._$Eq ??= new Set()).add(t2));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t3) {
        Promise.reject(t3);
      }
      const t2 = this.scheduleUpdate();
      return null != t2 && await t2, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t4, s3] of this._$Ep) this[t4] = s3;
          this._$Ep = void 0;
        }
        const t3 = this.constructor.elementProperties;
        if (t3.size > 0) for (const [s3, i4] of t3) {
          const { wrapped: t4 } = i4, e3 = this[s3];
          true !== t4 || this._$AL.has(s3) || void 0 === e3 || this.C(s3, void 0, i4, e3);
        }
      }
      let t2 = false;
      const s2 = this._$AL;
      try {
        t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), this._$EO?.forEach(((t3) => t3.hostUpdate?.())), this.update(s2)) : this._$EM();
      } catch (s3) {
        throw t2 = false, this._$EM(), s3;
      }
      t2 && this._$AE(s2);
    }
    willUpdate(t2) {
    }
    _$AE(t2) {
      this._$EO?.forEach(((t3) => t3.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
    }
    _$EM() {
      this._$AL = new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t2) {
      return true;
    }
    update(t2) {
      this._$Eq &&= this._$Eq.forEach(((t3) => this._$ET(t3, this[t3]))), this._$EM();
    }
    updated(t2) {
    }
    firstUpdated(t2) {
    }
  };
  y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = new Map(), y$1[d$1("finalized")] = new Map(), p$1?.({ ReactiveElement: y$1 }), (a$2.reactiveElementVersions ??= []).push("2.1.1");
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2 = globalThis, i$4 = t$2.trustedTypes, s$1 = i$4 ? i$4.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$7 = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o$6 = "?" + h, n$2 = `<${o$6}>`, r$3 = document, l$1 = () => r$3.createComment(""), c = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, a$1 = Array.isArray, u$1 = (t2) => a$1(t2) || "function" == typeof t2?.[Symbol.iterator], d = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y2 = (t2) => (i4, ...s2) => ({ _$litType$: t2, strings: i4, values: s2 }), x = y2(1), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = new WeakMap(), C = r$3.createTreeWalker(r$3, 129);
  function P(t2, i4) {
    if (!a$1(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s$1 ? s$1.createHTML(i4) : i4;
  }
  const V = (t2, i4) => {
    const s2 = t2.length - 1, o2 = [];
    let r2, l2 = 2 === i4 ? "<svg>" : 3 === i4 ? "<math>" : "", c2 = f;
    for (let i5 = 0; i5 < s2; i5++) {
      const s3 = t2[i5];
      let a2, u2, d2 = -1, y3 = 0;
      for (; y3 < s3.length && (c2.lastIndex = y3, u2 = c2.exec(s3), null !== u2); ) y3 = c2.lastIndex, c2 === f ? "!--" === u2[1] ? c2 = v : void 0 !== u2[1] ? c2 = _ : void 0 !== u2[2] ? ($.test(u2[2]) && (r2 = RegExp("</" + u2[2], "g")), c2 = m) : void 0 !== u2[3] && (c2 = m) : c2 === m ? ">" === u2[0] ? (c2 = r2 ?? f, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? m : '"' === u2[3] ? g : p) : c2 === g || c2 === p ? c2 = m : c2 === v || c2 === _ ? c2 = f : (c2 = m, r2 = void 0);
      const x2 = c2 === m && t2[i5 + 1].startsWith("/>") ? " " : "";
      l2 += c2 === f ? s3 + n$2 : d2 >= 0 ? (o2.push(a2), s3.slice(0, d2) + e$7 + s3.slice(d2) + h + x2) : s3 + h + (-2 === d2 ? i5 : x2);
    }
    return [P(t2, l2 + (t2[s2] || "<?>") + (2 === i4 ? "</svg>" : 3 === i4 ? "</math>" : "")), o2];
  };
  class N {
    constructor({ strings: t2, _$litType$: s2 }, n3) {
      let r2;
      this.parts = [];
      let c2 = 0, a2 = 0;
      const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = V(t2, s2);
      if (this.el = N.createElement(f2, n3), C.currentNode = this.el.content, 2 === s2 || 3 === s2) {
        const t3 = this.el.content.firstChild;
        t3.replaceWith(...t3.childNodes);
      }
      for (; null !== (r2 = C.nextNode()) && d2.length < u2; ) {
        if (1 === r2.nodeType) {
          if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(e$7)) {
            const i4 = v2[a2++], s3 = r2.getAttribute(t3).split(h), e3 = /([.?@])?(.*)/.exec(i4);
            d2.push({ type: 1, index: c2, name: e3[2], strings: s3, ctor: "." === e3[1] ? H : "?" === e3[1] ? I : "@" === e3[1] ? L : k }), r2.removeAttribute(t3);
          } else t3.startsWith(h) && (d2.push({ type: 6, index: c2 }), r2.removeAttribute(t3));
          if ($.test(r2.tagName)) {
            const t3 = r2.textContent.split(h), s3 = t3.length - 1;
            if (s3 > 0) {
              r2.textContent = i$4 ? i$4.emptyScript : "";
              for (let i4 = 0; i4 < s3; i4++) r2.append(t3[i4], l$1()), C.nextNode(), d2.push({ type: 2, index: ++c2 });
              r2.append(t3[s3], l$1());
            }
          }
        } else if (8 === r2.nodeType) if (r2.data === o$6) d2.push({ type: 2, index: c2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = r2.data.indexOf(h, t3 + 1)); ) d2.push({ type: 7, index: c2 }), t3 += h.length - 1;
        }
        c2++;
      }
    }
    static createElement(t2, i4) {
      const s2 = r$3.createElement("template");
      return s2.innerHTML = t2, s2;
    }
  }
  function S(t2, i4, s2 = t2, e3) {
    if (i4 === T) return i4;
    let h2 = void 0 !== e3 ? s2._$Co?.[e3] : s2._$Cl;
    const o2 = c(i4) ? void 0 : i4._$litDirective$;
    return h2?.constructor !== o2 && (h2?._$AO?.(false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e3)), void 0 !== e3 ? (s2._$Co ??= [])[e3] = h2 : s2._$Cl = h2), void 0 !== h2 && (i4 = S(t2, h2._$AS(t2, i4.values), h2, e3)), i4;
  }
  class M {
    constructor(t2, i4) {
      this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i4;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t2) {
      const { el: { content: i4 }, parts: s2 } = this._$AD, e3 = (t2?.creationScope ?? r$3).importNode(i4, true);
      C.currentNode = e3;
      let h2 = C.nextNode(), o2 = 0, n3 = 0, l2 = s2[0];
      for (; void 0 !== l2; ) {
        if (o2 === l2.index) {
          let i5;
          2 === l2.type ? i5 = new R(h2, h2.nextSibling, this, t2) : 1 === l2.type ? i5 = new l2.ctor(h2, l2.name, l2.strings, this, t2) : 6 === l2.type && (i5 = new z(h2, this, t2)), this._$AV.push(i5), l2 = s2[++n3];
        }
        o2 !== l2?.index && (h2 = C.nextNode(), o2++);
      }
      return C.currentNode = r$3, e3;
    }
    p(t2) {
      let i4 = 0;
      for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i4), i4 += s2.strings.length - 2) : s2._$AI(t2[i4])), i4++;
    }
  }
  class R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t2, i4, s2, e3) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t2, this._$AB = i4, this._$AM = s2, this.options = e3, this._$Cv = e3?.isConnected ?? true;
    }
    get parentNode() {
      let t2 = this._$AA.parentNode;
      const i4 = this._$AM;
      return void 0 !== i4 && 11 === t2?.nodeType && (t2 = i4.parentNode), t2;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t2, i4 = this) {
      t2 = S(this, t2, i4), c(t2) ? t2 === E || null == t2 || "" === t2 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t2 !== this._$AH && t2 !== T && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : u$1(t2) ? this.k(t2) : this._(t2);
    }
    O(t2) {
      return this._$AA.parentNode.insertBefore(t2, this._$AB);
    }
    T(t2) {
      this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
    }
    _(t2) {
      this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(r$3.createTextNode(t2)), this._$AH = t2;
    }
    $(t2) {
      const { values: i4, _$litType$: s2 } = t2, e3 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = N.createElement(P(s2.h, s2.h[0]), this.options)), s2);
      if (this._$AH?._$AD === e3) this._$AH.p(i4);
      else {
        const t3 = new M(e3, this), s3 = t3.u(this.options);
        t3.p(i4), this.T(s3), this._$AH = t3;
      }
    }
    _$AC(t2) {
      let i4 = A.get(t2.strings);
      return void 0 === i4 && A.set(t2.strings, i4 = new N(t2)), i4;
    }
    k(t2) {
      a$1(this._$AH) || (this._$AH = [], this._$AR());
      const i4 = this._$AH;
      let s2, e3 = 0;
      for (const h2 of t2) e3 === i4.length ? i4.push(s2 = new R(this.O(l$1()), this.O(l$1()), this, this.options)) : s2 = i4[e3], s2._$AI(h2), e3++;
      e3 < i4.length && (this._$AR(s2 && s2._$AB.nextSibling, e3), i4.length = e3);
    }
    _$AR(t2 = this._$AA.nextSibling, i4) {
      for (this._$AP?.(false, true, i4); t2 !== this._$AB; ) {
        const i5 = t2.nextSibling;
        t2.remove(), t2 = i5;
      }
    }
    setConnected(t2) {
      void 0 === this._$AM && (this._$Cv = t2, this._$AP?.(t2));
    }
  }
  class k {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t2, i4, s2, e3, h2) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t2, this.name = i4, this._$AM = e3, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = E;
    }
    _$AI(t2, i4 = this, s2, e3) {
      const h2 = this.strings;
      let o2 = false;
      if (void 0 === h2) t2 = S(this, t2, i4, 0), o2 = !c(t2) || t2 !== this._$AH && t2 !== T, o2 && (this._$AH = t2);
      else {
        const e4 = t2;
        let n3, r2;
        for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r2 = S(this, e4[s2 + n3], i4, n3), r2 === T && (r2 = this._$AH[n3]), o2 ||= !c(r2) || r2 !== this._$AH[n3], r2 === E ? t2 = E : t2 !== E && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
      }
      o2 && !e3 && this.j(t2);
    }
    j(t2) {
      t2 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
    }
  }
  class H extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t2) {
      this.element[this.name] = t2 === E ? void 0 : t2;
    }
  }
  class I extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t2) {
      this.element.toggleAttribute(this.name, !!t2 && t2 !== E);
    }
  }
  class L extends k {
    constructor(t2, i4, s2, e3, h2) {
      super(t2, i4, s2, e3, h2), this.type = 5;
    }
    _$AI(t2, i4 = this) {
      if ((t2 = S(this, t2, i4, 0) ?? E) === T) return;
      const s2 = this._$AH, e3 = t2 === E && s2 !== E || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== E && (s2 === E || e3);
      e3 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
    }
    handleEvent(t2) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
    }
  }
  class z {
    constructor(t2, i4, s2) {
      this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s2;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t2) {
      S(this, t2);
    }
  }
  const j = t$2.litHtmlPolyfillSupport;
  j?.(N, R), (t$2.litHtmlVersions ??= []).push("3.3.1");
  const B = (t2, i4, s2) => {
    const e3 = s2?.renderBefore ?? i4;
    let h2 = e3._$litPart$;
    if (void 0 === h2) {
      const t3 = s2?.renderBefore ?? null;
      e3._$litPart$ = h2 = new R(i4.insertBefore(l$1(), t3), t3, void 0, s2 ?? {});
    }
    return h2._$AI(t2), h2;
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const s = globalThis;
  let i$3 = class i extends y$1 {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t2 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t2.firstChild, t2;
    }
    update(t2) {
      const r2 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = B(r2, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  };
  i$3._$litElement$ = true, i$3["finalized"] = true, s.litElementHydrateSupport?.({ LitElement: i$3 });
  const o$5 = s.litElementPolyfillSupport;
  o$5?.({ LitElement: i$3 });
  (s.litElementVersions ??= []).push("4.2.1");
  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o$4 = false;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1 = (t2) => (e3, o2) => {
    void 0 !== o2 ? o2.addInitializer((() => {
      customElements.define(t2, e3);
    })) : customElements.define(t2, e3);
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o$3 = { attribute: true, type: String, converter: u$2, reflect: false, hasChanged: f$1 }, r$2 = (t2 = o$3, e3, r2) => {
    const { kind: n3, metadata: i4 } = r2;
    let s2 = globalThis.litPropertyMetadata.get(i4);
    if (void 0 === s2 && globalThis.litPropertyMetadata.set(i4, s2 = new Map()), "setter" === n3 && ((t2 = Object.create(t2)).wrapped = true), s2.set(r2.name, t2), "accessor" === n3) {
      const { name: o2 } = r2;
      return { set(r3) {
        const n4 = e3.get.call(this);
        e3.set.call(this, r3), this.requestUpdate(o2, n4, t2);
      }, init(e4) {
        return void 0 !== e4 && this.C(o2, void 0, t2, e4), e4;
      } };
    }
    if ("setter" === n3) {
      const { name: o2 } = r2;
      return function(r3) {
        const n4 = this[o2];
        e3.call(this, r3), this.requestUpdate(o2, n4, t2);
      };
    }
    throw Error("Unsupported decorator location: " + n3);
  };
  function n$1(t2) {
    return (e3, o2) => "object" == typeof o2 ? r$2(t2, e3, o2) : ((t3, e4, o3) => {
      const r2 = e4.hasOwnProperty(o3);
      return e4.constructor.createProperty(o3, t3), r2 ? Object.getOwnPropertyDescriptor(e4, o3) : void 0;
    })(t2, e3, o2);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function r$1(r2) {
    return n$1({ ...r2, state: true, attribute: false });
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$6 = (e3, t2, c2) => (c2.configurable = true, c2.enumerable = true, Reflect.decorate && "object" != typeof t2 && Object.defineProperty(e3, t2, c2), c2);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function e$5(e3, r2) {
    return (n3, s2, i4) => {
      const o2 = (t2) => t2.renderRoot?.querySelector(e3) ?? null;
      return e$6(n3, s2, { get() {
        return o2(this);
      } });
    };
  }
  var host_default = ":host {\n  box-sizing: border-box !important;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: inherit !important;\n}\n\n[hidden] {\n  display: none !important;\n}\n";
  var _hasRecordedInitialProperties;
  var WebAwesomeElement = class extends i$3 {
    constructor() {
      super();
      __privateAdd(this, _hasRecordedInitialProperties, false);
      this.initialReflectedProperties = new Map();
      this.didSSR = Boolean(this.shadowRoot);
      this.customStates = {
set: (customState, active) => {
          if (!Boolean(this.internals?.states)) return;
          if (active) {
            this.internals.states.add(customState);
          } else {
            this.internals.states.delete(customState);
          }
        },
has: (customState) => {
          if (!Boolean(this.internals?.states)) return false;
          return this.internals.states.has(customState);
        }
      };
      try {
        this.internals = this.attachInternals();
      } catch {
        console.error("Element internals are not supported in your browser. Consider using a polyfill");
      }
      this.customStates.set("wa-defined", true);
      let Self = this.constructor;
      for (let [property2, spec] of Self.elementProperties) {
        if (spec.default === "inherit" && spec.initial !== void 0 && typeof property2 === "string") {
          this.customStates.set(`initial-${property2}-${spec.initial}`, true);
        }
      }
    }
static get styles() {
      const styles = Array.isArray(this.css) ? this.css : this.css ? [this.css] : [];
      return [host_default, ...styles].map((style) => typeof style === "string" ? r$5(style) : style);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (!__privateGet(this, _hasRecordedInitialProperties)) {
        this.constructor.elementProperties.forEach(
          (obj, prop) => {
            if (obj.reflect && this[prop] != null) {
              this.initialReflectedProperties.set(prop, this[prop]);
            }
          }
        );
        __privateSet(this, _hasRecordedInitialProperties, true);
      }
      super.attributeChangedCallback(name, oldValue, newValue);
    }
    willUpdate(changedProperties) {
      super.willUpdate(changedProperties);
      this.initialReflectedProperties.forEach((value, prop) => {
        if (changedProperties.has(prop) && this[prop] == null) {
          this[prop] = value;
        }
      });
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      if (this.didSSR) {
        this.shadowRoot?.querySelectorAll("slot").forEach((slotElement) => {
          slotElement.dispatchEvent(new Event("slotchange", { bubbles: true, composed: false, cancelable: false }));
        });
      }
    }
    update(changedProperties) {
      try {
        super.update(changedProperties);
      } catch (e3) {
        if (this.didSSR && !this.hasUpdated) {
          const event = new Event("lit-hydration-error", { bubbles: true, composed: true, cancelable: false });
          event.error = e3;
          this.dispatchEvent(event);
        }
        throw e3;
      }
    }
relayNativeEvent(event, eventOptions) {
      event.stopImmediatePropagation();
      this.dispatchEvent(
        new event.constructor(event.type, {
          ...event,
          ...eventOptions
        })
      );
    }
  };
  _hasRecordedInitialProperties = new WeakMap();
  __decorateClass([
    n$1()
  ], WebAwesomeElement.prototype, "dir", 2);
  __decorateClass([
    n$1()
  ], WebAwesomeElement.prototype, "lang", 2);
  __decorateClass([
    n$1({ type: Boolean, reflect: true, attribute: "did-ssr" })
  ], WebAwesomeElement.prototype, "didSSR", 2);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t = { ATTRIBUTE: 1, CHILD: 2 }, e$4 = (t2) => (...e3) => ({ _$litDirective$: t2, values: e3 });
  let i$2 = class i2 {
    constructor(t2) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t2, e3, i4) {
      this._$Ct = t2, this._$AM = e3, this._$Ci = i4;
    }
    _$AS(t2, e3) {
      return this.update(t2, e3);
    }
    update(t2, e3) {
      return this.render(...e3);
    }
  };
  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$3 = e$4(class extends i$2 {
    constructor(t$12) {
      if (super(t$12), t$12.type !== t.ATTRIBUTE || "class" !== t$12.name || t$12.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t2) {
      return " " + Object.keys(t2).filter(((s2) => t2[s2])).join(" ") + " ";
    }
    update(s2, [i4]) {
      if (void 0 === this.st) {
        this.st = new Set(), void 0 !== s2.strings && (this.nt = new Set(s2.strings.join(" ").split(/\s/).filter(((t2) => "" !== t2))));
        for (const t2 in i4) i4[t2] && !this.nt?.has(t2) && this.st.add(t2);
        return this.render(i4);
      }
      const r2 = s2.element.classList;
      for (const t2 of this.st) t2 in i4 || (r2.remove(t2), this.st.delete(t2));
      for (const t2 in i4) {
        const s3 = !!i4[t2];
        s3 === this.st.has(t2) || this.nt?.has(t2) || (s3 ? (r2.add(t2), this.st.add(t2)) : (r2.remove(t2), this.st.delete(t2)));
      }
      return T;
    }
  });
  var dialog_default = ":host {\n  --width: 31rem;\n  --spacing: var(--wa-space-l);\n  --show-duration: 200ms;\n  --hide-duration: 200ms;\n\n  display: none;\n}\n\n:host([open]) {\n  display: block;\n}\n\n.dialog {\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: var(--width);\n  max-width: calc(100% - var(--wa-space-2xl));\n  max-height: calc(100% - var(--wa-space-2xl));\n  background-color: var(--wa-color-surface-raised);\n  border-radius: var(--wa-panel-border-radius);\n  border: none;\n  box-shadow: var(--wa-shadow-l);\n  padding: 0;\n  margin: auto;\n\n  &.show {\n    animation: show-dialog var(--show-duration) ease;\n\n    &::backdrop {\n      animation: show-backdrop var(--show-duration, 200ms) ease;\n    }\n  }\n\n  &.hide {\n    animation: show-dialog var(--hide-duration) ease reverse;\n\n    &::backdrop {\n      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;\n    }\n  }\n\n  &.pulse {\n    animation: pulse 250ms ease;\n  }\n}\n\n.dialog:focus {\n  outline: none;\n}\n\n/* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */\n@media screen and (max-width: 420px) {\n  .dialog {\n    max-height: 80vh;\n  }\n}\n\n.open {\n  display: flex;\n  opacity: 1;\n}\n\n.header {\n  flex: 0 0 auto;\n  display: flex;\n  flex-wrap: nowrap;\n\n  padding-inline-start: var(--spacing);\n  padding-block-end: 0;\n\n  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */\n  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));\n  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));\n}\n\n.title {\n  align-self: center;\n  flex: 1 1 auto;\n  font-family: inherit;\n  font-size: var(--wa-font-size-l);\n  font-weight: var(--wa-font-weight-heading);\n  line-height: var(--wa-line-height-condensed);\n  margin: 0;\n}\n\n.header-actions {\n  align-self: start;\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: end;\n  gap: var(--wa-space-2xs);\n  padding-inline-start: var(--spacing);\n}\n\n.header-actions wa-button,\n.header-actions ::slotted(wa-button) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n\n.body {\n  flex: 1 1 auto;\n  display: block;\n  padding: var(--spacing);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.footer {\n  flex: 0 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--wa-space-xs);\n  justify-content: end;\n  padding: var(--spacing);\n  padding-block-start: 0;\n}\n\n.footer ::slotted(wa-button:not(:first-of-type)) {\n  margin-inline-start: var(--wa-spacing-xs);\n}\n\n.dialog::backdrop {\n  /*\n    NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can\n    remove the fallback values here.\n  */\n  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));\n}\n\n@keyframes pulse {\n  0% {\n    scale: 1;\n  }\n  50% {\n    scale: 1.02;\n  }\n  100% {\n    scale: 1;\n  }\n}\n\n@keyframes show-dialog {\n  from {\n    opacity: 0;\n    scale: 0.8;\n  }\n  to {\n    opacity: 1;\n    scale: 1;\n  }\n}\n\n@keyframes show-backdrop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@media (forced-colors: active) {\n  .dialog {\n    border: solid 1px white;\n  }\n}\n";
  var WaDialog = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.hasSlotController = new HasSlotController(this, "footer", "header-actions", "label");
      this.open = false;
      this.label = "";
      this.withoutHeader = false;
      this.lightDismiss = false;
      this.handleDocumentKeyDown = (event) => {
        if (event.key === "Escape" && this.open) {
          event.preventDefault();
          event.stopPropagation();
          this.requestClose(this.dialog);
        }
      };
    }
    firstUpdated() {
      if (this.open) {
        this.addOpenListeners();
        this.dialog.showModal();
        lockBodyScrolling(this);
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unlockBodyScrolling(this);
      this.removeOpenListeners();
    }
    async requestClose(source) {
      const waHideEvent = new WaHideEvent({ source });
      this.dispatchEvent(waHideEvent);
      if (waHideEvent.defaultPrevented) {
        this.open = true;
        animateWithClass(this.dialog, "pulse");
        return;
      }
      this.removeOpenListeners();
      await animateWithClass(this.dialog, "hide");
      this.open = false;
      this.dialog.close();
      unlockBodyScrolling(this);
      const trigger = this.originalTrigger;
      if (typeof trigger?.focus === "function") {
        setTimeout(() => trigger.focus());
      }
      this.dispatchEvent(new WaAfterHideEvent());
    }
    addOpenListeners() {
      document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
    removeOpenListeners() {
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    handleDialogCancel(event) {
      event.preventDefault();
      if (!this.dialog.classList.contains("hide")) {
        this.requestClose(this.dialog);
      }
    }
    handleDialogClick(event) {
      const target = event.target;
      const button = target.closest('[data-dialog="close"]');
      if (button) {
        event.stopPropagation();
        this.requestClose(button);
      }
    }
    async handleDialogPointerDown(event) {
      if (event.target === this.dialog) {
        if (this.lightDismiss) {
          this.requestClose(this.dialog);
        } else {
          await animateWithClass(this.dialog, "pulse");
        }
      }
    }
    handleOpenChange() {
      if (this.open && !this.dialog.open) {
        this.show();
      } else if (!this.open && this.dialog.open) {
        this.open = true;
        this.requestClose(this.dialog);
      }
    }
async show() {
      const waShowEvent = new WaShowEvent();
      this.dispatchEvent(waShowEvent);
      if (waShowEvent.defaultPrevented) {
        this.open = false;
        return;
      }
      this.addOpenListeners();
      this.originalTrigger = document.activeElement;
      this.open = true;
      this.dialog.showModal();
      lockBodyScrolling(this);
      requestAnimationFrame(() => {
        const elementToFocus = this.querySelector("[autofocus]");
        if (elementToFocus && typeof elementToFocus.focus === "function") {
          elementToFocus.focus();
        }
      });
      await animateWithClass(this.dialog, "show");
      this.dispatchEvent(new WaAfterShowEvent());
    }
    render() {
      const hasHeader = !this.withoutHeader;
      const hasFooter = this.hasSlotController.test("footer");
      return x`
      <dialog
        part="dialog"
        class=${e$3({
      dialog: true,
      open: this.open
    })}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${hasHeader ? x`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(8203)} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${(event) => this.requestClose(event.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            ` : ""}

        <div part="body" class="body"><slot></slot></div>

        ${hasFooter ? x`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            ` : ""}
      </dialog>
    `;
    }
  };
  WaDialog.css = dialog_default;
  __decorateClass([
    e$5(".dialog")
  ], WaDialog.prototype, "dialog", 2);
  __decorateClass([
    n$1({ type: Boolean, reflect: true })
  ], WaDialog.prototype, "open", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaDialog.prototype, "label", 2);
  __decorateClass([
    n$1({ attribute: "without-header", type: Boolean, reflect: true })
  ], WaDialog.prototype, "withoutHeader", 2);
  __decorateClass([
    n$1({ attribute: "light-dismiss", type: Boolean })
  ], WaDialog.prototype, "lightDismiss", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], WaDialog.prototype, "handleOpenChange", 1);
  WaDialog = __decorateClass([
    t$1("wa-dialog")
  ], WaDialog);
  document.addEventListener("click", (event) => {
    const dialogAttrEl = event.target.closest("[data-dialog]");
    if (dialogAttrEl instanceof Element) {
      const [command, id] = parseSpaceDelimitedTokens(dialogAttrEl.getAttribute("data-dialog") || "");
      if (command === "open" && id?.length) {
        const doc = dialogAttrEl.getRootNode();
        const dialog = doc.getElementById(id);
        if (dialog?.localName === "wa-dialog") {
          dialog.open = true;
        } else {
          console.warn(`A dialog with an ID of "${id}" could not be found in this document.`);
        }
      }
    }
  });
  {
    document.addEventListener("pointerdown", () => {
    });
  }
  var MirrorValidator = () => {
    return {
      checkValidity(element) {
        const formControl = element.input;
        const validity = {
          message: "",
          isValid: true,
          invalidKeys: []
        };
        if (!formControl) {
          return validity;
        }
        let isValid = true;
        if ("checkValidity" in formControl) {
          isValid = formControl.checkValidity();
        }
        if (isValid) {
          return validity;
        }
        validity.isValid = false;
        if ("validationMessage" in formControl) {
          validity.message = formControl.validationMessage;
        }
        if (!("validity" in formControl)) {
          validity.invalidKeys.push("customError");
          return validity;
        }
        for (const key in formControl.validity) {
          if (key === "valid") {
            continue;
          }
          const checkedKey = key;
          if (formControl.validity[checkedKey]) {
            validity.invalidKeys.push(checkedKey);
          }
        }
        return validity;
      }
    };
  };
  var WaInvalidEvent = class extends Event {
    constructor() {
      super("wa-invalid", { bubbles: true, cancelable: false, composed: true });
    }
  };
  var CustomErrorValidator = () => {
    return {
      observedAttributes: ["custom-error"],
      checkValidity(element) {
        const validity = {
          message: "",
          isValid: true,
          invalidKeys: []
        };
        if (element.customError) {
          validity.message = element.customError;
          validity.isValid = false;
          validity.invalidKeys = ["customError"];
        }
        return validity;
      }
    };
  };
  var WebAwesomeFormAssociatedElement = class extends WebAwesomeElement {
    constructor() {
      super();
      this.name = null;
      this.disabled = false;
      this.required = false;
      this.assumeInteractionOn = ["input"];
      this.validators = [];
      this.valueHasChanged = false;
      this.hasInteracted = false;
      this.customError = null;
      this.emittedEvents = [];
      this.emitInvalid = (e3) => {
        if (e3.target !== this) return;
        this.hasInteracted = true;
        this.dispatchEvent(new WaInvalidEvent());
      };
      this.handleInteraction = (event) => {
        const emittedEvents = this.emittedEvents;
        if (!emittedEvents.includes(event.type)) {
          emittedEvents.push(event.type);
        }
        if (emittedEvents.length === this.assumeInteractionOn?.length) {
          this.hasInteracted = true;
        }
      };
      {
        this.addEventListener("invalid", this.emitInvalid);
      }
    }
static get validators() {
      return [CustomErrorValidator()];
    }
static get observedAttributes() {
      const parentAttrs = new Set(super.observedAttributes || []);
      for (const validator of this.validators) {
        if (!validator.observedAttributes) {
          continue;
        }
        for (const attr of validator.observedAttributes) {
          parentAttrs.add(attr);
        }
      }
      return [...parentAttrs];
    }
    connectedCallback() {
      super.connectedCallback();
      this.updateValidity();
      this.assumeInteractionOn.forEach((event) => {
        this.addEventListener(event, this.handleInteraction);
      });
    }
    firstUpdated(...args) {
      super.firstUpdated(...args);
      this.updateValidity();
    }
    willUpdate(changedProperties) {
      if (changedProperties.has("customError")) {
        if (!this.customError) {
          this.customError = null;
        }
        this.setCustomValidity(this.customError || "");
      }
      if (changedProperties.has("value") || changedProperties.has("disabled")) {
        const value = this.value;
        if (Array.isArray(value)) {
          if (this.name) {
            const formData = new FormData();
            for (const val of value) {
              formData.append(this.name, val);
            }
            this.setValue(formData, formData);
          }
        } else {
          this.setValue(value, value);
        }
      }
      if (changedProperties.has("disabled")) {
        this.customStates.set("disabled", this.disabled);
        if (this.hasAttribute("disabled") || !this.matches(":disabled")) {
          this.toggleAttribute("disabled", this.disabled);
        }
      }
      this.updateValidity();
      super.willUpdate(changedProperties);
    }
    get labels() {
      return this.internals.labels;
    }
    getForm() {
      return this.internals.form;
    }
    get validity() {
      return this.internals.validity;
    }
get willValidate() {
      return this.internals.willValidate;
    }
    get validationMessage() {
      return this.internals.validationMessage;
    }
    checkValidity() {
      this.updateValidity();
      return this.internals.checkValidity();
    }
    reportValidity() {
      this.updateValidity();
      this.hasInteracted = true;
      return this.internals.reportValidity();
    }
get validationTarget() {
      return this.input || void 0;
    }
    setValidity(...args) {
      const flags = args[0];
      const message = args[1];
      let anchor = args[2];
      if (!anchor) {
        anchor = this.validationTarget;
      }
      this.internals.setValidity(flags, message, anchor || void 0);
      this.requestUpdate("validity");
      this.setCustomStates();
    }
    setCustomStates() {
      const required = Boolean(this.required);
      const isValid = this.internals.validity.valid;
      const hasInteracted = this.hasInteracted;
      this.customStates.set("required", required);
      this.customStates.set("optional", !required);
      this.customStates.set("invalid", !isValid);
      this.customStates.set("valid", isValid);
      this.customStates.set("user-invalid", !isValid && hasInteracted);
      this.customStates.set("user-valid", isValid && hasInteracted);
    }
setCustomValidity(message) {
      if (!message) {
        this.customError = null;
        this.setValidity({});
        return;
      }
      this.customError = message;
      this.setValidity({ customError: true }, message, this.validationTarget);
    }
    formResetCallback() {
      this.resetValidity();
      this.hasInteracted = false;
      this.valueHasChanged = false;
      this.emittedEvents = [];
      this.updateValidity();
    }
    formDisabledCallback(isDisabled) {
      this.disabled = isDisabled;
      this.updateValidity();
    }
formStateRestoreCallback(state, reason) {
      this.value = state;
      if (reason === "restore") {
        this.resetValidity();
      }
      this.updateValidity();
    }
    setValue(...args) {
      const [value, state] = args;
      this.internals.setFormValue(value, state);
    }
    get allValidators() {
      const staticValidators = this.constructor.validators || [];
      const validators = this.validators || [];
      return [...staticValidators, ...validators];
    }
resetValidity() {
      this.setCustomValidity("");
      this.setValidity({});
    }
    updateValidity() {
      if (this.disabled || this.hasAttribute("disabled") || !this.willValidate) {
        this.resetValidity();
        return;
      }
      const validators = this.allValidators;
      if (!validators?.length) {
        return;
      }
      const flags = {
customError: Boolean(this.customError)
      };
      const formControl = this.validationTarget || this.input || void 0;
      let finalMessage = "";
      for (const validator of validators) {
        const { isValid, message, invalidKeys } = validator.checkValidity(this);
        if (isValid) {
          continue;
        }
        if (!finalMessage) {
          finalMessage = message;
        }
        if (invalidKeys?.length >= 0) {
          invalidKeys.forEach((str) => flags[str] = true);
        }
      }
      if (!finalMessage) {
        finalMessage = this.validationMessage;
      }
      this.setValidity(flags, finalMessage, formControl);
    }
  };
  WebAwesomeFormAssociatedElement.formAssociated = true;
  __decorateClass([
    n$1({ reflect: true })
  ], WebAwesomeFormAssociatedElement.prototype, "name", 2);
  __decorateClass([
    n$1({ type: Boolean })
  ], WebAwesomeFormAssociatedElement.prototype, "disabled", 2);
  __decorateClass([
    n$1({ state: true, attribute: false })
  ], WebAwesomeFormAssociatedElement.prototype, "valueHasChanged", 2);
  __decorateClass([
    n$1({ state: true, attribute: false })
  ], WebAwesomeFormAssociatedElement.prototype, "hasInteracted", 2);
  __decorateClass([
    n$1({ attribute: "custom-error", reflect: true })
  ], WebAwesomeFormAssociatedElement.prototype, "customError", 2);
  __decorateClass([
    n$1({ attribute: false, state: true, type: Object })
  ], WebAwesomeFormAssociatedElement.prototype, "validity", 1);
  var size_default = "@layer wa-utilities {\n  :host([size='small']),\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  :host([size='medium']),\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  :host([size='large']),\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n";
  var variants_default = "@layer wa-utilities {\n  :where(:root),\n  .wa-neutral,\n  :host([variant='neutral']) {\n    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-neutral-border-loud);\n    --wa-color-border-normal: var(--wa-color-neutral-border-normal);\n    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);\n    --wa-color-on-loud: var(--wa-color-neutral-on-loud);\n    --wa-color-on-normal: var(--wa-color-neutral-on-normal);\n    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);\n  }\n\n  .wa-brand,\n  :host([variant='brand']) {\n    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-brand-border-loud);\n    --wa-color-border-normal: var(--wa-color-brand-border-normal);\n    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);\n    --wa-color-on-loud: var(--wa-color-brand-on-loud);\n    --wa-color-on-normal: var(--wa-color-brand-on-normal);\n    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);\n  }\n\n  .wa-success,\n  :host([variant='success']) {\n    --wa-color-fill-loud: var(--wa-color-success-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-success-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-success-border-loud);\n    --wa-color-border-normal: var(--wa-color-success-border-normal);\n    --wa-color-border-quiet: var(--wa-color-success-border-quiet);\n    --wa-color-on-loud: var(--wa-color-success-on-loud);\n    --wa-color-on-normal: var(--wa-color-success-on-normal);\n    --wa-color-on-quiet: var(--wa-color-success-on-quiet);\n  }\n\n  .wa-warning,\n  :host([variant='warning']) {\n    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-warning-border-loud);\n    --wa-color-border-normal: var(--wa-color-warning-border-normal);\n    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);\n    --wa-color-on-loud: var(--wa-color-warning-on-loud);\n    --wa-color-on-normal: var(--wa-color-warning-on-normal);\n    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);\n  }\n\n  .wa-danger,\n  :host([variant='danger']) {\n    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-danger-border-loud);\n    --wa-color-border-normal: var(--wa-color-danger-border-normal);\n    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);\n    --wa-color-on-loud: var(--wa-color-danger-on-loud);\n    --wa-color-on-normal: var(--wa-color-danger-on-normal);\n    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);\n  }\n}\n";
  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o$2 = (o2) => o2 ?? E;
  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const a = Symbol.for(""), o$1 = (t2) => {
    if (t2?.r === a) return t2?._$litStatic$;
  }, i$1 = (t2, ...r2) => ({ _$litStatic$: r2.reduce(((r3, e3, a2) => r3 + ((t3) => {
    if (void 0 !== t3._$litStatic$) return t3._$litStatic$;
    throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t3}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
  })(e3) + t2[a2 + 1]), t2[0]), r: a }), l = new Map(), n2 = (t2) => (r2, ...e3) => {
    const a2 = e3.length;
    let s2, i4;
    const n3 = [], u2 = [];
    let c2, $2 = 0, f2 = false;
    for (; $2 < a2; ) {
      for (c2 = r2[$2]; $2 < a2 && void 0 !== (i4 = e3[$2], s2 = o$1(i4)); ) c2 += s2 + r2[++$2], f2 = true;
      $2 !== a2 && u2.push(i4), n3.push(c2), $2++;
    }
    if ($2 === a2 && n3.push(r2[a2]), f2) {
      const t3 = n3.join("$$lit$$");
      void 0 === (r2 = l.get(t3)) && (n3.raw = n3, l.set(t3, r2 = n3)), e3 = u2;
    }
    return t2(r2, ...e3);
  }, u = n2(x);
  var button_default = "@layer wa-component {\n  :host {\n    display: inline-block;\n\n    /* Workaround because Chrome doesn't like :host(:has()) below\n     * https://issues.chromium.org/issues/40062355 \n     * Firefox doesn't like this nested rule, so both are needed */\n    &:has(wa-badge) {\n      position: relative;\n    }\n  }\n\n  /* Apply relative positioning only when needed to position wa-badge\n   * This avoids creating a new stacking context for every button */\n  :host(:has(wa-badge)) {\n    position: relative;\n  }\n}\n\n.button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  white-space: nowrap;\n  vertical-align: middle;\n  transition-property: background, border, box-shadow, color;\n  transition-duration: var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n  cursor: pointer;\n  padding: 0 var(--wa-form-control-padding-inline);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: var(--wa-font-weight-action);\n  line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);\n  height: var(--wa-form-control-height);\n  width: 100%;\n\n  background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));\n  border-color: transparent;\n  color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-border-style);\n  border-width: var(--wa-border-width-s);\n}\n\n/* Appearance modifiers */\n:host([appearance~='plain']) {\n  .button {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: transparent;\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n:host([appearance~='outlined']) {\n  .button {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: transparent;\n    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n:host([appearance~='filled']) {\n  .button {\n    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n    background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n      background-color: color-mix(\n        in oklab,\n        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n        var(--wa-color-mix-hover)\n      );\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n:host([appearance~='filled'][appearance~='outlined']) .button {\n  border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));\n}\n\n:host([appearance~='accent']) {\n  .button {\n    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));\n    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      background-color: color-mix(\n        in oklab,\n        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),\n        var(--wa-color-mix-hover)\n      );\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n/* Focus states */\n.button:focus {\n  outline: none;\n}\n\n.button:focus-visible {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/* Disabled state */\n.button.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/* When disabled, prevent mouse events from bubbling up from children */\n.button.disabled * {\n  pointer-events: none;\n}\n\n/* Keep it last so Safari doesn't stop parsing this block */\n.button::-moz-focus-inner {\n  border: 0;\n}\n\n/* Icon buttons */\n.button.is-icon-button {\n  outline-offset: 2px;\n  width: var(--wa-form-control-height);\n  aspect-ratio: 1;\n}\n\n/* Pill modifier */\n:host([pill]) .button {\n  border-radius: var(--wa-border-radius-pill);\n}\n\n/*\n * Label\n */\n\n.start,\n.end {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n}\n\n.label {\n  display: inline-block;\n}\n\n.is-icon-button .label {\n  display: flex;\n}\n\n.label::slotted(wa-icon) {\n  align-self: center;\n}\n\n/*\n * Caret modifier\n */\n\nwa-icon[part~='caret'] {\n  display: flex;\n  align-self: center;\n  align-items: center;\n\n  &::part(svg) {\n    width: 0.875em;\n    height: 0.875em;\n  }\n\n  .button:has(&) .end {\n    display: none;\n  }\n}\n\n/*\n * Loading modifier\n */\n\n.loading {\n  position: relative;\n  cursor: wait;\n\n  .start,\n  .label,\n  .end,\n  .caret {\n    visibility: hidden;\n  }\n\n  wa-spinner {\n    --indicator-color: currentColor;\n    --track-color: color-mix(in oklab, currentColor, transparent 90%);\n\n    position: absolute;\n    font-size: 1em;\n    height: 1em;\n    width: 1em;\n    top: calc(50% - 0.5em);\n    left: calc(50% - 0.5em);\n  }\n}\n\n/*\n * Badges\n */\n\nbutton ::slotted(wa-badge) {\n  border-color: var(--wa-color-surface-default);\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-end: 0;\n  translate: 50% -50%;\n  pointer-events: none;\n}\n\n:host(:dir(rtl)) ::slotted(wa-badge) {\n  translate: -50% -50%;\n}\n\n/*\n* Button spacing\n*/\n\nslot[name='start']::slotted(*) {\n  margin-inline-end: 0.75em;\n}\n\nslot[name='end']::slotted(*),\n.button:not(.visually-hidden-label) [part~='caret'] {\n  margin-inline-start: 0.75em;\n}\n\n/*\n * Button group border radius modifications\n */\n\n/* Remove border radius from all grouped buttons by default */\n:host(.wa-button-group__button) .button {\n  border-radius: 0;\n}\n\n/* Horizontal orientation */\n:host(.wa-button-group__horizontal.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-form-control-border-radius);\n  border-end-start-radius: var(--wa-form-control-border-radius);\n}\n\n:host(.wa-button-group__horizontal.wa-button-group__button-last) .button {\n  border-start-end-radius: var(--wa-form-control-border-radius);\n  border-end-end-radius: var(--wa-form-control-border-radius);\n}\n\n/* Vertical orientation */\n:host(.wa-button-group__vertical) {\n  flex: 1 1 auto;\n}\n\n:host(.wa-button-group__vertical) .button {\n  width: 100%;\n  justify-content: start;\n}\n\n:host(.wa-button-group__vertical.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-form-control-border-radius);\n  border-start-end-radius: var(--wa-form-control-border-radius);\n}\n\n:host(.wa-button-group__vertical.wa-button-group__button-last) .button {\n  border-end-start-radius: var(--wa-form-control-border-radius);\n  border-end-end-radius: var(--wa-form-control-border-radius);\n}\n\n/* Handle pill modifier for button groups */\n:host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-border-radius-pill);\n  border-end-start-radius: var(--wa-border-radius-pill);\n}\n\n:host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {\n  border-start-end-radius: var(--wa-border-radius-pill);\n  border-end-end-radius: var(--wa-border-radius-pill);\n}\n\n:host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-border-radius-pill);\n  border-start-end-radius: var(--wa-border-radius-pill);\n}\n\n:host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {\n  border-end-start-radius: var(--wa-border-radius-pill);\n  border-end-end-radius: var(--wa-border-radius-pill);\n}\n";
  var WaButton = class extends WebAwesomeFormAssociatedElement {
    constructor() {
      super(...arguments);
      this.assumeInteractionOn = ["click"];
      this.hasSlotController = new HasSlotController(this, "[default]", "start", "end");
      this.localize = new LocalizeController2(this);
      this.invalid = false;
      this.isIconButton = false;
      this.title = "";
      this.variant = "neutral";
      this.appearance = "accent";
      this.size = "medium";
      this.withCaret = false;
      this.disabled = false;
      this.loading = false;
      this.pill = false;
      this.type = "button";
      this.form = null;
    }
    static get validators() {
      return [...super.validators, MirrorValidator()];
    }
    constructLightDOMButton() {
      const button = document.createElement("button");
      button.type = this.type;
      button.style.position = "absolute";
      button.style.width = "0";
      button.style.height = "0";
      button.style.clipPath = "inset(50%)";
      button.style.overflow = "hidden";
      button.style.whiteSpace = "nowrap";
      if (this.name) {
        button.name = this.name;
      }
      button.value = this.value || "";
      ["form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
        if (this.hasAttribute(attr)) {
          button.setAttribute(attr, this.getAttribute(attr));
        }
      });
      return button;
    }
    handleClick() {
      const form = this.getForm();
      if (!form) return;
      const lightDOMButton = this.constructLightDOMButton();
      this.parentElement?.append(lightDOMButton);
      lightDOMButton.click();
      lightDOMButton.remove();
    }
    handleInvalid() {
      this.dispatchEvent(new WaInvalidEvent());
    }
    handleLabelSlotChange() {
      const nodes = this.labelSlot.assignedNodes({ flatten: true });
      let hasIconLabel = false;
      let hasIcon = false;
      let text = "";
      [...nodes].forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE && node.localName === "wa-icon") {
          hasIcon = true;
          if (!hasIconLabel) hasIconLabel = node.hasAttribute("label");
        }
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent;
        }
      });
      this.isIconButton = text.trim() === "" && hasIcon;
      if (this.isIconButton && !hasIconLabel) {
        console.warn(
          'Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',
          this
        );
      }
    }
    isButton() {
      return this.href ? false : true;
    }
    isLink() {
      return this.href ? true : false;
    }
    handleDisabledChange() {
      this.updateValidity();
    }
setValue(..._args) {
    }
click() {
      this.button.click();
    }
focus(options) {
      this.button.focus(options);
    }
blur() {
      this.button.blur();
    }
    render() {
      const isLink = this.isLink();
      const tag = isLink ? i$1`a` : i$1`button`;
      return u`
      <${tag}
        part="base"
        class=${e$3({
      button: true,
      caret: this.withCaret,
      disabled: this.disabled,
      loading: this.loading,
      rtl: this.localize.dir() === "rtl",
      "has-label": this.hasSlotController.test("[default]"),
      "has-start": this.hasSlotController.test("start"),
      "has-end": this.hasSlotController.test("end"),
      "is-icon-button": this.isIconButton
    })}
        ?disabled=${o$2(isLink ? void 0 : this.disabled)}
        type=${o$2(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${o$2(isLink ? void 0 : this.name)}
        value=${o$2(isLink ? void 0 : this.value)}
        href=${o$2(isLink ? this.href : void 0)}
        target=${o$2(isLink ? this.target : void 0)}
        download=${o$2(isLink ? this.download : void 0)}
        rel=${o$2(isLink && this.rel ? this.rel : void 0)}
        role=${o$2(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret ? u`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              ` : ""}
        ${this.loading ? u`<wa-spinner part="spinner"></wa-spinner>` : ""}
      </${tag}>
    `;
    }
  };
  WaButton.css = [button_default, variants_default, size_default];
  __decorateClass([
    e$5(".button")
  ], WaButton.prototype, "button", 2);
  __decorateClass([
    e$5("slot:not([name])")
  ], WaButton.prototype, "labelSlot", 2);
  __decorateClass([
    r$1()
  ], WaButton.prototype, "invalid", 2);
  __decorateClass([
    r$1()
  ], WaButton.prototype, "isIconButton", 2);
  __decorateClass([
    n$1()
  ], WaButton.prototype, "title", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaButton.prototype, "variant", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaButton.prototype, "appearance", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaButton.prototype, "size", 2);
  __decorateClass([
    n$1({ attribute: "with-caret", type: Boolean, reflect: true })
  ], WaButton.prototype, "withCaret", 2);
  __decorateClass([
    n$1({ type: Boolean })
  ], WaButton.prototype, "disabled", 2);
  __decorateClass([
    n$1({ type: Boolean, reflect: true })
  ], WaButton.prototype, "loading", 2);
  __decorateClass([
    n$1({ type: Boolean, reflect: true })
  ], WaButton.prototype, "pill", 2);
  __decorateClass([
    n$1()
  ], WaButton.prototype, "type", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaButton.prototype, "name", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaButton.prototype, "value", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaButton.prototype, "href", 2);
  __decorateClass([
    n$1()
  ], WaButton.prototype, "target", 2);
  __decorateClass([
    n$1()
  ], WaButton.prototype, "rel", 2);
  __decorateClass([
    n$1()
  ], WaButton.prototype, "download", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaButton.prototype, "form", 2);
  __decorateClass([
    n$1({ attribute: "formaction" })
  ], WaButton.prototype, "formAction", 2);
  __decorateClass([
    n$1({ attribute: "formenctype" })
  ], WaButton.prototype, "formEnctype", 2);
  __decorateClass([
    n$1({ attribute: "formmethod" })
  ], WaButton.prototype, "formMethod", 2);
  __decorateClass([
    n$1({ attribute: "formnovalidate", type: Boolean })
  ], WaButton.prototype, "formNoValidate", 2);
  __decorateClass([
    n$1({ attribute: "formtarget" })
  ], WaButton.prototype, "formTarget", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], WaButton.prototype, "handleDisabledChange", 1);
  WaButton = __decorateClass([
    t$1("wa-button")
  ], WaButton);
  var spinner_default = ":host {\n  --track-width: 2px;\n  --track-color: var(--wa-color-neutral-fill-normal);\n  --indicator-color: var(--wa-color-brand-fill-loud);\n  --speed: 2s;\n\n  /* Resizing a spinner element using anything but font-size will break the animation because the animation uses em units.\n   Therefore, if a spinner is used in a flex container without `flex: none` applied, the spinner can grow/shrink and\n   break the animation. The use of `flex: none` on the host element prevents this by always having the spinner sized\n   according to its actual dimensions.\n  */\n  flex: none;\n  display: inline-flex;\n  width: 1em;\n  height: 1em;\n}\n\nsvg {\n  width: 100%;\n  height: 100%;\n  aspect-ratio: 1;\n  animation: spin var(--speed) linear infinite;\n}\n\n.track {\n  stroke: var(--track-color);\n}\n\n.indicator {\n  stroke: var(--indicator-color);\n  stroke-dasharray: 75, 100;\n  stroke-dashoffset: -5;\n  animation: dash 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n";
  var WaSpinner = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
    }
    render() {
      return x`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `;
    }
  };
  WaSpinner.css = spinner_default;
  WaSpinner = __decorateClass([
    t$1("wa-spinner")
  ], WaSpinner);
  var WaLoadEvent = class extends Event {
    constructor() {
      super("wa-load", { bubbles: true, cancelable: false, composed: true });
    }
  };
  var kitCode = "";
  function setKitCode(code) {
    kitCode = code;
  }
  function getKitCode() {
    if (!kitCode) {
      const el = document.querySelector("[data-fa-kit-code]");
      if (el) {
        setKitCode(el.getAttribute("data-fa-kit-code") || "");
      }
    }
    return kitCode;
  }
  var FA_VERSION = "7.0.1";
  function getIconUrl(name, family, variant) {
    const kitCode2 = getKitCode();
    const isPro = kitCode2.length > 0;
    let folder = "solid";
    if (family === "notdog") {
      if (variant === "solid") folder = "solid";
      if (variant === "duo-solid") folder = "duo-solid";
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/notdog-${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === "chisel") {
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/chisel-regular/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === "etch") {
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/etch-solid/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === "jelly") {
      if (variant === "regular") folder = "regular";
      if (variant === "duo-regular") folder = "duo-regular";
      if (variant === "fill-regular") folder = "fill-regular";
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/jelly-${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === "slab") {
      if (variant === "solid" || variant === "regular") folder = "regular";
      if (variant === "press-regular") folder = "press-regular";
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/slab-${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === "thumbprint") {
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/thumbprint-light/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === "whiteboard") {
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/whiteboard-semibold/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === "classic") {
      if (variant === "thin") folder = "thin";
      if (variant === "light") folder = "light";
      if (variant === "regular") folder = "regular";
      if (variant === "solid") folder = "solid";
    }
    if (family === "sharp") {
      if (variant === "thin") folder = "sharp-thin";
      if (variant === "light") folder = "sharp-light";
      if (variant === "regular") folder = "sharp-regular";
      if (variant === "solid") folder = "sharp-solid";
    }
    if (family === "duotone") {
      if (variant === "thin") folder = "duotone-thin";
      if (variant === "light") folder = "duotone-light";
      if (variant === "regular") folder = "duotone-regular";
      if (variant === "solid") folder = "duotone";
    }
    if (family === "sharp-duotone") {
      if (variant === "thin") folder = "sharp-duotone-thin";
      if (variant === "light") folder = "sharp-duotone-light";
      if (variant === "regular") folder = "sharp-duotone-regular";
      if (variant === "solid") folder = "sharp-duotone-solid";
    }
    if (family === "brands") {
      folder = "brands";
    }
    return isPro ? `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}` : `https://ka-f.fontawesome.com/releases/v${FA_VERSION}/svgs/${folder}/${name}.svg`;
  }
  var library = {
    name: "default",
    resolver: (name, family = "classic", variant = "solid") => {
      return getIconUrl(name, family, variant);
    },
    mutator: (svg, hostEl) => {
      if (hostEl?.family && !svg.hasAttribute("data-duotone-initialized")) {
        const { family, variant } = hostEl;
        if (
family === "duotone" ||
family === "sharp-duotone" ||
family === "notdog" && variant === "duo-solid" ||
family === "jelly" && variant === "duo-regular" ||
family === "thumbprint"
        ) {
          const paths = [...svg.querySelectorAll("path")];
          const primaryPath = paths.find((p2) => !p2.hasAttribute("opacity"));
          const secondaryPath = paths.find((p2) => p2.hasAttribute("opacity"));
          if (!primaryPath || !secondaryPath) return;
          primaryPath.setAttribute("data-duotone-primary", "");
          secondaryPath.setAttribute("data-duotone-secondary", "");
          if (hostEl.swapOpacity && primaryPath && secondaryPath) {
            const originalOpacity = secondaryPath.getAttribute("opacity") || "0.4";
            primaryPath.style.setProperty("--path-opacity", originalOpacity);
            secondaryPath.style.setProperty("--path-opacity", "1");
          }
          svg.setAttribute("data-duotone-initialized", "");
        }
      }
    }
  };
  var library_default_default = library;
  function dataUri(svg) {
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }
  var icons = {


solid: {
      check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,
      "chevron-down": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,
      "chevron-left": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,
      "chevron-right": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,
      circle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,
      eyedropper: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,
      "grip-vertical": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,
      indeterminate: `<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,
      minus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,
      pause: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,
      play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,
      star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,
      user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,
      xmark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`
    },


regular: {
      "circle-question": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,
      "circle-xmark": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,
      copy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,
      eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,
      "eye-slash": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,
      star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`
    }
  };
  var systemLibrary = {
    name: "system",
    resolver: (name, _family = "classic", variant = "solid") => {
      let collection = icons[variant];
      let svg = collection[name] ?? icons.regular[name] ?? icons.regular["circle-question"];
      if (svg) {
        return dataUri(svg);
      }
      return "";
    }
  };
  var library_system_default = systemLibrary;
  var defaultIconFamily = "classic";
  var registry = [library_default_default, library_system_default];
  var watchedIcons = [];
  function watchIcon(icon) {
    watchedIcons.push(icon);
  }
  function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el) => el !== icon);
  }
  function getIconLibrary(name) {
    return registry.find((lib) => lib.name === name);
  }
  function getDefaultIconFamily() {
    return defaultIconFamily;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$2 = (o2, t2) => void 0 !== o2?._$litType$;
  var WaErrorEvent = class extends Event {
    constructor() {
      super("wa-error", { bubbles: true, cancelable: false, composed: true });
    }
  };
  var icon_default = ":host {\n  --primary-color: currentColor;\n  --primary-opacity: 1;\n  --secondary-color: currentColor;\n  --secondary-opacity: 0.4;\n\n  box-sizing: content-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: -0.125em;\n}\n\n/* Standard */\n:host(:not([auto-width])) {\n  width: 1.25em;\n  height: 1em;\n}\n\n/* Auto-width */\n:host([auto-width]) {\n  width: auto;\n  height: 1em;\n}\n\nsvg {\n  height: 1em;\n  fill: currentColor;\n  overflow: visible;\n\n  /* Duotone colors with path-specific opacity fallback */\n  path[data-duotone-primary] {\n    color: var(--primary-color);\n    opacity: var(--path-opacity, var(--primary-opacity));\n  }\n\n  path[data-duotone-secondary] {\n    color: var(--secondary-color);\n    opacity: var(--path-opacity, var(--secondary-opacity));\n  }\n}\n";
  var CACHEABLE_ERROR = Symbol();
  var RETRYABLE_ERROR = Symbol();
  var parser;
  var iconCache = new Map();
  var WaIcon = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.svg = null;
      this.swapOpacity = false;
      this.label = "";
      this.library = "default";
      this.resolveIcon = async (url, library2) => {
        let fileData;
        if (library2?.spriteSheet) {
          if (!this.hasUpdated) {
            await this.updateComplete;
          }
          this.svg = x`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
          await this.updateComplete;
          const svg = this.shadowRoot.querySelector("[part='svg']");
          if (typeof library2.mutator === "function") {
            library2.mutator(svg, this);
          }
          return this.svg;
        }
        try {
          fileData = await fetch(url, { mode: "cors" });
          if (!fileData.ok) return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
        } catch {
          return RETRYABLE_ERROR;
        }
        try {
          const div = document.createElement("div");
          div.innerHTML = await fileData.text();
          const svg = div.firstElementChild;
          if (svg?.tagName?.toLowerCase() !== "svg") return CACHEABLE_ERROR;
          if (!parser) parser = new DOMParser();
          const doc = parser.parseFromString(svg.outerHTML, "text/html");
          const svgEl = doc.body.querySelector("svg");
          if (!svgEl) return CACHEABLE_ERROR;
          svgEl.part.add("svg");
          return document.adoptNode(svgEl);
        } catch {
          return CACHEABLE_ERROR;
        }
      };
    }
    connectedCallback() {
      super.connectedCallback();
      watchIcon(this);
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unwatchIcon(this);
    }
    getIconSource() {
      const library2 = getIconLibrary(this.library);
      const family = this.family || getDefaultIconFamily();
      if (this.name && library2) {
        return {
          url: library2.resolver(this.name, family, this.variant, this.autoWidth),
          fromLibrary: true
        };
      }
      return {
        url: this.src,
        fromLibrary: false
      };
    }
    handleLabelChange() {
      const hasLabel = typeof this.label === "string" && this.label.length > 0;
      if (hasLabel) {
        this.setAttribute("role", "img");
        this.setAttribute("aria-label", this.label);
        this.removeAttribute("aria-hidden");
      } else {
        this.removeAttribute("role");
        this.removeAttribute("aria-label");
        this.setAttribute("aria-hidden", "true");
      }
    }
    async setIcon() {
      const { url, fromLibrary } = this.getIconSource();
      const library2 = fromLibrary ? getIconLibrary(this.library) : void 0;
      if (!url) {
        this.svg = null;
        return;
      }
      let iconResolver = iconCache.get(url);
      if (!iconResolver) {
        iconResolver = this.resolveIcon(url, library2);
        iconCache.set(url, iconResolver);
      }
      const svg = await iconResolver;
      if (svg === RETRYABLE_ERROR) {
        iconCache.delete(url);
      }
      if (url !== this.getIconSource().url) {
        return;
      }
      if (e$2(svg)) {
        this.svg = svg;
        return;
      }
      switch (svg) {
        case RETRYABLE_ERROR:
        case CACHEABLE_ERROR:
          this.svg = null;
          this.dispatchEvent(new WaErrorEvent());
          break;
        default:
          this.svg = svg.cloneNode(true);
          library2?.mutator?.(this.svg, this);
          this.dispatchEvent(new WaLoadEvent());
      }
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      const library2 = getIconLibrary(this.library);
      const svg = this.shadowRoot?.querySelector("svg");
      if (svg) {
        library2?.mutator?.(svg, this);
      }
    }
    render() {
      if (this.hasUpdated) {
        return this.svg;
      }
      return x`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`;
    }
  };
  WaIcon.css = icon_default;
  __decorateClass([
    r$1()
  ], WaIcon.prototype, "svg", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaIcon.prototype, "name", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaIcon.prototype, "family", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaIcon.prototype, "variant", 2);
  __decorateClass([
    n$1({ attribute: "auto-width", type: Boolean, reflect: true })
  ], WaIcon.prototype, "autoWidth", 2);
  __decorateClass([
    n$1({ attribute: "swap-opacity", type: Boolean, reflect: true })
  ], WaIcon.prototype, "swapOpacity", 2);
  __decorateClass([
    n$1()
  ], WaIcon.prototype, "src", 2);
  __decorateClass([
    n$1()
  ], WaIcon.prototype, "label", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaIcon.prototype, "library", 2);
  __decorateClass([
    watch("label")
  ], WaIcon.prototype, "handleLabelChange", 1);
  __decorateClass([
    watch(["family", "name", "library", "variant", "src", "autoWidth", "swapOpacity"])
  ], WaIcon.prototype, "setIcon", 1);
  WaIcon = __decorateClass([
    t$1("wa-icon")
  ], WaIcon);
  var WaClearEvent = class extends Event {
    constructor() {
      super("wa-clear", { bubbles: true, cancelable: false, composed: true });
    }
  };
  var RequiredValidator = (options = {}) => {
    let { validationElement, validationProperty } = options;
    if (!validationElement) {
      validationElement = Object.assign(document.createElement("input"), { required: true });
    }
    if (!validationProperty) {
      validationProperty = "value";
    }
    const obj = {
      observedAttributes: ["required"],
      message: validationElement.validationMessage,
checkValidity(element) {
        const validity = {
          message: "",
          isValid: true,
          invalidKeys: []
        };
        const isRequired = element.required ?? element.hasAttribute("required");
        if (!isRequired) {
          return validity;
        }
        const value = element[validationProperty];
        const isEmpty = !value;
        if (isEmpty) {
          validity.message = typeof obj.message === "function" ? obj.message(element) : obj.message || "";
          validity.isValid = false;
          validity.invalidKeys.push("valueMissing");
        }
        return validity;
      }
    };
    return obj;
  };
  var form_control_default = ":host {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Label */\n:is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {\n  display: inline-block;\n  color: var(--wa-form-control-label-color);\n  font-weight: var(--wa-form-control-label-font-weight);\n  line-height: var(--wa-form-control-label-line-height);\n  margin-block-end: 0.5em;\n\n  :host([required]) &::after {\n    content: var(--wa-form-control-required-content);\n    margin-inline-start: var(--wa-form-control-required-content-offset);\n    color: var(--wa-form-control-required-content-color);\n  }\n}\n\n/* Help text */\n[part~='hint'] {\n  display: block;\n  color: var(--wa-form-control-hint-color);\n  font-weight: var(--wa-form-control-hint-font-weight);\n  line-height: var(--wa-form-control-hint-line-height);\n  margin-block-start: 0.5em;\n  font-size: var(--wa-font-size-smaller);\n  line-height: var(--wa-form-control-label-line-height);\n\n  &:not(.has-slotted) {\n    display: none;\n  }\n}\n";
  function waitForEvent(el, eventName) {
    return new Promise((resolve) => {
      function done(event) {
        if (event.target === el) {
          el.removeEventListener(eventName, done);
          resolve();
        }
      }
      el.addEventListener(eventName, done);
    });
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  let e$1 = class e extends i$2 {
    constructor(i4) {
      if (super(i4), this.it = E, i4.type !== t.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r2) {
      if (r2 === E || null == r2) return this._t = void 0, this.it = r2;
      if (r2 === T) return r2;
      if ("string" != typeof r2) throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (r2 === this.it) return this._t;
      this.it = r2;
      const s2 = [r2];
      return s2.raw = s2, this._t = { _$litType$: this.constructor.resultType, strings: s2, values: [] };
    }
  };
  e$1.directiveName = "unsafeHTML", e$1.resultType = 1;
  const o = e$4(e$1);
  var select_default = ":host {\n  --tag-max-size: 10ch;\n  --show-duration: 100ms;\n  --hide-duration: 100ms;\n}\n\n/* Add ellipses to multi select options */\n:host wa-tag::part(content) {\n  display: initial;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: var(--tag-max-size);\n}\n\n:host .disabled [part~='combobox'] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  outline: none;\n}\n\n:host .enabled:is(.open, :focus-within) [part~='combobox'] {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/** The popup */\n.select {\n  flex: 1 1 auto;\n  display: inline-flex;\n  width: 100%;\n  position: relative;\n  vertical-align: middle;\n\n  /* Pass through from select to the popup */\n  --show-duration: inherit;\n  --hide-duration: inherit;\n\n  &::part(popup) {\n    z-index: 900;\n  }\n\n  &[data-current-placement^='top']::part(popup) {\n    transform-origin: bottom;\n  }\n\n  &[data-current-placement^='bottom']::part(popup) {\n    transform-origin: top;\n  }\n}\n\n/* Combobox */\n.combobox {\n  flex: 1;\n  display: flex;\n  width: 100%;\n  min-width: 0;\n  align-items: center;\n  justify-content: start;\n\n  min-height: var(--wa-form-control-height);\n\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  color: var(--wa-form-control-value-color);\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  overflow: hidden;\n  padding: 0 var(--wa-form-control-padding-inline);\n  position: relative;\n  vertical-align: middle;\n  width: 100%;\n  transition:\n    background-color var(--wa-transition-normal),\n    border var(--wa-transition-normal),\n    outline var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n\n  :host([multiple]) .select:not(.placeholder-visible) & {\n    padding-inline-start: 0;\n    padding-block: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));\n  }\n\n  /* Pills */\n  :host([pill]) & {\n    border-radius: var(--wa-border-radius-pill);\n  }\n}\n\n/* Appearance modifiers */\n:host([appearance~='outlined']) .combobox {\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n}\n\n:host([appearance~='filled']) .combobox {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-color: var(--wa-color-neutral-fill-quiet);\n}\n\n:host([appearance~='filled'][appearance~='outlined']) .combobox {\n  border-color: var(--wa-form-control-border-color);\n}\n\n.display-input {\n  position: relative;\n  width: 100%;\n  font: inherit;\n  border: none;\n  background: none;\n  line-height: var(--wa-form-control-value-line-height);\n  color: var(--wa-form-control-value-color);\n  cursor: inherit;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  -webkit-appearance: none;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::placeholder {\n    color: var(--wa-form-control-placeholder-color);\n  }\n}\n\n/* Visually hide the display input when multiple is enabled */\n:host([multiple]) .select:not(.placeholder-visible) .display-input {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n\n.value-input {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n}\n\n.tags {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-inline-start: 0.25em;\n  gap: 0.25em;\n\n  &::slotted(wa-tag) {\n    cursor: pointer !important;\n  }\n\n  .disabled &,\n  .disabled &::slotted(wa-tag) {\n    cursor: not-allowed !important;\n  }\n}\n\n/* Start and End */\n\n.start,\n.end {\n  flex: 0;\n  display: inline-flex;\n  align-items: center;\n  color: var(--wa-color-neutral-on-quiet);\n}\n\n.end::slotted(*) {\n  margin-inline-start: var(--wa-form-control-padding-inline);\n}\n\n.start::slotted(*) {\n  margin-inline-end: var(--wa-form-control-padding-inline);\n}\n\n:host([multiple]) .start::slotted(*) {\n  margin-inline: var(--wa-form-control-padding-inline);\n}\n\n/* Clear button */\n[part~='clear-button'] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: inherit;\n  color: var(--wa-color-neutral-on-quiet);\n  border: none;\n  background: none;\n  padding: 0;\n  transition: color var(--wa-transition-normal);\n  cursor: pointer;\n  margin-inline-start: var(--wa-form-control-padding-inline);\n\n  &:focus {\n    outline: none;\n  }\n\n  @media (hover: hover) {\n    &:hover {\n      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));\n    }\n  }\n\n  &:active {\n    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));\n  }\n}\n\n/* Expand icon */\n.expand-icon {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  color: var(--wa-color-neutral-on-quiet);\n  transition: rotate var(--wa-transition-slow) ease;\n  rotate: 0deg;\n  margin-inline-start: var(--wa-form-control-padding-inline);\n\n  .open & {\n    rotate: -180deg;\n  }\n}\n\n/* Listbox */\n.listbox {\n  display: block;\n  position: relative;\n  font: inherit;\n  box-shadow: var(--wa-shadow-m);\n  background: var(--wa-color-surface-raised);\n  border-color: var(--wa-color-surface-border);\n  border-radius: var(--wa-border-radius-m);\n  border-style: var(--wa-border-style);\n  border-width: var(--wa-border-width-s);\n  padding-block: 0.5em;\n  padding-inline: 0;\n  overflow: auto;\n  overscroll-behavior: none;\n\n  /* Make sure it adheres to the popup's auto size */\n  max-width: var(--auto-size-available-width);\n  max-height: var(--auto-size-available-height);\n\n  &::slotted(wa-divider) {\n    --spacing: 0.5em;\n  }\n}\n\nslot:not([name])::slotted(small) {\n  display: block;\n  font-size: var(--wa-font-size-smaller);\n  font-weight: var(--wa-font-weight-semibold);\n  color: var(--wa-color-text-quiet);\n  padding-block: 0.5em;\n  padding-inline: 2.25em;\n}\n";
  var WaSelect = class extends WebAwesomeFormAssociatedElement {
    constructor() {
      super(...arguments);
      this.assumeInteractionOn = ["blur", "input"];
      this.hasSlotController = new HasSlotController(this, "hint", "label");
      this.localize = new LocalizeController2(this);
      this.typeToSelectString = "";
      this.displayLabel = "";
      this.selectedOptions = [];
      this.name = "";
      this._defaultValue = null;
      this.size = "medium";
      this.placeholder = "";
      this.multiple = false;
      this.maxOptionsVisible = 3;
      this.disabled = false;
      this.withClear = false;
      this.open = false;
      this.appearance = "outlined";
      this.pill = false;
      this.label = "";
      this.placement = "bottom";
      this.hint = "";
      this.withLabel = false;
      this.withHint = false;
      this.form = null;
      this.required = false;
      this.getTag = (option) => {
        return x`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
        >
          ${option.label}
        </wa-tag>
      `;
      };
      this.handleDocumentFocusIn = (event) => {
        const path = event.composedPath();
        if (this && !path.includes(this)) {
          this.hide();
        }
      };
      this.handleDocumentKeyDown = (event) => {
        const target = event.target;
        const isClearButton = target.closest('[part~="clear-button"]') !== null;
        const isButton = target.closest("wa-button") !== null;
        if (isClearButton || isButton) {
          return;
        }
        if (event.key === "Escape" && this.open) {
          event.preventDefault();
          event.stopPropagation();
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
        if (event.key === "Enter" || event.key === " " && this.typeToSelectString === "") {
          event.preventDefault();
          event.stopImmediatePropagation();
          if (!this.open) {
            this.show();
            return;
          }
          if (this.currentOption && !this.currentOption.disabled) {
            this.valueHasChanged = true;
            this.hasInteracted = true;
            if (this.multiple) {
              this.toggleOptionSelection(this.currentOption);
            } else {
              this.setSelectedOptions(this.currentOption);
            }
            this.updateComplete.then(() => {
              this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
              this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
            });
            if (!this.multiple) {
              this.hide();
              this.displayInput.focus({ preventScroll: true });
            }
          }
          return;
        }
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
          const allOptions = this.getAllOptions();
          const currentIndex = allOptions.indexOf(this.currentOption);
          let newIndex = Math.max(0, currentIndex);
          event.preventDefault();
          if (!this.open) {
            this.show();
            if (this.currentOption) {
              return;
            }
          }
          if (event.key === "ArrowDown") {
            newIndex = currentIndex + 1;
            if (newIndex > allOptions.length - 1) newIndex = 0;
          } else if (event.key === "ArrowUp") {
            newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = allOptions.length - 1;
          } else if (event.key === "Home") {
            newIndex = 0;
          } else if (event.key === "End") {
            newIndex = allOptions.length - 1;
          }
          this.setCurrentOption(allOptions[newIndex]);
        }
        if (event.key?.length === 1 || event.key === "Backspace") {
          const allOptions = this.getAllOptions();
          if (event.metaKey || event.ctrlKey || event.altKey) {
            return;
          }
          if (!this.open) {
            if (event.key === "Backspace") {
              return;
            }
            this.show();
          }
          event.stopPropagation();
          event.preventDefault();
          clearTimeout(this.typeToSelectTimeout);
          this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3);
          if (event.key === "Backspace") {
            this.typeToSelectString = this.typeToSelectString.slice(0, -1);
          } else {
            this.typeToSelectString += event.key.toLowerCase();
          }
          for (const option of allOptions) {
            const label = option.label.toLowerCase();
            if (label.startsWith(this.typeToSelectString)) {
              this.setCurrentOption(option);
              break;
            }
          }
        }
      };
      this.handleDocumentMouseDown = (event) => {
        const path = event.composedPath();
        if (this && !path.includes(this)) {
          this.hide();
        }
      };
    }
    static get validators() {
      const validators = [
        RequiredValidator({
          validationElement: Object.assign(document.createElement("select"), { required: true })
        })
      ];
      return [...super.validators, ...validators];
    }
get validationTarget() {
      return this.valueInput;
    }
    set defaultValue(val) {
      this._defaultValue = this.convertDefaultValue(val);
    }
    get defaultValue() {
      return this.convertDefaultValue(this._defaultValue);
    }
convertDefaultValue(val) {
      const isMultiple = this.multiple || this.hasAttribute("multiple");
      if (!isMultiple && Array.isArray(val)) {
        val = val[0];
      }
      return val;
    }
    set value(val) {
      let oldValue = this.value;
      if (val instanceof FormData) {
        val = val.getAll(this.name);
      }
      if (val != null && !Array.isArray(val)) {
        val = [val];
      }
      this._value = val ?? null;
      let newValue = this.value;
      if (newValue !== oldValue) {
        this.valueHasChanged = true;
        this.requestUpdate("value", oldValue);
      }
    }
    get value() {
      let value = this._value ?? this.defaultValue ?? null;
      if (value != null) {
        value = Array.isArray(value) ? value : [value];
      }
      if (value == null) {
        this.optionValues = new Set(null);
      } else {
        this.optionValues = new Set(
          this.getAllOptions().filter((option) => !option.disabled).map((option) => option.value)
        );
      }
      let ret = value;
      if (value != null) {
        ret = value.filter((v2) => this.optionValues.has(v2));
        ret = this.multiple ? ret : ret[0];
        ret = ret ?? null;
      }
      return ret;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleDefaultSlotChange();
      this.open = false;
    }
    updateDefaultValue() {
      const allOptions = this.getAllOptions();
      const defaultSelectedOptions = allOptions.filter((el) => el.hasAttribute("selected") || el.defaultSelected);
      if (defaultSelectedOptions.length > 0) {
        const selectedValues = defaultSelectedOptions.map((el) => el.value);
        this._defaultValue = this.multiple ? selectedValues : selectedValues[0];
      }
      if (this.hasAttribute("value")) {
        this._defaultValue = this.getAttribute("value") || null;
      }
    }
    addOpenListeners() {
      document.addEventListener("focusin", this.handleDocumentFocusIn);
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
      if (this.getRootNode() !== document) {
        this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
      }
    }
    removeOpenListeners() {
      document.removeEventListener("focusin", this.handleDocumentFocusIn);
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
      if (this.getRootNode() !== document) {
        this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
      }
    }
    handleFocus() {
      this.displayInput.setSelectionRange(0, 0);
    }
    handleLabelClick() {
      this.displayInput.focus();
    }
    handleComboboxClick(event) {
      event.preventDefault();
    }
    handleComboboxMouseDown(event) {
      const path = event.composedPath();
      const isButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "wa-button");
      if (this.disabled || isButton) {
        return;
      }
      event.preventDefault();
      this.displayInput.focus({ preventScroll: true });
      this.open = !this.open;
    }
    handleComboboxKeyDown(event) {
      event.stopPropagation();
      this.handleDocumentKeyDown(event);
    }
    handleClearClick(event) {
      event.stopPropagation();
      if (this.value !== null) {
        this.setSelectedOptions([]);
        this.displayInput.focus({ preventScroll: true });
        this.updateComplete.then(() => {
          this.dispatchEvent(new WaClearEvent());
          this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
          this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
        });
      }
    }
    handleClearMouseDown(event) {
      event.stopPropagation();
      event.preventDefault();
    }
    handleOptionClick(event) {
      const target = event.target;
      const option = target.closest("wa-option");
      if (option && !option.disabled) {
        this.hasInteracted = true;
        this.valueHasChanged = true;
        if (this.multiple) {
          this.toggleOptionSelection(option);
        } else {
          this.setSelectedOptions(option);
        }
        this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
        this.requestUpdate("value");
        this.updateComplete.then(() => {
          this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
          this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
        });
        if (!this.multiple) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      }
    }
handleDefaultSlotChange() {
      if (!customElements.get("wa-option")) {
        customElements.whenDefined("wa-option").then(() => this.handleDefaultSlotChange());
      }
      const allOptions = this.getAllOptions();
      this.optionValues = void 0;
      this.updateDefaultValue();
      let value = this.value;
      if (value == null || !this.valueHasChanged && !this.hasInteracted) {
        this.selectionChanged();
        return;
      }
      if (!Array.isArray(value)) {
        value = [value];
      }
      const selectedOptions = allOptions.filter((el) => value.includes(el.value));
      this.setSelectedOptions(selectedOptions);
    }
    handleTagRemove(event, directOption) {
      event.stopPropagation();
      if (this.disabled) return;
      let option = directOption;
      if (!option) {
        const tagElement = event.target.closest("wa-tag[part~=tag]");
        if (tagElement) {
          const tagsContainer = this.shadowRoot?.querySelector('[part="tags"]');
          if (tagsContainer) {
            const allTags = Array.from(tagsContainer.children);
            const index = allTags.indexOf(tagElement);
            if (index >= 0 && index < this.selectedOptions.length) {
              option = this.selectedOptions[index];
            }
          }
        }
      }
      if (option) {
        this.toggleOptionSelection(option, false);
        this.updateComplete.then(() => {
          this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
          this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
        });
      }
    }
getAllOptions() {
      if (!this?.querySelectorAll) {
        return [];
      }
      return [...this.querySelectorAll("wa-option")];
    }
getFirstOption() {
      return this.querySelector("wa-option");
    }

setCurrentOption(option) {
      const allOptions = this.getAllOptions();
      allOptions.forEach((el) => {
        el.current = false;
        el.tabIndex = -1;
      });
      if (option) {
        this.currentOption = option;
        option.current = true;
        option.tabIndex = 0;
        option.focus();
      }
    }
setSelectedOptions(option) {
      const allOptions = this.getAllOptions();
      const newSelectedOptions = Array.isArray(option) ? option : [option];
      allOptions.forEach((el) => {
        if (newSelectedOptions.includes(el)) {
          return;
        }
        el.selected = false;
      });
      if (newSelectedOptions.length) {
        newSelectedOptions.forEach((el) => el.selected = true);
      }
      this.selectionChanged();
    }
toggleOptionSelection(option, force) {
      if (force === true || force === false) {
        option.selected = force;
      } else {
        option.selected = !option.selected;
      }
      this.selectionChanged();
    }

selectionChanged() {
      const options = this.getAllOptions();
      this.selectedOptions = options.filter((el) => {
        if (!this.hasInteracted && !this.valueHasChanged) {
          const defaultValue = this.defaultValue;
          const defaultValues = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
          return el.hasAttribute("selected") || el.defaultSelected || el.selected || defaultValues?.includes(el.value);
        }
        return el.selected;
      });
      let selectedValues = new Set(this.selectedOptions.map((el) => el.value));
      if (selectedValues.size > 0 || this._value) {
        const oldValue = this._value;
        if (this._value == null) {
          let value = this.defaultValue ?? [];
          this._value = Array.isArray(value) ? value : [value];
        }
        this._value = this._value?.filter((value) => !this.optionValues?.has(value)) ?? null;
        this._value?.unshift(...selectedValues);
        this.requestUpdate("value", oldValue);
      }
      if (this.multiple) {
        if (this.placeholder && !this.value?.length) {
          this.displayLabel = "";
        } else {
          this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
        }
      } else {
        const selectedOption = this.selectedOptions[0];
        this.displayLabel = selectedOption?.label ?? "";
      }
      this.updateComplete.then(() => {
        this.updateValidity();
      });
    }
    get tags() {
      return this.selectedOptions.map((option, index) => {
        if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
          const tag = this.getTag(option, index);
          if (!tag) return null;
          return typeof tag === "string" ? o(tag) : tag;
        } else if (index === this.maxOptionsVisible) {
          return x`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length - index}</wa-tag
          >
        `;
        }
        return null;
      });
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      if (changedProperties.has("value")) {
        this.customStates.set("blank", !this.value);
      }
    }
    handleDisabledChange() {
      if (this.disabled && this.open) {
        this.open = false;
      }
    }
    handleValueChange() {
      const allOptions = this.getAllOptions();
      const value = Array.isArray(this.value) ? this.value : [this.value];
      const selectedOptions = allOptions.filter((el) => value.includes(el.value));
      this.setSelectedOptions(selectedOptions);
      this.updateValidity();
    }
    async handleOpenChange() {
      if (this.open && !this.disabled) {
        this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
        const waShowEvent = new WaShowEvent();
        this.dispatchEvent(waShowEvent);
        if (waShowEvent.defaultPrevented) {
          this.open = false;
          return;
        }
        this.addOpenListeners();
        this.listbox.hidden = false;
        this.popup.active = true;
        requestAnimationFrame(() => {
          this.setCurrentOption(this.currentOption);
        });
        await animateWithClass(this.popup.popup, "show");
        if (this.currentOption) {
          scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
        }
        this.dispatchEvent(new WaAfterShowEvent());
      } else {
        const waHideEvent = new WaHideEvent();
        this.dispatchEvent(waHideEvent);
        if (waHideEvent.defaultPrevented) {
          this.open = false;
          return;
        }
        this.removeOpenListeners();
        await animateWithClass(this.popup.popup, "hide");
        this.listbox.hidden = true;
        this.popup.active = false;
        this.dispatchEvent(new WaAfterHideEvent());
      }
    }
async show() {
      if (this.open || this.disabled) {
        this.open = false;
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "wa-after-show");
    }
async hide() {
      if (!this.open || this.disabled) {
        this.open = false;
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "wa-after-hide");
    }
focus(options) {
      this.displayInput.focus(options);
    }
blur() {
      this.displayInput.blur();
    }
    formResetCallback() {
      this.value = this.defaultValue;
      super.formResetCallback();
      this.handleValueChange();
      this.updateComplete.then(() => {
        this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      });
    }
    render() {
      const hasLabelSlot = this.hasUpdated ? this.hasSlotController.test("label") : this.withLabel;
      const hasHintSlot = this.hasUpdated ? this.hasSlotController.test("hint") : this.withHint;
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHint = this.hint ? true : !!hasHintSlot;
      const hasClearIcon = (this.hasUpdated || o$4) && this.withClear && !this.disabled && this.value && this.value.length > 0;
      const isPlaceholderVisible = Boolean(this.placeholder && (!this.value || this.value.length === 0));
      return x`
      <div
        part="form-control"
        class=${e$3({
      "form-control": true,
      "form-control-has-label": hasLabel
    })}
      >
        <label
          id="label"
          part="form-control-label label"
          class="label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${e$3({
      select: true,
      open: this.open,
      disabled: this.disabled,
      enabled: !this.disabled,
      multiple: this.multiple,
      "placeholder-visible": isPlaceholderVisible
    })}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple && this.hasUpdated ? x`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>` : ""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
              />

              ${hasClearIcon ? x`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${e$3({
      "has-slotted": hasHint
    })}
          aria-hidden=${hasHint ? "false" : "true"}
          >${this.hint}</slot
        >
      </div>
    `;
    }
  };
  WaSelect.css = [select_default, form_control_default, size_default];
  __decorateClass([
    e$5(".select")
  ], WaSelect.prototype, "popup", 2);
  __decorateClass([
    e$5(".combobox")
  ], WaSelect.prototype, "combobox", 2);
  __decorateClass([
    e$5(".display-input")
  ], WaSelect.prototype, "displayInput", 2);
  __decorateClass([
    e$5(".value-input")
  ], WaSelect.prototype, "valueInput", 2);
  __decorateClass([
    e$5(".listbox")
  ], WaSelect.prototype, "listbox", 2);
  __decorateClass([
    r$1()
  ], WaSelect.prototype, "displayLabel", 2);
  __decorateClass([
    r$1()
  ], WaSelect.prototype, "currentOption", 2);
  __decorateClass([
    r$1()
  ], WaSelect.prototype, "selectedOptions", 2);
  __decorateClass([
    r$1()
  ], WaSelect.prototype, "optionValues", 2);
  __decorateClass([
    n$1()
  ], WaSelect.prototype, "name", 2);
  __decorateClass([
    n$1({
      attribute: false
    })
  ], WaSelect.prototype, "defaultValue", 1);
  __decorateClass([
    n$1({ attribute: "value", reflect: false })
  ], WaSelect.prototype, "value", 1);
  __decorateClass([
    n$1({ reflect: true })
  ], WaSelect.prototype, "size", 2);
  __decorateClass([
    n$1()
  ], WaSelect.prototype, "placeholder", 2);
  __decorateClass([
    n$1({ type: Boolean, reflect: true })
  ], WaSelect.prototype, "multiple", 2);
  __decorateClass([
    n$1({ attribute: "max-options-visible", type: Number })
  ], WaSelect.prototype, "maxOptionsVisible", 2);
  __decorateClass([
    n$1({ type: Boolean })
  ], WaSelect.prototype, "disabled", 2);
  __decorateClass([
    n$1({ attribute: "with-clear", type: Boolean })
  ], WaSelect.prototype, "withClear", 2);
  __decorateClass([
    n$1({ type: Boolean, reflect: true })
  ], WaSelect.prototype, "open", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaSelect.prototype, "appearance", 2);
  __decorateClass([
    n$1({ type: Boolean, reflect: true })
  ], WaSelect.prototype, "pill", 2);
  __decorateClass([
    n$1()
  ], WaSelect.prototype, "label", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaSelect.prototype, "placement", 2);
  __decorateClass([
    n$1({ attribute: "hint" })
  ], WaSelect.prototype, "hint", 2);
  __decorateClass([
    n$1({ attribute: "with-label", type: Boolean })
  ], WaSelect.prototype, "withLabel", 2);
  __decorateClass([
    n$1({ attribute: "with-hint", type: Boolean })
  ], WaSelect.prototype, "withHint", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaSelect.prototype, "form", 2);
  __decorateClass([
    n$1({ type: Boolean, reflect: true })
  ], WaSelect.prototype, "required", 2);
  __decorateClass([
    n$1({ attribute: false })
  ], WaSelect.prototype, "getTag", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], WaSelect.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("value", { waitUntilFirstUpdate: true })
  ], WaSelect.prototype, "handleValueChange", 1);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], WaSelect.prototype, "handleOpenChange", 1);
  WaSelect = __decorateClass([
    t$1("wa-select")
  ], WaSelect);
  var WaRemoveEvent = class extends Event {
    constructor() {
      super("wa-remove", { bubbles: true, cancelable: false, composed: true });
    }
  };
  var tag_default = "@layer wa-component {\n  :host {\n    display: inline-flex;\n    gap: 0.5em;\n    border-radius: var(--wa-border-radius-m);\n    align-items: center;\n    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));\n    border-style: var(--wa-border-style);\n    border-width: var(--wa-border-width-s);\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    font-size: inherit;\n    line-height: 1;\n    white-space: nowrap;\n    user-select: none;\n    -webkit-user-select: none;\n    height: calc(var(--wa-form-control-height) * 0.8);\n    line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);\n    padding: 0 0.75em;\n  }\n\n  /* Appearance modifiers */\n  :host([appearance~='outlined']) {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: transparent;\n    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));\n  }\n\n  :host([appearance~='filled']) {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n    border-color: transparent;\n  }\n\n  :host([appearance~='filled'][appearance~='outlined']) {\n    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));\n  }\n\n  :host([appearance~='accent']) {\n    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));\n    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));\n    border-color: transparent;\n  }\n}\n\n.content {\n  font-size: var(--wa-font-size-smaller);\n}\n\n[part='remove-button'] {\n  color: inherit;\n  line-height: 1;\n}\n\n[part='remove-button']::part(base) {\n  padding: 0;\n  height: 1em;\n  width: 1em;\n}\n\n@media (hover: hover) {\n  :host(:hover) > [part='remove-button']::part(base) {\n    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));\n  }\n}\n\n:host(:active) > [part='remove-button']::part(base) {\n  color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));\n}\n\n/*\n * Pill modifier\n */\n:host([pill]) {\n  border-radius: var(--wa-border-radius-pill);\n}\n";
  var WaTag = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.variant = "neutral";
      this.appearance = "outlined filled";
      this.size = "medium";
      this.pill = false;
      this.withRemove = false;
    }
    handleRemoveClick() {
      this.dispatchEvent(new WaRemoveEvent());
    }
    render() {
      return x`
      <slot part="content" class="content"></slot>

      ${this.withRemove ? x`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          ` : ""}
    `;
    }
  };
  WaTag.css = [tag_default, variants_default, size_default];
  __decorateClass([
    n$1({ reflect: true })
  ], WaTag.prototype, "variant", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaTag.prototype, "appearance", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaTag.prototype, "size", 2);
  __decorateClass([
    n$1({ type: Boolean, reflect: true })
  ], WaTag.prototype, "pill", 2);
  __decorateClass([
    n$1({ attribute: "with-remove", type: Boolean })
  ], WaTag.prototype, "withRemove", 2);
  WaTag = __decorateClass([
    t$1("wa-tag")
  ], WaTag);
  function getText(root, depth = 0) {
    if (!root || !globalThis.Node) {
      return "";
    }
    if (typeof root[Symbol.iterator] === "function") {
      let nodes = Array.isArray(root) ? root : [...root];
      return nodes.map((node2) => getText(node2, --depth)).join("");
    }
    let node = root;
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent ?? "";
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      let element = node;
      if (element.hasAttribute("slot") || element.matches("style, script")) {
        return "";
      }
      if (element instanceof HTMLSlotElement) {
        let assignedNodes = element.assignedNodes({ flatten: true });
        if (assignedNodes.length > 0) {
          return getText(assignedNodes, --depth);
        }
      }
      return depth > -1 ? getText(element, --depth) : element.textContent ?? "";
    }
    return node.hasChildNodes() ? getText(node.childNodes, --depth) : "";
  }
  var option_default = ":host {\n  display: block;\n  color: var(--wa-color-text-normal);\n  -webkit-user-select: none;\n  user-select: none;\n\n  position: relative;\n  display: flex;\n  align-items: center;\n  font: inherit;\n  padding: 0.5em 1em 0.5em 0.25em;\n  line-height: var(--wa-line-height-condensed);\n  transition: fill var(--wa-transition-normal) var(--wa-transition-easing);\n  cursor: pointer;\n}\n\n:host(:focus) {\n  outline: none;\n}\n\n@media (hover: hover) {\n  :host(:not([disabled], :state(current)):is(:state(hover), :hover)) {\n    background-color: var(--wa-color-neutral-fill-normal);\n    color: var(--wa-color-neutral-on-normal);\n  }\n}\n\n:host(:state(current)),\n:host([disabled]:state(current)) {\n  background-color: var(--wa-color-brand-fill-loud);\n  color: var(--wa-color-brand-on-loud);\n  opacity: 1;\n}\n\n:host([disabled]) {\n  outline: none;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.label {\n  flex: 1 1 auto;\n  display: inline-block;\n}\n\n.check {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--wa-font-size-smaller);\n  visibility: hidden;\n  width: 2em;\n}\n\n:host(:state(selected)) .check {\n  visibility: visible;\n}\n\n.start,\n.end {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n\n.start::slotted(*) {\n  margin-inline-end: 0.5em;\n}\n\n.end::slotted(*) {\n  margin-inline-start: 0.5em;\n}\n\n@media (forced-colors: active) {\n  :host(:hover:not([aria-disabled='true'])) {\n    outline: dashed 1px SelectedItem;\n    outline-offset: -1px;\n  }\n}\n";
  var WaOption = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.isInitialized = false;
      this.current = false;
      this.value = "";
      this.disabled = false;
      this.selected = false;
      this.defaultSelected = false;
      this._label = "";
      this.defaultLabel = "";
      this.handleHover = (event) => {
        if (event.type === "mouseenter") {
          this.customStates.set("hover", true);
        } else if (event.type === "mouseleave") {
          this.customStates.set("hover", false);
        }
      };
    }
    set label(value) {
      const oldValue = this._label;
      this._label = value || "";
      if (this._label !== oldValue) {
        this.requestUpdate("label", oldValue);
      }
    }
    get label() {
      if (this._label) {
        return this._label;
      }
      if (!this.defaultLabel) {
        this.updateDefaultLabel();
      }
      return this.defaultLabel;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "option");
      this.setAttribute("aria-selected", "false");
      this.addEventListener("mouseenter", this.handleHover);
      this.addEventListener("mouseleave", this.handleHover);
      this.updateDefaultLabel();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener("mouseenter", this.handleHover);
      this.removeEventListener("mouseleave", this.handleHover);
    }
    handleDefaultSlotChange() {
      this.updateDefaultLabel();
      if (this.isInitialized) {
        customElements.whenDefined("wa-select").then(() => {
          const controller = this.closest("wa-select");
          if (controller) {
            controller.handleDefaultSlotChange();
            controller.selectionChanged?.();
          }
        });
      } else {
        this.isInitialized = true;
      }
    }
    willUpdate(changedProperties) {
      if (changedProperties.has("defaultSelected")) {
        if (!this.closest("wa-select")?.hasInteracted) {
          const oldVal = this.selected;
          this.selected = this.defaultSelected;
          this.requestUpdate("selected", oldVal);
        }
      }
      super.willUpdate(changedProperties);
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      if (changedProperties.has("disabled")) {
        this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
      }
      if (changedProperties.has("selected")) {
        this.setAttribute("aria-selected", this.selected ? "true" : "false");
        this.customStates.set("selected", this.selected);
        this.handleDefaultSlotChange();
      }
      if (changedProperties.has("value")) {
        if (typeof this.value !== "string") {
          this.value = String(this.value);
        }
        this.handleDefaultSlotChange();
      }
      if (changedProperties.has("current")) {
        this.customStates.set("current", this.current);
      }
    }
    updateDefaultLabel() {
      let oldValue = this.defaultLabel;
      this.defaultLabel = getText(this).trim();
      let changed = this.defaultLabel !== oldValue;
      if (!this._label && changed) {
        this.requestUpdate("label", oldValue);
      }
      return changed;
    }
    render() {
      return x`
      <wa-icon
        part="checked-icon"
        class="check"
        name="check"
        library="system"
        variant="solid"
        aria-hidden="true"
      ></wa-icon>
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `;
    }
  };
  WaOption.css = option_default;
  __decorateClass([
    e$5(".label")
  ], WaOption.prototype, "defaultSlot", 2);
  __decorateClass([
    r$1()
  ], WaOption.prototype, "current", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaOption.prototype, "value", 2);
  __decorateClass([
    n$1({ type: Boolean })
  ], WaOption.prototype, "disabled", 2);
  __decorateClass([
    n$1({ type: Boolean, attribute: false })
  ], WaOption.prototype, "selected", 2);
  __decorateClass([
    n$1({ type: Boolean, attribute: "selected" })
  ], WaOption.prototype, "defaultSelected", 2);
  __decorateClass([
    n$1()
  ], WaOption.prototype, "label", 1);
  __decorateClass([
    r$1()
  ], WaOption.prototype, "defaultLabel", 2);
  WaOption = __decorateClass([
    t$1("wa-option")
  ], WaOption);
  var WaRepositionEvent = class extends Event {
    constructor() {
      super("wa-reposition", { bubbles: true, cancelable: false, composed: true });
    }
  };
  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = (v2) => ({
    x: v2,
    y: v2
  });
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  const oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  const yAxisSides = new Set(["top", "bottom"]);
  function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  const lrPlacement = ["left", "right"];
  const rlPlacement = ["right", "left"];
  const tbPlacement = ["top", "bottom"];
  const btPlacement = ["bottom", "top"];
  function getSideList(side, isStart, rtl) {
    switch (side) {
      case "top":
      case "bottom":
        if (rtl) return isStart ? rlPlacement : lrPlacement;
        return isStart ? lrPlacement : rlPlacement;
      case "left":
      case "right":
        return isStart ? tbPlacement : btPlacement;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x: x2,
      y: y3,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y3,
      left: x2,
      right: x2 + width,
      bottom: y3 + height,
      x: x2,
      y: y3
    };
  }
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  const computePosition$1 = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x: x2,
      y: y3
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i4 = 0; i4 < validMiddleware.length; i4++) {
      const {
        name,
        fn
      } = validMiddleware[i4];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x: x2,
        y: y3,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x2 = nextX != null ? nextX : x2;
      y3 = nextY != null ? nextY : y3;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x: x2,
            y: y3
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i4 = -1;
      }
    }
    return {
      x: x2,
      y: y3,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x: x2,
      y: y3,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x: x2,
      y: y3,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  const arrow$1 = (options) => ({
    name: "arrow",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y3,
        placement,
        rects,
        platform: platform2,
        elements,
        middlewareData
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x: x2,
        y: y3
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max2 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset2 = clamp(min$1, center, max2);
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset2,
          centerOffset: center - offset2 - alignmentOffset,
          ...shouldAddOffset && {
            alignmentOffset
          }
        },
        reset: shouldAddOffset
      };
    }
  });
  const flip$1 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides[0]], overflow[sides[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
            if (!ignoreCrossAxisOverflow ||

overflowsData.every((d2) => getSideAxis(d2.placement) === initialSideAxis ? d2.overflows[0] > 0 : true)) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a2, b2) => a2.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d2) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d2.placement);
                    return currentSideAxis === initialSideAxis ||

currentSideAxis === "y";
                  }
                  return true;
                }).map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b2) => a2[1] - b2[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  const originSides = new Set(["left", "top"]);
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  const offset$1 = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x: x2,
          y: y3,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x2 + diffCoords.x,
          y: y3 + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  const shift$1 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x: x2,
          y: y3,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x3,
                y: y4
              } = _ref;
              return {
                x: x3,
                y: y4
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x: x2,
          y: y3
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x2,
            y: limitedCoords.y - y3,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis
            }
          }
        };
      }
    };
  };
  const size$1 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "size",
      options,
      async fn(state) {
        var _state$middlewareData, _state$middlewareData2;
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const {
          apply = () => {
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
          availableWidth = maximumClippingWidth;
        }
        if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
          availableHeight = maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  const invalidOverflowDisplayValues = new Set(["inline", "contents"]);
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
  }
  const tableElements = new Set(["table", "td", "th"]);
  function isTableElement(element) {
    return tableElements.has(getNodeName(element));
  }
  const topLayerSelectors = [":popover-open", ":modal"];
  function isTopLayer(element) {
    return topLayerSelectors.some((selector) => {
      try {
        return element.matches(selector);
      } catch (_e) {
        return false;
      }
    });
  }
  const transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
  const willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
  const containValues = ["paint", "layout", "strict", "content"];
  function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
    return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports) return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  const lastTraversableNodeNames = new Set(["html", "body", "#document"]);
  function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
node.assignedSlot ||
node.parentNode ||
isShadowRoot(node) && node.host ||
getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }
  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $: $2
    } = getCssDimensions(domElement);
    let x2 = ($2 ? round(rect.width) : rect.width) / width;
    let y3 = ($2 ? round(rect.height) : rect.height) / height;
    if (!x2 || !Number.isFinite(x2)) {
      x2 = 1;
    }
    if (!y3 || !Number.isFinite(y3)) {
      y3 = 1;
    }
    return {
      x: x2,
      y: y3
    };
  }
  const noOffsets = createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x2 = (clientRect.left + visualOffsets.x) / scale.x;
    let y3 = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x2 *= iframeScale.x;
        y3 *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x2 += left;
        y3 += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x: x2,
      y: y3
    });
  }
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }
  function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x2 = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y3 = htmlRect.top + scroll.scrollTop;
    return {
      x: x2,
      y: y3
    };
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y3 = -scroll.scrollTop;
    if (getComputedStyle$1(body).direction === "rtl") {
      x2 += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x: x2,
      y: y3
    };
  }
  const SCROLLBAR_MAX = 25;
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x2 = 0;
    let y3 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x2 = visualViewport.offsetLeft;
        y3 = visualViewport.offsetTop;
      }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    if (windowScrollbarX <= 0) {
      const doc = html.ownerDocument;
      const body = doc.body;
      const bodyStyles = getComputedStyle(body);
      const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
      const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
      if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
        width -= clippingStableScrollbarWidth;
      }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
      width += windowScrollbarX;
    }
    return {
      width,
      height,
      x: x2,
      y: y3
    };
  }
  const absoluteOrFixed = new Set(["absolute", "fixed"]);
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x2 = left * scale.x;
    const y3 = top * scale.y;
    return {
      width,
      height,
      x: x2,
      y: y3
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache2) {
    const cachedResult = cache2.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle$1(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache2.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    function setLeftRTLScrollbarOffset() {
      offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        setLeftRTLScrollbarOffset();
      }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
      setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x2 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y3 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x: x2,
      y: y3,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle$1(element).position === "static";
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle$1(element).direction === "rtl";
  }
  const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function rectsAreEqual(a2, b2) {
    return a2.x === b2.x && a2.y === b2.y && a2.width === b2.width && a2.height === b2.height;
  }
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold2) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold2 === void 0) {
        threshold2 = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold2)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold2) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1e3);
          } else {
            refresh(false, ratio);
          }
        }
        if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
          refresh();
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
root: root.ownerDocument
        });
      } catch (_e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update2, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update2, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update2);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update2();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update2();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update2();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update2);
        ancestorResize && ancestor.removeEventListener("resize", update2);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  const offset = offset$1;
  const shift = shift$1;
  const flip = flip$1;
  const size = size$1;
  const arrow = arrow$1;
  const computePosition = (reference, floating, options) => {
    const cache2 = new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache2
    };
    return computePosition$1(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };
  function e2(t2) {
    return i3(t2);
  }
  function r(t2) {
    return t2.assignedSlot ? t2.assignedSlot : t2.parentNode instanceof ShadowRoot ? t2.parentNode.host : t2.parentNode;
  }
  function i3(e3) {
    for (let t2 = e3; t2; t2 = r(t2)) if (t2 instanceof Element && "none" === getComputedStyle(t2).display) return null;
    for (let n3 = r(e3); n3; n3 = r(n3)) {
      if (!(n3 instanceof Element)) continue;
      const e4 = getComputedStyle(n3);
      if ("contents" !== e4.display) {
        if ("static" !== e4.position || isContainingBlock(e4)) return n3;
        if ("BODY" === n3.tagName) return n3;
      }
    }
    return null;
  }
  var popup_default = ":host {\n  --arrow-color: black;\n  --arrow-size: var(--wa-tooltip-arrow-size);\n  --show-duration: 100ms;\n  --hide-duration: 100ms;\n\n  /*\n     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant\n     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.\n     */\n  --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);\n  --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));\n\n  display: contents;\n}\n\n.popup {\n  position: absolute;\n  isolation: isolate;\n  max-width: var(--auto-size-available-width, none);\n  max-height: var(--auto-size-available-height, none);\n\n  /* Clear UA styles for [popover] */\n  :where(&) {\n    inset: unset;\n    padding: unset;\n    margin: unset;\n    width: unset;\n    height: unset;\n    color: unset;\n    background: unset;\n    border: unset;\n    overflow: unset;\n  }\n}\n\n.popup-fixed {\n  position: fixed;\n}\n\n.popup:not(.popup-active) {\n  display: none;\n}\n\n.arrow {\n  position: absolute;\n  width: calc(var(--arrow-size-diagonal) * 2);\n  height: calc(var(--arrow-size-diagonal) * 2);\n  rotate: 45deg;\n  background: var(--arrow-color);\n  z-index: 3;\n}\n\n:host([data-current-placement~='left']) .arrow {\n  rotate: -45deg;\n}\n\n:host([data-current-placement~='right']) .arrow {\n  rotate: 135deg;\n}\n\n:host([data-current-placement~='bottom']) .arrow {\n  rotate: 225deg;\n}\n\n/* Hover bridge */\n.popup-hover-bridge:not(.popup-hover-bridge-visible) {\n  display: none;\n}\n\n.popup-hover-bridge {\n  position: fixed;\n  z-index: 899;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  clip-path: polygon(\n    var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),\n    var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),\n    var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),\n    var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)\n  );\n}\n\n/* Built-in animations */\n.show {\n  animation: show var(--show-duration) ease;\n}\n\n.hide {\n  animation: show var(--hide-duration) ease reverse;\n}\n\n@keyframes show {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.show-with-scale {\n  animation: show-with-scale var(--show-duration) ease;\n}\n\n.hide-with-scale {\n  animation: show-with-scale var(--hide-duration) ease reverse;\n}\n\n@keyframes show-with-scale {\n  from {\n    opacity: 0;\n    scale: 0.8;\n  }\n  to {\n    opacity: 1;\n    scale: 1;\n  }\n}\n";
  function isVirtualElement(e3) {
    return e3 !== null && typeof e3 === "object" && "getBoundingClientRect" in e3 && ("contextElement" in e3 ? e3 instanceof Element : true);
  }
  var SUPPORTS_POPOVER = globalThis?.HTMLElement?.prototype.hasOwnProperty("popover");
  var WaPopup = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.active = false;
      this.placement = "top";
      this.boundary = "viewport";
      this.distance = 0;
      this.skidding = 0;
      this.arrow = false;
      this.arrowPlacement = "anchor";
      this.arrowPadding = 10;
      this.flip = false;
      this.flipFallbackPlacements = "";
      this.flipFallbackStrategy = "best-fit";
      this.flipPadding = 0;
      this.shift = false;
      this.shiftPadding = 0;
      this.autoSizePadding = 0;
      this.hoverBridge = false;
      this.updateHoverBridge = () => {
        if (this.hoverBridge && this.anchorEl) {
          const anchorRect = this.anchorEl.getBoundingClientRect();
          const popupRect = this.popup.getBoundingClientRect();
          const isVertical = this.placement.includes("top") || this.placement.includes("bottom");
          let topLeftX = 0;
          let topLeftY = 0;
          let topRightX = 0;
          let topRightY = 0;
          let bottomLeftX = 0;
          let bottomLeftY = 0;
          let bottomRightX = 0;
          let bottomRightY = 0;
          if (isVertical) {
            if (anchorRect.top < popupRect.top) {
              topLeftX = anchorRect.left;
              topLeftY = anchorRect.bottom;
              topRightX = anchorRect.right;
              topRightY = anchorRect.bottom;
              bottomLeftX = popupRect.left;
              bottomLeftY = popupRect.top;
              bottomRightX = popupRect.right;
              bottomRightY = popupRect.top;
            } else {
              topLeftX = popupRect.left;
              topLeftY = popupRect.bottom;
              topRightX = popupRect.right;
              topRightY = popupRect.bottom;
              bottomLeftX = anchorRect.left;
              bottomLeftY = anchorRect.top;
              bottomRightX = anchorRect.right;
              bottomRightY = anchorRect.top;
            }
          } else {
            if (anchorRect.left < popupRect.left) {
              topLeftX = anchorRect.right;
              topLeftY = anchorRect.top;
              topRightX = popupRect.left;
              topRightY = popupRect.top;
              bottomLeftX = anchorRect.right;
              bottomLeftY = anchorRect.bottom;
              bottomRightX = popupRect.left;
              bottomRightY = popupRect.bottom;
            } else {
              topLeftX = popupRect.right;
              topLeftY = popupRect.top;
              topRightX = anchorRect.left;
              topRightY = anchorRect.top;
              bottomLeftX = popupRect.right;
              bottomLeftY = popupRect.bottom;
              bottomRightX = anchorRect.left;
              bottomRightY = anchorRect.bottom;
            }
          }
          this.style.setProperty("--hover-bridge-top-left-x", `${topLeftX}px`);
          this.style.setProperty("--hover-bridge-top-left-y", `${topLeftY}px`);
          this.style.setProperty("--hover-bridge-top-right-x", `${topRightX}px`);
          this.style.setProperty("--hover-bridge-top-right-y", `${topRightY}px`);
          this.style.setProperty("--hover-bridge-bottom-left-x", `${bottomLeftX}px`);
          this.style.setProperty("--hover-bridge-bottom-left-y", `${bottomLeftY}px`);
          this.style.setProperty("--hover-bridge-bottom-right-x", `${bottomRightX}px`);
          this.style.setProperty("--hover-bridge-bottom-right-y", `${bottomRightY}px`);
        }
      };
    }
    async connectedCallback() {
      super.connectedCallback();
      await this.updateComplete;
      this.start();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.stop();
    }
    async updated(changedProperties) {
      super.updated(changedProperties);
      if (changedProperties.has("active")) {
        if (this.active) {
          this.start();
        } else {
          this.stop();
        }
      }
      if (changedProperties.has("anchor")) {
        this.handleAnchorChange();
      }
      if (this.active) {
        await this.updateComplete;
        this.reposition();
      }
    }
    async handleAnchorChange() {
      await this.stop();
      if (this.anchor && typeof this.anchor === "string") {
        const root = this.getRootNode();
        this.anchorEl = root.getElementById(this.anchor);
      } else if (this.anchor instanceof Element || isVirtualElement(this.anchor)) {
        this.anchorEl = this.anchor;
      } else {
        this.anchorEl = this.querySelector('[slot="anchor"]');
      }
      if (this.anchorEl instanceof HTMLSlotElement) {
        this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
      }
      if (this.anchorEl) {
        this.start();
      }
    }
    start() {
      if (!this.anchorEl || !this.active) {
        return;
      }
      this.popup.showPopover?.();
      this.cleanup = autoUpdate(this.anchorEl, this.popup, () => {
        this.reposition();
      });
    }
    async stop() {
      return new Promise((resolve) => {
        this.popup.hidePopover?.();
        if (this.cleanup) {
          this.cleanup();
          this.cleanup = void 0;
          this.removeAttribute("data-current-placement");
          this.style.removeProperty("--auto-size-available-width");
          this.style.removeProperty("--auto-size-available-height");
          requestAnimationFrame(() => resolve());
        } else {
          resolve();
        }
      });
    }
reposition() {
      if (!this.active || !this.anchorEl) {
        return;
      }
      const middleware = [
offset({ mainAxis: this.distance, crossAxis: this.skidding })
      ];
      if (this.sync) {
        middleware.push(
          size({
            apply: ({ rects }) => {
              const syncWidth = this.sync === "width" || this.sync === "both";
              const syncHeight = this.sync === "height" || this.sync === "both";
              this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
              this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
            }
          })
        );
      } else {
        this.popup.style.width = "";
        this.popup.style.height = "";
      }
      let defaultBoundary;
      if (SUPPORTS_POPOVER && !isVirtualElement(this.anchor) && this.boundary === "scroll") {
        defaultBoundary = getOverflowAncestors(this.anchorEl).filter((el) => el instanceof Element);
      }
      if (this.flip) {
        middleware.push(
          flip({
            boundary: this.flipBoundary || defaultBoundary,
fallbackPlacements: this.flipFallbackPlacements,
            fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
            padding: this.flipPadding
          })
        );
      }
      if (this.shift) {
        middleware.push(
          shift({
            boundary: this.shiftBoundary || defaultBoundary,
            padding: this.shiftPadding
          })
        );
      }
      if (this.autoSize) {
        middleware.push(
          size({
            boundary: this.autoSizeBoundary || defaultBoundary,
            padding: this.autoSizePadding,
            apply: ({ availableWidth, availableHeight }) => {
              if (this.autoSize === "vertical" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
              } else {
                this.style.removeProperty("--auto-size-available-height");
              }
              if (this.autoSize === "horizontal" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
              } else {
                this.style.removeProperty("--auto-size-available-width");
              }
            }
          })
        );
      } else {
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
      }
      if (this.arrow) {
        middleware.push(
          arrow({
            element: this.arrowEl,
            padding: this.arrowPadding
          })
        );
      }
      const getOffsetParent2 = SUPPORTS_POPOVER ? (element) => platform.getOffsetParent(element, e2) : platform.getOffsetParent;
      computePosition(this.anchorEl, this.popup, {
        placement: this.placement,
        middleware,
        strategy: SUPPORTS_POPOVER ? "absolute" : "fixed",
        platform: {
          ...platform,
          getOffsetParent: getOffsetParent2
        }
      }).then(({ x: x2, y: y3, middlewareData, placement }) => {
        const isRtl = this.localize.dir() === "rtl";
        const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
        this.setAttribute("data-current-placement", placement);
        Object.assign(this.popup.style, {
          left: `${x2}px`,
          top: `${y3}px`
        });
        if (this.arrow) {
          const arrowX = middlewareData.arrow.x;
          const arrowY = middlewareData.arrow.y;
          let top = "";
          let right = "";
          let bottom = "";
          let left = "";
          if (this.arrowPlacement === "start") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? value : "";
            left = isRtl ? "" : value;
          } else if (this.arrowPlacement === "end") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? "" : value;
            left = isRtl ? value : "";
            bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          } else if (this.arrowPlacement === "center") {
            left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
            top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          } else {
            left = typeof arrowX === "number" ? `${arrowX}px` : "";
            top = typeof arrowY === "number" ? `${arrowY}px` : "";
          }
          Object.assign(this.arrowEl.style, {
            top,
            right,
            bottom,
            left,
            [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
          });
        }
      });
      requestAnimationFrame(() => this.updateHoverBridge());
      this.dispatchEvent(new WaRepositionEvent());
    }
    render() {
      return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${e$3({
      "popup-hover-bridge": true,
      "popup-hover-bridge-visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${e$3({
      popup: true,
      "popup-active": this.active,
      "popup-fixed": !SUPPORTS_POPOVER,
      "popup-has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? x`<div part="arrow" class="arrow" role="presentation"></div>` : ""}
      </div>
    `;
    }
  };
  WaPopup.css = popup_default;
  __decorateClass([
    e$5(".popup")
  ], WaPopup.prototype, "popup", 2);
  __decorateClass([
    e$5(".arrow")
  ], WaPopup.prototype, "arrowEl", 2);
  __decorateClass([
    n$1()
  ], WaPopup.prototype, "anchor", 2);
  __decorateClass([
    n$1({ type: Boolean, reflect: true })
  ], WaPopup.prototype, "active", 2);
  __decorateClass([
    n$1({ reflect: true })
  ], WaPopup.prototype, "placement", 2);
  __decorateClass([
    n$1()
  ], WaPopup.prototype, "boundary", 2);
  __decorateClass([
    n$1({ type: Number })
  ], WaPopup.prototype, "distance", 2);
  __decorateClass([
    n$1({ type: Number })
  ], WaPopup.prototype, "skidding", 2);
  __decorateClass([
    n$1({ type: Boolean })
  ], WaPopup.prototype, "arrow", 2);
  __decorateClass([
    n$1({ attribute: "arrow-placement" })
  ], WaPopup.prototype, "arrowPlacement", 2);
  __decorateClass([
    n$1({ attribute: "arrow-padding", type: Number })
  ], WaPopup.prototype, "arrowPadding", 2);
  __decorateClass([
    n$1({ type: Boolean })
  ], WaPopup.prototype, "flip", 2);
  __decorateClass([
    n$1({
      attribute: "flip-fallback-placements",
      converter: {
        fromAttribute: (value) => {
          return value.split(" ").map((p2) => p2.trim()).filter((p2) => p2 !== "");
        },
        toAttribute: (value) => {
          return value.join(" ");
        }
      }
    })
  ], WaPopup.prototype, "flipFallbackPlacements", 2);
  __decorateClass([
    n$1({ attribute: "flip-fallback-strategy" })
  ], WaPopup.prototype, "flipFallbackStrategy", 2);
  __decorateClass([
    n$1({ type: Object })
  ], WaPopup.prototype, "flipBoundary", 2);
  __decorateClass([
    n$1({ attribute: "flip-padding", type: Number })
  ], WaPopup.prototype, "flipPadding", 2);
  __decorateClass([
    n$1({ type: Boolean })
  ], WaPopup.prototype, "shift", 2);
  __decorateClass([
    n$1({ type: Object })
  ], WaPopup.prototype, "shiftBoundary", 2);
  __decorateClass([
    n$1({ attribute: "shift-padding", type: Number })
  ], WaPopup.prototype, "shiftPadding", 2);
  __decorateClass([
    n$1({ attribute: "auto-size" })
  ], WaPopup.prototype, "autoSize", 2);
  __decorateClass([
    n$1()
  ], WaPopup.prototype, "sync", 2);
  __decorateClass([
    n$1({ type: Object })
  ], WaPopup.prototype, "autoSizeBoundary", 2);
  __decorateClass([
    n$1({ attribute: "auto-size-padding", type: Number })
  ], WaPopup.prototype, "autoSizePadding", 2);
  __decorateClass([
    n$1({ attribute: "hover-bridge", type: Boolean })
  ], WaPopup.prototype, "hoverBridge", 2);
  WaPopup = __decorateClass([
    t$1("wa-popup")
  ], WaPopup);
  const _hoisted_1 = {
    ref: "root",
    class: "ct-root"
  };
  const _hoisted_2 = { class: "ct-icon" };
  const _hoisted_3 = {
    ref: "dialog",
    label: "Setting",
    "light-dismiss": ""
  };
  const _hoisted_4 = { class: "ct-setting-dialog" };
  const _hoisted_5 = { class: "ct-setting-dialog-from" };
  const _hoisted_6 = ["value"];
  const _hoisted_7 = { class: "ct-setting-dialog-to" };
  const _hoisted_8 = ["value"];
  const threshold = 5;
  const _sfc_main = vue.defineComponent({
    __name: "ball.ce",
    setup(__props) {
      const rootRef = vue.useTemplateRef("root");
      const ballRef = vue.useTemplateRef("ball");
      const dialogRef = vue.useTemplateRef("dialog");
      const config = _GM_getValue(STORAGE_CONFIG_KEY, {
        position: { x: "", y: "" },
        side: "right",
        language: { from: "auto", to: "" }
      });
      const states = vue.reactive({
        moving: false,
        isTranslating: false,
        language: config.language || { from: "auto", to: "" }
      });
      let translate;
      const translateOptions = { ...config.language };
      if (translateOptions.from === "auto") {
        Reflect.deleteProperty(translateOptions, "from");
      }
      useTranslate(translateOptions).then(async (t2) => {
        translate = t2;
        const from = await getFrom();
        const to = states.language.to;
        if (to) {
          translate.instance.setLanguage({ from, to });
          return;
        }
        states.language.to = t2.instance.language.to;
      });
      async function getFrom() {
        return states.language.from === "auto" ? await translate.instance.translator.detectPageLanguage() : states.language.from;
      }
      let dragging = false;
      let isAllowedTranslate = true;
      let startX, startY;
      function setScrollbarPrroperty(el) {
        el.style.setProperty("--scrollbar-width", `${SCROLLBAR_INFO.width}px`);
        el.style.setProperty("--scrollbar-height", `${SCROLLBAR_INFO.height}px`);
      }
      vue.onMounted(() => {
        const ballEl2 = ballRef.value;
        const rootEl = rootRef.value;
        const y3 = config.position.y;
        watchScrollbarChange((info) => {
          Object.assign(SCROLLBAR_INFO, info);
          setScrollbarPrroperty(rootEl);
        });
        setScrollbarPrroperty(rootEl);
        if (y3) {
          ballEl2.style.setProperty("--y", y3);
        }
        ballEl2.setAttribute("data-side", config.side);
        ballEl2.getBoundingClientRect();
        ballEl2.style.transition = "all 0.3s ease";
      });
      function onMouseDown(event) {
        const ballEl2 = ballRef.value;
        if (!ballEl2) {
          return;
        }
        if (event.button !== 0) {
          return;
        }
        startX = event.clientX;
        startY = event.clientY;
        states.moving = false;
        ballEl2.style.transition = "none";
      }
      function onMouseUp(_event) {
        startX = startY = null;
        const ballEl2 = ballRef.value;
        if (!ballEl2) {
          return;
        }
        if (!dragging) {
          return;
        }
        dragging = false;
        isAllowedTranslate = false;
        states.moving = false;
        ballEl2.style.transition = "all 0.3s ease";
        ballEl2.style.cursor = "pointer";
        const rect = ballEl2.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const side = centerX < window.innerWidth / 2 ? "left" : "right";
        ballEl2.setAttribute("data-side", side);
        const x2 = ballEl2.style.getPropertyValue("--x");
        const y3 = ballEl2.style.getPropertyValue("--y");
        ballEl2.style.removeProperty("--x");
        _GM_setValue(STORAGE_CONFIG_KEY, { ...config, position: { x: x2, y: y3 }, side });
      }
      function onMouseMove(event) {
        const ballEl2 = ballRef.value;
        if (!ballEl2) {
          return;
        }
        if (startX && startY) {
          const dx = event.clientX - startX;
          const dy = event.clientY - startY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > threshold) {
            dragging = true;
          }
        }
        if (!dragging) {
          return;
        }
        states.moving = true;
        ballEl2.style.cursor = "move";
        const ballWidth = ballEl2.offsetWidth;
        const ballHeight = ballEl2.offsetHeight;
        const x2 = clamp$1(event.clientX - ballWidth / 2, 0, window.innerWidth - ballWidth);
        const y3 = clamp$1(event.clientY - ballHeight / 2, 0, window.innerHeight - ballHeight);
        ballEl2.style.setProperty("--x", `${x2}px`);
        ballEl2.style.setProperty("--y", `${y3}px`);
      }
      const throttledMouseMove = throttle(onMouseMove, 16);
      document.addEventListener("mousemove", throttledMouseMove);
      vue.onBeforeUnmount(() => {
        document.removeEventListener("mousemove", throttledMouseMove);
      });
      async function onTranslate() {
        if (!isAllowedTranslate) {
          isAllowedTranslate = true;
          return;
        }
        const { from, to } = translate.instance.language;
        if (from === to) {
          console.warn("Translation from and to are the same.");
          return;
        }
        if (translate.isTranslating()) {
          translate.instance.clearElements();
          states.isTranslating = translate.isTranslating();
          return;
        }
        translate.start();
        states.isTranslating = translate.isTranslating();
      }
      const onTranslateDebounced = debounce(onTranslate, 500, true);
      function onOpenSetting() {
        if (dialogRef.value) {
          dialogRef.value.open = true;
        }
      }
      async function onSelected() {
        const from = await getFrom();
        translate.instance.setLanguage({ from, to: states.language.to });
        _GM_setValue(STORAGE_CONFIG_KEY, { ...config, language: states.language });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("div", {
            ref: "ball",
            class: vue.normalizeClass(["ct-ball", { "ct-moving": states.moving }]),
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(
(...args) => vue.unref(onTranslateDebounced) && vue.unref(onTranslateDebounced)(...args),
              ["stop", "prevent"]
            )),
            onMousedown: vue.withModifiers(onMouseDown, ["stop", "prevent"]),
            onMouseup: vue.withModifiers(onMouseUp, ["stop", "prevent"]),
            onContextmenu: _cache[1] || (_cache[1] = ($event) => $event.preventDefault())
          }, [
            vue.createElementVNode("div", _hoisted_2, [
              vue.createVNode(languageIcon, { class: "ct-language-icon" }),
              states.isTranslating ? (vue.openBlock(), vue.createBlock(checkIcon, {
                key: 0,
                class: "ct-check-icon"
              })) : vue.createCommentVNode("", true)
            ]),
            vue.createElementVNode("div", {
              class: "ct-setting-wrap",
              onClick: vue.withModifiers(() => {
              }, ["stop", "prevent"])
            }, [
              vue.createElementVNode("div", {
                class: "ct-setting",
                onClick: vue.withModifiers(onOpenSetting, ["stop", "prevent"])
              }, [
                vue.createVNode(settingIcon, { class: "ct-setting-icon" })
              ])
            ])
          ], 34),
          vue.createElementVNode("wa-dialog", _hoisted_3, [
            vue.createElementVNode("div", _hoisted_4, [
              vue.createElementVNode("div", _hoisted_5, [
                vue.withDirectives(vue.createElementVNode("wa-select", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => states.language.from = $event),
                  appearance: "filled",
                  onChange: onSelected
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList([{ label: "Auto", value: "auto" }, ...vue.unref(LANGUAGES)], (lang) => {
                    return vue.openBlock(), vue.createElementBlock("wa-option", {
                      key: lang.value,
                      value: lang.value
                    }, vue.toDisplayString(lang.label), 9, _hoisted_6);
                  }), 128))
                ], 544), [
                  [vue.vModelText, states.language.from]
                ])
              ]),
              _cache[4] || (_cache[4] = vue.createElementVNode("div", { class: "ct-setting-dialgo-icon" }, [
                vue.createElementVNode("wa-icon", {
                  name: "arrow-right",
                  label: "Awesome"
                })
              ], -1)),
              vue.createElementVNode("div", _hoisted_7, [
                vue.withDirectives(vue.createElementVNode("wa-select", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => states.language.to = $event),
                  appearance: "filled",
                  onChange: onSelected
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(LANGUAGES), (lang) => {
                    return vue.openBlock(), vue.createElementBlock("wa-option", {
                      key: lang.value,
                      value: lang.value
                    }, vue.toDisplayString(lang.label), 9, _hoisted_8);
                  }), 128))
                ], 544), [
                  [vue.vModelText, states.language.to]
                ])
              ])
            ])
          ], 512)
        ], 512);
      };
    }
  });
  const _style_0 = ".ct-root[data-v-08021a92]{--size: 40px;--bg: #fff;-webkit-user-select:none;user-select:none;touch-action:none}.ct-root .ct-ball[data-v-08021a92]{--x: 0px;--y: calc(50vh - var(--size)/2);position:fixed;z-index:999999999;top:0;width:var(--size);height:var(--size);background-color:var(--bg);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 16px #00000040;cursor:pointer;-webkit-user-select:none;user-select:none;touch-action:none;transform:translate(var(--x),var(--y))}.ct-root .ct-ball.ct-moving[data-v-08021a92]{border-radius:50%;padding:unset!important}.ct-root .ct-ball.ct-moving .ct-setting-wrap[data-v-08021a92]{display:none}.ct-root .ct-ball .ct-icon[data-v-08021a92]{--size: 28px;width:var(--size);height:var(--size);position:relative;display:flex;align-items:center;justify-content:center;border-radius:50%;background-color:#00c4b6}.ct-root .ct-ball .ct-icon .ct-language-icon[data-v-08021a92]{width:20px;height:20px}.ct-root .ct-ball .ct-icon .ct-check-icon[data-v-08021a92]{position:absolute;bottom:-2px;right:0;width:10px;height:10px;border-radius:50%;background-color:#00c800cc;color:#fff}.ct-root .ct-ball[data-side=left] .ct-setting-wrap[data-v-08021a92]{left:calc(var(--size) * -1)}.ct-root .ct-ball[data-side=left] .ct-setting-wrap[data-v-08021a92]:hover{left:6px}.ct-root .ct-ball[data-side=right] .ct-setting-wrap[data-v-08021a92]{right:calc(var(--size) * -1)}.ct-root .ct-ball[data-side=right] .ct-setting-wrap[data-v-08021a92]:hover{right:6px}.ct-root .ct-ball .ct-setting-wrap[data-v-08021a92]{--x: 0px;--y: calc(50vh - var(--size)/2);position:absolute;-webkit-user-select:none;user-select:none;touch-action:none;transition:all .3s ease;top:calc(var(--size));padding-top:10px;color:#000}.ct-root .ct-ball .ct-setting-wrap .ct-setting[data-v-08021a92]{width:calc(var(--size) - 4px);height:calc(var(--size) - 4px);background-color:var(--bg);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 16px #00000040;border-radius:20px}.ct-root .ct-ball .ct-setting-wrap .ct-setting .ct-setting-icon[data-v-08021a92]{width:20px;height:20px}.ct-root .ct-ball[data-side=left][data-v-08021a92]{border-top-right-radius:20px;border-bottom-right-radius:20px}.ct-root .ct-ball[data-side=left]:hover[data-v-08021a92]{--x: 0;padding-left:10px}.ct-root .ct-ball[data-side=left]:hover .ct-setting-wrap[data-v-08021a92]{left:6px}.ct-root .ct-ball[data-side=right][data-v-08021a92]{--x: calc(100vw - var(--size) - var(--scrollbar-width));--offset: calc(var(--scrollbar-width) + 10px);border-top-left-radius:20px;border-bottom-left-radius:20px;padding-right:var(--offset)}.ct-root .ct-ball[data-side=right]:hover[data-v-08021a92]{--x: calc(100vw - var(--size) - var(--offset))}.ct-root .ct-ball[data-side=right]:hover .ct-setting-wrap[data-v-08021a92]{right:calc(var(--scrollbar-width) + 6px)}.ct-root .ct-ball[data-side=right] .ct-icon .ct-check-icon[data-v-08021a92]{left:0;right:unset}.ct-root .ct-setting-dialog[data-v-08021a92]{display:flex}.ct-root .ct-setting-dialog .ct-setting-dialgo-icon[data-v-08021a92]{width:40px;display:flex;align-items:center;justify-content:center;color:#999}.ct-root .ct-setting-dialog .ct-setting-dialog-from[data-v-08021a92],.ct-root .ct-setting-dialog .ct-setting-dialog-to[data-v-08021a92]{flex:1;height:40px;display:flex;align-items:center;justify-content:center;background-color:#eee;border-radius:10px}";
  const ball = _export_sfc(_sfc_main, [["styles", [_style_0]], ["__scopeId", "data-v-08021a92"]]);
  customElements.define("chrome-translate-ball", vue.defineCustomElement(ball));
  const ballEl = document.createElement("chrome-translate-ball");
  document.documentElement.appendChild(ballEl);

})(Vue);