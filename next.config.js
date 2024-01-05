/** @type {import('next').NextConfig} */
const withYaml = require('next-plugin-yaml');

const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
};

module.exports = withYaml(nextConfig);
