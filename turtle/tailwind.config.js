const config = require('@codary/config/tailwind.config');

module.exports = {
	...config,
	content: [
		...config.content,
		'./src/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
};
