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
  const t$3 = globalThis, e$6 = t$3.ShadowRoot && (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$4 = new WeakMap();
  let n$3 = class n {
    constructor(t2, e2, o2) {
      if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t2, this.t = e2;
    }
    get styleSheet() {
      let t2 = this.o;
      const s2 = this.t;
      if (e$6 && void 0 === t2) {
        const e2 = void 0 !== s2 && 1 === s2.length;
        e2 && (t2 = o$4.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$4.set(s2, t2));
      }
      return t2;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$4 = (t2) => new n$3("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), i$4 = (t2, ...e2) => {
    const o2 = 1 === t2.length ? t2[0] : e2.reduce(((e3, s2, o3) => e3 + ((t3) => {
      if (true === t3._$cssResult$) return t3.cssText;
      if ("number" == typeof t3) return t3;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s2) + t2[o3 + 1]), t2[0]);
    return new n$3(o2, t2, s$2);
  }, S$1 = (s2, o2) => {
    if (e$6) s2.adoptedStyleSheets = o2.map(((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet));
    else for (const e2 of o2) {
      const o3 = document.createElement("style"), n3 = t$3.litNonce;
      void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s2.appendChild(o3);
    }
  }, c$2 = e$6 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
    let e2 = "";
    for (const s2 of t3.cssRules) e2 += s2.cssText;
    return r$4(e2);
  })(t2) : t2;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const { is: i$3, defineProperty: e$5, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$3, getOwnPropertySymbols: o$3, getPrototypeOf: n$2 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$1 = { toAttribute(t2, s2) {
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
    let i3 = t2;
    switch (s2) {
      case Boolean:
        i3 = null !== t2;
        break;
      case Number:
        i3 = null === t2 ? null : Number(t2);
        break;
      case Object:
      case Array:
        try {
          i3 = JSON.parse(t2);
        } catch (t3) {
          i3 = null;
        }
    }
    return i3;
  } }, f$1 = (t2, s2) => !i$3(t2, s2), b$1 = { attribute: true, type: String, converter: u$1, reflect: false, useDefault: false, hasChanged: f$1 };
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
        const i3 = Symbol(), h2 = this.getPropertyDescriptor(t2, i3, s2);
        void 0 !== h2 && e$5(this.prototype, t2, h2);
      }
    }
    static getPropertyDescriptor(t2, s2, i3) {
      const { get: e2, set: r2 } = h$1(this.prototype, t2) ?? { get() {
        return this[s2];
      }, set(t3) {
        this[s2] = t3;
      } };
      return { get: e2, set(s3) {
        const h2 = e2?.call(this);
        r2?.call(this, s3), this.requestUpdate(t2, h2, i3);
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
        const t3 = this.properties, s2 = [...r$3(t3), ...o$3(t3)];
        for (const i3 of s2) this.createProperty(i3, t3[i3]);
      }
      const t2 = this[Symbol.metadata];
      if (null !== t2) {
        const s2 = litPropertyMetadata.get(t2);
        if (void 0 !== s2) for (const [t3, i3] of s2) this.elementProperties.set(t3, i3);
      }
      this._$Eh = new Map();
      for (const [t3, s2] of this.elementProperties) {
        const i3 = this._$Eu(t3, s2);
        void 0 !== i3 && this._$Eh.set(i3, t3);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s2) {
      const i3 = [];
      if (Array.isArray(s2)) {
        const e2 = new Set(s2.flat(1 / 0).reverse());
        for (const s3 of e2) i3.unshift(c$2(s3));
      } else void 0 !== s2 && i3.push(c$2(s2));
      return i3;
    }
    static _$Eu(t2, s2) {
      const i3 = s2.attribute;
      return false === i3 ? void 0 : "string" == typeof i3 ? i3 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
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
      for (const i3 of s2.keys()) this.hasOwnProperty(i3) && (t2.set(i3, this[i3]), delete this[i3]);
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
    attributeChangedCallback(t2, s2, i3) {
      this._$AK(t2, i3);
    }
    _$ET(t2, s2) {
      const i3 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i3);
      if (void 0 !== e2 && true === i3.reflect) {
        const h2 = (void 0 !== i3.converter?.toAttribute ? i3.converter : u$1).toAttribute(s2, i3.type);
        this._$Em = t2, null == h2 ? this.removeAttribute(e2) : this.setAttribute(e2, h2), this._$Em = null;
      }
    }
    _$AK(t2, s2) {
      const i3 = this.constructor, e2 = i3._$Eh.get(t2);
      if (void 0 !== e2 && this._$Em !== e2) {
        const t3 = i3.getPropertyOptions(e2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== t3.converter?.fromAttribute ? t3.converter : u$1;
        this._$Em = e2;
        const r2 = h2.fromAttribute(s2, t3.type);
        this[e2] = r2 ?? this._$Ej?.get(e2) ?? r2, this._$Em = null;
      }
    }
    requestUpdate(t2, s2, i3) {
      if (void 0 !== t2) {
        const e2 = this.constructor, h2 = this[t2];
        if (i3 ??= e2.getPropertyOptions(t2), !((i3.hasChanged ?? f$1)(h2, s2) || i3.useDefault && i3.reflect && h2 === this._$Ej?.get(t2) && !this.hasAttribute(e2._$Eu(t2, i3)))) return;
        this.C(t2, s2, i3);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t2, s2, { useDefault: i3, reflect: e2, wrapped: h2 }, r2) {
      i3 && !(this._$Ej ??= new Map()).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h2 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i3 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ??= new Set()).add(t2));
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
        if (t3.size > 0) for (const [s3, i3] of t3) {
          const { wrapped: t4 } = i3, e2 = this[s3];
          true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i3, e2);
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
  const t$2 = globalThis, i$2 = t$2.trustedTypes, s$1 = i$2 ? i$2.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$4 = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o$2 = "?" + h, n$1 = `<${o$2}>`, r$2 = document, l = () => r$2.createComment(""), c = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, a = Array.isArray, u = (t2) => a(t2) || "function" == typeof t2?.[Symbol.iterator], d = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y2 = (t2) => (i3, ...s2) => ({ _$litType$: t2, strings: i3, values: s2 }), x = y2(1), b = y2(2), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = new WeakMap(), C = r$2.createTreeWalker(r$2, 129);
  function P(t2, i3) {
    if (!a(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s$1 ? s$1.createHTML(i3) : i3;
  }
  const V = (t2, i3) => {
    const s2 = t2.length - 1, o2 = [];
    let r2, l2 = 2 === i3 ? "<svg>" : 3 === i3 ? "<math>" : "", c2 = f;
    for (let i4 = 0; i4 < s2; i4++) {
      const s3 = t2[i4];
      let a2, u2, d2 = -1, y3 = 0;
      for (; y3 < s3.length && (c2.lastIndex = y3, u2 = c2.exec(s3), null !== u2); ) y3 = c2.lastIndex, c2 === f ? "!--" === u2[1] ? c2 = v : void 0 !== u2[1] ? c2 = _ : void 0 !== u2[2] ? ($.test(u2[2]) && (r2 = RegExp("</" + u2[2], "g")), c2 = m) : void 0 !== u2[3] && (c2 = m) : c2 === m ? ">" === u2[0] ? (c2 = r2 ?? f, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? m : '"' === u2[3] ? g : p) : c2 === g || c2 === p ? c2 = m : c2 === v || c2 === _ ? c2 = f : (c2 = m, r2 = void 0);
      const x2 = c2 === m && t2[i4 + 1].startsWith("/>") ? " " : "";
      l2 += c2 === f ? s3 + n$1 : d2 >= 0 ? (o2.push(a2), s3.slice(0, d2) + e$4 + s3.slice(d2) + h + x2) : s3 + h + (-2 === d2 ? i4 : x2);
    }
    return [P(t2, l2 + (t2[s2] || "<?>") + (2 === i3 ? "</svg>" : 3 === i3 ? "</math>" : "")), o2];
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
          if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(e$4)) {
            const i3 = v2[a2++], s3 = r2.getAttribute(t3).split(h), e2 = /([.?@])?(.*)/.exec(i3);
            d2.push({ type: 1, index: c2, name: e2[2], strings: s3, ctor: "." === e2[1] ? H : "?" === e2[1] ? I : "@" === e2[1] ? L : k }), r2.removeAttribute(t3);
          } else t3.startsWith(h) && (d2.push({ type: 6, index: c2 }), r2.removeAttribute(t3));
          if ($.test(r2.tagName)) {
            const t3 = r2.textContent.split(h), s3 = t3.length - 1;
            if (s3 > 0) {
              r2.textContent = i$2 ? i$2.emptyScript : "";
              for (let i3 = 0; i3 < s3; i3++) r2.append(t3[i3], l()), C.nextNode(), d2.push({ type: 2, index: ++c2 });
              r2.append(t3[s3], l());
            }
          }
        } else if (8 === r2.nodeType) if (r2.data === o$2) d2.push({ type: 2, index: c2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = r2.data.indexOf(h, t3 + 1)); ) d2.push({ type: 7, index: c2 }), t3 += h.length - 1;
        }
        c2++;
      }
    }
    static createElement(t2, i3) {
      const s2 = r$2.createElement("template");
      return s2.innerHTML = t2, s2;
    }
  }
  function S(t2, i3, s2 = t2, e2) {
    if (i3 === T) return i3;
    let h2 = void 0 !== e2 ? s2._$Co?.[e2] : s2._$Cl;
    const o2 = c(i3) ? void 0 : i3._$litDirective$;
    return h2?.constructor !== o2 && (h2?._$AO?.(false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ??= [])[e2] = h2 : s2._$Cl = h2), void 0 !== h2 && (i3 = S(t2, h2._$AS(t2, i3.values), h2, e2)), i3;
  }
  class M {
    constructor(t2, i3) {
      this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i3;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t2) {
      const { el: { content: i3 }, parts: s2 } = this._$AD, e2 = (t2?.creationScope ?? r$2).importNode(i3, true);
      C.currentNode = e2;
      let h2 = C.nextNode(), o2 = 0, n3 = 0, l2 = s2[0];
      for (; void 0 !== l2; ) {
        if (o2 === l2.index) {
          let i4;
          2 === l2.type ? i4 = new R(h2, h2.nextSibling, this, t2) : 1 === l2.type ? i4 = new l2.ctor(h2, l2.name, l2.strings, this, t2) : 6 === l2.type && (i4 = new z(h2, this, t2)), this._$AV.push(i4), l2 = s2[++n3];
        }
        o2 !== l2?.index && (h2 = C.nextNode(), o2++);
      }
      return C.currentNode = r$2, e2;
    }
    p(t2) {
      let i3 = 0;
      for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i3), i3 += s2.strings.length - 2) : s2._$AI(t2[i3])), i3++;
    }
  }
  class R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t2, i3, s2, e2) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t2, this._$AB = i3, this._$AM = s2, this.options = e2, this._$Cv = e2?.isConnected ?? true;
    }
    get parentNode() {
      let t2 = this._$AA.parentNode;
      const i3 = this._$AM;
      return void 0 !== i3 && 11 === t2?.nodeType && (t2 = i3.parentNode), t2;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t2, i3 = this) {
      t2 = S(this, t2, i3), c(t2) ? t2 === E || null == t2 || "" === t2 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t2 !== this._$AH && t2 !== T && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : u(t2) ? this.k(t2) : this._(t2);
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
      const { values: i3, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = N.createElement(P(s2.h, s2.h[0]), this.options)), s2);
      if (this._$AH?._$AD === e2) this._$AH.p(i3);
      else {
        const t3 = new M(e2, this), s3 = t3.u(this.options);
        t3.p(i3), this.T(s3), this._$AH = t3;
      }
    }
    _$AC(t2) {
      let i3 = A.get(t2.strings);
      return void 0 === i3 && A.set(t2.strings, i3 = new N(t2)), i3;
    }
    k(t2) {
      a(this._$AH) || (this._$AH = [], this._$AR());
      const i3 = this._$AH;
      let s2, e2 = 0;
      for (const h2 of t2) e2 === i3.length ? i3.push(s2 = new R(this.O(l()), this.O(l()), this, this.options)) : s2 = i3[e2], s2._$AI(h2), e2++;
      e2 < i3.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i3.length = e2);
    }
    _$AR(t2 = this._$AA.nextSibling, i3) {
      for (this._$AP?.(false, true, i3); t2 !== this._$AB; ) {
        const i4 = t2.nextSibling;
        t2.remove(), t2 = i4;
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
    constructor(t2, i3, s2, e2, h2) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t2, this.name = i3, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = E;
    }
    _$AI(t2, i3 = this, s2, e2) {
      const h2 = this.strings;
      let o2 = false;
      if (void 0 === h2) t2 = S(this, t2, i3, 0), o2 = !c(t2) || t2 !== this._$AH && t2 !== T, o2 && (this._$AH = t2);
      else {
        const e3 = t2;
        let n3, r2;
        for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r2 = S(this, e3[s2 + n3], i3, n3), r2 === T && (r2 = this._$AH[n3]), o2 ||= !c(r2) || r2 !== this._$AH[n3], r2 === E ? t2 = E : t2 !== E && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
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
    constructor(t2, i3, s2, e2, h2) {
      super(t2, i3, s2, e2, h2), this.type = 5;
    }
    _$AI(t2, i3 = this) {
      if ((t2 = S(this, t2, i3, 0) ?? E) === T) return;
      const s2 = this._$AH, e2 = t2 === E && s2 !== E || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== E && (s2 === E || e2);
      e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
    }
    handleEvent(t2) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
    }
  }
  class z {
    constructor(t2, i3, s2) {
      this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s2;
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
  const B = (t2, i3, s2) => {
    const e2 = s2?.renderBefore ?? i3;
    let h2 = e2._$litPart$;
    if (void 0 === h2) {
      const t3 = s2?.renderBefore ?? null;
      e2._$litPart$ = h2 = new R(i3.insertBefore(l(), t3), t3, void 0, s2 ?? {});
    }
    return h2._$AI(t2), h2;
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const s = globalThis;
  let i$1 = class i extends y$1 {
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
  i$1._$litElement$ = true, i$1["finalized"] = true, s.litElementHydrateSupport?.({ LitElement: i$1 });
  const o$1 = s.litElementPolyfillSupport;
  o$1?.({ LitElement: i$1 });
  (s.litElementVersions ??= []).push("4.2.1");
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1 = (t2) => (e2, o2) => {
    void 0 !== o2 ? o2.addInitializer((() => {
      customElements.define(t2, e2);
    })) : customElements.define(t2, e2);
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o = { attribute: true, type: String, converter: u$1, reflect: false, hasChanged: f$1 }, r$1 = (t2 = o, e2, r2) => {
    const { kind: n3, metadata: i3 } = r2;
    let s2 = globalThis.litPropertyMetadata.get(i3);
    if (void 0 === s2 && globalThis.litPropertyMetadata.set(i3, s2 = new Map()), "setter" === n3 && ((t2 = Object.create(t2)).wrapped = true), s2.set(r2.name, t2), "accessor" === n3) {
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
  const e$3 = (e2, t2, c2) => (c2.configurable = true, c2.enumerable = true, Reflect.decorate && "object" != typeof t2 && Object.defineProperty(e2, t2, c2), c2);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function e$2(e2, r2) {
    return (n3, s2, i3) => {
      const o2 = (t2) => t2.renderRoot?.querySelector(e2) ?? null;
      return e$3(n3, s2, { get() {
        return o2(this);
      } });
    };
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t = { ATTRIBUTE: 1 }, e$1 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
  class i2 {
    constructor(t2) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t2, e2, i3) {
      this._$Ct = t2, this._$AM = e2, this._$Ci = i3;
    }
    _$AS(t2, e2) {
      return this.update(t2, e2);
    }
    update(t2, e2) {
      return this.render(...e2);
    }
  }
  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e = e$1(class extends i2 {
    constructor(t$12) {
      if (super(t$12), t$12.type !== t.ATTRIBUTE || "class" !== t$12.name || t$12.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t2) {
      return " " + Object.keys(t2).filter(((s2) => t2[s2])).join(" ") + " ";
    }
    update(s2, [i3]) {
      if (void 0 === this.st) {
        this.st = new Set(), void 0 !== s2.strings && (this.nt = new Set(s2.strings.join(" ").split(/\s/).filter(((t2) => "" !== t2))));
        for (const t2 in i3) i3[t2] && !this.nt?.has(t2) && this.st.add(t2);
        return this.render(i3);
      }
      const r2 = s2.element.classList;
      for (const t2 of this.st) t2 in i3 || (r2.remove(t2), this.st.delete(t2));
      for (const t2 in i3) {
        const s3 = !!i3[t2];
        s3 === this.st.has(t2) || this.nt?.has(t2) || (s3 ? (r2.add(t2), this.st.add(t2)) : (r2.remove(t2), this.st.delete(t2)));
      }
      return T;
    }
  });
  class OpenAITranslator {
    updateConfig(config) {
      Object.assign(this.config ??= {}, config);
    }
    get ready() {
      return (this.config?.apiKey?.length ?? 0) > 0;
    }
    async translate(options) {
      const { text, from, to } = options;
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
                role: "system",
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
      for (let i3 = startIndex; i3 < els.length; i3++) {
        const el = els[i3];
        if (!el) {
          continue;
        }
        const prev = els[i3 - 1];
        if (prev) {
          prevOffset = Number.parseInt(prev.style.bottom) + prev.offsetHeight;
        }
        el.style.zIndex = (this.zIndex + i3).toString();
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
  const languageIcon = b`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>`;
  const checkIcon = b`<svg viewBox="0 0 1024 1024" width="10" height="10"><path fill="currentColor" d="M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/></svg>`;
  const refreshIcon = b`<svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M17.65 6.35A7.958 7.958 0 0 0 12 4C7.58 4 4.01 7.58 4.01 12S7.58 20 12 20c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`;
  const settingIcon = b`<svg viewBox="0 0 1024 1024" width="20" height="20"><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256"/></svg>`;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
      if (decorator = decorators[i3])
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
      prompt: "You are a professional translator. Translate the following text from {from} to {to}. Return only the translated text, no explanation, no notes.",
      temperature: 0.3,
      maxTokens: 1024
    }
  };
  let ChromeTranslateBall = class extends i$1 {
    constructor() {
      super(...arguments);
      this.moving = false;
      this.isTranslating = false;
      this.activeDropdown = null;
      this.provider = "chrome";
      this.openaiApiKey = "";
      this.openaiBaseUrl = "https://api.openai.com/v1";
      this.openaiModel = "gpt-4o-mini";
      this.openaiPrompt = "";
      this.openaiModels = [];
      this.openaiModelsLoading = false;
      this.openaiModelsError = "";
      this.modelDropdownOpen = false;
      this.modelDropdownUp = false;
      this.activeTab = "translate";
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
        this.dialogEl?.showModal();
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
      this.onDocumentMouseDown = (e2) => {
        if (this.modelDropdownOpen) {
          const modelDropdownEl = e2.composedPath().find(
            (el) => el instanceof Element && el.getAttribute("data-dropdown") === "model"
          );
          if (!modelDropdownEl) {
            this.modelDropdownOpen = false;
          }
        }
        if (!this.activeDropdown) {
          return;
        }
        const dropdownEl = e2.composedPath().find(
          (el) => el instanceof Element && el.getAttribute("data-dropdown") === this.activeDropdown
        );
        if (!dropdownEl) {
          this.activeDropdown = null;
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
      document.addEventListener("mousedown", this.onDocumentMouseDown);
      void this.initTranslate();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      document.removeEventListener("mousemove", this.throttledMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
      document.removeEventListener("mousedown", this.onDocumentMouseDown);
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
      ball.setAttribute("data-side", this.config.side);
      const root = this.renderRoot.querySelector(".ct-root");
      this.cleanupScrollbarWatch = watchScrollbarChange((info) => {
        Object.assign(SCROLLBAR_INFO, info);
        this.setScrollbarProperty(root);
      });
      this.setScrollbarProperty(root);
      ball.getBoundingClientRect();
      ball.style.transition = "all 0.3s ease";
      this.dialogEl.addEventListener("click", (e2) => {
        if (e2.target === this.dialogEl) {
          this.dialogEl.close();
        }
      });
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
    toggleDropdown(target) {
      this.activeDropdown = this.activeDropdown === target ? null : target;
    }
    async onSelectLanguage(target, value) {
      this.language = { ...this.language, [target]: value };
      this.activeDropdown = null;
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
    toggleModelDropdown() {
      if (!this.modelDropdownOpen) {
        const trigger = this.renderRoot.querySelector(".ct-model-select-trigger");
        if (trigger) {
          const rect = trigger.getBoundingClientRect();
          const spaceBelow = window.innerHeight - rect.bottom;
          this.modelDropdownUp = spaceBelow < 200;
        }
      }
      this.modelDropdownOpen = !this.modelDropdownOpen;
    }
    onSelectModel(value) {
      this.openaiModel = value;
      this.modelDropdownOpen = false;
      this.onOpenAIConfigChange("model", value);
    }
    renderModelSelect() {
      const label = this.openaiModel;
      const disabled = this.openaiModelsLoading || !!this.openaiModelsError;
      return x`
      <div class="ct-custom-select" data-dropdown="model">
        <button
          class="ct-select-trigger ct-model-select-trigger"
          ?disabled=${disabled}
          @click=${this.toggleModelDropdown}
        >
          ${this.openaiModelsLoading ? "Loading models…" : label}
          <span class="ct-arrow">▾</span>
        </button>
        ${this.openaiModelsError ? x`<div style="font-size:11px;color:#e74c3c;line-height:1.4;padding-top:2px;">${this.openaiModelsError}</div>` : E}
        ${!disabled && this.modelDropdownOpen ? x`
          <div class="ct-select-dropdown" data-dropup=${String(this.modelDropdownUp)}>
            ${this.openaiModels.map((m2) => x`
              <div
                class="ct-select-option ${m2 === this.openaiModel ? "ct-selected" : ""}"
                @click=${() => this.onSelectModel(m2)}
              >${m2}</div>
            `)}
          </div>
        ` : E}
      </div>
    `;
    }
    renderSelect(target) {
      const options = target === "from" ? [{ label: "Auto", value: "auto" }, ...LANGUAGES] : [...LANGUAGES];
      const current = this.language[target];
      const label = options.find((o2) => o2.value === current)?.label ?? current;
      return x`
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
          ${options.map((o2) => x`
            <div
              class="ct-select-option ${o2.value === current ? "ct-selected" : ""}"
              @click=${() => {
      void this.onSelectLanguage(target, o2.value);
    }}
            >${o2.label}</div>
          `)}
        </div>
      </div>
    `;
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
    onBatchSizeInput(e2) {
      const v2 = Number(e2.target.value);
      if (v2 > 0) {
        this.onBatchSizeChange(v2);
      } else {
        e2.target.value = String(this.batchSize);
      }
    }
    onTemperatureInput(e2) {
      const v2 = Number(e2.target.value);
      this.openaiTemperature = v2;
      this.onOpenAIConfigChange("temperature", String(v2));
    }
    onMaxTokensInput(e2) {
      const v2 = Number(e2.target.value);
      this.openaiMaxTokens = v2;
      this.onOpenAIConfigChange("maxTokens", String(v2));
    }
    renderSidebar() {
      return x`
      <div class="ct-sidebar">
        <div
          class="ct-sidebar-item ${this.activeTab === "translate" ? "ct-sidebar-active" : ""}"
          @click=${() => {
      this.activeTab = "translate";
    }}
        >
          <span class="ct-sidebar-icon">🌐</span>
          <span class="ct-sidebar-label">Translate</span>
        </div>
        <div
          class="ct-sidebar-item ${this.activeTab === "provider" ? "ct-sidebar-active" : ""}"
          @click=${() => {
      this.activeTab = "provider";
    }}
        >
          <span class="ct-sidebar-icon">⚙️</span>
          <span class="ct-sidebar-label">Provider</span>
        </div>
      </div>
    `;
    }
    renderTranslateTab() {
      return x`
      <div class="ct-section-title">Language</div>
      <div class="ct-setting-dialog">
        <div class="ct-setting-dialog-from">${this.renderSelect("from")}</div>
        <span class="ct-arrow-icon">→</span>
        <div class="ct-setting-dialog-to">${this.renderSelect("to")}</div>
      </div>

      <div class="ct-section-divider"></div>

      <div class="ct-section-title">Translation Mode</div>
      <div class="ct-provider-options" style="flex-direction:column;gap:6px;">
        <label class="ct-radio ${this.mode === "text" ? "ct-radio-active" : ""}">
          <input type="radio" name="mode" value="text" ?checked=${this.mode === "text"} @change=${() => this.onModeChange("text")}>
          <span>Text</span>
        </label>
        <label class="ct-radio ${this.mode === "html" ? "ct-radio-active" : ""}">
          <input type="radio" name="mode" value="html" ?checked=${this.mode === "html"} @change=${() => this.onModeChange("html")}>
          <span>HTML</span>
        </label>
      </div>

      <div class="ct-section-divider"></div>

      <div class="ct-section-title">Performance</div>
      <label class="ct-field">
        <span class="ct-field-label">Max concurrent requests</span>
        <input type="number" class="ct-input" min="1" max="20" step="1" .value=${String(this.batchSize)} @change=${this.onBatchSizeInput}>
      </label>
    `;
    }
    renderProviderTab() {
      return x`
      <div class="ct-section-title">Translation Provider</div>
      <div class="ct-provider-options">
        <label class="ct-radio ${this.provider === "chrome" ? "ct-radio-active" : ""}">
          <input type="radio" name="provider" value="chrome" ?checked=${this.provider === "chrome"} @change=${() => this.onProviderChange("chrome")}>
          <span>Chrome AI</span>
        </label>
        <label class="ct-radio ${this.provider === "openai" ? "ct-radio-active" : ""}">
          <input type="radio" name="provider" value="openai" ?checked=${this.provider === "openai"} @change=${() => this.onProviderChange("openai")}>
          <span>OpenAI API</span>
        </label>
      </div>

      ${this.provider === "openai" ? x`
        <div class="ct-section-divider"></div>
        <div class="ct-section-title">OpenAI Configuration</div>
        <div class="ct-openai-section">
          <label class="ct-field">
            <span class="ct-field-label">API Key</span>
            <input type="password" class="ct-input" .value=${this.openaiApiKey} @change=${(e2) => this.onOpenAIConfigChange("apiKey", e2.target.value)} placeholder="sk-...">
          </label>
          <label class="ct-field">
            <span class="ct-field-label">Base URL</span>
            <input type="text" class="ct-input" .value=${this.openaiBaseUrl} @change=${(e2) => this.onOpenAIConfigChange("baseUrl", e2.target.value)}>
          </label>
          <label class="ct-field">
            <span class="ct-field-label">Model</span>
            <div style="display:flex;gap:6px;align-items:flex-start;">
              <div style="flex:1;min-width:0;">${this.renderModelSelect()}</div>
              <button
                @click=${() => {
      void this.fetchModels();
    }}
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
            <textarea class="ct-textarea" .value=${this.openaiPrompt} @change=${(e2) => this.onOpenAIConfigChange("prompt", e2.target.value)} placeholder="Optional: custom system prompt for translation"></textarea>
          </label>
        </div>
      ` : E}
    `;
    }
    render() {
      return x`
      <div class="ct-root">
        <div
          class="ct-ball ${e({ "ct-moving": this.moving })}"
          @click=${this.onTranslate}
          @mousedown=${this.onMouseDown}
          @contextmenu=${(e2) => e2.preventDefault()}
        >
          <div class="ct-icon">
            <span class="ct-language-icon">${languageIcon}</span>
            ${this.isTranslating ? x`
              <span class="ct-check-icon">${checkIcon}</span>
            ` : E}
          </div>
          <div class="ct-setting-wrap" @click=${(e2) => e2.stopPropagation()}>
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
              ${this.activeTab === "translate" ? this.renderTranslateTab() : this.renderProviderTab()}
            </div>
          </div>
        </dialog>
      </div>
    `;
    }
  };
  ChromeTranslateBall.styles = i$4`
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
  ], ChromeTranslateBall.prototype, "activeDropdown", 2);
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
  ], ChromeTranslateBall.prototype, "modelDropdownOpen", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "modelDropdownUp", 2);
  __decorateClass([
    r()
  ], ChromeTranslateBall.prototype, "activeTab", 2);
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
    e$2(".ct-ball")
  ], ChromeTranslateBall.prototype, "ballEl", 2);
  __decorateClass([
    e$2("dialog")
  ], ChromeTranslateBall.prototype, "dialogEl", 2);
  ChromeTranslateBall = __decorateClass([
    t$1("chrome-translate-ball")
  ], ChromeTranslateBall);
  const ballEl = document.createElement("chrome-translate-ball");
  document.documentElement.appendChild(ballEl);

})();