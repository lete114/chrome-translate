import type { ITranslateOptions, ITranslationProvider } from '../translator'

export interface IOpenAIConfig {
  apiKey: string
  baseUrl: string
  model: string
  prompt: string
}

export class OpenAITranslator implements ITranslationProvider {
  private config: IOpenAIConfig = {
    apiKey: '',
    baseUrl: 'https://api.openai.com/v1',
    model: 'gpt-4o-mini',
    prompt: '',
  }

  updateConfig(config: Partial<IOpenAIConfig>): void {
    if (config.apiKey !== undefined) {
      this.config.apiKey = config.apiKey
    }
    if (config.baseUrl !== undefined) {
      this.config.baseUrl = config.baseUrl
    }
    if (config.model !== undefined) {
      this.config.model = config.model
    }
    if (config.prompt !== undefined) {
      this.config.prompt = config.prompt
    }
  }

  get ready(): boolean {
    return this.config.apiKey.length > 0
  }

  async translate(options: ITranslateOptions & { text: string }): Promise<string> {
    const { text, from, to } = options

    const response = await fetch(`${this.config.baseUrl.replace(/\/+$/, '')}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`,
      },
      body: JSON.stringify({
        model: this.config.model,
        messages: [
          {
            role: 'system',
            content: this.config.prompt || `You are a professional translator. Translate the following text from ${from} to ${to}. Return only the translated text, no explanation, no notes.`,
          },
          {
            role: 'user',
            content: text,
          },
        ],
        temperature: 0.3,
      }),
    })

    if (!response.ok) {
      const body = await response.text().catch(() => '')
      throw new Error(`OpenAI API error ${response.status}: ${body}`)
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content
    if (content === undefined || content === null) {
      throw new Error('OpenAI API returned empty response')
    }
    return content.trim()
  }

  detectPageLanguage(): string {
    return document.documentElement.lang || 'en'
  }
}
