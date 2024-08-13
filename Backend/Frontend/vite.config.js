import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname), // Ensure the root directory is correctly set
  base: './',
  plugins: [react()],
  logLevel: 'info',
  build: {
    rollupOptions: {
      external: []
    },
    outDir: path.resolve(__dirname, 'dist'),  // Ensure the output directory is correctly set
  },
  server: {
    port: 4001,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.ts',
  },
});
