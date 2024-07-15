import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  }
});
