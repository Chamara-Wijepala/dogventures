/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		colors: {
			'primary-900': 'hsl(176, 44%, 6%)',
			'primary-500': 'hsla(176, 44%, 6%, 0.5)',
			'primary-300': 'hsla(176, 44%, 6%, 0.3)',
			'secondary-200': 'hsl(300, 100%, 98%)',
			'secondary-100': 'hsl(300, 100%, 98%, 0.4)',
			'accent-400': 'hsl(181, 79%, 58%)',
			'accent-alt-400': 'hsl(21, 100%, 68%)',
		},
		extend: {},
	},
	plugins: [],
};
