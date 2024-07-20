import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'backend/frontend',
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
});
