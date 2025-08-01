import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended', 'airbnb-base'] },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
])
