module.exports = {
  env: {
    browser: true, // Allows browser globals like window and document
    es6: true, // Allows ES6 globals like Set and Map
    node: true, // Allows Node.js global like process and __dirname
  },
  extends: [
    "eslint:recommended", // Use the recommended ESLint rules
    "airbnb", // Use the recommended Airbnb rules
    "plugin:@next/next/recommended", // Use the recommended Next.js rules
    "plugin:react/recommended", // Use the recommended React rules
    "plugin:import/recommended", // Use the recommended import rules
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ["react"],
  rules: {
    // Add more rules as needed
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the react version in the source files
    },
    "import/resolver": { // Use <root>/tsconfig.json
      node: {
        extensions: [".js", ".jsx"],
        moduleDirectory: ["node_modules", "src/"], // Look for modules in <root>/node_modules and <root>/src
      },
    },
  },
};
