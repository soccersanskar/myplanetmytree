import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import path from 'path' // We need this to handle the @ symbol

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // This fixes the error!
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: `my-planet-app.js`,
      },
    },
  },
})
