import { Progress } from '../core/progress'
import { Renderer } from '../core/renderer'
import { TextExtractor } from '../core/textExtractor'
import { Translator } from '../core/translator'
import { LFUCache } from '../utils/LFUCache'

const textExtractorInstance = new TextExtractor()
const progressInstance = new Progress()
const translatorInstance = new Translator({ progress: progressInstance })
const cache = new LFUCache()

let rendererInstance: Renderer | null = null

export async function useTranslate(): Promise<{ instance: Renderer, isTranslating: () => boolean, start: () => void, stop: () => void }> {
  if (rendererInstance) {
    return {
      instance: rendererInstance,
      isTranslating: () => !!rendererInstance?.isRunning,
      start: () => rendererInstance?.start(),
      stop: () => rendererInstance?.stop?.(),
    }
  }

  const from = await translatorInstance.detectPageLanguage()
  const to = navigator.languages[0]

  rendererInstance = new Renderer({
    textExtractor: textExtractorInstance,
    translator: translatorInstance,
    LFUCache: cache,
    from,
    to,
  })

  const start = () => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        rendererInstance?.start()
      })
    }
    else {
      rendererInstance?.start()
    }
  }

  return {
    instance: rendererInstance,
    isTranslating: () => !!rendererInstance?.isRunning,
    start,
    stop: () => rendererInstance?.stop?.(),
  }
}
