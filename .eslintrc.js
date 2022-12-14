module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    '@vue/eslint-config-typescript',
    'prettier'
  ],
  globals: {
    $nuxt: true
  },
  plugins: ['prettier', 'nuxt']
};
