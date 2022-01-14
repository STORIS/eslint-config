# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/storis/eslint-config/compare/0.0.7...HEAD
[0.0.7]: https://github.com/storis/eslint-config/compare/0.0.6...0.0.7
[0.0.6]: https://github.com/storis/eslint-config/compare/0.0.5...0.0.6
[0.0.5]: https://github.com/storis/eslint-config/compare/0.0.4...0.0.5
[0.0.4]: https://github.com/storis/eslint-config/compare/0.0.3...0.0.4
[0.0.3]: https://github.com/storis/eslint-config/compare/0.0.2...0.0.3
[0.0.2]: https://github.com/storis/eslint-config/compare/0.0.1...0.0.2
[0.0.1]: https://github.com/storis/eslint-config/releases/tag/0.0.1
