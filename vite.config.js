import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
        },
      },
    },
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true, // Split CSS by entry point
    reportCompressedSize: false, // Faster builds
  },
  css: {
    devSourcemap: false,
  },
})
