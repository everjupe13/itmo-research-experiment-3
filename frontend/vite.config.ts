// @ts-ignore
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    host: '0.0.0.0',
    strictPort: true,
    port: 3060
  },

  preview: {
    host: true,
    strictPort: true,
    port: 3060
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url))
    }
  }
})
