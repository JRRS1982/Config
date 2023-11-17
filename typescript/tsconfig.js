module.exports = {
  compilerOptions: {
    target: "ES2019", // set at the lowest ECMAScript version you want to support
    module: "NodeNext", // set to "ESNext" if you want to use ES modules
    outDir: "dist", // output directory
    strict: true, // use strict mode
    jsx: "react", // from tsx files to createElement calls for a React app
    skipLibCheck: true, // skip type checking of all declaration files
    noUnusedParameters: true, // Report errors on unused parameters
    noUnusedLocals: true, // Report errors on unused local variables
    esModuleInterop: true, // assist with CommonJS and ES6 interoperability
    noImplicitAny: true, // Disallow implicit any types
    resolveJsonModule: true, // Allow importing JSON files as modules
    forceConsistentCasingInFileNames: true, // Ensure consistent file naming
    strictNullChecks: true, // Enable strict null checks
    sourceMap: true, // Generate source maps
  },
  include: ["src/**/*"], // Include only source files in the "src" directory
  exclude: ["node_modules"], // Exclude the node_modules directory
};
