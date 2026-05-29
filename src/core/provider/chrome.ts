import type { Progress } from '../progress'
import type { ITranslateOptions, ITranslationProvider } from '../translator'

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
    const languages = {
      sourceLanguage: options.from,
      targetLanguage: options.to,
    }

    const availability = await (window as any).Translator.availability(languages)

    if (availability === 'unavailable') {
      console.warn('Translation not supported; try a different language combination.')
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
        })
      },
    })
  }

  private async getTranslator(options: ITranslateOptions): Promise<any> {
    const key = Object.values(options).join('-')
    let translatorPromise = this.translatorCacheMap.get(key)

    if (!translatorPromise) {
      translatorPromise = this.createTranslator(options).then((translator) => {
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
}
