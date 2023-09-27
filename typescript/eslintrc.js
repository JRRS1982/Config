module.exports = {
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"],
      },
    },
  },
  rules: {
    "import/extensions": ["error", "never"],
    "no-void": ["error", { allowAsStatement: true }],
    "@typescript-eslint/require-await": "off",
  },
  overrides: [
    {
      files: ["*index.ts"],
      rules: {
        "import/prefer-default-export": "off",
      },
    },
    {
      files: ["*.test.ts"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/require-await": "off",
        "func-names": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
};
