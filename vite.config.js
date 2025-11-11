import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true // automatically open browser
  },
  build: {
    outDir: 'dist'
  }
})