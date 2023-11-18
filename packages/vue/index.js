const equivs = {
	'indent': ['error', 'tab', {
		SwitchCase: 1,
		VariableDeclarator: 1,
		outerIIFEBody: 1,
		MemberExpression: 1,
		FunctionDeclaration: { parameters: 1, body: 1 },
		FunctionExpression: { parameters: 1, body: 1 },
		CallExpression: { arguments: 1 },
		ArrayExpression: 1,
		ObjectExpression: 1,
		ImportDeclaration: 1,
		flatTernaryExpressions: false,
		ignoreComments: false,
		ignoredNodes: [
			'TemplateLiteral *',
			'TSTypeParameterInstantiation',
			'FunctionExpression > .params[decorators.length > 0]',
			'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
			'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
		],
		offsetTernaryExpressions: true,
	}],
	'comma-dangle': ['error', 'always-multiline'],
	'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
	'no-redeclare': 'error',
	'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
	'brace-style': ['error', '1tbs', { allowSingleLine: true }],
	'object-curly-spacing': ['error', 'always'],
	'semi': ['error', 'never'],
	'quotes': ['error', 'single'],
	'space-before-blocks': ['error', 'always'],
	'space-before-function-paren': [
		'error',
		{
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		},
	],
	'space-infix-ops': 'error',
	'keyword-spacing': ['error', { before: true, after: true }],
	'comma-spacing': ['error', { before: false, after: true }],
	'no-extra-parens': ['error', 'functions'],
	'no-dupe-class-members': 'error',
	'no-loss-of-precision': 'error',
	'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
}

const getEquivsTs = (rules) => {
	const newRules = { ...rules }
	for (const rule in newRules) {
		newRules[rule] = 'off'
		newRules[`@typescript-eslint/${rule}`] = rules[rule]
	}
	return newRules
}

module.exports = {
	extends: [
		'plugin:vue/vue3-recommended',
		'@suppayami/eslint-config-basic',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/strict',
		'plugin:@typescript-eslint/stylistic',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		{
			files: ['*.vue'],
			rules: {
				'@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
				'@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
				'@typescript-eslint/type-annotation-spacing': ['error', {}],
				'@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
				'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
				'@typescript-eslint/prefer-ts-expect-error': 'error',
				'@typescript-eslint/func-call-spacing': ['error'],
				'@typescript-eslint/consistent-indexed-object-style': 'off',
				'@typescript-eslint/naming-convention': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/explicit-member-accessibility': 'off',
				'@typescript-eslint/parameter-properties': 'off',
				'@typescript-eslint/ban-ts-ignore': 'off',
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/ban-types': 'off',
				'@typescript-eslint/no-namespace': 'off',
				'@typescript-eslint/triple-slash-reference': 'off',
				'@typescript-eslint/no-base-to-string': 'off',
				'@typescript-eslint/no-empty-interface': ['off'],
				'@typescript-eslint/no-explicit-any': ['off'],
				'@typescript-eslint/no-non-null-assertion': ['off'],
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'no-undef': 'off',
				...getEquivsTs(equivs),
			},
		},
	],
	rules: {
		'vue/component-tags-order': ['error', {
			order: ['script', 'template', 'style'],
		}],
		'vue/block-tag-newline': ['error', {
			singleline: 'always',
			multiline: 'always',
		}],
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
		'vue/component-options-name-casing': ['error', 'PascalCase'],
		'vue/custom-event-name-casing': ['error', 'camelCase'],
		'vue/padding-line-between-blocks': ['error', 'always'],

		'vue/array-bracket-spacing': ['error', 'never'],
		'vue/arrow-spacing': ['error', { before: true, after: true }],
		'vue/block-spacing': ['error', 'always'],
		'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'vue/comma-dangle': ['error', 'always-multiline'],
		'vue/comma-spacing': ['error', { before: false, after: true }],
		'vue/comma-style': ['error', 'last'],
		'vue/dot-location': ['error', 'property'],
		'vue/dot-notation': ['error', { allowKeywords: true }],
		'vue/eqeqeq': ['error', 'smart'],
		// 'vue/func-call-spacing': ['off', 'never'],
		'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
		'vue/keyword-spacing': ['error', { before: true, after: true }],
		'vue/no-constant-condition': 'warn',
		'vue/no-empty-pattern': 'error',
		'vue/no-extra-parens': ['error', 'functions'],
		'vue/no-irregular-whitespace': 'error',
		'vue/no-loss-of-precision': 'error',
		'vue/no-restricted-syntax': [
			'error',
			'DebuggerStatement',
			'LabeledStatement',
			'WithStatement',
		],
		'vue/no-sparse-arrays': 'error',
		'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
		'vue/object-curly-spacing': ['error', 'always'],
		'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
		'vue/object-shorthand': [
			'error',
			'always',
			{
				ignoreConstructors: false,
				avoidQuotes: true,
			},
		],
		'vue/operator-linebreak': ['error', 'before'],
		'vue/prefer-template': 'error',
		'vue/quote-props': ['error', 'consistent-as-needed'],
		'vue/space-in-parens': ['error', 'never'],
		'vue/space-infix-ops': 'error',
		'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
		'vue/template-curly-spacing': 'error',
		'vue/html-indent': ['error', 'tab'],
	},
}
