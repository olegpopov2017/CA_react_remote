import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ЗАМЕНИТЕ на имя вашего репозитория
  build: {
    outDir: 'docs', // Папка для сборки
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false, // Карты кода для отладки (можно отключить в продакшене)
    minify: true, // ← тут было 'true' строкой, лучше булевый тип
    chunkSizeWarningLimit: 1000, // Лимит для предупреждений о размере чанков
  },

  // For disable CORS

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // => /api -> /
      },
    },
  },
})
