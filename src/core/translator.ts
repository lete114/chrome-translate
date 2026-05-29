export interface ITranslateOptions {
  from: string
  to: string
}

export interface ITranslationProvider {
  translate: (options: ITranslateOptions & { text: string }) => Promise<string>
}

export class Translator {
  private providers = new Map<string, ITranslationProvider>()
  private current = 'chrome'

  registerProvider(name: string, provider: ITranslationProvider): void {
    this.providers.set(name, provider)
  }

  setProvider(name: string): void {
    if (!this.providers.has(name)) {
      throw new Error(`Provider "${name}" not registered`)
    }
    this.current = name
  }

  get providerName(): string {
    return this.current
  }

  getProvider(name: string): ITranslationProvider | undefined {
    return this.providers.get(name)
  }

  private get currentProvider(): ITranslationProvider {
    const provider = this.providers.get(this.current)
    if (!provider) {
      throw new Error(`Current provider "${this.current}" not found`)
    }
    return provider
  }

  async translate(options: ITranslateOptions & { text: string }): Promise<string> {
    return this.currentProvider.translate(options)
  }

  async detectLanguage(text: string): Promise<string> {
    const detector = await (window as any).LanguageDetector.create({
      monitor: (monitor: any) => {
        const progress = (this.providers.get('chrome') as any)?.progress
        if (progress) {
          const p = progress.createProgressElement({ title: 'Downloading LanguageDetector...' })
          monitor.addEventListener('downloadprogress', (e: any) => {
            const percentage = Math.floor(e.loaded * 100)
            p?.showProgress(percentage)
          })
        }
      },
    })

    const langs = (await detector.detect(text)) as {
      detectedLanguage: string
      confidence: number
    }[]
    return langs[0].detectedLanguage
  }

  async detectPageLanguage(): Promise<string> {
    const lang = document.documentElement.lang
    if (lang) {
      return lang
    }
    const textContent = document.body.textContent
    return textContent ? this.detectLanguage(textContent) : 'en'
  }
}
