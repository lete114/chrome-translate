<script setup lang="ts">
import type { WaDialogProps } from '@awesome.me/webawesome/dist/custom-elements-jsx.d.ts'
import { GM_getValue, GM_setValue } from '$'
import { onBeforeUnmount, onMounted, reactive, useTemplateRef } from 'vue'
import checkIcon from '../components/icon/check.vue'
import languageIcon from '../components/icon/language.vue'
import settingIcon from '../components/icon/setting.vue'
import { useTranslate } from '../hooks/useTranslate'
import { SCROLLBAR_INFO, STORAGE_CONFIG_KEY } from '../utils/constant'
import { LANGUAGES } from '../utils/languages'
import { clamp, debounce, throttle, watchScrollbarChange } from '../utils/public'
import '@awesome.me/webawesome/dist/styles/themes/default.css'
import '@awesome.me/webawesome/dist/components/dialog/dialog.js'
import '@awesome.me/webawesome/dist/components/button/button.js'
import '@awesome.me/webawesome/dist/components/icon/icon.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'

const rootRef = useTemplateRef('root')
const ballRef = useTemplateRef('ball')
const dialogRef = useTemplateRef<WaDialogProps>('dialog')

const config = GM_getValue(STORAGE_CONFIG_KEY, {
  position: { x: '', y: '' },
  side: 'right',
  language: { from: 'auto', to: '' },
})

const states = reactive({
  moving: false,
  isTranslating: false,
  language: config.language || { from: 'auto', to: '' },
})

let translate: Awaited<ReturnType<typeof useTranslate>>
const translateOptions = { ...config.language }
if (translateOptions.from === 'auto') {
  Reflect.deleteProperty(translateOptions, 'from')
}

useTranslate(translateOptions).then(async (t) => {
  translate = t
  const from = await getFrom()
  const to = states.language.to
  if (to) {
    translate.instance.setLanguage({ from, to })
    return
  }
  states.language.to = t.instance.language.to
})
async function getFrom() {
  return states.language.from === 'auto' ? await translate.instance.translator.detectPageLanguage() : states.language.from
}

let dragging = false
let isAllowedTranslate = true
let startX: number | null, startY: number | null
const threshold = 5

function setScrollbarPrroperty(el: HTMLElement) {
  el.style.setProperty('--scrollbar-width', `${SCROLLBAR_INFO.width}px`)
  el.style.setProperty('--scrollbar-height', `${SCROLLBAR_INFO.height}px`)
}

onMounted(() => {
  const ballEl = ballRef.value!
  const rootEl = rootRef.value!
  const y = config.position.y

  watchScrollbarChange((info) => {
    Object.assign(SCROLLBAR_INFO, info)
    setScrollbarPrroperty(rootEl)
  })

  setScrollbarPrroperty(rootEl)

  // ballEl.style.setProperty('--scrollbar-vertical', SCROLLBAR_INFO.vertical)
  // ballEl.style.setProperty('--scrollbar-horizontal', SCROLLBAR_INFO.horizontal)
  // ballEl.style.setProperty('--x', config.position.x)
  if (y) {
    ballEl.style.setProperty('--y', y)
  }
  ballEl.setAttribute('data-side', config.side)

  // force reflow
  ballEl.getBoundingClientRect()
  ballEl.style.transition = 'all 0.3s ease'
})

function onMouseDown(event: MouseEvent) {
  const ballEl = ballRef.value
  if (!ballEl) {
    return
  }

  // only left click --- 0: left, 1: middle, 2: right
  if (event.button !== 0) {
    return
  }
  startX = event.clientX
  startY = event.clientY

  states.moving = false

  ballEl.style.transition = 'none'
}

function onMouseUp(_event: MouseEvent) {
  startX = startY = null
  const ballEl = ballRef.value
  if (!ballEl) {
    return
  }
  if (!dragging) {
    return
  }
  dragging = false
  isAllowedTranslate = false
  states.moving = false

  ballEl.style.transition = 'all 0.3s ease'
  ballEl.style.cursor = 'pointer'

  // set side adsorption
  const rect = ballEl.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const side = centerX < window.innerWidth / 2 ? 'left' : 'right'
  ballEl.setAttribute('data-side', side)

  const x = ballEl.style.getPropertyValue('--x')
  const y = ballEl.style.getPropertyValue('--y')
  ballEl.style.removeProperty('--x')

  GM_setValue(STORAGE_CONFIG_KEY, { ...config, position: { x, y }, side })
}

function onMouseMove(event: MouseEvent) {
  const ballEl = ballRef.value
  if (!ballEl) {
    return
  }
  if (startX && startY) {
    const dx = event.clientX - startX
    const dy = event.clientY - startY
    const distance = Math.sqrt(dx * dx + dy * dy)
    if (distance > threshold) {
      dragging = true
    }
  }
  if (!dragging) {
    return
  }
  states.moving = true
  ballEl.style.cursor = 'move'

  const ballWidth = ballEl.offsetWidth
  const ballHeight = ballEl.offsetHeight
  const x = clamp(event.clientX - ballWidth / 2, 0, window.innerWidth - ballWidth)
  const y = clamp(event.clientY - ballHeight / 2, 0, window.innerHeight - ballHeight)

  ballEl.style.setProperty('--x', `${x}px`)
  ballEl.style.setProperty('--y', `${y}px`)
}
const throttledMouseMove = throttle(onMouseMove, 16)
document.addEventListener('mousemove', throttledMouseMove)
onBeforeUnmount(() => {
  document.removeEventListener('mousemove', throttledMouseMove)
})

