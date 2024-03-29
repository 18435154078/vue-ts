module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue", "prettier"],
  /**
   * 'off' 或 0 -> 关闭
   * 'warn' 或 1 -> 警告
   * 'error' 或 2 -> 错误
   */
  rules: {
    // eslint
    "no-var": "error", // 禁止var
    "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
    "no-useless-escape": "off", // 关闭禁止不必要的转义字符

    // typeScript
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "off",

    // eslint-plugin-vue
    "vue/multi-word-component-names": "off", // 关闭名称只能-连接
    "vue/no-mutating-props": "off", // 关闭组件prop不能改变
    "vue/attribute-hyphenation": "off", // 关闭对模板中自定义组件强制执行属性命名样式
  },
};
