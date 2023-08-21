/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'www.pngplay.com',
			'i.ibb.co',
			'raw.githubusercontent.com',
			'skillicons.dev',
		],
	},
};

module.exports = nextConfig;
