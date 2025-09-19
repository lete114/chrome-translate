import { defineCustomElement } from 'vue'
import ball from './components/ball.ce.vue'

customElements.define('chrome-translate-ball', defineCustomElement(ball))

document.documentElement.append(document.createElement('chrome-translate-ball'))
