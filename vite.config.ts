import { defineConfig,configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'polyfills/javascript'],
    globals: true,
  },
})