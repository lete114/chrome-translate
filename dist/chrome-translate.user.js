// ==UserScript==
// @name         chrome-translate
// @namespace    lete114/chrome-translate
// @version      0.0.4
// @author       Lete114 <me@imlete.cn>
// @license      MIT
// @icon         https://github.com/lete114/chrome-translate/blob/main/src/assets/logo.svg?raw=true
// @homepage     https://github.com/lete114/chrome-translate#readme
// @homepageURL  https://github.com/lete114/chrome-translate#readme
// @source       https://github.com/lete114/chrome-translate.git
// @supportURL   https://github.com/lete114/chrome-translate/issues
// @match        *://*/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
  'use strict';

  var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_xmlhttpRequest = (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2 = globalThis, e$4 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$5 = new WeakMap();
  let n$3 = class n {
    constructor(t2, e2, o2) {
      if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t2, this.t = e2;
    }
    get styleSheet() {
      let t2 = this.o;
      const s2 = this.t;
      if (e$4 && void 0 === t2) {
        const e2 = void 0 !== s2 && 1 === s2.length;
        e2 && (t2 = o$5.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$5.set(s2, t2));
      }
      return t2;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$4 = (t2) => new n$3("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), i$3 = (t2, ...e2) => {
    const o2 = 1 === t2.length ? t2[0] : e2.reduce(((e3, s2, o3) => e3 + ((t3) => {
      if (true === t3._$cssResult$) return t3.cssText;
      if ("number" == typeof t3) return t3;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s2) + t2[o3 + 1]), t2[0]);
    return new n$3(o2, t2, s$2);
  }, S$1 = (s2, o2) => {
    if (e$4) s2.adoptedStyleSheets = o2.map(((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet));
    else for (const e2 of o2) {
      const o3 = document.createElement("style"), n3 = t$2.litNonce;
      void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s2.appendChild(o3);
    }
  }, c$2 = e$4 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
    let e2 = "";
    for (const s2 of t3.cssRules) e2 += s2.cssText;
    return r$4(e2);
  })(t2) : t2;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const { is: i$2, defineProperty: e$3, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$3, getOwnPropertySymbols: o$4, getPrototypeOf: n$2 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$1 = { toAttribute(t2, s2) {
    switch (s2) {
      case Boolean:
        t2 = t2 ? l$1 : null;
        break;
      case Object:
      case Array:
        t2 = null == t2 ? t2 : JSON.stringify(t2);
    }
    return t2;
  }, fromAttribute(t2, s2) {
    let i2 = t2;
    switch (s2) {
      case Boolean:
        i2 = null !== t2;
        break;
      case Number:
        i2 = null === t2 ? null : Number(t2);
        break;
      case Object:
      case Array:
        try {
          i2 = JSON.parse(t2);
        } catch (t3) {
          i2 = null;
        }
    }
    return i2;
  } }, f$1 = (t2, s2) => !i$2(t2, s2), b$1 = { attribute: true, type: String, converter: u$1, reflect: false, useDefault: false, hasChanged: f$1 };
  Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= new WeakMap();
  let y$1 = class y extends HTMLElement {
    static addInitializer(t2) {
      this._$Ei(), (this.l ??= []).push(t2);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t2, s2 = b$1) {
      if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
        const i2 = Symbol(), h2 = this.getPropertyDescriptor(t2, i2, s2);
        void 0 !== h2 && e$3(this.prototype, t2, h2);
      }
    }
    static getPropertyDescriptor(t2, s2, i2) {
      const { get: e2, set: r2 } = h$1(this.prototype, t2) ?? { get() {
        return this[s2];
      }, set(t3) {
        this[s2] = t3;
      } };
      return { get: e2, set(s3) {
        const h2 = e2?.call(this);
        r2?.call(this, s3), this.requestUpdate(t2, h2, i2);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t2) {
      return this.elementProperties.get(t2) ?? b$1;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d$1("elementProperties"))) return;
      const t2 = n$2(this);
      t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d$1("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
        const t3 = this.properties, s2 = [...r$3(t3), ...o$4(t3)];
        for (const i2 of s2) this.createProperty(i2, t3[i2]);
      }
      const t2 = this[Symbol.metadata];
      if (null !== t2) {
        const s2 = litPropertyMetadata.get(t2);
        if (void 0 !== s2) for (const [t3, i2] of s2) this.elementProperties.set(t3, i2);
      }
      this._$Eh = new Map();
      for (const [t3, s2] of this.elementProperties) {
        const i2 = this._$Eu(t3, s2);
        void 0 !== i2 && this._$Eh.set(i2, t3);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s2) {
      const i2 = [];
      if (Array.isArray(s2)) {
        const e2 = new Set(s2.flat(1 / 0).reverse());
        for (const s3 of e2) i2.unshift(c$2(s3));
      } else void 0 !== s2 && i2.push(c$2(s2));
      return i2;
    }
    static _$Eu(t2, s2) {
      const i2 = s2.attribute;
      return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
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
      for (const i2 of s2.keys()) this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
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
    attributeChangedCallback(t2, s2, i2) {
      this._$AK(t2, i2);
    }
    _$ET(t2, s2) {
      const i2 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i2);
      if (void 0 !== e2 && true === i2.reflect) {
        const h2 = (void 0 !== i2.converter?.toAttribute ? i2.converter : u$1).toAttribute(s2, i2.type);
        this._$Em = t2, null == h2 ? this.removeAttribute(e2) : this.setAttribute(e2, h2), this._$Em = null;
      }
    }
    _$AK(t2, s2) {
      const i2 = this.constructor, e2 = i2._$Eh.get(t2);
      if (void 0 !== e2 && this._$Em !== e2) {
        const t3 = i2.getPropertyOptions(e2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== t3.converter?.fromAttribute ? t3.converter : u$1;
        this._$Em = e2;
        const r2 = h2.fromAttribute(s2, t3.type);
        this[e2] = r2 ?? this._$Ej?.get(e2) ?? r2, this._$Em = null;
      }
    }
    requestUpdate(t2, s2, i2) {
      if (void 0 !== t2) {
        const e2 = this.constructor, h2 = this[t2];
        if (i2 ??= e2.getPropertyOptions(t2), !((i2.hasChanged ?? f$1)(h2, s2) || i2.useDefault && i2.reflect && h2 === this._$Ej?.get(t2) && !this.hasAttribute(e2._$Eu(t2, i2)))) return;
        this.C(t2, s2, i2);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t2, s2, { useDefault: i2, reflect: e2, wrapped: h2 }, r2) {
      i2 && !(this._$Ej ??= new Map()).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h2 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i2 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ??= new Set()).add(t2));
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
        if (t3.size > 0) for (const [s3, i2] of t3) {
          const { wrapped: t4 } = i2, e2 = this[s3];
          true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i2, e2);
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
  y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = new Map(), y$1[d$1("finalized")] = new Map(), p$1?.({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ??= []).push("2.1.1");
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1 = globalThis, i$1 = t$1.trustedTypes, s$1 = i$1 ? i$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$2 = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o$3 = "?" + h, n$1 = `<${o$3}>`, r$2 = document, l = () => r$2.createComment(""), c = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, a = Array.isArray, u = (t2) => a(t2) || "function" == typeof t2?.[Symbol.iterator], d = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y2 = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), x = y2(1), b = y2(2), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = new WeakMap(), C = r$2.createTreeWalker(r$2, 129);
  function P(t2, i2) {
    if (!a(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s$1 ? s$1.createHTML(i2) : i2;
  }
  const V = (t2, i2) => {
    const s2 = t2.length - 1, o2 = [];
    let r2, l2 = 2 === i2 ? "<svg>" : 3 === i2 ? "<math>" : "", c2 = f;
    for (let i3 = 0; i3 < s2; i3++) {
      const s3 = t2[i3];
      let a2, u2, d2 = -1, y3 = 0;
      for (; y3 < s3.length && (c2.lastIndex = y3, u2 = c2.exec(s3), null !== u2); ) y3 = c2.lastIndex, c2 === f ? "!--" === u2[1] ? c2 = v : void 0 !== u2[1] ? c2 = _ : void 0 !== u2[2] ? ($.test(u2[2]) && (r2 = RegExp("</" + u2[2], "g")), c2 = m) : void 0 !== u2[3] && (c2 = m) : c2 === m ? ">" === u2[0] ? (c2 = r2 ?? f, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? m : '"' === u2[3] ? g : p) : c2 === g || c2 === p ? c2 = m : c2 === v || c2 === _ ? c2 = f : (c2 = m, r2 = void 0);
      const x2 = c2 === m && t2[i3 + 1].startsWith("/>") ? " " : "";
      l2 += c2 === f ? s3 + n$1 : d2 >= 0 ? (o2.push(a2), s3.slice(0, d2) + e$2 + s3.slice(d2) + h + x2) : s3 + h + (-2 === d2 ? i3 : x2);
    }
    return [P(t2, l2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : 3 === i2 ? "</math>" : "")), o2];
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
          if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(e$2)) {
            const i2 = v2[a2++], s3 = r2.getAttribute(t3).split(h), e2 = /([.?@])?(.*)/.exec(i2);
            d2.push({ type: 1, index: c2, name: e2[2], strings: s3, ctor: "." === e2[1] ? H : "?" === e2[1] ? I : "@" === e2[1] ? L : k }), r2.removeAttribute(t3);
          } else t3.startsWith(h) && (d2.push({ type: 6, index: c2 }), r2.removeAttribute(t3));
          if ($.test(r2.tagName)) {
            const t3 = r2.textContent.split(h), s3 = t3.length - 1;
            if (s3 > 0) {
              r2.textContent = i$1 ? i$1.emptyScript : "";
              for (let i2 = 0; i2 < s3; i2++) r2.append(t3[i2], l()), C.nextNode(), d2.push({ type: 2, index: ++c2 });
              r2.append(t3[s3], l());
            }
          }
        } else if (8 === r2.nodeType) if (r2.data === o$3) d2.push({ type: 2, index: c2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = r2.data.indexOf(h, t3 + 1)); ) d2.push({ type: 7, index: c2 }), t3 += h.length - 1;
        }
        c2++;
      }
    }
    static createElement(t2, i2) {
      const s2 = r$2.createElement("template");
      return s2.innerHTML = t2, s2;
    }
  }
  function S(t2, i2, s2 = t2, e2) {
    if (i2 === T) return i2;
    let h2 = void 0 !== e2 ? s2._$Co?.[e2] : s2._$Cl;
    const o2 = c(i2) ? void 0 : i2._$litDirective$;
    return h2?.constructor !== o2 && (h2?._$AO?.(false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ??= [])[e2] = h2 : s2._$Cl = h2), void 0 !== h2 && (i2 = S(t2, h2._$AS(t2, i2.values), h2, e2)), i2;
  }
  class M {
    constructor(t2, i2) {
      this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t2) {
      const { el: { content: i2 }, parts: s2 } = this._$AD, e2 = (t2?.creationScope ?? r$2).importNode(i2, true);
      C.currentNode = e2;
      let h2 = C.nextNode(), o2 = 0, n3 = 0, l2 = s2[0];
      for (; void 0 !== l2; ) {
        if (o2 === l2.index) {
          let i3;
          2 === l2.type ? i3 = new R(h2, h2.nextSibling, this, t2) : 1 === l2.type ? i3 = new l2.ctor(h2, l2.name, l2.strings, this, t2) : 6 === l2.type && (i3 = new z(h2, this, t2)), this._$AV.push(i3), l2 = s2[++n3];
        }
        o2 !== l2?.index && (h2 = C.nextNode(), o2++);
      }
      return C.currentNode = r$2, e2;
    }
    p(t2) {
      let i2 = 0;
      for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
    }
  }
  class R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t2, i2, s2, e2) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cv = e2?.isConnected ?? true;
    }
    get parentNode() {
      let t2 = this._$AA.parentNode;
      const i2 = this._$AM;
      return void 0 !== i2 && 11 === t2?.nodeType && (t2 = i2.parentNode), t2;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t2, i2 = this) {
      t2 = S(this, t2, i2), c(t2) ? t2 === E || null == t2 || "" === t2 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t2 !== this._$AH && t2 !== T && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : u(t2) ? this.k(t2) : this._(t2);
    }
    O(t2) {
      return this._$AA.parentNode.insertBefore(t2, this._$AB);
    }
    T(t2) {
      this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
    }
    _(t2) {
      this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(r$2.createTextNode(t2)), this._$AH = t2;
    }
    $(t2) {
      const { values: i2, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = N.createElement(P(s2.h, s2.h[0]), this.options)), s2);
      if (this._$AH?._$AD === e2) this._$AH.p(i2);
      else {
        const t3 = new M(e2, this), s3 = t3.u(this.options);
        t3.p(i2), this.T(s3), this._$AH = t3;
      }
    }
    _$AC(t2) {
      let i2 = A.get(t2.strings);
      return void 0 === i2 && A.set(t2.strings, i2 = new N(t2)), i2;
    }
    k(t2) {
      a(this._$AH) || (this._$AH = [], this._$AR());
      const i2 = this._$AH;
      let s2, e2 = 0;
      for (const h2 of t2) e2 === i2.length ? i2.push(s2 = new R(this.O(l()), this.O(l()), this, this.options)) : s2 = i2[e2], s2._$AI(h2), e2++;
      e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
    }
    _$AR(t2 = this._$AA.nextSibling, i2) {
      for (this._$AP?.(false, true, i2); t2 !== this._$AB; ) {
        const i3 = t2.nextSibling;
        t2.remove(), t2 = i3;
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
    constructor(t2, i2, s2, e2, h2) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = E;
    }
    _$AI(t2, i2 = this, s2, e2) {
      const h2 = this.strings;
      let o2 = false;
      if (void 0 === h2) t2 = S(this, t2, i2, 0), o2 = !c(t2) || t2 !== this._$AH && t2 !== T, o2 && (this._$AH = t2);
      else {
        const e3 = t2;
        let n3, r2;
        for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r2 = S(this, e3[s2 + n3], i2, n3), r2 === T && (r2 = this._$AH[n3]), o2 ||= !c(r2) || r2 !== this._$AH[n3], r2 === E ? t2 = E : t2 !== E && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
      }
      o2 && !e2 && this.j(t2);
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
    constructor(t2, i2, s2, e2, h2) {
      super(t2, i2, s2, e2, h2), this.type = 5;
    }
    _$AI(t2, i2 = this) {
      if ((t2 = S(this, t2, i2, 0) ?? E) === T) return;
      const s2 = this._$AH, e2 = t2 === E && s2 !== E || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== E && (s2 === E || e2);
      e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
    }
    handleEvent(t2) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
    }
  }
  class z {
    constructor(t2, i2, s2) {
      this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t2) {
      S(this, t2);
    }
  }
  const j = t$1.litHtmlPolyfillSupport;
  j?.(N, R), (t$1.litHtmlVersions ??= []).push("3.3.1");
  const B = (t2, i2, s2) => {
    const e2 = s2?.renderBefore ?? i2;
    let h2 = e2._$litPart$;
    if (void 0 === h2) {
      const t3 = s2?.renderBefore ?? null;
      e2._$litPart$ = h2 = new R(i2.insertBefore(l(), t3), t3, void 0, s2 ?? {});
    }
    return h2._$AI(t2), h2;
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const s = globalThis;
  class i extends y$1 {
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
  }
  i._$litElement$ = true, i["finalized"] = true, s.litElementHydrateSupport?.({ LitElement: i });
  const o$2 = s.litElementPolyfillSupport;
  o$2?.({ LitElement: i });
  (s.litElementVersions ??= []).push("4.2.1");
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t = (t2) => (e2, o2) => {
    void 0 !== o2 ? o2.addInitializer((() => {
      customElements.define(t2, e2);
    })) : customElements.define(t2, e2);
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o$1 = { attribute: true, type: String, converter: u$1, reflect: false, hasChanged: f$1 }, r$1 = (t2 = o$1, e2, r2) => {
    const { kind: n3, metadata: i2 } = r2;
    let s2 = globalThis.litPropertyMetadata.get(i2);
    if (void 0 === s2 && globalThis.litPropertyMetadata.set(i2, s2 = new Map()), "setter" === n3 && ((t2 = Object.create(t2)).wrapped = true), s2.set(r2.name, t2), "accessor" === n3) {
      const { name: o2 } = r2;
      return { set(r3) {
        const n4 = e2.get.call(this);
        e2.set.call(this, r3), this.requestUpdate(o2, n4, t2);
      }, init(e3) {
        return void 0 !== e3 && this.C(o2, void 0, t2, e3), e3;
      } };
    }
    if ("setter" === n3) {
      const { name: o2 } = r2;
      return function(r3) {
        const n4 = this[o2];
        e2.call(this, r3), this.requestUpdate(o2, n4, t2);
      };
    }
    throw Error("Unsupported decorator location: " + n3);
  };
  function n2(t2) {
    return (e2, o2) => "object" == typeof o2 ? r$1(t2, e2, o2) : ((t3, e3, o3) => {
      const r2 = e3.hasOwnProperty(o3);
      return e3.constructor.createProperty(o3, t3), r2 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
    })(t2, e2, o2);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function r(r2) {
    return n2({ ...r2, state: true, attribute: false });
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$1 = (e2, t2, c2) => (c2.configurable = true, c2.enumerable = true, Reflect.decorate && "object" != typeof t2 && Object.defineProperty(e2, t2, c2), c2);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function e(e2, r2) {
    return (n3, s2, i2) => {
      const o2 = (t2) => t2.renderRoot?.querySelector(e2) ?? null;
      return e$1(n3, s2, { get() {
        return o2(this);
      } });
    };
  }
  class OpenAITranslator {
    constructor() {
      this.useDeveloperRole = true;
    }
    updateConfig(config) {
      Object.assign(this.config ??= {}, config);
    }
    get ready() {
      return (this.config?.apiKey?.length ?? 0) > 0;
    }
    async translate(options) {
      const { text, from, to } = options;
      const role = this.useDeveloperRole ? "developer" : "system";
      try {
        return await this.sendRequest(role, text, from, to);
      } catch (err) {
        if (this.useDeveloperRole && err instanceof Error && err.message.includes("400")) {
          this.useDeveloperRole = false;
          return await this.sendRequest("system", text, from, to);
        }
        throw err;
      }
    }
    sendRequest(role, text, from, to) {
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          method: "POST",
          url: `${this.config.baseUrl.replace(/\/+$/, "")}/chat/completions`,
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.config.apiKey}`
          },
          data: JSON.stringify({
            model: this.config.model,
            messages: [
              {
                role,
                content: this.config.prompt.replaceAll("{from}", from).replaceAll("{to}", to)
              },
              {
                role: "user",
                content: text
              }
            ],
            temperature: this.config.temperature ?? 0.3,
            ...(this.config.maxTokens ?? 0) > 0 ? { max_tokens: this.config.maxTokens } : {}
          }),
          onload: (resp) => {
            if (resp.status < 200 || resp.status >= 300) {
              reject(new Error(`OpenAI API error ${resp.status}: ${resp.responseText}`));
              return;
            }
            try {
              const data = JSON.parse(resp.responseText);
              const content = data.choices?.[0]?.message?.content;
              if (content === void 0 || content === null) {
                reject(new Error("OpenAI API returned empty response"));
                return;
              }
              resolve(content.trim());
            } catch {
              reject(new Error("OpenAI API returned invalid JSON"));
            }
          },
          onerror: () => {
            reject(new Error("OpenAI API network error"));
          }
        });
      });
    }
    async fetchModels() {
      const url = `${this.config.baseUrl.replace(/\/+$/, "")}/models`;
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          method: "GET",
          url,
          headers: {
            Authorization: `Bearer ${this.config.apiKey}`
          },
          onload: (resp) => {
            if (resp.status < 200 || resp.status >= 300) {
              reject(new Error(`Failed to fetch models (${resp.status})`));
              return;
            }
            try {
              const data = JSON.parse(resp.responseText);
              const models = (data.data ?? []).map((m2) => m2.id).sort();
              resolve(models);
            } catch {
              reject(new Error("Failed to parse models response"));
            }
          },
          onerror: () => {
            reject(new Error("Network error fetching models"));
          }
        });
      });
    }
    detectPageLanguage() {
      return document.documentElement.lang || "en";
    }
  }
  class Progress {
    constructor(options = {}) {
      this.progessElements = new Set();
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
      for (let i2 = startIndex; i2 < els.length; i2++) {
        const el = els[i2];
        if (!el) {
          continue;
        }
        const prev = els[i2 - 1];
        if (prev) {
          prevOffset = Number.parseInt(prev.style.bottom) + prev.offsetHeight;
        }
        el.style.zIndex = (this.zIndex + i2).toString();
        el.style.bottom = `${this.offset + prevOffset}px`;
      }
    }
  }
  class ChromeTranslator {
    constructor(options = {}) {
      this.translatorCacheMap = new Map();
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
      const availability = await window.Translator.availability(languages);
      if (availability === "unavailable") {
        console.warn("Translation not supported; try a different language combination.");
        return void 0;
      } else if (availability === "available") {
        return window.Translator.create(languages);
      }
      return window.Translator.create({
        ...languages,
        monitor: (monitor) => {
          const progess = this.progress?.createProgressElement({ title: "Downloading Translator..." });
          monitor.addEventListener("downloadprogress", (e2) => {
            const percentage = Math.floor(e2.loaded * 100);
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
  function clamp(v2, min, max) {
    return Math.min(Math.max(v2, min), max);
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
  function parseCacheKey(key) {
    const match = key.match(/^([a-zA-Z-]+)->([a-zA-Z-]+):(.*)$/);
    if (!match) {
      return null;
    }
    return { from: match[1], to: match[2], text: match[3] };
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
    constructor(options) {
      this.useHTML = false;
      this.isRunning = false;
      this.batchSize = 6;
      this.activeCount = 0;
      this.pendingQueue = [];
      this.translateElements = [];
      this.translateContainers = [];
      this.translateLoadingElements = [];
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
          const translation = await this.translator.translate(options);
          this.translateCache.set(key, translation);
          node.translate = translation;
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
      this.translateCache.set(key, innerHTML);
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
    stop() {
      this.isRunning = false;
      this.pendingQueue = [];
      this.activeCount = 0;
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
            const cancelLoading = this.createLodingDisplay(node);
            this.enqueueTranslation({ textParagraph, cancelLoading });
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
    enqueueTranslation(item) {
      this.pendingQueue.push(item);
      this.processQueue();
    }
    processQueue() {
      while (this.isRunning && this.activeCount < this.batchSize && this.pendingQueue.length > 0) {
        const item = this.pendingQueue.shift();
        this.activeCount++;
        this.processItem(item).finally(() => {
          this.activeCount--;
          this.processQueue();
        });
      }
    }
    async processItem(item) {
      const { textParagraph, cancelLoading } = item;
      try {
        if (this.useHTML) {
          const translateOptions = { from: this.language.from, to: this.language.to, map: textParagraph.combinedTextMap, text: textParagraph.combinedText };
          textParagraph.translate = await this.translateHTML(translateOptions);
          cancelLoading();
          this.isRunning && this.createParagraphBilingualDisplayHTML(textParagraph);
        } else {
          const translateOptions = { textNodes: textParagraph.textNodes, from: this.language.from, to: this.language.to };
          textParagraph.textNodes = await this.translate(translateOptions);
          cancelLoading();
          this.isRunning && this.createParagraphBilingualDisplay(textParagraph);
        }
      } catch (error) {
        cancelLoading();
        console.error("Translation error:", error);
      }
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
    constructor() {
      this.providers = new Map();
      this.current = "chrome";
    }
    registerProvider(name, provider) {
      this.providers.set(name, provider);
    }
    setProvider(name) {
      if (!this.providers.has(name)) {
        throw new Error(`Provider "${name}" not registered`);
      }
      this.current = name;
    }
    get providerName() {
      return this.current;
    }
    getProvider(name) {
      return this.providers.get(name);
    }
    get currentProvider() {
      const provider = this.providers.get(this.current);
      if (!provider) {
        throw new Error(`Current provider "${this.current}" not found`);
      }
      return provider;
    }
    async translate(options) {
      return this.currentProvider.translate(options);
    }
    async detectLanguage(text) {
      const detector = await window.LanguageDetector.create({
        monitor: (monitor) => {
          const progress = this.providers.get("chrome")?.progress;
          if (progress) {
            const p2 = progress.createProgressElement({ title: "Downloading LanguageDetector..." });
            monitor.addEventListener("downloadprogress", (e2) => {
              const percentage = Math.floor(e2.loaded * 100);
              p2?.showProgress(percentage);
            });
          }
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
      } catch (e2) {
        console.warn("[LFUCache] Load failed:", e2);
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
      entries.sort((a2, b2) => {
        const A2 = a2[1];
        const B2 = b2[1];
        if (A2.freq === B2.freq) {
          return A2.timestamp - B2.timestamp;
        }
        return A2.freq - B2.freq;
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
set(key, value, initialFreq) {
      const existing = this.#cache.get(key);
      const item = {
        value,
        freq: initialFreq ?? (existing ? existing.freq + 1 : 1),
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
        value: item.value,
        freq: item.freq,
        timestamp: item.timestamp
      }));
      return {
        totalItems: this.#cache.size,
        maxSize: formatSize(maxBytes),
        usedSize: formatSize(usedBytes),
        freeSize: formatSize(maxBytes - usedBytes),
        usedBytes,
        maxBytes,
        items: sortedItems
      };
    }
  }
  const textExtractorInstance = new TextExtractor();
  const progressInstance = new Progress();
  const translatorInstance = new Translator();
  translatorInstance.registerProvider("chrome", new ChromeTranslator({ progress: progressInstance }));
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
  function useWatchUrlChange(callback, interval = 500) {
    let lastUrl = location.href;
    const timer = window.setInterval(() => {
      const currentUrl = location.href;
      if (currentUrl !== lastUrl) {
        const oldUrl = lastUrl;
        lastUrl = currentUrl;
        callback(currentUrl, oldUrl);
      }
    }, interval);
    return function stopWatching() {
      clearInterval(timer);
    };
  }
  const languageIcon = b`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>`;
  const checkIcon = b`<svg viewBox="0 0 1024 1024" width="10" height="10"><path fill="currentColor" d="M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/></svg>`;
  const refreshIcon = b`<svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M17.65 6.35A7.958 7.958 0 0 0 12 4C7.58 4 4.01 7.58 4.01 12S7.58 20 12 20c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`;
  const settingIcon = b`<svg viewBox="0 0 1024 1024" width="20" height="20"><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256"/></svg>`;
  function emitCtEvent(host, name, detail) {
    host.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true
    }));
  }
  var __defProp$9 = Object.defineProperty;
  var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
  var __decorateClass$a = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$9(target, key, result);
    return result;
  };
  let CtButton = class extends i {
    constructor() {
      super(...arguments);
      this.size = "sm";
      this.variant = "ghost";
      this.square = false;
      this.title = "";
      this.disabled = false;
    }
    onClick() {
      if (this.disabled) {
        return;
      }
      emitCtEvent(this, "ct-click", void 0);
    }
    render() {
      return x`
      <button
        part="button"
        class="flex items-center justify-center box-border cursor-pointer transition-all transition-duration-0.2s leading-none disabled:op-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[#00c4b6] focus-visible:outline-offset-2"
        ?disabled=${this.disabled}
        title=${this.title}
        @click=${this.onClick}
      >
        <slot></slot>
      </button>
    `;
    }
  };
  CtButton.styles = i$3`
    :host([size="sm"]) button { min-width: 28px; height: 28px; padding: 0 8px; font-size: 12px; border-radius: 6px; gap: 4px; }
    :host([size="md"]) button { min-width: 36px; height: 36px; padding: 0 14px; font-size: 13px; border-radius: 8px; gap: 6px; }
    :host([size="sm"][square]) button { width: 28px; padding: 0; border-radius: 50%; }
    :host([size="md"][square]) button { width: 36px; padding: 0; }
    :host([variant="ghost"]) button { border: none; background: var(--ct-btn-bg, #f5f5f5); color: var(--ct-btn-color, #999); }
    :host([variant="ghost"]) button:hover { background: var(--ct-btn-hover-bg, #e8e8e8); color: var(--ct-btn-hover-color, #333); }
    :host([variant="outlined"]) button { border: 1px solid var(--ct-btn-border, #ddd); background: var(--ct-btn-bg, #fafafa); color: var(--ct-btn-color, #00c4b6); }
    :host([variant="outlined"]) button:hover { border-color: var(--ct-btn-hover-border, #00c4b6); }
    :host([variant="filled"]) button { border: none; background: var(--ct-btn-bg, #00c4b6); color: var(--ct-btn-color, #fff); }
    :host([variant="filled"]) button:hover { opacity: 0.9; }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.box-border{box-sizing:border-box;}
.flex{display:flex;}
.cursor-pointer{cursor:pointer;}
.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.border{border-width:1px;}
.leading-none{line-height:1;}
.disabled\\:op-50:disabled{opacity:0.5;}
.focus-visible\\:outline-2:focus-visible{outline-width:2px;}
.focus-visible\\:outline-\\[\\#00c4b6\\]:focus-visible{--un-outline-color-opacity:1;outline-color:rgb(0 196 182 / var(--un-outline-color-opacity)) /* #00c4b6 */;}
.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px;}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-duration-0\\.2s{transition-duration:0.2s;};
  `;
  __decorateClass$a([
    n2({ type: String, reflect: true })
  ], CtButton.prototype, "size", 2);
  __decorateClass$a([
    n2({ type: String, reflect: true })
  ], CtButton.prototype, "variant", 2);
  __decorateClass$a([
    n2({ type: Boolean, reflect: true })
  ], CtButton.prototype, "square", 2);
  __decorateClass$a([
    n2({ type: String })
  ], CtButton.prototype, "title", 2);
  __decorateClass$a([
    n2({ type: Boolean })
  ], CtButton.prototype, "disabled", 2);
  CtButton = __decorateClass$a([
    t("ct-button")
  ], CtButton);
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
  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o = (o2) => o2 ?? E;
  var __defProp$8 = Object.defineProperty;
  var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
  var __decorateClass$9 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$8(target, key, result);
    return result;
  };
  let CtInput = class extends i {
    constructor() {
      super(...arguments);
      this.value = "";
      this.type = "text";
      this.placeholder = "";
      this.label = "";
      this.helpText = "";
      this.error = "";
      this.disabled = false;
      this.readonly = false;
      this.min = void 0;
      this.max = void 0;
      this.step = void 0;
    }
    onChange(e2) {
      const value = e2.target.value;
      emitCtEvent(this, "ct-change", { value });
    }
    onInput(e2) {
      const value = e2.target.value;
      emitCtEvent(this, "ct-input", { value });
    }
    render() {
      return x`
      <label part="root" class="flex flex-col gap-4px">
        ${this.label ? x`<span part="label" class="text-12px text-[#888] font-500">${this.label}</span>` : ""}
        <input
          part="input"
          type=${this.type}
          class="px-12px py-8px border-1px border-solid border-[#ddd] rounded-[6px] text-13px text-[#333] bg-[#fafafa] outline-none transition-colors transition-duration-0.2s w-full box-border focus:border-[#00c4b6] focus:bg-[#fff] disabled:op-70 disabled:cursor-default"
          .value=${this.value}
          placeholder=${o(this.placeholder || void 0)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          min=${o(this.min)}
          max=${o(this.max)}
          step=${o(this.step)}
          @change=${this.onChange}
          @input=${this.onInput}
        >
        ${this.helpText ? x`<span part="help" class="text-11px text-[#888]">${this.helpText}</span>` : ""}
        ${this.error ? x`<span part="error" class="text-11px text-[#e74c3c]">${this.error}</span>` : ""}
      </label>
    `;
    }
  };
  CtInput.styles = i$3`
    :host {
      display: block;
    }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.box-border{box-sizing:border-box;}
.block{display:block;}
.w-full{width:100%;}
.flex{display:flex;}
.flex-col{flex-direction:column;}
.disabled\\:cursor-default:disabled{cursor:default;}
.gap-4px{gap:4px;}
.border-1px{border-width:1px;}
.border-\\[\\#ddd\\]{--un-border-opacity:1;border-color:rgb(221 221 221 / var(--un-border-opacity));}
.focus\\:border-\\[\\#00c4b6\\]:focus{--un-border-opacity:1;border-color:rgb(0 196 182 / var(--un-border-opacity));}
.rounded-\\[6px\\]{border-radius:6px;}
.border-solid{border-style:solid;}
.bg-\\[\\#fafafa\\]{--un-bg-opacity:1;background-color:rgb(250 250 250 / var(--un-bg-opacity)) /* #fafafa */;}
.focus\\:bg-\\[\\#fff\\]:focus{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.px-12px{padding-left:12px;padding-right:12px;}
.py-8px{padding-top:8px;padding-bottom:8px;}
.text-11px{font-size:11px;}
.text-12px{font-size:12px;}
.text-13px{font-size:13px;}
.text-\\[\\#333\\]{--un-text-opacity:1;color:rgb(51 51 51 / var(--un-text-opacity)) /* #333 */;}
.text-\\[\\#888\\]{--un-text-opacity:1;color:rgb(136 136 136 / var(--un-text-opacity)) /* #888 */;}
.text-\\[\\#e74c3c\\]{--un-text-opacity:1;color:rgb(231 76 60 / var(--un-text-opacity)) /* #e74c3c */;}
.font-500{font-weight:500;}
.disabled\\:op-70:disabled{opacity:0.7;}
.outline-none{outline:2px solid transparent;outline-offset:2px;}
.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-duration-0\\.2s{transition-duration:0.2s;};
  `;
  __decorateClass$9([
    n2({ type: String })
  ], CtInput.prototype, "value", 2);
  __decorateClass$9([
    n2({ type: String })
  ], CtInput.prototype, "type", 2);
  __decorateClass$9([
    n2({ type: String })
  ], CtInput.prototype, "placeholder", 2);
  __decorateClass$9([
    n2({ type: String })
  ], CtInput.prototype, "label", 2);
  __decorateClass$9([
    n2({ type: String })
  ], CtInput.prototype, "helpText", 2);
  __decorateClass$9([
    n2({ type: String })
  ], CtInput.prototype, "error", 2);
  __decorateClass$9([
    n2({ type: Boolean })
  ], CtInput.prototype, "disabled", 2);
  __decorateClass$9([
    n2({ type: Boolean })
  ], CtInput.prototype, "readonly", 2);
  __decorateClass$9([
    n2({ type: Number })
  ], CtInput.prototype, "min", 2);
  __decorateClass$9([
    n2({ type: Number })
  ], CtInput.prototype, "max", 2);
  __decorateClass$9([
    n2({ type: Number })
  ], CtInput.prototype, "step", 2);
  CtInput = __decorateClass$9([
    t("ct-input")
  ], CtInput);
  var __defProp$7 = Object.defineProperty;
  var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
  var __decorateClass$8 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$7(target, key, result);
    return result;
  };
  let CtSelect = class extends i {
    constructor() {
      super(...arguments);
      this.uid = `cs-${Math.random().toString(36).slice(2, 8)}`;
      this.value = "";
      this.options = [];
      this.placeholder = "Select…";
      this.disabled = false;
      this.loading = false;
      this.error = "";
      this.dropdownOpen = false;
      this.dropup = false;
      this.highlightIndex = -1;
      this.onDocumentMouseDown = (e2) => {
        if (!this.dropdownOpen) {
          return;
        }
        const path = e2.composedPath();
        const inDropdown = path.some((el) => el instanceof Element && el.getAttribute("data-dropdown") === this.uid);
        if (!inDropdown) {
          this.dropdownOpen = false;
        }
      };
    }
    get label() {
      if (this.loading) {
        return "Loading…";
      }
      const selected = this.options.find((o2) => o2.value === this.value);
      return selected?.label ?? this.placeholder;
    }
    connectedCallback() {
      super.connectedCallback();
      document.addEventListener("mousedown", this.onDocumentMouseDown);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      document.removeEventListener("mousedown", this.onDocumentMouseDown);
    }
    toggle() {
      if (this.disabled) {
        return;
      }
      if (!this.dropdownOpen) {
        const trigger = this.renderRoot.querySelector(".trigger");
        const rect = trigger.getBoundingClientRect();
        this.dropup = window.innerHeight - rect.bottom < 200;
        this.highlightIndex = Math.max(0, this.options.findIndex((o2) => o2.value === this.value));
      }
      this.dropdownOpen = !this.dropdownOpen;
    }
    select(value) {
      this.dropdownOpen = false;
      if (value !== this.value) {
        emitCtEvent(this, "ct-change", { value });
      }
    }
    onKeydown(e2) {
      if (!this.dropdownOpen) {
        return;
      }
      switch (e2.key) {
        case "ArrowDown":
          e2.preventDefault();
          this.highlightIndex = Math.min(this.highlightIndex + 1, this.options.length - 1);
          break;
        case "ArrowUp":
          e2.preventDefault();
          this.highlightIndex = Math.max(this.highlightIndex - 1, 0);
          break;
        case "Enter":
        case " ":
          e2.preventDefault();
          if (this.highlightIndex >= 0) {
            this.select(this.options[this.highlightIndex].value);
          }
          break;
        case "Escape":
          this.dropdownOpen = false;
          break;
      }
    }
    render() {
      return x`
      <div class="relative" data-dropdown=${this.uid} part="root">
        <button
          part="trigger"
          class="trigger w-full px-12px py-10px border-1px border-solid border-[#ddd] rounded-[8px] bg-[#f8f8f8] cursor-pointer text-13px text-[#333] flex items-center justify-between gap-4px transition-colors transition-duration-0.2s box-border disabled:op-70 disabled:cursor-default hover:border-[#00c4b6] disabled:hover:border-[#ddd]"
          ?disabled=${this.disabled || this.loading}
          @click=${this.toggle}
          aria-haspopup="listbox"
          aria-expanded=${this.dropdownOpen}
        >
          ${this.label}
          <span part="arrow" class="text-10px text-[#999]" style="transition: transform 0.2s; transform: ${this.dropdownOpen ? "rotate(180deg)" : "none"}">▾</span>
        </button>

        ${this.error ? x`<div part="error" class="text-11px text-[#e74c3c] lh-[1.4] pt-2px">${this.error}</div>` : ""}

        ${!this.disabled && !this.loading && this.dropdownOpen && this.options.length > 0 ? x`
          <div
            part="dropdown"
            class="absolute left-0 right-0 bg-[#fff] border-1px border-solid border-[#ddd] rounded-[8px] shadow-[0_8px_24px_rgba(0,0,0,.12)] max-h-200px overflow-y-auto z-10 ${this.dropup ? "top-auto bottom-[calc(100%+4px)]" : "top-[calc(100%+4px)]"}"
            role="listbox"
            @keydown=${this.onKeydown}
          >
            ${this.options.map((o2, i2) => x`
              <div
                part="option"
                class="px-12px py-8px cursor-pointer text-13px text-[#555] transition-colors transition-duration-0.15s hover:bg-[#f0f0f0] ${i2 === this.highlightIndex ? "bg-[#f0f0f0]" : ""} ${o2.value === this.value ? "text-[#00c4b6]! font-600 bg-[#f0fdfb]" : ""}"
                role="option"
                aria-selected=${o2.value === this.value}
                @click=${() => this.select(o2.value)}
                @mouseenter=${() => {
      this.highlightIndex = i2;
    }}
              >${o2.label}</div>
            `)}
          </div>
        ` : E}
      </div>
    `;
    }
  };
  CtSelect.styles = i$3`
    :host {
      display: block;
    }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.bottom-\\[calc\\(100\\%\\+4px\\)\\]{bottom:calc(100% + 4px);}
.left-0{left:0;}
.right-0{right:0;}
.top-\\[calc\\(100\\%\\+4px\\)\\]{top:calc(100% + 4px);}
.top-auto{top:auto;}
.z-10{z-index:10;}
.box-border{box-sizing:border-box;}
.block{display:block;}
.max-h-200px{max-height:200px;}
.w-full{width:100%;}
.flex{display:flex;}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.disabled\\:cursor-default:disabled{cursor:default;}
.cursor-pointer{cursor:pointer;}
.items-center{align-items:center;}
.justify-between{justify-content:space-between;}
.gap-4px{gap:4px;}
.overflow-y-auto{overflow-y:auto;}
.border-1px{border-width:1px;}
.border-\\[\\#ddd\\]{--un-border-opacity:1;border-color:rgb(221 221 221 / var(--un-border-opacity));}
.hover\\:border-\\[\\#00c4b6\\]:hover{--un-border-opacity:1;border-color:rgb(0 196 182 / var(--un-border-opacity));}
.disabled\\:hover\\:border-\\[\\#ddd\\]:hover:disabled{--un-border-opacity:1;border-color:rgb(221 221 221 / var(--un-border-opacity));}
.rounded-\\[8px\\]{border-radius:8px;}
.border-solid{border-style:solid;}
.bg-\\[\\#f0f0f0\\]{--un-bg-opacity:1;background-color:rgb(240 240 240 / var(--un-bg-opacity)) /* #f0f0f0 */;}
.bg-\\[\\#f0fdfb\\]{--un-bg-opacity:1;background-color:rgb(240 253 251 / var(--un-bg-opacity)) /* #f0fdfb */;}
.bg-\\[\\#f8f8f8\\]{--un-bg-opacity:1;background-color:rgb(248 248 248 / var(--un-bg-opacity)) /* #f8f8f8 */;}
.bg-\\[\\#fff\\]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.hover\\:bg-\\[\\#f0f0f0\\]:hover{--un-bg-opacity:1;background-color:rgb(240 240 240 / var(--un-bg-opacity)) /* #f0f0f0 */;}
.px-12px{padding-left:12px;padding-right:12px;}
.py-10px{padding-top:10px;padding-bottom:10px;}
.py-8px{padding-top:8px;padding-bottom:8px;}
.pt-2px{padding-top:2px;}
.text-10px{font-size:10px;}
.text-11px{font-size:11px;}
.text-13px{font-size:13px;}
.text-\\[\\#00c4b6\\]\\!{--un-text-opacity:1 !important;color:rgb(0 196 182 / var(--un-text-opacity)) /* #00c4b6 */ !important;}
.text-\\[\\#333\\]{--un-text-opacity:1;color:rgb(51 51 51 / var(--un-text-opacity)) /* #333 */;}
.text-\\[\\#555\\]{--un-text-opacity:1;color:rgb(85 85 85 / var(--un-text-opacity)) /* #555 */;}
.text-\\[\\#999\\]{--un-text-opacity:1;color:rgb(153 153 153 / var(--un-text-opacity)) /* #999 */;}
.text-\\[\\#e74c3c\\]{--un-text-opacity:1;color:rgb(231 76 60 / var(--un-text-opacity)) /* #e74c3c */;}
.font-600{font-weight:600;}
.lh-\\[1\\.4\\]{line-height:1.4;}
.disabled\\:op-70:disabled{opacity:0.7;}
.shadow-\\[0_8px_24px_rgba\\(0\\,0\\,0\\,\\.12\\)\\]{--un-shadow:0 8px 24px var(--un-shadow-color, rgba(0, 0, 0, .12));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-duration-0\\.15s{transition-duration:0.15s;}
.transition-duration-0\\.2s{transition-duration:0.2s;};
  `;
  __decorateClass$8([
    n2({ type: String })
  ], CtSelect.prototype, "value", 2);
  __decorateClass$8([
    n2({ type: Array })
  ], CtSelect.prototype, "options", 2);
  __decorateClass$8([
    n2({ type: String })
  ], CtSelect.prototype, "placeholder", 2);
  __decorateClass$8([
    n2({ type: Boolean })
  ], CtSelect.prototype, "disabled", 2);
  __decorateClass$8([
    n2({ type: Boolean })
  ], CtSelect.prototype, "loading", 2);
  __decorateClass$8([
    n2({ type: String })
  ], CtSelect.prototype, "error", 2);
  __decorateClass$8([
    r()
  ], CtSelect.prototype, "dropdownOpen", 2);
  __decorateClass$8([
    r()
  ], CtSelect.prototype, "dropup", 2);
  __decorateClass$8([
    r()
  ], CtSelect.prototype, "highlightIndex", 2);
  CtSelect = __decorateClass$8([
    t("ct-select")
  ], CtSelect);
  var __defProp$6 = Object.defineProperty;
  var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
  var __decorateClass$7 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$6(target, key, result);
    return result;
  };
  let CtTextarea = class extends i {
    constructor() {
      super(...arguments);
      this.value = "";
      this.placeholder = "";
      this.label = "";
      this.helpText = "";
      this.error = "";
      this.disabled = false;
      this.readonly = false;
      this.rows = void 0;
      this.minLength = void 0;
      this.maxLength = void 0;
    }
    onChange(e2) {
      const value = e2.target.value;
      emitCtEvent(this, "ct-change", { value });
    }
    onInput(e2) {
      const value = e2.target.value;
      emitCtEvent(this, "ct-input", { value });
    }
    render() {
      return x`
      <label part="root" class="flex flex-col gap-4px">
        ${this.label ? x`<span part="label" class="text-12px text-[#888] font-500">${this.label}</span>` : ""}
        <textarea
          part="textarea"
          class="px-12px py-8px border-1px border-solid border-[#ddd] rounded-[6px] text-13px text-[#333] bg-[#fafafa] outline-none transition-colors transition-duration-0.2s w-full min-h-120px box-border resize-y font-inherit focus:border-[#00c4b6] focus:bg-[#fff] disabled:op-70 disabled:cursor-default"
          .value=${this.value}
          placeholder=${o(this.placeholder || void 0)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          rows=${o(this.rows)}
          minlength=${o(this.minLength)}
          maxlength=${o(this.maxLength)}
          @change=${this.onChange}
          @input=${this.onInput}
        ></textarea>
        ${this.helpText ? x`<span part="help" class="text-11px text-[#888]">${this.helpText}</span>` : ""}
        ${this.error ? x`<span part="error" class="text-11px text-[#e74c3c]">${this.error}</span>` : ""}
      </label>
    `;
    }
  };
  CtTextarea.styles = i$3`
    :host {
      display: block;
    }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.box-border{box-sizing:border-box;}
.block{display:block;}
.min-h-120px{min-height:120px;}
.w-full{width:100%;}
.flex{display:flex;}
.flex-col{flex-direction:column;}
.disabled\\:cursor-default:disabled{cursor:default;}
.resize-y{resize:vertical;}
.gap-4px{gap:4px;}
.border-1px{border-width:1px;}
.border-\\[\\#ddd\\]{--un-border-opacity:1;border-color:rgb(221 221 221 / var(--un-border-opacity));}
.focus\\:border-\\[\\#00c4b6\\]:focus{--un-border-opacity:1;border-color:rgb(0 196 182 / var(--un-border-opacity));}
.rounded-\\[6px\\]{border-radius:6px;}
.border-solid{border-style:solid;}
.bg-\\[\\#fafafa\\]{--un-bg-opacity:1;background-color:rgb(250 250 250 / var(--un-bg-opacity)) /* #fafafa */;}
.focus\\:bg-\\[\\#fff\\]:focus{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.px-12px{padding-left:12px;padding-right:12px;}
.py-8px{padding-top:8px;padding-bottom:8px;}
.text-11px{font-size:11px;}
.text-12px{font-size:12px;}
.text-13px{font-size:13px;}
.text-\\[\\#333\\]{--un-text-opacity:1;color:rgb(51 51 51 / var(--un-text-opacity)) /* #333 */;}
.text-\\[\\#888\\]{--un-text-opacity:1;color:rgb(136 136 136 / var(--un-text-opacity)) /* #888 */;}
.text-\\[\\#e74c3c\\]{--un-text-opacity:1;color:rgb(231 76 60 / var(--un-text-opacity)) /* #e74c3c */;}
.font-500{font-weight:500;}
.font-inherit{font-family:inherit;}
.disabled\\:op-70:disabled{opacity:0.7;}
.outline-none{outline:2px solid transparent;outline-offset:2px;}
.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-duration-0\\.2s{transition-duration:0.2s;};
  `;
  __decorateClass$7([
    n2({ type: String })
  ], CtTextarea.prototype, "value", 2);
  __decorateClass$7([
    n2({ type: String })
  ], CtTextarea.prototype, "placeholder", 2);
  __decorateClass$7([
    n2({ type: String })
  ], CtTextarea.prototype, "label", 2);
  __decorateClass$7([
    n2({ type: String })
  ], CtTextarea.prototype, "helpText", 2);
  __decorateClass$7([
    n2({ type: String })
  ], CtTextarea.prototype, "error", 2);
  __decorateClass$7([
    n2({ type: Boolean })
  ], CtTextarea.prototype, "disabled", 2);
  __decorateClass$7([
    n2({ type: Boolean })
  ], CtTextarea.prototype, "readonly", 2);
  __decorateClass$7([
    n2({ type: Number })
  ], CtTextarea.prototype, "rows", 2);
  __decorateClass$7([
    n2({ type: Number })
  ], CtTextarea.prototype, "minLength", 2);
  __decorateClass$7([
    n2({ type: Number })
  ], CtTextarea.prototype, "maxLength", 2);
  CtTextarea = __decorateClass$7([
    t("ct-textarea")
  ], CtTextarea);
  var __defProp$5 = Object.defineProperty;
  var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
  var __decorateClass$6 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$5(target, key, result);
    return result;
  };
  let CtRadioGroup = class extends i {
    constructor() {
      super(...arguments);
      this.options = [];
      this.value = "";
      this.name = "";
      this.direction = "horizontal";
    }
    onChange(value) {
      this.value = value;
      emitCtEvent(this, "ct-change", { value });
    }
    render() {
      return x`
      ${this.options.map((o2) => x`
        <label
          part="option"
          class="flex-1 flex items-center gap-8px px-14px py-10px border-1px border-solid border-[#ddd] rounded-[8px] cursor-pointer text-13px text-[#555] transition-colors transition-duration-0.2s hover:border-[#00c4b6] ${o2.value === this.value ? "border-[#00c4b6]! bg-[#f0fdfb] text-[#00c4b6]! font-600" : ""}"
        >
          <input
            class="hidden"
            type="radio"
            name=${this.name}
            value=${o2.value}
            ?checked=${o2.value === this.value}
            @change=${() => this.onChange(o2.value)}
          >
          <span part="label">${o2.label}</span>
        </label>
      `)}
    `;
    }
  };
  CtRadioGroup.styles = i$3`
    :host {
      display: flex;
    }

    :host([direction="horizontal"]) { flex-direction: row; gap: 12px; }
    :host([direction="vertical"]) { flex-direction: column; gap: 6px; }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.hidden{display:none;}
.flex{display:flex;}
.flex-1{flex:1 1 0%;}
.cursor-pointer{cursor:pointer;}
.items-center{align-items:center;}
.gap-8px{gap:8px;}
.border-1px{border-width:1px;}
.border-\\[\\#00c4b6\\]\\!{--un-border-opacity:1 !important;border-color:rgb(0 196 182 / var(--un-border-opacity)) !important;}
.border-\\[\\#ddd\\]{--un-border-opacity:1;border-color:rgb(221 221 221 / var(--un-border-opacity));}
.hover\\:border-\\[\\#00c4b6\\]:hover{--un-border-opacity:1;border-color:rgb(0 196 182 / var(--un-border-opacity));}
.rounded-\\[8px\\]{border-radius:8px;}
.border-solid{border-style:solid;}
.bg-\\[\\#f0fdfb\\]{--un-bg-opacity:1;background-color:rgb(240 253 251 / var(--un-bg-opacity)) /* #f0fdfb */;}
.px-14px{padding-left:14px;padding-right:14px;}
.py-10px{padding-top:10px;padding-bottom:10px;}
.text-13px{font-size:13px;}
.text-\\[\\#00c4b6\\]\\!{--un-text-opacity:1 !important;color:rgb(0 196 182 / var(--un-text-opacity)) /* #00c4b6 */ !important;}
.text-\\[\\#555\\]{--un-text-opacity:1;color:rgb(85 85 85 / var(--un-text-opacity)) /* #555 */;}
.font-600{font-weight:600;}
.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-duration-0\\.2s{transition-duration:0.2s;};
  `;
  __decorateClass$6([
    n2({ type: Array })
  ], CtRadioGroup.prototype, "options", 2);
  __decorateClass$6([
    n2({ type: String })
  ], CtRadioGroup.prototype, "value", 2);
  __decorateClass$6([
    n2({ type: String })
  ], CtRadioGroup.prototype, "name", 2);
  __decorateClass$6([
    n2({ type: String, reflect: true })
  ], CtRadioGroup.prototype, "direction", 2);
  CtRadioGroup = __decorateClass$6([
    t("ct-radio-group")
  ], CtRadioGroup);
  var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
  var __decorateClass$5 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = decorator(result) || result;
    return result;
  };
  let CtDivider = class extends i {
    render() {
      return x`<div part="root" class="h-1px bg-[#eee]"></div>`;
    }
  };
  CtDivider.styles = i$3`
    :host {
      display: block;
    }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.block{display:block;}
.h-1px{height:1px;}
.bg-\\[\\#eee\\]{--un-bg-opacity:1;background-color:rgb(238 238 238 / var(--un-bg-opacity)) /* #eee */;};
  `;
  CtDivider = __decorateClass$5([
    t("ct-divider")
  ], CtDivider);
  var __defProp$4 = Object.defineProperty;
  var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
  var __decorateClass$4 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$4(target, key, result);
    return result;
  };
  let CtSectionHeader = class extends i {
    constructor() {
      super(...arguments);
      this.label = "";
    }
    render() {
      return x`<div part="root" class="text-13px font-600 text-[#888] mb-10px">${this.label}</div>`;
    }
  };
  CtSectionHeader.styles = i$3`
    :host {
      display: block;
    }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.mb-10px{margin-bottom:10px;}
.block{display:block;}
.text-13px{font-size:13px;}
.text-\\[\\#888\\]{--un-text-opacity:1;color:rgb(136 136 136 / var(--un-text-opacity)) /* #888 */;}
.font-600{font-weight:600;};
  `;
  __decorateClass$4([
    n2({ type: String })
  ], CtSectionHeader.prototype, "label", 2);
  CtSectionHeader = __decorateClass$4([
    t("ct-section-header")
  ], CtSectionHeader);
  var __defProp$3 = Object.defineProperty;
  var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
  var __decorateClass$3 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$3(target, key, result);
    return result;
  };
  let CtTabs = class extends i {
    constructor() {
      super(...arguments);
      this.tabs = [];
      this.active = "";
    }
    onSelect(value) {
      if (value !== this.active) {
        this.active = value;
        emitCtEvent(this, "ct-change", { value });
      }
    }
    render() {
      return x`
      <div class="flex-1 px-0 py-12px flex flex-col gap-2px w-full">
        ${this.tabs.map((t2) => x`
          <div
            part="tab"
            class="tab flex items-center gap-8px px-16px py-10px cursor-pointer text-13px text-[#666] border-l-3px border-l-solid border-l-transparent transition-all transition-duration-0.15s select-none hover:bg-[#f5f5f5] hover:text-[#333] ${t2.value === this.active ? "border-l-[#00c4b6]! bg-[#f0fdfb] text-[#00c4b6]! font-600" : ""}"
            @click=${() => this.onSelect(t2.value)}
          >
            ${t2.icon ? x`<span part="icon" class="text-16px leading-none">${t2.icon}</span>` : ""}
            <span part="label" class="tab-label whitespace-nowrap">${t2.label}</span>
          </div>
        `)}
      </div>
    `;
    }
  };
  CtTabs.styles = i$3`
    :host {
      display: flex;
      flex-direction: column;
      width: 140px;
      height: 100%;
    }

    @media (max-width: 500px) {
      :host { width: 60px; }
      .tab { padding: 10px 2px; justify-content: center; }
      .tab-label { display: none; }
    }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.w-full{width:100%;}
.flex{display:flex;}
.flex-1{flex:1 1 0%;}
.flex-col{flex-direction:column;}
.cursor-pointer{cursor:pointer;}
.select-none{-webkit-user-select:none;user-select:none;}
.items-center{align-items:center;}
.gap-2px{gap:2px;}
.gap-8px{gap:8px;}
.whitespace-nowrap{white-space:nowrap;}
.border-l-3px{border-left-width:3px;}
.border-l-\\[\\#00c4b6\\]\\!{--un-border-opacity:1 !important;--un-border-left-opacity:var(--un-border-opacity) !important;border-left-color:rgb(0 196 182 / var(--un-border-left-opacity)) !important;}
.border-l-transparent{border-left-color:transparent;}
.border-l-solid{border-left-style:solid;}
.bg-\\[\\#f0fdfb\\]{--un-bg-opacity:1;background-color:rgb(240 253 251 / var(--un-bg-opacity)) /* #f0fdfb */;}
.hover\\:bg-\\[\\#f5f5f5\\]:hover{--un-bg-opacity:1;background-color:rgb(245 245 245 / var(--un-bg-opacity)) /* #f5f5f5 */;}
.px-0{padding-left:0;padding-right:0;}
.px-16px{padding-left:16px;padding-right:16px;}
.py-10px{padding-top:10px;padding-bottom:10px;}
.py-12px{padding-top:12px;padding-bottom:12px;}
.text-13px{font-size:13px;}
.text-16px{font-size:16px;}
.text-\\[\\#00c4b6\\]\\!{--un-text-opacity:1 !important;color:rgb(0 196 182 / var(--un-text-opacity)) /* #00c4b6 */ !important;}
.text-\\[\\#666\\]{--un-text-opacity:1;color:rgb(102 102 102 / var(--un-text-opacity)) /* #666 */;}
.hover\\:text-\\[\\#333\\]:hover{--un-text-opacity:1;color:rgb(51 51 51 / var(--un-text-opacity)) /* #333 */;}
.font-600{font-weight:600;}
.leading-none{line-height:1;}
.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4;}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-duration-0\\.15s{transition-duration:0.15s;};
  `;
  __decorateClass$3([
    n2({ type: Array })
  ], CtTabs.prototype, "tabs", 2);
  __decorateClass$3([
    n2({ type: String })
  ], CtTabs.prototype, "active", 2);
  CtTabs = __decorateClass$3([
    t("ct-tabs")
  ], CtTabs);
  var __defProp$2 = Object.defineProperty;
  var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
  var __decorateClass$2 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$2(target, key, result);
    return result;
  };
  let CtDialog = class extends i {
    constructor() {
      super(...arguments);
      this.title = "";
    }
    show() {
      this.dialogEl?.showModal();
    }
    close() {
      this.dialogEl?.close();
    }
    firstUpdated() {
      this.dialogEl.addEventListener("click", (e2) => {
        if (e2.target === this.dialogEl) {
          this.dialogEl.close();
        }
      });
    }
    render() {
      return x`
      <dialog part="dialog" class="border-none rounded-[12px] shadow-[0_16px_48px_rgba(0,0,0,.2)] w-600px p-0 overflow-hidden">
        <div class="flex items-center justify-between px-20px py-16px border-b-1px border-b-solid border-b-[#eee] text-16px font-600 text-[#333]">
          <span part="title">${this.title}</span>
          <slot name="header-actions">
            <ct-button size="sm" variant="ghost" square @click=${() => this.dialogEl?.close()}>✕</ct-button>
          </slot>
        </div>
        <div class="flex flex-1 overflow-hidden">
          <div part="sidebar" class="flex flex-col flex-[0_0_auto]">
            <slot name="sidebar"></slot>
          </div>
          <div part="main" class="flex-1 min-h-0 p-20px overflow-y-auto">
            <slot></slot>
          </div>
        </div>
      </dialog>
    `;
    }
  };
  CtDialog.styles = i$3`
    :host {
      display: contents;
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.3);
    }

    dialog[open] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.contents{display:contents;}
.min-h-0{min-height:0;}
.w-600px{width:600px;}
.flex{display:flex;}
.flex-\\[0_0_auto\\]{flex:0 0 auto;}
.flex-1{flex:1 1 0%;}
.flex-col{flex-direction:column;}
.items-center{align-items:center;}
.justify-between{justify-content:space-between;}
.overflow-hidden{overflow:hidden;}
.overflow-y-auto{overflow-y:auto;}
.border-b-1px{border-bottom-width:1px;}
.border-b-\\[\\#eee\\]{--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(238 238 238 / var(--un-border-bottom-opacity));}
.rounded-\\[12px\\]{border-radius:12px;}
.border-none{border-style:none;}
.border-b-solid{border-bottom-style:solid;}
.p-0{padding:0;}
.p-20px{padding:20px;}
.px-20px{padding-left:20px;padding-right:20px;}
.py-16px{padding-top:16px;padding-bottom:16px;}
.text-16px{font-size:16px;}
.text-\\[\\#333\\]{--un-text-opacity:1;color:rgb(51 51 51 / var(--un-text-opacity)) /* #333 */;}
.font-600{font-weight:600;}
.shadow-\\[0_16px_48px_rgba\\(0\\,0\\,0\\,\\.2\\)\\]{--un-shadow:0 16px 48px var(--un-shadow-color, rgba(0, 0, 0, .2));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);};
  `;
  __decorateClass$2([
    n2({ type: String })
  ], CtDialog.prototype, "title", 2);
  __decorateClass$2([
    e("dialog")
  ], CtDialog.prototype, "dialogEl", 2);
  CtDialog = __decorateClass$2([
    t("ct-dialog")
  ], CtDialog);
  var __defProp$1 = Object.defineProperty;
  var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
  var __decorateClass$1 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$1(target, key, result);
    return result;
  };
  let ChromeTranslateSettings = class extends i {
    constructor() {
      super(...arguments);
      this.language = { from: "auto", to: "" };
      this.provider = "chrome";
      this.mode = "text";
      this.batchSize = 6;
      this.openaiApiKey = "";
      this.openaiBaseUrl = "https://api.openai.com/v1";
      this.openaiModel = "gpt-4o-mini";
      this.openaiPrompt = "";
      this.openaiModels = [];
      this.openaiModelsLoading = false;
      this.openaiModelsError = "";
      this.openaiTemperature = 0.3;
      this.openaiMaxTokens = 1024;
      this.activeTab = "translate";
      this.cacheSearch = "";
      this.cacheLimit = 100;
      this.cacheOrder = "desc";
      this.editingItem = null;
    }
    show() {
      this.dialogEl?.show();
    }
    close() {
      this.dialogEl?.close();
    }
    get fromOptions() {
      return [{ label: "Auto", value: "auto" }, ...LANGUAGES];
    }
    get toOptions() {
      return [...LANGUAGES];
    }
    get modelOptions() {
      return this.openaiModels.map((m2) => ({ label: m2, value: m2 }));
    }
    emit(name, detail) {
      emitCtEvent(this, name, detail);
    }
    startEdit(item) {
      const parsed = parseCacheKey(item.key);
      if (!parsed) {
        return;
      }
      this.editingItem = {
        key: item.key,
        from: parsed.from,
        to: parsed.to,
        text: parsed.text,
        value: item.value,
        freq: item.freq
      };
      this.updateComplete.then(() => this.editDialogEl?.show());
    }
    saveEdit() {
      if (!this.editingItem || !this.translateCache) {
        return;
      }
      const { from, to, text, value, freq } = this.editingItem;
      if (!from || !to || !text) {
        return;
      }
      const newKey = `${from}->${to}:${text}`;
      if (newKey !== this.editingItem.key) {
        this.translateCache.remove(this.editingItem.key);
      }
      this.translateCache.set(newKey, value, freq);
      this.editDialogEl?.close();
      this.editingItem = null;
      this.requestUpdate();
    }
    cancelEdit() {
      this.editDialogEl?.close();
      this.editingItem = null;
      this.requestUpdate();
    }
    renderTranslateTab() {
      return x`
      <ct-section-header label="Language"></ct-section-header>
      <div class="flex items-center gap-12px">
        <div class="flex-1">
          <ct-select
            .value=${this.language.from}
            .options=${this.fromOptions}
            @ct-change=${(e2) => this.emit("language-change", { target: "from", value: e2.detail.value })}
          ></ct-select>
        </div>
        <span class="text-#999">→</span>
        <div class="flex-1">
          <ct-select
            .value=${this.language.to}
            .options=${this.toOptions}
            @ct-change=${(e2) => this.emit("language-change", { target: "to", value: e2.detail.value })}
          ></ct-select>
        </div>
      </div>

      <ct-divider class="my-16px"></ct-divider>

      <ct-section-header label="Translation Mode"></ct-section-header>
      <ct-radio-group
        direction="vertical"
        name="mode"
        .value=${this.mode}
        .options=${[{ label: "Text", value: "text" }, { label: "HTML", value: "html" }]}
        @ct-change=${(e2) => this.emit("mode-change", { value: e2.detail.value })}
      ></ct-radio-group>

      <ct-divider class="my-16px"></ct-divider>

      <ct-section-header label="Performance"></ct-section-header>
      <ct-input
        type="number"
        label="Max concurrent requests"
        .value=${String(this.batchSize)}
        min="1" max="20" step="1"
        @ct-change=${(e2) => this.emit("batch-size-change", { value: Number(e2.detail.value) })}
      ></ct-input>
    `;
    }
    renderProviderTab() {
      return x`
      <ct-section-header label="Translation Provider"></ct-section-header>
      <ct-radio-group
        direction="horizontal"
        name="provider"
        .value=${this.provider}
        .options=${[{ label: "Chrome AI", value: "chrome" }, { label: "OpenAI API", value: "openai" }]}
        @ct-change=${(e2) => this.emit("provider-change", { value: e2.detail.value })}
      ></ct-radio-group>

      ${this.provider === "openai" ? x`
        <ct-divider class="my-16px"></ct-divider>
        <ct-section-header label="OpenAI Configuration"></ct-section-header>
        <div class="flex flex-col gap-12px">
          <ct-input
            type="password"
            label="API Key"
            placeholder="sk-..."
            .value=${this.openaiApiKey}
            @ct-change=${(e2) => this.emit("openai-config-change", { field: "apiKey", value: e2.detail.value })}
          ></ct-input>

          <ct-input
            type="text"
            label="Base URL"
            .value=${this.openaiBaseUrl}
            @ct-change=${(e2) => this.emit("openai-config-change", { field: "baseUrl", value: e2.detail.value })}
          ></ct-input>

          <label class="flex flex-col gap-4px">
            <span class="text-12px text-[#888] font-500">Model</span>
            <div class="flex gap-6px items-start">
              <div class="flex-1 min-w-0">
                <ct-select
                  .value=${this.openaiModel}
                  .options=${this.modelOptions}
                  ?loading=${this.openaiModelsLoading}
                  error=${this.openaiModelsError}
                  placeholder=${this.openaiModelsLoading ? "Loading models…" : "Select a model"}
                  @ct-change=${(e2) => this.emit("openai-config-change", { field: "model", value: e2.detail.value })}
                ></ct-select>
              </div>
              <ct-button size="md" variant="outlined" square title="Refresh models" @click=${() => this.emit("fetch-models", void 0)}>${refreshIcon}</ct-button>
            </div>
          </label>

          <ct-input
            type="number"
            label="Temperature"
            .value=${String(this.openaiTemperature)}
            min="0" step="0.1"
            @ct-change=${(e2) => this.emit("openai-config-change", { field: "temperature", value: e2.detail.value })}
          ></ct-input>

          <ct-input
            type="number"
            label="Max Tokens"
            .value=${String(this.openaiMaxTokens)}
            min="0" step="1"
            @ct-change=${(e2) => this.emit("openai-config-change", { field: "maxTokens", value: e2.detail.value })}
          ></ct-input>

          <ct-textarea
            label="System Prompt"
            placeholder="Optional: custom system prompt for translation"
            .value=${this.openaiPrompt}
            @ct-change=${(e2) => this.emit("openai-config-change", { field: "prompt", value: e2.detail.value })}
          ></ct-textarea>
        </div>
      ` : ""}
    `;
    }
    renderCacheTab() {
      if (!this.translateCache) {
        return x`<div class="text-13px text-[#888]">Cache not available</div>`;
      }
      const info = this.translateCache.info();
      const pct = info.maxBytes > 0 ? Math.round(info.usedBytes / info.maxBytes * 100) : 0;
      const search = this.cacheSearch.toLowerCase();
      const filtered = info.items.filter((item) => item.key.toLowerCase().includes(search));
      const limitOptions = [
        { label: "25", value: "25" },
        { label: "50", value: "50" },
        { label: "100", value: "100" },
        { label: "All", value: "0" }
      ];
      const statsHtml = x`
      <div class="flex items-center justify-between text-12px text-[#888]">
        <span>${info.totalItems} items • ${info.usedSize} / ${info.maxSize}</span>
        <div class="flex items-center gap-8px">
          <ct-button size="sm" variant="ghost" square title="Refresh" @click=${() => this.requestUpdate()}>↻</ct-button>
          <ct-button size="sm" variant="ghost" square title="Clear cache" style="--ct-btn-color:#e74c3c;--ct-btn-hover-bg:#e74c3c;--ct-btn-hover-color:#fff"
            @click=${() => {
      this.translateCache.clear();
      this.requestUpdate();
    }}
          >🗑</ct-button>
        </div>
      </div>
      <div class="w-full h-8px bg-[#eee] rounded-[4px] overflow-hidden my-16px">
        <div class="h-full bg-[#00c4b6] rounded-[4px] transition-width transition-duration-0.3s" style="width: ${pct}%"></div>
      </div>
    `;
      const searchInput = x`
      <div class="flex items-center gap-8px mb-12px">
        <input
          type="text"
          placeholder="Search entries…"
          class="flex-1 px-12px py-10px border-1px border-solid border-[#ddd] rounded-[8px] text-13px text-[#333] bg-[#fafafa] outline-none transition-colors transition-duration-0.2s box-border focus:border-[#00c4b6] focus:bg-[#fff]"
          .value=${this.cacheSearch}
          @input=${(e2) => {
      this.cacheSearch = e2.target.value;
    }}
        >
        <ct-select
          .value=${String(this.cacheLimit)}
          .options=${limitOptions}
          class="w-68px shrink-0"
          @ct-change=${(e2) => {
      this.cacheLimit = Number(e2.detail.value);
      this.requestUpdate();
    }}
        ></ct-select>
        <ct-button size="sm" variant="ghost" square title="Toggle sort order"
          @click=${() => {
      this.cacheOrder = this.cacheOrder === "desc" ? "asc" : "desc";
      this.requestUpdate();
    }}
        >${this.cacheOrder === "desc" ? "↓" : "↑"}</ct-button>
      </div>
    `;
      const displayed = this.cacheOrder === "desc" ? filtered : [...filtered].reverse();
      const sliced = this.cacheLimit > 0 ? displayed.slice(0, this.cacheLimit) : displayed;
      const entryList = sliced.length > 0 ? x`
        <div class="flex flex-col">
          ${sliced.map((item, index, arr) => {
      const parsed = parseCacheKey(item.key);
      return x`
              <div class="flex flex-col px-8px py-6px rounded-[6px] hover:bg-[#f5f5f5] group cursor-default">
                <div class="flex items-start justify-between gap-8px">
                  <span class="flex-1 text-13px text-[#333] leading-[1.4] break-words">${parsed?.text ?? item.key}</span>
                  <div class="flex items-center gap-4px opacity-0 group-hover:opacity-100 transition-all transition-duration-0.15s shrink-0 mt-1px">
                    <button
                      class="w-20px h-20px border-none bg-transparent cursor-pointer text-12px text-[#ccc] leading-none p-0 flex items-center justify-center rounded-[4px] hover:bg-[#e8e8e8] hover:text-[#0088cc]"
                      title="Edit entry"
                      @click=${() => this.startEdit(item)}
                    >✏️</button>
                    <button
                      class="w-20px h-20px border-none bg-transparent cursor-pointer text-12px text-[#ccc] leading-none p-0 flex items-center justify-center rounded-[4px] hover:bg-[#e8e8e8] hover:text-[#e74c3c]"
                      title="Remove entry"
                      @click=${() => {
        this.translateCache.remove(item.key);
        this.requestUpdate();
      }}
                    >✕</button>
                  </div>
                </div>
                <div class="flex items-center gap-8px text-11px text-[#999] mt-4px">
                  ${parsed ? x`
                      <span class="inline-flex items-center px-6px py-1px rounded-[3px] bg-[#e8f4f8] text-[#0088cc] font-medium text-10px leading-[18px]">${parsed.from} → ${parsed.to}</span>
                      <span>· freq: ${item.freq}</span>
                    ` : x`<span>freq: ${item.freq}</span>`}
                </div>
              </div>
              ${index < arr.length - 1 ? x`<ct-divider class="mx-8px my-16px"></ct-divider>` : ""}
            `;
    })}
        </div>` : x`<div class="text-13px text-[#888] text-center py-20px">No entries found</div>`;
      return x`
      <div class="flex flex-col h-full">
        <div class="shrink-0">
          <ct-section-header label="Cache Management"></ct-section-header>
          ${statsHtml}
          <ct-divider class="my-16px"></ct-divider>
          ${searchInput}
        </div>
        <div class="flex-1 overflow-y-auto min-h-0">
          ${entryList}
        </div>
      </div>
      ${this.editingItem ? this.renderEditDialog() : ""}
    `;
    }
    renderEditDialog() {
      return x`
      <ct-dialog id="edit-dialog" title="Edit Cache Entry">
        <div slot="header-actions">
          <ct-button size="sm" variant="ghost" square @click=${this.cancelEdit}>✕</ct-button>
        </div>
        <div class="flex flex-col gap-16px">
          <div class="flex items-center gap-12px">
            <label class="flex-1 flex flex-col gap-4px">
              <span class="text-12px text-[#888] font-500">Source Language</span>
              <ct-select
                .value=${this.editingItem.from}
                .options=${this.toOptions}
                @ct-change=${(e2) => {
      if (this.editingItem) {
        this.editingItem.from = e2.detail.value;
      }
      this.requestUpdate();
    }}
              ></ct-select>
            </label>
            <span class="text-[#999] mt-24px">→</span>
            <label class="flex-1 flex flex-col gap-4px">
              <span class="text-12px text-[#888] font-500">Target Language</span>
              <ct-select
                .value=${this.editingItem.to}
                .options=${this.toOptions}
                @ct-change=${(e2) => {
      if (this.editingItem) {
        this.editingItem.to = e2.detail.value;
      }
      this.requestUpdate();
    }}
              ></ct-select>
            </label>
          </div>

          <ct-textarea
            label="Source Text"
            .value=${this.editingItem.text}
            @ct-change=${(e2) => {
      if (this.editingItem) {
        this.editingItem.text = e2.detail.value;
      }
      this.requestUpdate();
    }}
          ></ct-textarea>

          <ct-textarea
            label="Translation"
            .value=${this.editingItem.value}
            @ct-change=${(e2) => {
      if (this.editingItem) {
        this.editingItem.value = e2.detail.value;
      }
      this.requestUpdate();
    }}
          ></ct-textarea>

          <ct-input
            type="number"
            label="Frequency"
            .value=${String(this.editingItem.freq)}
            min="0" step="1"
            @ct-change=${(e2) => {
      if (this.editingItem) {
        this.editingItem.freq = Number(e2.detail.value);
      }
      this.requestUpdate();
    }}
          ></ct-input>

          <div class="flex items-center justify-end gap-8px mt-8px">
            <ct-button size="md" variant="outlined" @click=${this.cancelEdit}>Cancel</ct-button>
            <ct-button size="md" variant="filled" @click=${this.saveEdit}>Save</ct-button>
          </div>
        </div>
      </ct-dialog>
    `;
    }
    render() {
      const tabs = [
        { icon: x`<span>🌐</span>`, label: "Translate", value: "translate" },
        { icon: x`<span>⚙️</span>`, label: "Provider", value: "provider" },
        { icon: x`<span>🗃️</span>`, label: "Cache", value: "cache" }
      ];
      return x`
      <ct-dialog title="Setting">
        <div slot="sidebar" class="flex flex-col h-full border-r-1px border-r-solid border-r-[#eee]">
          <ct-tabs
            class="flex-1 min-h-0"
            .tabs=${tabs}
            .active=${this.activeTab}
            @ct-change=${(e2) => {
      this.activeTab = e2.detail.value;
    }}
          ></ct-tabs>
          <ct-divider></ct-divider>
          <div class="px-12px pt-0 pb-8px flex justify-center">
            <ct-button size="sm" variant="outlined"
              style="--ct-btn-color:#e74c3c;--ct-btn-border:#e74c3c;--ct-btn-hover-bg:#e74c3c;--ct-btn-hover-color:#fff"
              @click=${() => {
      this.emit("reset-default", void 0);
    }}
            >Reset Config</ct-button>
          </div>
        </div>
        ${this.activeTab === "translate" ? this.renderTranslateTab() : this.activeTab === "provider" ? this.renderProviderTab() : this.renderCacheTab()}
      </ct-dialog>
    `;
    }
  };
  ChromeTranslateSettings.styles = i$3`
    :host {
      all: initial;
      display: contents;
    }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.mx-8px{margin-left:8px;margin-right:8px;}
.my-16px{margin-top:16px;margin-bottom:16px;}
.mb-12px{margin-bottom:12px;}
.mt-1px{margin-top:1px;}
.mt-24px{margin-top:24px;}
.mt-4px{margin-top:4px;}
.mt-8px{margin-top:8px;}
.box-border{box-sizing:border-box;}
.contents{display:contents;}
.h-20px{height:20px;}
.h-8px{height:8px;}
.h-full{height:100%;}
.min-h-0{min-height:0;}
.min-w-0{min-width:0;}
.w-20px{width:20px;}
.w-68px{width:68px;}
.w-full{width:100%;}
.flex{display:flex;}
.inline-flex{display:inline-flex;}
.flex-1{flex:1 1 0%;}
.shrink-0{flex-shrink:0;}
.flex-col{flex-direction:column;}
.cursor-default{cursor:default;}
.cursor-pointer{cursor:pointer;}
.items-start{align-items:flex-start;}
.items-center{align-items:center;}
.justify-end{justify-content:flex-end;}
.justify-center{justify-content:center;}
.justify-between{justify-content:space-between;}
.gap-12px{gap:12px;}
.gap-16px{gap:16px;}
.gap-4px{gap:4px;}
.gap-6px{gap:6px;}
.gap-8px{gap:8px;}
.overflow-hidden{overflow:hidden;}
.overflow-y-auto{overflow-y:auto;}
.break-words{overflow-wrap:break-word;}
.border-1px{border-width:1px;}
.border-r-1px{border-right-width:1px;}
.border-\\[\\#ddd\\]{--un-border-opacity:1;border-color:rgb(221 221 221 / var(--un-border-opacity));}
.focus\\:border-\\[\\#00c4b6\\]:focus{--un-border-opacity:1;border-color:rgb(0 196 182 / var(--un-border-opacity));}
.border-r-\\[\\#eee\\]{--un-border-opacity:1;--un-border-right-opacity:var(--un-border-opacity);border-right-color:rgb(238 238 238 / var(--un-border-right-opacity));}
.rounded-\\[3px\\]{border-radius:3px;}
.rounded-\\[4px\\]{border-radius:4px;}
.rounded-\\[6px\\]{border-radius:6px;}
.rounded-\\[8px\\]{border-radius:8px;}
.border-none{border-style:none;}
.border-solid{border-style:solid;}
.border-r-solid{border-right-style:solid;}
.bg-\\[\\#00c4b6\\]{--un-bg-opacity:1;background-color:rgb(0 196 182 / var(--un-bg-opacity)) /* #00c4b6 */;}
.bg-\\[\\#e8f4f8\\]{--un-bg-opacity:1;background-color:rgb(232 244 248 / var(--un-bg-opacity)) /* #e8f4f8 */;}
.bg-\\[\\#eee\\]{--un-bg-opacity:1;background-color:rgb(238 238 238 / var(--un-bg-opacity)) /* #eee */;}
.bg-\\[\\#fafafa\\]{--un-bg-opacity:1;background-color:rgb(250 250 250 / var(--un-bg-opacity)) /* #fafafa */;}
.bg-transparent{background-color:transparent /* transparent */;}
.hover\\:bg-\\[\\#e8e8e8\\]:hover{--un-bg-opacity:1;background-color:rgb(232 232 232 / var(--un-bg-opacity)) /* #e8e8e8 */;}
.hover\\:bg-\\[\\#f5f5f5\\]:hover{--un-bg-opacity:1;background-color:rgb(245 245 245 / var(--un-bg-opacity)) /* #f5f5f5 */;}
.focus\\:bg-\\[\\#fff\\]:focus{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.p-0{padding:0;}
.px-12px{padding-left:12px;padding-right:12px;}
.px-6px{padding-left:6px;padding-right:6px;}
.px-8px{padding-left:8px;padding-right:8px;}
.py-10px{padding-top:10px;padding-bottom:10px;}
.py-1px{padding-top:1px;padding-bottom:1px;}
.py-20px{padding-top:20px;padding-bottom:20px;}
.py-6px{padding-top:6px;padding-bottom:6px;}
.pb-8px{padding-bottom:8px;}
.pt-0{padding-top:0;}
.text-center{text-align:center;}
.text-10px{font-size:10px;}
.text-11px{font-size:11px;}
.text-12px{font-size:12px;}
.text-13px{font-size:13px;}
.text-\\[\\#0088cc\\]{--un-text-opacity:1;color:rgb(0 136 204 / var(--un-text-opacity)) /* #0088cc */;}
.text-\\[\\#333\\]{--un-text-opacity:1;color:rgb(51 51 51 / var(--un-text-opacity)) /* #333 */;}
.text-\\[\\#888\\]{--un-text-opacity:1;color:rgb(136 136 136 / var(--un-text-opacity)) /* #888 */;}
.text-\\[\\#999\\],
.text-\\#999{--un-text-opacity:1;color:rgb(153 153 153 / var(--un-text-opacity)) /* #999 */;}
.text-\\[\\#ccc\\]{--un-text-opacity:1;color:rgb(204 204 204 / var(--un-text-opacity)) /* #ccc */;}
.hover\\:text-\\[\\#0088cc\\]:hover{--un-text-opacity:1;color:rgb(0 136 204 / var(--un-text-opacity)) /* #0088cc */;}
.hover\\:text-\\[\\#e74c3c\\]:hover{--un-text-opacity:1;color:rgb(231 76 60 / var(--un-text-opacity)) /* #e74c3c */;}
.font-500,
.font-medium{font-weight:500;}
.leading-\\[1\\.4\\]{line-height:1.4;}
.leading-\\[18px\\]{line-height:18px;}
.leading-none{line-height:1;}
.opacity-0{opacity:0;}
.group:hover .group-hover\\:opacity-100{opacity:1;}
.outline-none{outline:2px solid transparent;outline-offset:2px;}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-width{transition-property:width;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-duration-0\\.15s{transition-duration:0.15s;}
.transition-duration-0\\.2s{transition-duration:0.2s;}
.transition-duration-0\\.3s{transition-duration:0.3s;};
  `;
  __decorateClass$1([
    n2({ type: Object })
  ], ChromeTranslateSettings.prototype, "language", 2);
  __decorateClass$1([
    n2({ type: String })
  ], ChromeTranslateSettings.prototype, "provider", 2);
  __decorateClass$1([
    n2({ type: String })
  ], ChromeTranslateSettings.prototype, "mode", 2);
  __decorateClass$1([
    n2({ type: Number })
  ], ChromeTranslateSettings.prototype, "batchSize", 2);
  __decorateClass$1([
    n2({ type: String })
  ], ChromeTranslateSettings.prototype, "openaiApiKey", 2);
  __decorateClass$1([
    n2({ type: String })
  ], ChromeTranslateSettings.prototype, "openaiBaseUrl", 2);
  __decorateClass$1([
    n2({ type: String })
  ], ChromeTranslateSettings.prototype, "openaiModel", 2);
  __decorateClass$1([
    n2({ type: String })
  ], ChromeTranslateSettings.prototype, "openaiPrompt", 2);
  __decorateClass$1([
    n2({ type: Array })
  ], ChromeTranslateSettings.prototype, "openaiModels", 2);
  __decorateClass$1([
    n2({ type: Boolean })
  ], ChromeTranslateSettings.prototype, "openaiModelsLoading", 2);
  __decorateClass$1([
    n2({ type: String })
  ], ChromeTranslateSettings.prototype, "openaiModelsError", 2);
  __decorateClass$1([
    n2({ type: Number })
  ], ChromeTranslateSettings.prototype, "openaiTemperature", 2);
  __decorateClass$1([
    n2({ type: Number })
  ], ChromeTranslateSettings.prototype, "openaiMaxTokens", 2);
  __decorateClass$1([
    n2({ type: Object })
  ], ChromeTranslateSettings.prototype, "translateCache", 2);
  __decorateClass$1([
    n2({ type: String })
  ], ChromeTranslateSettings.prototype, "activeTab", 2);
  __decorateClass$1([
    r()
  ], ChromeTranslateSettings.prototype, "cacheSearch", 2);
  __decorateClass$1([
    r()
  ], ChromeTranslateSettings.prototype, "cacheLimit", 2);
  __decorateClass$1([
    r()
  ], ChromeTranslateSettings.prototype, "cacheOrder", 2);
  __decorateClass$1([
    r()
  ], ChromeTranslateSettings.prototype, "editingItem", 2);
  __decorateClass$1([
    e("ct-dialog")
  ], ChromeTranslateSettings.prototype, "dialogEl", 2);
  __decorateClass$1([
    e("#edit-dialog")
  ], ChromeTranslateSettings.prototype, "editDialogEl", 2);
  ChromeTranslateSettings = __decorateClass$1([
    t("chrome-translate-settings")
  ], ChromeTranslateSettings);
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };
  const DEFAULT_CONFIG = {
    position: { x: "", y: "" },
    side: "right",
    language: { from: "auto", to: "" },
    provider: "chrome",
    mode: "text",
    batchSize: 6,
    openai: {
      apiKey: "",
      baseUrl: "https://api.openai.com/v1",
      model: "gpt-4o-mini",
      prompt: "You are a professional translator. Translate the following text from {from} to {to}. Return only the translated text, no explanation, no notes. The text contains critical markup tags like <c1>, <c2>, <c3> etc. Each tag's opening <cN> and closing </cN> wrap a single contiguous text span. You MUST preserve ALL of these tags exactly as-is, in the exact same order and position, and keep each tag's content as one continuous segment. Never split a tag's inner content across different parts of the sentence. Never remove, merge, reorder, or restructure any of these tags in any circumstance.",
      temperature: 0.3,
      maxTokens: 1024
    }
  };
  let ChromeTranslateBall = class extends i {
    constructor() {
      super(...arguments);
      this.moving = false;
      this.isTranslating = false;
      this.provider = "chrome";
      this.openaiApiKey = "";
      this.openaiBaseUrl = "https://api.openai.com/v1";
      this.openaiModel = "gpt-4o-mini";
      this.openaiPrompt = "";
      this.openaiModels = [];
      this.openaiModelsLoading = false;
      this.openaiModelsError = "";
      this.mode = DEFAULT_CONFIG.mode;
      this.batchSize = DEFAULT_CONFIG.batchSize;
      this.openaiTemperature = DEFAULT_CONFIG.openai.temperature;
      this.openaiMaxTokens = DEFAULT_CONFIG.openai.maxTokens;
      this.config = _GM_getValue(STORAGE_CONFIG_KEY, DEFAULT_CONFIG);
      this.openaiProvider = new OpenAITranslator();
      this.dragging = false;
      this.isAllowedTranslate = true;
      this.startX = null;
      this.startY = null;
      this.onMouseDown = (e2) => {
        if (e2.button !== 0) {
          return;
        }
        this.startX = e2.clientX;
        this.startY = e2.clientY;
        this.moving = false;
        const ball = this.ballEl;
        if (ball) {
          ball.style.transition = "none";
        }
      };
      this.onMouseUp = () => {
        this.startX = null;
        this.startY = null;
        const ball = this.ballEl;
        if (!ball || !this.dragging) {
          return;
        }
        this.dragging = false;
        this.isAllowedTranslate = false;
        this.moving = false;
        ball.style.transition = "all 0.3s ease";
        ball.style.cursor = "pointer";
        const rect = ball.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const side = centerX < window.innerWidth / 2 ? "left" : "right";
        ball.setAttribute("data-side", side);
        const x2 = ball.style.getPropertyValue("--x");
        const y3 = ball.style.getPropertyValue("--y");
        ball.style.removeProperty("--x");
        _GM_setValue(STORAGE_CONFIG_KEY, {
          ...this.config,
          position: { x: x2, y: y3 },
          side
        });
      };
      this.onTranslate = debounce(async () => {
        if (!this.isAllowedTranslate) {
          this.isAllowedTranslate = true;
          return;
        }
        const t2 = this.rendererCtrl;
        if (!t2) {
          return;
        }
        const { from, to } = t2.instance.language;
        if (from === to) {
          console.warn("Translation from and to are the same.");
          return;
        }
        if (t2.isTranslating()) {
          t2.stop();
          t2.instance.clearElements();
        } else {
          t2.start();
        }
        this.isTranslating = t2.isTranslating();
      }, 500, true);
      this.onOpenSetting = () => {
        this.settingsDialog?.show();
        if (this.provider === "openai") {
          if (this.openaiPrompt === "") {
            this.openaiPrompt = DEFAULT_CONFIG.openai.prompt;
            this.onOpenAIConfigChange("prompt", DEFAULT_CONFIG.openai.prompt);
          }
          if (this.openaiModels.length === 0) {
            void this.fetchModels();
          }
        }
      };
    }
    connectedCallback() {
      super.connectedCallback();
      this.config = {
        ...DEFAULT_CONFIG,
        ...this.config,
        language: { ...DEFAULT_CONFIG.language, ...this.config.language },
        openai: { ...DEFAULT_CONFIG.openai, ...this.config.openai }
      };
      this.language = { ...this.config.language };
      this.provider = this.config.provider;
      this.mode = this.config.mode;
      this.batchSize = this.config.batchSize;
      this.openaiApiKey = this.config.openai.apiKey;
      this.openaiBaseUrl = this.config.openai.baseUrl;
      this.openaiModel = this.config.openai.model;
      this.openaiPrompt = this.config.openai.prompt;
      this.openaiTemperature = this.config.openai.temperature;
      this.openaiMaxTokens = this.config.openai.maxTokens;
      this.openaiProvider.updateConfig(this.config.openai);
      this.throttledMouseMove = throttle(this.onMouseMove.bind(this), 16);
      document.addEventListener("mousemove", this.throttledMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
      void this.initTranslate();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      document.removeEventListener("mousemove", this.throttledMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
      this.throttledMouseMove.cancel();
      this.cleanupUrlWatch?.();
      this.cleanupScrollbarWatch?.();
    }
    firstUpdated() {
      const y3 = this.config.position.y;
      const ball = this.ballEl;
      if (y3) {
        ball.style.setProperty("--y", y3);
      }
      this.cleanupScrollbarWatch = watchScrollbarChange((info) => {
        Object.assign(SCROLLBAR_INFO, info);
        this.setScrollbarProperty(this.ballEl);
      });
      this.setScrollbarProperty(this.ballEl);
      ball.getBoundingClientRect();
      ball.style.transition = "all 0.3s ease";
    }
    setScrollbarProperty(el) {
      el.style.setProperty("--scrollbar-width", `${SCROLLBAR_INFO.width}px`);
      el.style.setProperty("--scrollbar-height", `${SCROLLBAR_INFO.height}px`);
    }
    async initTranslate() {
      const options = { ...this.config.language };
      if (options.from === "auto") {
        Reflect.deleteProperty(options, "from");
      }
      const t2 = await useTranslate(options);
      this.rendererCtrl = t2;
      this.translateCache = t2.instance.translateCache;
      t2.instance.useHTML = this.mode === "html";
      t2.instance.batchSize = this.batchSize;
      const translator = t2.instance.translator;
      translator.registerProvider("openai", this.openaiProvider);
      if (this.provider === "openai") {
        translator.setProvider("openai");
      }
      const to = this.config.language.to;
      if (to) {
        this.language = { ...this.language, to };
        const from = this.language.from === "auto" ? await translator.detectPageLanguage() : this.language.from;
        t2.instance.setLanguage({ from, to });
      } else {
        this.language = { ...this.language, to: t2.instance.language.to };
      }
      this.cleanupUrlWatch = useWatchUrlChange((newUrl, oldUrl) => {
        if (this.isTranslating && newUrl !== oldUrl) {
          t2.instance.clearElements();
          t2.start();
        }
      });
    }
    onMouseMove(e2) {
      const ball = this.ballEl;
      if (!ball || this.startX === null || this.startY === null) {
        return;
      }
      const dx = e2.clientX - this.startX;
      const dy = e2.clientY - this.startY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance > 5) {
        this.dragging = true;
      }
      if (!this.dragging) {
        return;
      }
      this.moving = true;
      ball.style.cursor = "move";
      const bw = ball.offsetWidth;
      const bh = ball.offsetHeight;
      const x2 = clamp(e2.clientX - bw / 2, 0, window.innerWidth - bw);
      const y3 = clamp(e2.clientY - bh / 2, 0, window.innerHeight - bh);
      ball.style.setProperty("--x", `${x2}px`);
      ball.style.setProperty("--y", `${y3}px`);
    }
    async fetchModels() {
      if (this.openaiModelsLoading) {
        return;
      }
      this.openaiModelsLoading = true;
      this.openaiModelsError = "";
      try {
        this.openaiModels = await this.openaiProvider.fetchModels();
        if (this.openaiModels.length > 0 && !this.openaiModels.includes(this.openaiModel)) {
          this.onOpenAIConfigChange("model", this.openaiModels[0]);
        }
      } catch (err) {
        this.openaiModelsError = err instanceof Error ? err.message : "Unknown error";
      } finally {
        this.openaiModelsLoading = false;
      }
    }
    async onSelectLanguage(target, value) {
      this.language = { ...this.language, [target]: value };
      const t2 = this.rendererCtrl;
      if (!t2) {
        return;
      }
      const detectPageLanguage = () => t2.instance.translator.detectPageLanguage();
      const from = target === "from" ? value === "auto" ? await detectPageLanguage() : value : this.language.from === "auto" ? await detectPageLanguage() : this.language.from;
      const to = target === "to" ? value : this.language.to;
      t2.instance.setLanguage({ from, to });
      _GM_setValue(STORAGE_CONFIG_KEY, {
        ...this.config,
        language: this.language
      });
    }
    onProviderChange(value) {
      this.provider = value;
      this.rendererCtrl?.instance.translator.setProvider(value);
      _GM_setValue(STORAGE_CONFIG_KEY, {
        ...this.config,
        provider: value
      });
      if (value === "openai") {
        void this.fetchModels();
      }
    }
    onOpenAIConfigChange(field, value) {
      this.openaiApiKey = field === "apiKey" ? value : this.openaiApiKey;
      this.openaiBaseUrl = field === "baseUrl" ? value : this.openaiBaseUrl;
      this.openaiModel = field === "model" ? value : this.openaiModel;
      this.openaiPrompt = field === "prompt" ? value : this.openaiPrompt;
      this.openaiTemperature = field === "temperature" ? Number(value) : this.openaiTemperature;
      this.openaiMaxTokens = field === "maxTokens" ? Number(value) : this.openaiMaxTokens;
      const openai = {
        apiKey: this.openaiApiKey,
        baseUrl: this.openaiBaseUrl,
        model: this.openaiModel,
        prompt: this.openaiPrompt,
        temperature: this.openaiTemperature,
        maxTokens: this.openaiMaxTokens
      };
      this.openaiProvider.updateConfig(openai);
      _GM_setValue(STORAGE_CONFIG_KEY, {
        ...this.config,
        openai
      });
    }
    onModeChange(value) {
      this.mode = value;
      if (this.rendererCtrl) {
        this.rendererCtrl.instance.useHTML = value === "html";
      }
      _GM_setValue(STORAGE_CONFIG_KEY, {
        ...this.config,
        mode: value
      });
    }
    onBatchSizeChange(value) {
      this.batchSize = value;
      if (this.rendererCtrl) {
        this.rendererCtrl.instance.batchSize = value;
      }
      _GM_setValue(STORAGE_CONFIG_KEY, {
        ...this.config,
        batchSize: value
      });
    }
    resetToDefault() {
      if (!confirm("Reset all settings to default values?")) {
        return;
      }
      _GM_setValue(STORAGE_CONFIG_KEY, structuredClone(DEFAULT_CONFIG));
      this.config = {
        ...DEFAULT_CONFIG,
        language: { ...DEFAULT_CONFIG.language },
        openai: { ...DEFAULT_CONFIG.openai }
      };
      this.language = { ...DEFAULT_CONFIG.language };
      this.provider = DEFAULT_CONFIG.provider;
      this.mode = DEFAULT_CONFIG.mode;
      this.batchSize = DEFAULT_CONFIG.batchSize;
      this.openaiApiKey = DEFAULT_CONFIG.openai.apiKey;
      this.openaiBaseUrl = DEFAULT_CONFIG.openai.baseUrl;
      this.openaiModel = DEFAULT_CONFIG.openai.model;
      this.openaiPrompt = DEFAULT_CONFIG.openai.prompt;
      this.openaiTemperature = DEFAULT_CONFIG.openai.temperature;
      this.openaiMaxTokens = DEFAULT_CONFIG.openai.maxTokens;
      this.openaiModels = [];
      this.openaiModelsLoading = false;
      this.openaiModelsError = "";
      this.isTranslating = false;
      this.openaiProvider.updateConfig(DEFAULT_CONFIG.openai);
      const t2 = this.rendererCtrl;
      if (t2) {
        t2.instance.useHTML = DEFAULT_CONFIG.mode === "html";
        t2.instance.batchSize = DEFAULT_CONFIG.batchSize;
        t2.instance.translator.setProvider("chrome");
        if (t2.isTranslating()) {
          t2.stop();
          t2.instance.clearElements();
        }
        void t2.instance.translator.detectPageLanguage().then((lang) => {
          t2.instance.setLanguage({ from: lang, to: DEFAULT_CONFIG.language.to });
        });
      }
      this.settingsDialog?.close();
    }
    onSettingsEvent(e2) {
      const { type, detail } = e2;
      switch (type) {
        case "language-change":
          void this.onSelectLanguage(detail.target, detail.value);
          break;
        case "mode-change":
          this.onModeChange(detail.value);
          break;
        case "batch-size-change":
          this.onBatchSizeChange(detail.value);
          break;
        case "provider-change":
          this.onProviderChange(detail.value);
          break;
        case "openai-config-change":
          this.onOpenAIConfigChange(detail.field, detail.value);
          break;
        case "fetch-models":
          void this.fetchModels();
          break;
        case "reset-default":
          this.resetToDefault();
          break;
      }
    }
    render() {
      return x`
      <div class="select-none touch-none">
        <div
          data-side=${this.config.side}
          class="ct-ball bg-white text-white flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,.25)] cursor-pointer ${this.moving ? "rounded-full! p-0!" : ""}"
          style="--scrollbar-width: ${SCROLLBAR_INFO.width}px"
          @click=${this.onTranslate}
          @mousedown=${this.onMouseDown}
          @contextmenu=${(e2) => e2.preventDefault()}
        >
          <div class="relative w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#00c4b6]">
            <span class="w-5 h-5 flex items-center justify-center">${languageIcon}</span>
            ${this.isTranslating ? x`
              <span class="ct-check-icon absolute bottom-[-2px] right-0 w-[12px] h-[12px] rounded-full bg-[rgba(0,200,0,.8)] text-white flex items-center justify-center">${checkIcon}</span>
            ` : E}
          </div>
          <div class="ct-setting-wrap text-black" ?hidden=${this.moving} @click=${(e2) => e2.stopPropagation()}>
            <div class="w-[calc(var(--size)-4px)] h-[calc(var(--size)-4px)] bg-white cursor-pointer flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,.25)] rounded-[20px]" @click=${this.onOpenSetting}>
              ${settingIcon}
            </div>
          </div>
        </div>

        <chrome-translate-settings
          .language=${this.language}
          .provider=${this.provider}
          .mode=${this.mode}
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
          @batch-size-change=${this.onSettingsEvent}
          @provider-change=${this.onSettingsEvent}
          @openai-config-change=${this.onSettingsEvent}
          @fetch-models=${this.onSettingsEvent}
          @reset-default=${this.onSettingsEvent}
        ></chrome-translate-settings>
      </div>
    `;
    }
  };
  ChromeTranslateBall.styles = i$3`
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

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute{position:absolute;}
.fixed{position:fixed;}
.relative{position:relative;}
.static{position:static;}
.bottom-\\[-2px\\]{bottom:-2px;}
.right-0{right:0;}
.h-\\[12px\\]{height:12px;}
.h-\\[28px\\]{height:28px;}
.h-\\[calc\\(var\\(--size\\)-4px\\)\\]{height:calc(var(--size) - 4px);}
.h-5{height:1.25rem;}
.w-\\[12px\\]{width:12px;}
.w-\\[28px\\]{width:28px;}
.w-\\[calc\\(var\\(--size\\)-4px\\)\\]{width:calc(var(--size) - 4px);}
.w-5{width:1.25rem;}
.flex{display:flex;}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.cursor-pointer{cursor:pointer;}
.touch-none{touch-action:none;}
.select-none{-webkit-user-select:none;user-select:none;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.rounded-\\[20px\\]{border-radius:20px;}
.rounded-full{border-radius:9999px;}
.rounded-full\\!{border-radius:9999px !important;}
.bg-\\[\\#00c4b6\\]{--un-bg-opacity:1;background-color:rgb(0 196 182 / var(--un-bg-opacity)) /* #00c4b6 */;}
.bg-\\[rgba\\(0\\,200\\,0\\,\\.8\\)\\]{--un-bg-opacity:.8;background-color:rgba(0, 200, 0, var(--un-bg-opacity)) /* rgba(0,200,0,.8) */;}
.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.p-0\\!{padding:0 !important;}
.px{padding-left:1rem;padding-right:1rem;}
.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity)) /* #000 */;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.shadow-\\[0_8px_16px_rgba\\(0\\,0\\,0\\,\\.25\\)\\]{--un-shadow:0 8px 16px var(--un-shadow-color, rgba(0, 0, 0, .25));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);};
  `;
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "moving", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "isTranslating", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "language", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "provider", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "openaiApiKey", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "openaiBaseUrl", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "openaiModel", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "openaiPrompt", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "openaiModels", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "openaiModelsLoading", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "openaiModelsError", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "mode", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "batchSize", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "openaiTemperature", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "openaiMaxTokens", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "translateCache", 2);
  __decorateClass([
    e(".ct-ball")
  ], ChromeTranslateBall.prototype, "ballEl", 2);
  __decorateClass([
    e("chrome-translate-settings")
  ], ChromeTranslateBall.prototype, "settingsDialog", 2);
  ChromeTranslateBall = __decorateClass([
    t("chrome-translate-ball")
  ], ChromeTranslateBall);
  const ballEl = document.createElement("chrome-translate-ball");
  document.documentElement.appendChild(ballEl);

})();