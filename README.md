# @suppayami/eslint-config

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

## Usage

By default, Vue and React settings are not enabled. You can enable them by importing `reactConfig()` or `vueConfig()` from `@suppayami/eslint-config` or call `suppayami({ react: true })` / `suppayami({ vue: true })`.

### Install
`pnpm i -D @suppayami/eslint-config`

### React Install
`pnpm i -D @suppayami/eslint-config eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh`

### Create config file
With `"type": "module"` in `package.json` (recommended):

```js
// eslint.config.js
import suppayami from '@suppayami/eslint-config'
// import { reactConfig, vueConfig } from '@suppayami/eslint-config'

export default await suppayami({
	// react: true,
	// vue: true,
	// stylistic: false,
})

// utils for react/vue
// export default await reactConfig()
// export default await vueConfig()
```

With CJS:

```js
// eslint.config.js
const suppayami = require('@suppayami/eslint-config').default
// const suppayami = require('@suppayami/eslint-config').reactConfig
// const suppayami = require('@suppayami/eslint-config').vueConfig

module.exports = suppayami()
```

### VSCode Support
```json
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

export default await suppayami({
	stylistic: false,
})
```

## FAQ
### Why extends @antfu/eslint-config?
Good default, reasonable strict, well maintained.

### Why version 3?
Previous versions was self-maintained and used old eslintrc config. This version uses ESLint flat config instead.

### Why peer dependencies for React?
`eslint-plugin-react` too bloat to install in non-react project.
