import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'

export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://github.com/lete114/chrome-translate/blob/main/src/assets/logo.svg?raw=true',
        namespace: 'lete114/chrome-translate',
        match: ['*://*/*'],
      },
    }),
  ],
})
