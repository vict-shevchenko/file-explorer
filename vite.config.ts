/* import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react({ tsDecorators: true })],
});
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				/* parserOpts: {
					plugins: ['decorators'],
				}, */
				plugins: [['@babel/plugin-proposal-decorators', { version: '2023-11' }]],
			},
		}),
	],
});
