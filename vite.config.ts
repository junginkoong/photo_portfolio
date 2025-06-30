// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/photo_portfolio/', 
  plugins: [react()],
  server: {
    port: 3000,
  },
})