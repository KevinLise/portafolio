import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El sitio se publica en https://kevinlise.github.io/portafolio/
// Si algún día usas un dominio propio, cambia base a '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portafolio/',
})
