import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.APP_VERSION': `"${process.env.npm_package_version}"`,
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '~', replacement: resolve(__dirname, 'public') },
    ],
  },
  base: '/',
  server: {
    port: 4300,
    base: '/',
    proxy: {},
  },
})
