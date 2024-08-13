// vite.config.ts
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置neme属性
import VueMacros from 'unplugin-vue-macros/vite'
export default defineConfig({
  plugins: [
    vueJsx(),
    vueSetupExtend(),
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      hoistStatic: {
        exclude: ['./**/*.vue']
      },
      plugins: {
        vueJsx: vueJsx()
      }
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 2222,
    open: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
