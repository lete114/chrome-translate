<script setup lang="ts">
import { GM_getValue, GM_setValue } from '$'
import { onBeforeUnmount, onMounted, reactive, useTemplateRef } from 'vue'
import checkIcon from '../components/icon/check.vue'
import languageIcon from '../components/icon/language.vue'
import { useTranslate } from '../hooks/useTranslate'
import { SCROLLBAR_INFO, STORAGE_CONFIG_KEY } from '../utils/constant'
import { clamp, debounce, throttle } from '../utils/public'

const ball = useTemplateRef('ball')

const config = GM_getValue(STORAGE_CONFIG_KEY, {
  position: { x: '', y: '' },
  side: 'right',
})

const states = reactive({
  moving: false,
  isTranslating: false,
})

let dragging = false

onMounted(() => {
  const el = ball.value!
  const y = config.position.y

  el.style.setProperty('--scrollbar-width', `${SCROLLBAR_INFO.width}px`)
  el.style.setProperty('--scrollbar-height', `${SCROLLBAR_INFO.height}px`)
  // el.style.setProperty('--scrollbar-vertical', SCROLLBAR_INFO.vertical)
  // el.style.setProperty('--scrollbar-horizontal', SCROLLBAR_INFO.horizontal)
  // el.style.setProperty('--x', config.position.x)
  if (y) {
    el.style.setProperty('--y', y)
  }
  el.setAttribute('data-side', config.side)

  const onMouseDown = (event: MouseEvent) => {
    // only left click --- 0: left, 1: middle, 2: right
    if (event.button !== 0) {
      return
    }

    states.moving = false
    dragging = true

    el.style.transition = 'none'
  }

  const onMouseMove = (event: MouseEvent) => {
    if (!dragging) {
      return
    }
    states.moving = true
    el.style.cursor = 'move'

    const ballWidth = el.offsetWidth
    const ballHeight = el.offsetHeight
    const x = clamp(event.clientX - ballWidth / 2, 0, window.innerWidth - ballWidth)
    const y = clamp(event.clientY - ballHeight / 2, 0, window.innerHeight - ballHeight)

    el.style.setProperty('--x', `${x}px`)
    el.style.setProperty('--y', `${y}px`)
  }

  const onMouseUp = (_event: MouseEvent) => {
    if (!dragging) {
      return
    }
    dragging = false

    el.style.transition = 'all 0.3s ease'
    el.style.cursor = 'pointer'

    // set side adsorption
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const side = centerX < window.innerWidth / 2 ? 'left' : 'right'
    el.setAttribute('data-side', side)

    const scrollbarWidth = side === SCROLLBAR_INFO.vertical ? SCROLLBAR_INFO.width : 0
    el.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)

    const x = el.style.getPropertyValue('--x')
    const y = el.style.getPropertyValue('--y')
    el.style.removeProperty('--x')

    GM_setValue(STORAGE_CONFIG_KEY, { ...config, position: { x, y }, side })

    // Prevent the event from bubbling up
    if (states.moving) {
      const stopClick = (event: MouseEvent) => {
        event.stopImmediatePropagation()
        event.preventDefault()
        states.moving = false
        window.removeEventListener('click', stopClick, true)
      }
      window.addEventListener('click', stopClick, true)
    }
  }

  const throttledMouseMove = throttle(onMouseMove, 16)

  el.addEventListener('mousedown', onMouseDown)
  window.addEventListener('mousemove', throttledMouseMove)
  window.addEventListener('mouseup', onMouseUp)
  el.addEventListener('contextmenu', (event) => {
    event.preventDefault()
  })

  onBeforeUnmount(() => {
    el.removeEventListener('mousedown', onMouseDown)
    window.removeEventListener('mousemove', throttledMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  })
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
</script>

<template>
  <div class="ct-root">
    <div ref="ball" class="ct-ball" :class="{ 'ct-moving': states.moving }" @click="onTranslateDebounced">
      <div class="ct-icon">
        <language-icon class="ct-language" />
        <check-icon v-if="states.isTranslating" class="ct-check" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.ct-root {
  --size: 40px;

  .ct-ball {
    --x: 0px;
    --y: calc(50vh - var(--size)/2);
    position: fixed;
    z-index: 999999999;
    top: 0;
    width: var(--size);
    height: var(--size);
    background: #09f;
    background-color: #fff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, .25);
    cursor: pointer;
    user-select: none;
    touch-action: none;
    transform: translate(var(--x), var(--y));
    transition: all 0.3s ease;

    &.ct-moving {
      border-radius: 50%;
      padding: unset !important;
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

      .ct-language {
        width: 20px;
        height: 20px;
      }

      .ct-check {
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

    /* &:active {
      cursor: move;
    } */

    &[data-side="left"] {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;

      &:hover {
        --x: 0;
        padding-left: 10px;
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
      }

      & .ct-icon {
        .ct-check {
          left: 0;
          right: unset;
        }
      }
    }
  }
}
</style>
