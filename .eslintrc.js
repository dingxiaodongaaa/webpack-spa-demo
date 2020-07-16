module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    // 一个对 babel 解析器的包装，使其能与 ESlint 兼容
    parserOptions: 'babel-eslint'
  },
  rules: {
  }
}
