import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, PluginOption } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: react() as PluginOption[],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@codemirror/state': resolve(
				__dirname,
				'../code/node_modules/@codemirror/state/dist/index.cjs'
			),
			// 'better-turtle': resolve(
			// 	__dirname,
			// 	'./node_modules/better-turtle/dist/index.js'
			// ),
		},
	},
});
