import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  { plugins: { js, prettier: prettierPlugin } },
  {
    extends: [
      'js/recommended',
      'eslint/recommended',
      'airbnb-base',
      'plugin:prettier/recommended',
    ],
  },
  { ignores: ['node_mpdules'] },
  {
    languageOptions: { ...globals.node, ...globals.browser, ...globals.es2023 },
  },
  {
    rules: {
      'no-var': 'error',
      'prefer-const': 'warm',
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
];
