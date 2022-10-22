module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['vuejs-accessibility', 'tailwindcss', '@typescript-eslint'],
  root: true,
  env: { node: true, es6: true },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': 'error',
    'tailwindcss/no-custom-classname': [
      0,
      {
        tags: ['custom-yamato', 'custom-title'],
      },
    ],
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'default', 'error', 'privacy'],
      },
    ],
  },
}
