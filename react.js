module.exports = {
	extends: ['airbnb', 'airbnb-typescript', 'plugin:jsx-a11y/recommended', './lib/shared'],

	env: { browser: true },

	plugins: ['react-hooks'],

	settings: {
		'import/resolver': {
			webpack: {
				config: './webpack.config.js',
				// choose any app here so that global `shared` and `test` resolve
				// normally, each app will have its own .eslintrc
				env: { APP: 'admin' },
			},
		},
	},

	rules: {
		// set up naming convention rules
		'@typescript-eslint/naming-convention': [
			'error',
			// Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
			{
				selector: 'variable',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
			},
			// allow known variable exclusions
			{ selector: 'variable', filter: { regex: '^(__typename)$', match: true }, format: null },
			// Allow camelCase functions (23.2), and PascalCase functions (23.8)
			{
				selector: 'function',
				format: ['camelCase', 'PascalCase'],
			},
			// Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
		],

		// disable function-component-definition rule enabled by airbnb
		'react/function-component-definition': 'off',

		// tab indentation
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],

		// permit spreading of props
		'react/jsx-props-no-spreading': 'off',

		// typescript is better at prop-types than `prop-types`
		'react/prop-types': 'off',

		// disable react-in-jsx-scope (must use @babel/preset-react option { runtime: 'automatic' })
		// see: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html and https://babeljs.io/docs/en/babel-preset-react/#runtime
		'react/react-in-jsx-scope': 'off',

		// check effect dependencies
		'react-hooks/exhaustive-deps': 'warn',

		// check rules of react hooks
		'react-hooks/rules-of-hooks': 'error',
	},

	overrides: [
		{
			files: ['*.tsx'],
			rules: {
				// no proptypes in typescript components
				'react/require-default-props': 'off',
			},
		},

		{
			files: ['**/*.gql.ts'],
			rules: {
				// in graphql type files, allow underscores
				'@typescript-eslint/naming-convention': ['error', { selector: 'default', format: null }],
				camelcase: 'off',
			},
		},
	],
};
