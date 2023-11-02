/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'it'],
		defaultLocale: 'en',
	},
};

module.exports = nextConfig;
