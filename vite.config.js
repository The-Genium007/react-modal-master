import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite pour React avec JavaScript
// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  server: {
    port: 5174,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: 'src/index.js',
      name: 'ReactModalMaster',
      fileName: (format) => `react-modal-master.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'prop-types'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
}));