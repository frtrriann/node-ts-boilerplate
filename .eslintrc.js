module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  env: {
    node: true,
  },
  rules: {
    "no-console": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
