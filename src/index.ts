import antfu from '@antfu/eslint-config'

interface Options {
	react: boolean
	stylistic: boolean
	vue: boolean
}

type RestParameters<F> = F extends (arg0: any, ...rest: infer R) => any ? R : never
const suppayami = (
	options: Partial<Options> = { react: false, stylistic: true, vue: false },
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
			},
		},
		...args,
	)

export default suppayami

export const reactConfig = (
	options: Pick<Options, 'stylistic'> = { stylistic: true },
	...args: RestParameters<typeof antfu>
) => suppayami({ ...options, react: true }, ...args)

export const vueConfig = (
	options: Pick<Options, 'stylistic'> = { stylistic: true },
	...args: RestParameters<typeof antfu>
) => suppayami({ ...options, vue: true }, ...args)
