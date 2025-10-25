import { defineCustomElement } from 'vue'
import ball from './components/ball.ce.vue'

customElements.define('chrome-translate-ball', defineCustomElement(ball))

const ballEl = document.createElement('chrome-translate-ball')

document.documentElement.appendChild(ballEl)
