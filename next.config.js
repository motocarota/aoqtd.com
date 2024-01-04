/** @type {import('next').NextConfig} */
const withYaml = require('next-plugin-yaml');

const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
};

module.exports = withYaml(nextConfig);
