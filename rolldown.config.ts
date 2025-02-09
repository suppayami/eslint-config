import fs from 'node:fs'
import { defineConfig } from 'rolldown'
import UnpluginIsolatedDecl from 'unplugin-isolated-decl/rolldown'

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'))

export default defineConfig({
	input: 'src/index.ts',
	output: {
		dir: 'dist',
		format: 'esm',
		inlineDynamicImports: true,
	},
	platform: 'node',
	external: Object.keys(pkg.dependencies)
		.map(name => [name, new RegExp(`^${name}/`)])
		.flat(),
	plugins: [
		UnpluginIsolatedDecl({ transformer: 'typescript' }),
	],
})
