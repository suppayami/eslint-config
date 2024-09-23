# @suppayami/eslint-config

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

## Defaults
- Single quotes, no semi, tabs
- Use ESLint Stylistic for formatting by default, can be disabled to use other formatter.

## Usage

Read more customisation from [@antfu/eslint-config](https://github.com/antfu/eslint-config?tab=readme-ov-file#customization)

### Install
```
pnpm i -D @suppayami/eslint-config
```

### Create config file
With `"type": "module"` in `package.json` (recommended):

```js
// eslint.config.js
import suppayami from '@suppayami/eslint-config'

export default suppayami({
	// react: true,
	// vue: true,
	// stylistic: false,
})
```

### VSCode Support
```jsonc
{
	// Enable the ESlint flat config support
	"eslint.experimental.useFlatConfig": true,

	// Disable the default formatter, use eslint instead
	"prettier.enable": false,
	"editor.formatOnSave": false,

	// Auto fix
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit",
		"source.organizeImports": "never"
	}
}
```

## Prettier
Disable ESLint Stylistic rules:

```js
// eslint.config.js
import suppayami from '@suppayami/eslint-config'

export default suppayami({
	stylistic: false,
})
```

## FAQ
### Why extends @antfu/eslint-config?
Good default, reasonable strict, well maintained.
