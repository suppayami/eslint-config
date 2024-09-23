import antfu from '@antfu/eslint-config'

type Options = Parameters<typeof antfu>[0]
type OptionsReturn = ReturnType<typeof antfu>

type RestParameters<F> = F extends (arg0: any, ...rest: infer R) => any ? R : never
const suppayami = (
	options: Options = { react: false, vue: false },
	...args: RestParameters<typeof antfu>
): OptionsReturn =>
	antfu(
		{
			...options,
			stylistic: options?.stylistic === false
				? false
				: {
						indent: 'tab',
						jsx: true,
						quotes: 'single',
						semi: false,
						overrides: {
							'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
						},
					},
		},
		{
			rules: {
				'antfu/top-level-function': 'off',
				'curly': ['error', 'all'],
				'import/order': ['off', {
					alphabetize: { order: 'ignore' },
				}],
				'sort-imports': 'off',
				...options?.vue && {
					'vue/html-indent': ['error', 'tab'],
				},
				...options?.react && {
					'react/prefer-shorthand-fragment': 'off',
					'react/avoid-shorthand-fragment': 'error',
					'react/no-default-props': 'error',
					'react/no-prop-types': 'error',
				},
			},
		},
		...args,
	)

export default suppayami
