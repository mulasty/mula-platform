import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['packages/**/*.{test,spec}.{ts,tsx}', 'apps/**/*.{test,spec}.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './apps/main/src'),
      '@mula/ui': path.resolve(__dirname, './packages/ui/src'),
      '@mula/design-system': path.resolve(__dirname, './packages/design-system'),
    },
  },
})
