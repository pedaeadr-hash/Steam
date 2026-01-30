import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Steam/' //FIZ npm install gh-pages --save-dev E DEPOIS aq coloquei o nome do repo
})
