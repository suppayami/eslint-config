import type { OptionsConfig, TypedFlatConfigItem, ConfigNames } from '@antfu/eslint-config'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import antfu from '@antfu/eslint-config'

type Options = Omit<OptionsConfig, 'stylistic'> & {
	stylistic?: boolean
}

type RestParameters<F> = F extends (arg0: any, ...rest: infer R) => any ? R : never
const suppayami = (
	options: Options = { react: false, vue: false },
	...args: RestParameters<typeof antfu>
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> =>
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

export const reactConfig = (
	options: Omit<Options, 'react'> = {},
	...args: RestParameters<typeof antfu>
) => suppayami({ ...options, react: true }, ...args)

export const vueConfig = (
	options: Omit<Options, 'vue'> = {},
	...args: RestParameters<typeof antfu>
) => suppayami({ ...options, vue: true }, ...args)
