import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'frontend', // Adjust the root to point to the frontend directory
  base: './',
  plugins: [react()],
  logLevel: 'info',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.ts',
  },
  server: {
    port: 4001,
  },
  build: {
    outDir: 'dist', // This ensures the build output goes to the dist folder
    rollupOptions: {
      input: 'frontend/index.html', // Ensure this points to your index.html
    },
  },
});
