# Chrome Translate

An immersive bilingual translation Chrome extension powered by the **Translator API** and **Language Detector API** introduced in Chrome v138.

This extension adds a floating button to every webpage. With one click, it extracts visible text nodes, translates them into a bilingual format (original text + translation), and displays them inline. Clicking the button again removes all translated nodes, restoring the page to its original state.

> Translation node extraction reference: [sxueck/open-translate/src/core/textExtractor.js](https://github.com/sxueck/open-translate/blob/925aa5ec14416cde8c6ffa98aab3ecfc33b04e81/src/core/textExtractor.js) and further modified based on this reference.

## ✨ Features

1. **Bilingual Translation**

   * Displays translations without replacing the original text
   * Supports both plain text and HTML translation

2. **Local AI-Powered Translation**

   * Uses Chrome’s built-in AI for translation
   * Fast, private, and secure—no external servers required

3. **LFU Caching for Performance**

   * Implements a **Least Frequently Used (LFU)** cache strategy
   * Greatly reduces repeated translations
   * Improves speed and minimizes performance overhead

## 🚀 How It Works

1. A floating button is injected into every webpage.
2. On click, the extension collects all translatable text nodes.
3. Text is translated locally using Chrome’s AI model.
4. The translated result is shown inline, beneath the original text.
5. Clicking again removes all translated elements.

## 🛠️ Installation

UserScript: [lete114/chrome-translate/chrome-translate.user.js](https://raw.githubusercontent.com/lete114/chrome-translate/refs/heads/main/dist/chrome-translate.user.js)

## 📌 Notes

* Requires Chrome v138 or later.
* Translation happens entirely on-device; no data is sent to external servers.

## 📖 Related Documentation

* [Chrome Translator API](https://developer.chrome.com/docs/ai/translator-api)
* [Chrome Language Detector API](https://developer.chrome.com/docs/ai/language-detection)
