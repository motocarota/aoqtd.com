/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	i18n: {
		locales: ['it', 'en'],
		defaultLocale: 'it',
	},
};

module.exports = nextConfig;
