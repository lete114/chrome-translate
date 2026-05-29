<script setup lang="ts">
import { GM_getValue } from '$'
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { Translator } from '../core/translator'
import { LFUCache } from '../utils/LFUCache'
import { STORAGE_CONFIG_KEY } from '../utils/constant'

interface SelectionConfig {
  language: { from: string; to: string }
}

const config = GM_getValue(STORAGE_CONFIG_KEY, {
  language: { from: 'auto', to: '' },
}) as SelectionConfig

const translator = new Translator()
const cache = new LFUCache<string>('ct-selection-cache')

type Phase = 'hidden' | 'button' | 'popup'
const state = reactive({
  phase: 'hidden' as Phase,
  selectedText: '',
  translatedText: '',
  loading: false,
  error: '',
  posX: 0,
  posY: 0,
})

const rootRef = ref<HTMLElement>()

function getSelectedText(): string {
  const sel = window.getSelection()
  if (!sel || sel.isCollapsed || !sel.rangeCount) return ''
  return sel.toString().trim()
}

function getSelectionRect(): { x: number; y: number; cx: number } | null {
  const sel = window.getSelection()
  if (!sel || !sel.rangeCount) return null
  const rect = sel.getRangeAt(0).getBoundingClientRect()
  if (!rect || (rect.width === 0 && rect.height === 0)) return null
  return { x: rect.right, y: rect.top, cx: rect.left + rect.width / 2 }
}

function onMouseDown(e: MouseEvent) {
  if (rootRef.value?.contains(e.target as Node)) {
    return
  }
  if (state.phase === 'popup' || state.phase === 'button') {
    state.phase = 'hidden'
  }
}

function onMouseUp() {
  if (state.phase !== 'hidden') {
    return
  }

  const text = getSelectedText()
  if (!text || text.length > 2000) return

  const pos = getSelectionRect()
  if (!pos) return

  state.selectedText = text
  state.posX = pos.x
  state.posY = pos.y
  state.phase = 'button'
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && state.phase !== 'hidden') {
    state.phase = 'hidden'
  }
}

function dismiss() {
  state.phase = 'hidden'
}

function onScroll() {
  dismiss()
}

async function onTranslate() {
  if (!(window as any).Translator?.availability) {
    state.error = 'Translator API is not available（需要 Chrome 138+）'
    state.phase = 'popup'
    window.getSelection()?.removeAllRanges()
    return
  }

  state.loading = true
  state.error = ''
  state.phase = 'popup'
  state.posY = state.posY + 20
  window.getSelection()?.removeAllRanges()

  try {
    const from = config.language.from
    const to = config.language.to || navigator.languages[0]

    let sourceLang = from
    if (sourceLang === 'auto') {
      sourceLang = await translator.detectLanguage(state.selectedText)
    }

    if (sourceLang === to) {
      state.translatedText = state.selectedText
      return
    }

    const cacheKey = `${sourceLang}:${to}:${state.selectedText}`
    const cached = cache.get(cacheKey)
    if (cached) {
      state.translatedText = cached
      return
    }

    const result = await translator.translate({
      from: sourceLang,
      to,
      text: state.selectedText,
    })

    cache.set(cacheKey, result)
    state.translatedText = result
  } catch (e: any) {
    state.error = e.message || '翻译失败'
  } finally {
    state.loading = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', onMouseDown)
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('keydown', onKeyDown)
  window.addEventListener('scroll', onScroll, true)
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onMouseDown)
  document.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('scroll', onScroll, true)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <div ref="rootRef" class="ct-sel-root">
    <button
      v-if="state.phase === 'button'"
      class="ct-sel-btn"
      :style="{ left: state.posX + 'px', top: state.posY + 'px' }"
      @mousedown.stop
      @mouseup.stop
      @click.stop="onTranslate"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 8l6 6" />
        <path d="M4 14l6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="M14 22l2.5-5L19 22" />
        <path d="M12 17h8" />
      </svg>
    </button>

    <div
      v-if="state.phase === 'popup'"
      class="ct-sel-popup"
      :style="{ left: state.posX + 'px', top: state.posY + 'px' }"
      @mousedown.stop
    >
      <button class="ct-sel-close" @click.stop="dismiss">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div v-if="state.loading" class="ct-sel-status">
        <span class="ct-sel-spinner" />
        <span>翻译中...</span>
      </div>
      <div v-else-if="state.error" class="ct-sel-status ct-sel-error">
        {{ state.error }}
      </div>
      <template v-else>
        <div class="ct-sel-text ct-sel-original">{{ state.selectedText }}</div>
        <div class="ct-sel-divider" />
        <div class="ct-sel-text ct-sel-translated">{{ state.translatedText }}</div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.ct-sel-root {
  position: static;
}

.ct-sel-btn {
  position: fixed;
  z-index: 2147483647;
  width: 32px;
  height: 32px;
  border: 2px solid #fff;
  border-radius: 50%;
  background: #00c4b6;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
  transition: transform 0.12s ease;
  padding: 0;
  outline: none;
}

.ct-sel-btn:hover {
  background: #00a89a;
  transform: translate(-50%, -50%) scale(1.1);
}

.ct-sel-btn:active {
  transform: translate(-50%, -50%) scale(0.92);
}

.ct-sel-popup {
  position: fixed;
  z-index: 2147483647;
  min-width: 200px;
  max-width: 420px;
  max-height: 320px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  padding: 14px 16px;
  transform: translate(-50%, 0);
  overflow-y: auto;
  color: #333;
  font-size: 14px;
  line-height: 1.5;
}

.ct-sel-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 50%;
  background: #f0f0f0;
  color: #888;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: background 0.15s;
}

.ct-sel-close:hover {
  background: #e0e0e0;
  color: #555;
}

.ct-sel-text {
  word-break: break-word;
  white-space: pre-wrap;
  padding-right: 20px;
}

.ct-sel-original {
  color: #888;
  font-size: 13px;
  margin-bottom: 6px;
}

.ct-sel-translated {
  color: #222;
  font-size: 15px;
  font-weight: 500;
}

.ct-sel-divider {
  height: 1px;
  background: #eee;
  margin: 6px 0;
}

.ct-sel-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  color: #888;
  font-size: 13px;
}

.ct-sel-error {
  color: #e74c3c;
}

.ct-sel-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid #e0e0e0;
  border-top-color: #00c4b6;
  border-radius: 50%;
  animation: ct-spin 0.6s linear infinite;
  flex-shrink: 0;
}

@keyframes ct-spin {
  to { transform: rotate(360deg); }
}
</style>
