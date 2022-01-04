module.exports = {
	extends: ['./index.js'],
	parserOptions: {
		tsConfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	rules: {
		'@typescript-eslint/no-var-requires': 'off',
		'global-require': 'off',
	},
};
