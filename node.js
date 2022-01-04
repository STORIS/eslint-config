module.exports = {
	extends: ['airbnb-base', 'airbnb-typescript/base', './lib/shared'],

	settings: { 'import/resolver': { 'babel-module': { extensions: ['.ts'] } } },

	rules: {
		// set up naming convention rules
		'@typescript-eslint/naming-convention': [
			'error',
			// camelCase for everything not otherwise indicated
			{ selector: 'default', format: ['camelCase'] },
			// allow known default exclusions
			{ selector: 'default', filter: { regex: '^(_id|__v|_raw)$', match: true }, format: null },
			// allow variables to be camelCase or UPPER_CASE
			{ selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
			// allow known variable exclusions
			{ selector: 'variable', filter: { regex: '^(_id|__v|_raw)$', match: true }, format: null },
			// GraphQL variables PascalCase
			{ selector: 'variable', filter: { regex: '^.*Gql$', match: true }, format: ['PascalCase'] },
			// do not enforce format on property names
			{ selector: 'property', format: null },
			// PascalCase for classes and TypeScript keywords
			{
				selector: ['typeLike'],
				format: ['PascalCase'],
			},
			// allow trailing ASC and DESC on enumerations
			{ selector: 'enumMember', filter: { regex: '^.*?_(ASC|DESC)$', match: true }, format: null },
		],

		// Allow use of ForOfStatement - no-restricted-syntax does no allow us to turn off a rule. This block overrides the airbnb rule entirely
		// https://github.com/airbnb/javascript/blob/7152396219e290426a03e47837e53af6bcd36bbe/packages/eslint-config-airbnb-base/rules/style.js#L257-L263
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
	},

	overrides: [
		{
			files: [
				'**/*.types.ts',
				'**/types/*.ts',
				'**/constants.ts',
				'**/*.schema.ts',
				'**/instances/**',
			],
			rules: {
				'import/prefer-default-export': 'off',
				'import/no-default-export': 'error',
			},
		},
	],
};
