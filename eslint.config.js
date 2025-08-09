import js from '@eslint/js'
import globals from 'globals'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

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
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    rules: {
      'no-var': 'error',
      'prefer-const': 'warm',
      indent: ['error', 2],
      curly: ['error', 'multi-line'],
      ...eslintConfigPrettier.rules,
      'brace-style': ['error', '1tbs'],
      'prettier/prettier': [
        'error',
        { endOfLine: 'auto' },
        { braceStyle: '1tbs' },
      ],
    },
  },
  // {
  //   files: ['Makefile'],
  //   parser: 'eslint-plugin-markdown/parser',
  //   rules: { 'prettier/prettier': 'warn' },
  // },
]
