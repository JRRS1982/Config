/**
 * nb. make sure to install the required packages:
 * npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // Add more rules as needed
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"], // Update the path to your tsconfig.json
      },
      extends: [
        "eslint:recommended",
        "airbnb",
        "plugin:@next/next/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
        "plugin:@typescript-eslint/recommended", // Add TypeScript-specific rules
      ],
      rules: {
        // Add TypeScript-specific rules if needed
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};
