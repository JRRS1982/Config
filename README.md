# Config

A collection of common config files.

## Publish to NPM

```sh
make publish kind=patch # use this if its backwards compatible and a bug fix
make publish kind=minor # use if adds new feature, but is backward compatible
make publish kind=major # use this the change is not backward compatible
```

### Eslint

Require and spread this config into your eslintrc.js file;

```js
// .eslintrc.js
module.exports = {
  ...require(@jrrs1982/config/eslintrc)
};
```

Use eslint, like normal in your package.json scripts

```js
"lint": "eslint ./src/**/*.ts", // list issues that need fixing
"lint:fix": "npm run lint -- --fix" // fix the issues
```
