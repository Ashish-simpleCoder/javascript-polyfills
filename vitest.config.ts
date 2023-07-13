/// <reference types="vitest" />
import { defineConfig,configDefaults } from 'vitest/config'

export default defineConfig({
   test: {
      globals: true,
      environment: 'node',
      coverage: {
         provider: 'c8',
         clean: true,
         all: false,
      },
      include: ['./src/typescript/**/*.{test,spec}.ts'],
      exclude: [
        ...configDefaults.exclude,
      ],
   },
   clearScreen: true,
})