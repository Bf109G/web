module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    // "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "class-methods-use-this": 0,
    eqeqeq: 1,
    "prefer-const": 1,
    "no-nested-ternary": 1,
    "lines-between-class-members": 2,
    "no-shadow": 1,
    "no-empty-function": 1,
    "no-param-reassign": 1,
    "no-underscore-dangle": 1,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
