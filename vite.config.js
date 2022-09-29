import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  build: {
    emptyOutDir: false,
    sourcemap: false,
    reportCompressedSize: false,
    rollupOptions: {
      treeshake: true,
      output: {
        preserveModules: false,
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  plugins: [vue(), viteSingleFile()],
});
