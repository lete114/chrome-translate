import type { ITranslateOptions, ITranslationProvider } from '../translator'
import { GM_xmlhttpRequest } from '$'
import { logger } from '../../utils/logger'

export interface IOpenAIConfig {
  apiKey: string
  baseUrl: string
  model: string
  prompt: string
  temperature: number
  maxTokens: number
}

export class OpenAITranslator implements ITranslationProvider {
  private config!: IOpenAIConfig
  private useDeveloperRole = true

  updateConfig(config: Partial<IOpenAIConfig>): void {
    Object.assign(this.config ??= {} as IOpenAIConfig, config)
  }

  get ready(): boolean {
    return (this.config?.apiKey?.length ?? 0) > 0
  }

  async translate(options: ITranslateOptions & { text: string }): Promise<string> {
    const { text, from, to } = options
    const role = this.useDeveloperRole ? 'developer' : 'system'
    logger.info(`OpenAI translate (${role}): ${text.slice(0, 40)}...`)

    try {
      return await this.sendRequest(role, text, from, to)
    }
    catch (err) {
      if (this.useDeveloperRole && err instanceof Error && err.message.includes('400')) {
        logger.warn('OpenAI 400 error, retrying with system role')
        this.useDeveloperRole = false
        return await this.sendRequest('system', text, from, to)
      }
      const msg = err instanceof Error ? err.message : String(err)
      logger.error(`OpenAI translate error: ${msg}`)
      throw err
    }
  }

  private sendRequest(role: 'developer' | 'system', text: string, from: string, to: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      GM_xmlhttpRequest({
        method: 'POST',
        url: `${this.config.baseUrl.replace(/\/+$/, '')}/chat/completions`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        data: JSON.stringify({
          model: this.config.model,
          messages: [
            {
              role,
              content: this.config.prompt.replaceAll('{from}', from).replaceAll('{to}', to),
            },
            {
              role: 'user',
              content: text,
            },
          ],
          temperature: this.config.temperature ?? 0.3,
          ...((this.config.maxTokens ?? 0) > 0 ? { max_tokens: this.config.maxTokens } : {}),
        }),
        onload: (resp) => {
          if (resp.status < 200 || resp.status >= 300) {
            reject(new Error(`OpenAI API error ${resp.status}: ${resp.responseText}`))
            return
          }
          try {
            const data = JSON.parse(resp.responseText)
            const content = data.choices?.[0]?.message?.content
            if (content === undefined || content === null) {
              reject(new Error('OpenAI API returned empty response'))
              return
            }
            resolve(content.trim())
          }
          catch {
            reject(new Error('OpenAI API returned invalid JSON'))
          }
        },
        onerror: () => {
          reject(new Error('OpenAI API network error'))
        },
      })
    })
  }

  async fetchModels(): Promise<string[]> {
    const url = `${this.config.baseUrl.replace(/\/+$/, '')}/models`
    logger.info('Fetching models...')

    return new Promise<string[]>((resolve, reject) => {
      GM_xmlhttpRequest({
        method: 'GET',
        url,
        headers: {
          Authorization: `Bearer ${this.config.apiKey}`,
        },
        onload: (resp) => {
          if (resp.status < 200 || resp.status >= 300) {
            const msg = `Failed to fetch models (${resp.status})`
            logger.error(msg)
            reject(new Error(msg))
            return
          }
          try {
            const data = JSON.parse(resp.responseText)
            const models: string[] = (data.data ?? []).map((m: { id: string }) => m.id).sort()
            logger.info(`Fetched ${models.length} models`)
            resolve(models)
          }
          catch {
            const msg = 'Failed to parse models response'
            logger.error(msg)
            reject(new Error(msg))
          }
        },
        onerror: () => {
          const msg = 'Network error fetching models'
          logger.error(msg)
          reject(new Error(msg))
        },
      })
    })
  }

  detectPageLanguage(): string {
    return document.documentElement.lang || 'en'
  }
}
