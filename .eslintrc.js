module.exports = {
	extends: ['./nodejs'],
	parserOptions: {
		tsConfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	rules: {
		'@typescript-eslint/no-var-requires': 'off',
		'global-require': 'off',
	},
};
