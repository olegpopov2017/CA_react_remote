import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',  // Папка для сборки
        sourcemap: false, // Карты кода для отладки (можно отключить в продакшене)
        minify: 'true', // Минификация кода (опционально)
        chunkSizeWarningLimit: 1000, // Увеличивает лимит для предупреждений о размере чанков
      },
})
