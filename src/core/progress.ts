export interface IProgressOptions {
  title?: string
  offset?: number
  zIndex?: number
}

export interface ICreateProgressElementOptions {
  title?: string
}

export interface IProgressController {
  showProgress: (percent: number, text?: string | null) => void
  hideProgress: () => void
}

export class Progress {
  globalBaseTitle: string
  offset: number
  zIndex: number
  progessElements = new Set<HTMLElement>()

  constructor(options: IProgressOptions = {}) {
    this.globalBaseTitle = options.title || 'Downloading...'
    this.offset = options.offset || 24
    this.zIndex = options.zIndex || 1
  }

  createProgressElement(options: ICreateProgressElementOptions = {}): IProgressController {
    const localBaseTitle = options.title || this.globalBaseTitle

    const progressContainer = document.createElement('div')
    this.progessElements.add(progressContainer)
    Object.assign(progressContainer.style, {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '300px',
      backgroundColor: '#1e1e1e',
      borderRadius: '10px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, .8)',
      opacity: '0',
      transition: 'all .3s ease',
      padding: '16px 20px',
      color: '#fff',
      fontSize: '14px',
      transform: 'translateX(50%)',
    })

    // 标题
    const titleElement = document.createElement('div')
    Object.assign(titleElement.style, {
      marginBottom: '12px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#ccc',
    })
    titleElement.textContent = localBaseTitle
    progressContainer.appendChild(titleElement)

    // 背景条
    const progressBarBg = document.createElement('div')
    Object.assign(progressBarBg.style, {
      width: '100%',
      height: '14px',
      backgroundColor: '#2c2c2c',
      borderRadius: '7px',
      overflow: 'hidden',
      position: 'relative',
    })

    // 前景条
    const progressBar = document.createElement('div')
    Object.assign(progressBar.style, {
      height: '100%',
      width: '0%',
      background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
      transition: 'width .3s ease',
      borderRadius: '7px 0 0 7px',
      position: 'absolute',
      top: '0',
      left: '0',
    })

    // 百分比文本
    const progressText = document.createElement('div')
    Object.assign(progressText.style, {
      position: 'absolute',
      top: '0',
      height: '100%',
      lineHeight: '14px',
      whiteSpace: 'nowrap',
      padding: '0 6px',
      fontSize: '12px',
      color: '#fff',
      textShadow: '0 0 3px rgba(0,0,0,.4)',
      transition: 'left 0.3s ease, transform 0.3s ease',
    })

    progressBarBg.appendChild(progressBar)
    progressBarBg.appendChild(progressText)
    progressContainer.appendChild(progressBarBg)

    this.setPosition(this.progessElements)
    document.body.appendChild(progressContainer)

    // 入场动画 - 使用 offsetHeight 触发 reflow (浏览器回流重排)
    // 流程: 强制渲染 -> 修改样式 -> 过渡动画
    // eslint-disable-next-line ts/no-unused-expressions
    progressContainer.offsetHeight

    progressContainer.style.opacity = '1'
    progressContainer.style.transform = 'translateX(0)'

    const controller: IProgressController = {
      showProgress: (percent: number, text: string | null = null) => {
        percent = Math.max(1, Math.min(100, percent))
        titleElement.textContent
          = text || localBaseTitle || this.globalBaseTitle

        progressBar.style.width = `${percent}%`
        progressText.textContent = `${percent}%`

        const containerWidth = progressBarBg.clientWidth
        const textWidth = progressText.offsetWidth || 30

        if (percent < 98) {
          const leftPos = (percent / 100) * containerWidth - textWidth
          progressText.style.left = `${Math.max(6, leftPos)}px`
          progressText.style.transform = `translateX(0%)`
        }
        else {
          progressText.style.left = '50%'
          progressText.style.transform = 'translateX(-50%)'
        }

        if (percent >= 100) {
          setTimeout(() => controller.hideProgress(), 1000)
        }
      },

      hideProgress: () => {
        progressContainer.style.opacity = '0'
        progressContainer.style.transform = 'translateX(50px)'
        this.progessElements.delete(progressContainer)
        this.setPosition(this.progessElements)

        progressContainer.addEventListener(
          'transitionend',
          () => progressContainer.remove(),
          { once: true }, /* only execute once */
        )
      },
    }
    controller.showProgress(1)
    return controller
  }

  setPosition(elements: Set<HTMLElement>, startIndex = 0) {
    if (startIndex < -1) {
      return
    }

    const els = Array.from(elements)
    let prevOffset = 0
    for (let i = startIndex; i < els.length; i++) {
      const el = els[i]
      if (!el) {
        continue
      }

      const prev = els[i - 1]
      if (prev) {
        prevOffset = Number.parseInt(prev.style.bottom) + prev.offsetHeight
      }
      el.style.zIndex = (this.zIndex + i).toString()
      el.style.bottom = `${this.offset + prevOffset}px`
    }
  }
}