async function onTranslate() {
  if (!isAllowedTranslate) {
    isAllowedTranslate = true
    return
  }
  const { from, to } = translate.instance.language
  if (from === to) {
    console.warn('Translation from and to are the same.')
    return
  }
  if (translate.isTranslating()) {
    // translate.stop()
    translate.instance.clearElements()
    states.isTranslating = translate.isTranslating()
    return
  }
  translate.start()
  states.isTranslating = translate.isTranslating()
}
const onTranslateDebounced = debounce(onTranslate, 500, true)

function onOpenSetting() {
  if (dialogRef.value) {
    dialogRef.value.open = true
  }
}

async function onSelected() {
  const from = await getFrom()
  translate.instance.setLanguage({ from, to: states.language.to })
  GM_setValue(STORAGE_CONFIG_KEY, { ...config, language: states.language })
}
</script>

<template>
  <div ref="root" class="ct-root">
    <div
      ref="ball" class="ct-ball" :class="{ 'ct-moving': states.moving }" @click.stop.prevent="onTranslateDebounced"
      @mousedown.stop.prevent="onMouseDown" @mouseup.stop.prevent="onMouseUp" @contextmenu="$event.preventDefault()"
    >
      <!-- icon -->
      <div class="ct-icon">
        <language-icon class="ct-language-icon" />
        <check-icon v-if="states.isTranslating" class="ct-check-icon" />
      </div>

      <!-- setting -->
      <div class="ct-setting-wrap" @click.stop.prevent="() => { }">
        <div class="ct-setting" @click.stop.prevent="onOpenSetting">
          <setting-icon class="ct-setting-icon" />
        </div>
      </div>
    </div>

    <!-- setting dialog -->
    <wa-dialog ref="dialog" label="Setting" light-dismiss>
      <div class="ct-setting-dialog">
        <div class="ct-setting-dialog-from">
          <wa-select v-model="states.language.from" appearance="filled" @change="onSelected">
            <wa-option v-for="lang in [{ label: 'Auto', value: 'auto' }, ...LANGUAGES]" :key="lang.value" :value="lang.value">
              {{ lang.label }}
            </wa-option>
          </wa-select>
        </div>
        <div class="ct-setting-dialgo-icon">
          <wa-icon name="arrow-right" label="Awesome" />
        </div>
        <div class="ct-setting-dialog-to">
          <wa-select v-model="states.language.to" appearance="filled" @change="onSelected">
            <wa-option v-for="lang in LANGUAGES" :key="lang.value" :value="lang.value">
              {{ lang.label }}
            </wa-option>
          </wa-select>
        </div>
      </div>
    </wa-dialog>
  </div>
</template>

<style scoped>
.ct-root {
  --size: 40px;
  --bg: #fff;
  user-select: none;
  touch-action: none;

  .ct-ball {
    --x: 0px;
    --y: calc(50vh - var(--size)/2);
    position: fixed;
    z-index: 999999999;
    top: 0;
    width: var(--size);
    height: var(--size);
    background-color: var(--bg);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, .25);
    cursor: pointer;
    user-select: none;
    touch-action: none;
    transform: translate(var(--x), var(--y));

    &.ct-moving {
      border-radius: 50%;
      padding: unset !important;

      & .ct-setting-wrap {
        display: none;
      }
    }

    .ct-icon {
      --size: 28px;
      width: var(--size);
      height: var(--size);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #00c4b6;

      .ct-language-icon {
        width: 20px;
        height: 20px;
      }

      .ct-check-icon {
        position: absolute;
        bottom: -2px;
        right: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(0, 200, 0, .8);
        color: #fff;

      }
    }

    &[data-side="left"] .ct-setting-wrap {
      left: calc(var(--size) * -1);

      &:hover {
        left: 6px;
      }
    }

    &[data-side="right"] .ct-setting-wrap {
      right: calc(var(--size) * -1);

      &:hover {
        right: 6px;
      }
    }

    .ct-setting-wrap {
      --x: 0px;
      --y: calc(50vh - var(--size)/2);
      position: absolute;
      user-select: none;
      touch-action: none;
      transition: all 0.3s ease;
      top: calc(var(--size));
      padding-top: 10px;
      color: #000;

      & .ct-setting {
        width: calc(var(--size) - 4px);
        height: calc(var(--size) - 4px);
        background-color: var(--bg);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 16px rgba(0, 0, 0, .25);
        border-radius: 20px;

        & .ct-setting-icon {
          width: 20px;
          height: 20px;
        }

      }
    }

    &[data-side="left"] {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;

      &:hover {
        --x: 0;
        padding-left: 10px;

        & .ct-setting-wrap {
          left: 6px;
        }
      }
    }

    &[data-side="right"] {
      --x: calc(100vw - var(--size) - var(--scrollbar-width));
      --offset: calc(var(--scrollbar-width) + 10px);
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-right: var(--offset);

      &:hover {
        --x: calc(100vw - var(--size) - var(--offset));

        & .ct-setting-wrap {
          right: calc(var(--scrollbar-width) + 6px);
        }
      }

      & .ct-icon {
        .ct-check-icon {
          left: 0;
          right: unset;
        }
      }
    }
  }

  .ct-setting-dialog {
    display: flex;

    .ct-setting-dialgo-icon {
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
    }

    .ct-setting-dialog-from,
    .ct-setting-dialog-to {
      flex: 1;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #eee;
      border-radius: 10px;
    }

  }
}
</style>
