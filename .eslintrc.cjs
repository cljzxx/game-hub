module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off", // 下划线提示
    "@typescript-eslint/no-explicit-any": "off", // 显性any类型问题
    // "react-hooks/rules-of-hooks": 'off', // 暂未知作用
    "react-hooks/exhaustive-deps": 'off' // useEffect结尾数组传参问题
  },
}
