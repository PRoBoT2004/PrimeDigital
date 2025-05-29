// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // This line is back!

export default defineConfig({
  plugins: [react(), tailwindcss()], // And include it here
})