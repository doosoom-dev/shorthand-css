import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'shorthand-css',
      formats: ['es', 'cjs'],
      fileName: (format) => `shorthand-css.${format}.js`,
    },
    rollupOptions: {
      external: [], // 외부 의존성 지정
      input: 'src/index.ts', // 진입점 설정
      output: {
        dir: '.npm/dist', // 출력 디렉터리
      },
      treeshake: true, // 사용되지 않는 코드 제거
    },
    emptyOutDir: true, // 빌드 전 디렉터리 비우기
  },
});
