import type { Progress } from '../progress'
import type { ITranslateOptions, ITranslationProvider } from '../translator'
import { logger } from '../../utils/logger'

export interface IChromeTranslatorOptions {
  progress?: Progress
}

export class ChromeTranslator implements ITranslationProvider {
  private translatorCacheMap = new Map<string, Promise<any>>()
  private progress?: Progress

  constructor(options: IChromeTranslatorOptions = {}) {
    this.progress = options.progress
  }

  async translate(options: ITranslateOptions & { text: string }): Promise<string> {
    const translator = await this.getTranslator({ from: options.from, to: options.to })
    return translator.translate(options.text)
  }

  private async createTranslator(options: ITranslateOptions) {
    const api = (window as any).Translator
    if (!api) {
      throw new Error('Translator API is not available (requires Chrome 138+)')
    }

    const languages = {
      sourceLanguage: options.from,
      targetLanguage: options.to,
    }

    const availability = await api.availability(languages)
    logger.info(`Chrome translator: availability=${availability} (${options.from}→${options.to})`)

    if (availability === 'unavailable') {
      throw new Error(`Translation from ${options.from} to ${options.to} is not supported by Chrome API`)
    }

    if (availability === 'available') {
      return api.create(languages)
    }

    return api.create({
      ...languages,
      monitor: (monitor: any) => {
        const progess = this.progress?.createProgressElement({ title: 'Downloading Translator...' })
        monitor.addEventListener('downloadprogress', (e: any) => {
          const percentage = Math.floor(e.loaded * 100)
          progess?.showProgress(percentage)
        })
      },
    })
  }

  private async getTranslator(options: ITranslateOptions): Promise<any> {
    const key = Object.values(options).join('-')
    let translatorPromise = this.translatorCacheMap.get(key)

    if (!translatorPromise) {
      translatorPromise = this.createTranslator(options).catch((err) => {
        this.translatorCacheMap.delete(key)
        throw err
      })
      this.translatorCacheMap.set(key, translatorPromise)
    }

    return translatorPromise
  }
}
