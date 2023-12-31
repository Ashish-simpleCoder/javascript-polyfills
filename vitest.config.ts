/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
   test: {
      globals: true,
      environment: 'node',
      coverage: {
         provider: 'v8',
         clean: true,
         all: true,
         enabled: true,
         // include: ['./src/typescript/**/*.test.ts'],
      },
      include: ['./src/typescript/**/*.{test,spec}.ts'],
      exclude: [
         ...configDefaults.exclude,
      ],
   },
   clearScreen: true,
})