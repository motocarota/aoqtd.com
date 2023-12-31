module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'next',
		'prettier',
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
		'capitalized-comments': 0,
	},
};
