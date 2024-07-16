import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'Frontend',
  base: './',
  plugins: [react()],
 
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
});
