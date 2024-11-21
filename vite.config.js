import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: ['./src/demo.ts'], // Entry file
      output: {
        entryFileNames: "[name].js",
        dir: './dist',
        format: 'es'
      }
    }
  }
});