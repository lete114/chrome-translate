// Unofficial ambient type declarations for the experimental
// Translator and Language Detector Web APIs in Chromium 138+.
// Sources: MDN (2025-07/08) and Chrome docs.
// Place this in your project (e.g., src/types/translator-language-detector.d.ts)
// and include it via "typeRoots" or via a triple-slash reference.

// ---------------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------------

declare global {
  /** Availability status returned by Translator.availability() / LanguageDetector.availability(). */
  type AIAvailability = 'available' | 'downloadable' | 'downloading' | 'unavailable'

  /** EventTarget used to report download progress of on-device AI models. */
  interface CreateMonitor extends EventTarget {
    addEventListener: () => (
      type: 'downloadprogress',
      listener: (this: CreateMonitor, ev: ProgressEvent) => any,
      options?: boolean | AddEventListenerOptions,
    ) => void

    removeEventListener: () => (
      type: 'downloadprogress',
      listener: (this: CreateMonitor, ev: ProgressEvent) => any,
      options?: boolean | EventListenerOptions,
    ) => void
  }

  // ---------------------------------------------------------------------------------
  // Translator
  // ---------------------------------------------------------------------------------

  interface TranslatorCreateOptions {
    /** BCP 47 tag (e.g. "en", "en-US"). */
    sourceLanguage: string
    /** BCP 47 tag (e.g. "ja", "zh-Hans"). */
    targetLanguage: string
    /** Optional monitor callback to receive a CreateMonitor for download progress. */
    monitor?: (monitor: CreateMonitor) => void
    /** Optional abort signal for the create operation. */
    signal?: AbortSignal
  }

  interface TranslatorTranslateOptions {
    /** Optional abort signal for translate/translateStreaming. */
    signal?: AbortSignal
  }

  /**
   * Translation API entry point for on-device translation.
   * Experimental; subject to change in future Chromium releases.
   */
  class Translator {
    /** Available input quota units (implementation-dependent). */
    readonly inputQuota: number
    /** Echo of the configured source language. */
    readonly sourceLanguage: string
    /** Echo of the configured target language. */
    readonly targetLanguage: string

    /**
     * Checks whether translation is supported/available for the given languages.
     */
    static availability(options: {
      sourceLanguage: string
      targetLanguage: string
    }): Promise<AIAvailability | null>

    /**
     * Creates a Translator instance. Requires transient activation in Chrome.
     */
    static create(options: TranslatorCreateOptions): Promise<Translator>

    /** Release resources held by this instance. */
    destroy(): void

    /** Reports estimated input usage for a given text. */
    measureInputUsage(input: string): Promise<number>

    /** Returns the full translation for the given input. */
    translate(input: string, options?: TranslatorTranslateOptions): Promise<string>

    /**
     * Returns a ReadableStream of string chunks with the translation as it becomes available.
     * The stream is also async-iterable.
     */
    translateStreaming(
      input: string,
      options?: TranslatorTranslateOptions,
    ): ReadableStream<string>
  }

  // ---------------------------------------------------------------------------------
  // LanguageDetector
  // ---------------------------------------------------------------------------------

  interface LanguageDetectorCreateOptions {
    /** Array of expected input languages (BCP 47 tags). Defaults to ["en"]. */
    expectedInputLanguages?: string[]
    /** Optional monitor callback to receive a CreateMonitor for download progress. */
    monitor?: (monitor: CreateMonitor) => void
    /** Optional abort signal for the create operation. */
    signal?: AbortSignal
  }

  interface LanguageDetectOptions {
    /** Optional abort signal for the detect operation. */
    signal?: AbortSignal
  }

  interface LanguageDetectionResult {
    /** Detected language as a BCP 47 language tag (e.g. "es", "zh-Hant"). */
    detectedLanguage: string
    /** Confidence between 0 and 1. */
    confidence: number
  }

  /**
   * Language detection API entry point for on-device language identification.
   * Experimental; subject to change in future Chromium releases.
   */
  class LanguageDetector {
    /** Available input quota units (implementation-dependent). */
    readonly inputQuota: number
    /** Echo of configured expected input languages. */
    readonly expectedInputLanguages: string[]

    /** Checks whether the detector is available for the given options. */
    static availability(options?: {
      expectedInputLanguages?: string[]
    }): Promise<AIAvailability | null>

    /** Creates a LanguageDetector instance. Requires transient activation in Chrome. */
    static create(options?: LanguageDetectorCreateOptions): Promise<LanguageDetector>

    /** Release resources held by this instance. */
    destroy(): void

    /** Reports estimated input usage for a given text. */
    measureInputUsage(input: string): Promise<number>

    /** Detects likely languages for the given input text. */
    detect(input: string, options?: LanguageDetectOptions): Promise<LanguageDetectionResult[]>
  }

  // Augment Window for convenience (optional, but handy in some codebases)
  interface Window {
    Translator: typeof Translator
    LanguageDetector: typeof LanguageDetector
  }
}

export {}
