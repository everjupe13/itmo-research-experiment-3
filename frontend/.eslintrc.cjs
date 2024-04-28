module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true
  },

  globals: {
    defineProps: true,
    defineEmits: true,
    defineExpose: true
  },

  // // parser: '@typescript-eslint/parser',
  // parser: "vue-eslint-parser",
  // parserOptions: {
  //     parser: "@typescript-eslint/parser",
  // },

  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',

    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],

  plugins: ['simple-import-sort', 'import', 'prettier'],

  rules: {
    'no-console': 'warn',
    curly: 'error',

    'unicorn/prevent-abbreviations': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-empty-file': 'off',
    'unicorn/consistent-function-scoping': 'off',

    'vue/no-multiple-template-root': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-html': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],

    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'import/newline-after-import': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error'
  }
}
