import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import monkey, { cdn } from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template:{
        compilerOptions: {
          isCustomElement:(tag) => tag.startsWith('wa-')
        }
      }
    }),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://github.com/lete114/chrome-translate/blob/main/src/assets/logo.svg?raw=true',
        namespace: 'lete114/chrome-translate',
        match: ['*://*/*'],
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
})
