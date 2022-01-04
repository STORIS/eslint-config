# @storis/eslint-config

This package contains the standard eslint configurations for TypeScript packages used by [STORIS](https://www.storis.com).  It extends and relies on a number of other rulesets and packages including [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [@typescript/eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin), [prettier](https://www.npmjs.com/package/eslint-plugin-prettier), and others.  It then refines those rulesets to match the STORIS TypeScript style guide.

## Installation
`@storis/eslint-config` is available as an [npm package](https://wwwnpmjs.org/package/@storis/eslint-config).

```sh
npm install @storis/eslint-config
```

## Usage

### Peer dependencies

The package relies on the following peer dependencies which differ depending on if you are using the `@storis/eslint-config/node` config or the `@storis/eslint-config/react` config.  You must ensure that a compatible version of the peer necessary peer dependencies have been installed.

#### Required

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-airbnb`
- `eslint-config-airbnb-typescript`
- `eslint-config-prettier`
- `eslint-plugin-import`
- `eslint-plugin-jest`
- `jest`
- `prettier`
- `typescript`

#### Required for Node Config
- `eslint-import-resolver-babel-module`

#### Required for React Config
- `eslint-import-resolver-webpack`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

### Configuration

#### Node
Add the following to your eslint configuration file (e.g. `.eslintrc.js`):
```
{
  extends: ['@storis/eslint-config/node'],
  parserOptions: { tsconfigRootDir: __dirname, project: location_of_tsconfig_file }
}
```

#### React
Add the following to your eslint configuration file (e.g. `.eslintrc.js`):
```
{
  extends: ['@storis/eslint-config/react'],
  parserOptions: { tsconfigRootDir: __dirname, project: location_of_tsconfig_file }
}
```

## License
This project is licensed under the terms of the [MIT license](/LICENSE).
