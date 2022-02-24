module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  plugins: [
    'svelte3',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    // eslint-disable-next-line global-require
    'svelte3/typescript': () => require('typescript'),
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    semi: ['error', 'never'],
    'no-undef': 'warn',
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-underscore-dangle': 0,
    'vue/multi-word-component-names': 0,
    'max-len': ['error', { code: 150 }],
    '@typescript-eslint/ban-ts-comment': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
  },
}
