module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module"
  },
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/display-name": "off",
    "react/prop-types": "off",
    "comma-dangle": ["error", "only-multiline"],
    "linebreak-style": 0,
    "no-param-reassign": [
      2,
      {
        props: false
      }
    ]
  }
};
