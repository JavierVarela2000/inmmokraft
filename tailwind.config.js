/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'blue-dark': '#0D263B',
				'blue-light': '#0061DF',
				primary: {
					50: '#f2f8fd',
					100: '#e3f0fb',
					200: '#c1e1f6',
					300: '#8ac8ef',
					400: '#4cace4',
					500: '#2493d3',
					600: '#1675b3',
					700: '#135d91',
					800: '#144f78',
					900: '#164364',
					950: '#0d263b'
				}
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
