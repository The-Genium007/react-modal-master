import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite pour React avec JavaScript
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Serveur de développement
  server: {
    port: 5174,
    open: true
  },
  // Configuration pour le build
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});