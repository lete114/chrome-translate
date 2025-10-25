<script setup lang="ts">
import { GM_getValue, GM_setValue } from '$'
import { onBeforeUnmount, onMounted, reactive, useTemplateRef } from 'vue'
import checkIcon from '../components/icon/check.vue'
import languageIcon from '../components/icon/language.vue'
import settingIcon from '../components/icon/setting.vue'
import { useTranslate } from '../hooks/useTranslate'
import { SCROLLBAR_INFO, STORAGE_CONFIG_KEY } from '../utils/constant'
import { clamp, debounce, throttle, watchScrollbarChange } from '../utils/public'

const rootRef = useTemplateRef('root')
const ballRef = useTemplateRef('ball')

const config = GM_getValue(STORAGE_CONFIG_KEY, {
  position: { x: '', y: '' },
  side: 'right',
})

const states = reactive({
  moving: false,
  isTranslating: false,
})

let dragging = false

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

  states.moving = false
  dragging = true

  ballEl.style.transition = 'none'
}

function onMouseUp(_event: MouseEvent) {
  const ballEl = ballRef.value
  if (!ballEl) {
    return
  }
  if (!dragging) {
    return
  }
  dragging = false

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

  // Prevent the event from bubbling up
  if (states.moving) {
    const stopClick = (event: MouseEvent) => {
      event.stopImmediatePropagation()
      event.preventDefault()
      ballEl.addEventListener('transitionend', () => {
        states.moving = false
      }, { once: true })
      window.removeEventListener('click', stopClick, true)
    }
    window.addEventListener('click', stopClick, true)
  }
}

function onMouseMove(event: MouseEvent) {
  const ballEl = ballRef.value
  if (!ballEl) {
    return
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
  const translate = await useTranslate()

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
  console.log('open setting')
}
</script>

<template>
  <div ref="root" class="ct-root">
    <div ref="ball" class="ct-ball" :class="{ 'ct-moving': states.moving }" @click.stop.prevent="onTranslateDebounced" @mousedown.stop.prevent="onMouseDown" @mouseup.stop.prevent="onMouseUp" @contextmenu="$event.preventDefault()">
      <div class="ct-icon">
        <language-icon class="ct-language-icon" />
        <check-icon v-if="states.isTranslating" class="ct-check-icon" />
      </div>

      <div class="ct-setting-wrap" @click.stop.prevent="() => {}">
        <div class="ct-setting" @click.stop.prevent="onOpenSetting">
          <setting-icon class="ct-setting-icon" />
        </div>
      </div>
    </div>
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

}
</style>
