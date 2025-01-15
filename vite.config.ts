import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'shorthand-css',
      formats: ['es', 'cjs'], // ESM과 CommonJS 포맷으로 빌드
      fileName: (format) => `shorthand-css.${format}.js`,
    },
    rollupOptions: {
      external: [], 
    },
  },
});
