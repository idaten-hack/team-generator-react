import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/team-generator-react/',
  server: {
    host: true,
    port: 5173,
  },
})
