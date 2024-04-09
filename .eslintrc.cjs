module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:jsx-a11y/recommended',
		'plugin:promise/recommended',
		'prettier'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		},
		tsconfigRootDir: __dirname
	},
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-refresh'],
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/jsx-uses-react': 0,
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				},
				'newlines-between': 'never'
			}
		],
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],
		'react/prop-types': 'off'
	},
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			typescript: {}
		}
	}
};
