import type { Progress } from './progress'

export interface ITranslateOptions {
  from: string
  to: string
}
export interface ITranslatorOptions {
  progress?: Progress
}
export class Translator {
  translatorCacheMap = new Map<string, any>()
  progress?: Progress
  constructor(options: ITranslatorOptions = {}) {
    this.progress = options.progress
  }

  async translate(
    options: ITranslateOptions & { text: string },
  ): Promise<string> {
    const translator = await this.getTranslator({ from: options.from, to: options.to })
    return translator.translate(options.text)
  }

  async createTranslator(options: ITranslateOptions) {
    const languages = {
      sourceLanguage: options.from,
      targetLanguage: options.to,
    }

    const availability = await (window as any).Translator.availability(
      languages,
    )

    if (availability === 'unavailable') {
      console.warn(
        `Translation not supported; try a different language combination.`,
      )
      return undefined
    }
    else if (availability === 'available') {
      return (window as any).Translator.create(languages)
    }
    return (window as any).Translator.create({
      ...languages,
      monitor: (monitor: any) => {
        const progess = this.progress?.createProgressElement({ title: 'Downloading Translator...' })
        monitor.addEventListener('downloadprogress', (e: any) => {
          const percentage = Math.floor(e.loaded * 100)
          progess?.showProgress(percentage)
          // console.log(`Downloaded Translator: ${percentage}%`)
        })
      },
    })
  }

  async getTranslator(options: ITranslateOptions) {
    const key = Object.values(options).join('-')
    let translatorPromise = this.translatorCacheMap.get(key)

    if (!translatorPromise) {
      translatorPromise = this.createTranslator(options).then((translator) => {
        // 如果 translator 创建失败，移除缓存，避免下次继续用坏的 Promise
        if (!translator) {
          this.translatorCacheMap.delete(key)
          throw new Error('Translator creation failed')
        }
        return translator
      }).catch((err) => {
        this.translatorCacheMap.delete(key)
        console.error('Error creating translator:', err)
      })
      this.translatorCacheMap.set(key, translatorPromise)
    }

    return translatorPromise
  }

  async detectLanguage(text: string) {
    const detector = await (window as any).LanguageDetector.create({
      monitor: (monitor: any) => {
        const progress = this.progress?.createProgressElement({ title: 'Downloading LanguageDetector...' })
        monitor.addEventListener('downloadprogress', (e: any) => {
          const percentage = Math.floor(e.loaded * 100)
          progress?.showProgress(percentage)
          // console.log(`Download LanguageDetector: ${percentage}`)
        })
      },
    })

    const langs = (await detector.detect(text)) as {
      detectedLanguage: string
      confidence: number
    }[]
    return langs[0].detectedLanguage
  }

  async detectPageLanguage() {
    const lang = document.documentElement.lang
    if (lang) {
      return lang
    }
    const textContent = document.body.textContent
    return textContent ? this.detectLanguage(textContent) : 'en'
  }
}
