# Config

A collection of config files which can be imported into your project from the npm repository `@jrrs1982/config`

Importing a config file from here and using it in your application:

- Reduces duplication (of config files between applications)
- Assists you in applying a consistent set of rules between applications (where possible)
- Assists you in applying best practice in your application (if the these files are kept up to date)

---

## How to publish a new version of this to NPM

Test what you are about to change with the `make publish-dry-run`

1. Ensure that you have committed all changes to git and are happy to deploy
2. Deploy a new version of the repo with the appropriate `make publish` command

```sh
make publish kind=patch # use this if its backwards compatible and a bug fix
make publish kind=minor # use if adds new feature, but is backward compatible
make publish kind=major # use this the change is not backward compatible
```

---

## Eslint

Install this package in your repository

- `npm install @jrrs1982/config`
or
- `npm install -D @jrrs1982/config` if you only need dev dependency files

Require and spread into your `eslintrc.js` file;

```js
// .eslintrc.js
module.exports = {
  ...require("@jrrs1982/config/javascript/eslintrc")
  // overwrite as required
};
```

Use eslint, like normal in your `package.json` scripts

```js
"lint": "eslint ./src/**/*.ts", // list issues that need fixing
"lint:fix": "npm run lint -- --fix" // fix the issues
```

To ensure you keep your code clean, you can use lint-staged (with husky), to run tests and lint your code prior to commit.

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

You may also want/need to install these packages

```sh
eslint-config-airbnb
eslint-config-prettier
eslint-plugin-prettier
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-react
eslint-plugin-react-hooks
eslint-plugin-testing-library
```
