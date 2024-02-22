import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// Access system environment variable
const appTitle = process.env.APP_TITLE || 'ShareAsQRCode.com';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/lib/components'),
    },
  },
  plugins: [svelte()],
  define: {
    'import.meta.env.VITE_APP_TITLE': JSON.stringify(appTitle),
  },
});
