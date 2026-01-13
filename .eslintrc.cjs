/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: "detect" },
  },
  plugins: ["react", "react-hooks", "import", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],
  rules: {
    // React 17+ JSX transform
    "react/react-in-jsx-scope": "off",

    // You write intentional code — don't over-nag
    "react/prop-types": "off",

    // Encourage clean imports
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external"], "internal", ["parent", "sibling"]],
        "newlines-between": "always",
      },
    ],

    // Accessibility tuning
    "jsx-a11y/no-autofocus": "off",

    // Reasonable defaults
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": "warn",
  },
};
