module.exports = {
	purge: [
	'./*.html',
	'./*.vue',
	'./*.jsx',
	],
	theme: {
		screens: {
			'xs': '320px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
		},
		customForms: theme => ({
			default: {
				input: {
					margin: undefined,
					padding: undefined,
					color: undefined, 
					//background-color: undefined,
					'&:focus': {
						boxShadow: undefined,
						borderColor: undefined,          

					},
				},
			}
		})
	},
	plugins: [
	require('@tailwindcss/custom-forms'),
	],
	variants: {},
}
