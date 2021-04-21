import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { MODULE_PATH } from '@seed/common';

export default defineConfig({
  root: MODULE_PATH,
  server: {
    middlewareMode: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  build: {
    manifest: true,
  },
  plugins: [vue(), legacy({ targets: ['defaults', 'not IE 11'] })],
});
