const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    // 'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'vue/require-default-prop': 'off'
  },
})
