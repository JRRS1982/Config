# Config

A collection of common config files.

## Publish a new version of this to NPM

Test what you are about to change with the `make publish-dry-run`

1. Ensure that you have committed all changes to git and are happy to deploy
2. Deploy a new version of the repo with the appropriate `make publish` command

```sh
make publish kind=patch # use this if its backwards compatible and a bug fix
make publish kind=minor # use if adds new feature, but is backward compatible
make publish kind=major # use this the change is not backward compatible
```

### Eslint

Install this package in your repository

- `npm install @jrrs1982/config`

Require and spread this config into your eslintrc.js file;

```js
// .eslintrc.js
module.exports = {
  ...require("@jrrs1982/config/eslintrc")
};
```

Use eslint, like normal in your package.json scripts

```js
"lint": "eslint ./src/**/*.ts", // list issues that need fixing
"lint:fix": "npm run lint -- --fix" // fix the issues
```

To ensure you work in a BDD / TDD manner, and keep your code clean in your application, you can use lint-staged (with husky), to run tests and lint your code prior to commit.

```json
{
  "dependencies": { ... },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && tsc --noEmit && npm test"
    }
  },
  "lint-staged": {
    "*.{ts}": [
      "eslint --fix"
    ]
  }
}
```
