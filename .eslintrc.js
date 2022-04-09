module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  // 0 : nothing
  // 1 : warning
  // 2 : error
  rules: {
    'comma-dangle': 0,
    'no-trailing-spaces': 1,
    'no-multiple-empty-lines': 1,
  }
}
