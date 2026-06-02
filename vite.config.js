import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ssgPlugin } from 'vite-plugin-ssg'

export default defineConfig({
  plugins: [
    react(),
    ssgPlugin({
      pages: 'src/pages/',
      // optional config: runInDev: true
    }),
  ],
  build: {
    target: 'es2019'
  }
})
