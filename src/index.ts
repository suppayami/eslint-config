import type { OptionsConfig } from '@antfu/eslint-config'
import antfu from '@antfu/eslint-config'

type Options = Omit<OptionsConfig, 'stylistic'> & {
	stylistic?: boolean
}

type RestParameters<F> = F extends (arg0: any, ...rest: infer R) => any ? R : never
const suppayami = (
	options: Options = { react: false, vue: false },
	...args: RestParameters<typeof antfu>
) =>
	antfu(
		{
			...options,
			stylistic: options?.stylistic === false
				? undefined
				: { indent: 'tab', jsx: true, quotes: 'single', semi: false },
		},
		{
			rules: {
				'antfu/top-level-function': 'off',
				'curly': ['error', 'all'],
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
