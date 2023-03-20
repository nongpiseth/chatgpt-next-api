import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['pages/api/index.ts'],
  outDir: 'build',
  target: 'es2020',
  format: ['cjs'],
  splitting: false,
  sourcemap: true,
  minify: false,
  shims: true,
  dts: false,
})
