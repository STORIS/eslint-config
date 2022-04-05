# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.0] - 2022-04-05

### Breaking

- Update `eslint-config-airbnb-typescript` to 17.0.0 which had a breaking change to the supported peer dependency range for `@typescript-eslint`. Due to the change to required peer dependency ranges, this opportunity was taken to also bump every other peer dependency to the latest semver minor version. ([#97](https://github.com/STORIS/eslint-config/pull/97))

## [2.0.0] - 2022-04-04

### Breaking

- Enable `eslint-plugin-testing-library` in the React configuration ([#92](https://github.com/STORIS/eslint-config/pull/92)) and ([#94](https://github.com/STORIS/eslint-config/pull/94))

## [1.0.1] - 2022-02-20

### Changed

- Enable the `@typescript-eslint` rules which require type checking only on `.ts` and `.tsx` files ([#57](https://github.com/STORIS/eslint-config/pull/57))

## [1.0.0] - 2022-02-19

This is flagged the first major release since the package has been working successfully without any issues and switching to this release scheme will allow for easier adherence to semver go forward. There are no breaking changes between this and the previous release.

### Changed

- Update peer dependency range for `eslint-plugin-jest` to include `^26.0.0` ([#41](https://github.com/STORIS/eslint-config/pull/41))

## [0.0.11] - 2022-01-20

### Changed

- Fix peer dependencies for `eslint-config-airbnb` and `eslint-config-airbnb-base` to only be needed for the appropriate ruleset ([#36](https://github.com/STORIS/eslint-config/pull/36))
- Change `explicit-module-boundary-types` so that it is only used for `.ts` files ([#37](https://github.com/STORIS/eslint-config/pull/37))

## [0.0.10] - 2022-01-20

### Breaking

- Add [explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types) to the nodejs configuration ([#33](https://github.com/STORIS/eslint-config/pull/33))

### Changed

- Use `@storis/prettier-config` for prettier configurations ([#30](https://github.com/STORIS/eslint-config/pull/30))
- Add `cjs` and `mjs` extensions to the `.editorconfig` overrides to enforce tabs ([#31](https://github.com/STORIS/eslint-config/pull/31))

## [0.0.9] - 2022-01-19

### Breaking

- Eliminate prettier from eslint integration ([#28](https://github.com/STORIS/eslint-config/pull/28))
- Renamed `node` config as `nodejs` to avoid conflict with script runs ([#28](https://github.com/STORIS/eslint-config/pull/28))

### Changed

- Add precommit hook to run eslint and prettier before commit ([#28](https://github.com/STORIS/eslint-config/pull/28))
- Use `@storis/tsconfig` for typescript configuration ([#28](https://github.com/STORIS/eslint-config/pull/28))
- Formatted all files in repo with prettier ([#28](https://github.com/STORIS/eslint-config/pull/28))
- Updated renovate configuration ([#28](https://github.com/STORIS/eslint-config/pull/28))

## [0.0.8] - 2022-01-18

### Changed

- Enforce named exports in `*.constants` files for react lint rules ([#25](https://github.com/STORIS/eslint-config/pull/25))

## [0.0.7] - 2022-01-14

### Changed

- Eliminate use of `pathGroups` setting for `eslint-plugin-import` as the behavior without the setting is the same as with it ([#20](https://github.com/STORIS/eslint-config/pull/20))

## [0.0.6] - 2022-01-05

### Changed

- Relocate override of `no-restricted-syntax` rule to shared configuration so that it is enabled for both `node` and `react` configurations ([#17](https://github.com/STORIS/eslint-config/pull/17))

## [0.0.5] - 2022-01-05

### Changed

- Remove override on `@typescript-eslint/no-unused-vars` to enable it and extend `plugin:react/jsx-runtime` in react configuration ([#15](https://github.com/STORIS/eslint-config/pull/15))

## [0.0.4] - 2022-01-05

### Changed

- Enable `@typescript-eslint/consistent-type-exports` rule to ensure that type-only exports are always prefixed with the `type` keyword ([#13](https://github.com/STORIS/eslint-config/pull/13))

## [0.0.3] - 2022-01-05

### Changed

- Disable `react/react-in-jsx-scope` under the assumption that the React 17 JSX transform will be enabled in babel configuration ([#11](https://github.com/STORIS/eslint-config/pull/11))

## [0.0.2] - 2022-01-04

### Changed

- Enable `jsx-a11y/recommended` rules for react configuration ([#5](https://github.com/STORIS/eslint-config/pull/7))

## [0.0.1] - 2022-01-04

### Added

- Initial release

[unreleased]: https://github.com/storis/eslint-config/compare/3.0.0...HEAD
[3.0.0]: https://github.com/storis/eslint-config/compare/2.0.0...3.0.0
[2.0.0]: https://github.com/storis/eslint-config/compare/1.0.1...2.0.0
[1.0.1]: https://github.com/storis/eslint-config/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/storis/eslint-config/compare/0.0.11...1.0.0
[0.0.11]: https://github.com/storis/eslint-config/compare/0.0.10...0.0.11
[0.0.10]: https://github.com/storis/eslint-config/compare/0.0.9...0.0.10
[0.0.9]: https://github.com/storis/eslint-config/compare/0.0.8...0.0.9
[0.0.8]: https://github.com/storis/eslint-config/compare/0.0.7...0.0.8
[0.0.7]: https://github.com/storis/eslint-config/compare/0.0.6...0.0.7
[0.0.6]: https://github.com/storis/eslint-config/compare/0.0.5...0.0.6
[0.0.5]: https://github.com/storis/eslint-config/compare/0.0.4...0.0.5
[0.0.4]: https://github.com/storis/eslint-config/compare/0.0.3...0.0.4
[0.0.3]: https://github.com/storis/eslint-config/compare/0.0.2...0.0.3
[0.0.2]: https://github.com/storis/eslint-config/compare/0.0.1...0.0.2
[0.0.1]: https://github.com/storis/eslint-config/releases/tag/0.0.1
