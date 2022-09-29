import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    sourcemap: false,
    reportCompressedSize: false,
    rollupOptions: {
      external: ['node-fetch'],
      treeshake: true,
      output: {
        preserveModules: false,
        // Provide global variables to use in the UMD build
        // for externalized deps
        manualChunks: () => 'main.js',
      },
    },
  },
  plugins: [vue(), visualizer(), vueJsx({
    // options are passed on to @vue/babel-plugin-jsx
  })],
});
