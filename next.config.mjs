import NextMdx from "@next/mdx";

const withMDX = NextMdx({
	extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "institutocordial.com.br",
			},
			{
				protocol: "https",
				hostname: "reedu.de",
			},
			{
				protocol: "https",
				hostname: "cloud.reedu.de",
			},
			{
				protocol: "https",
				hostname: "52north.org",
			},
			{
				protocol: "https",
				hostname: "opensenselab.org",
			},
		],
	},
};

export default withMDX(nextConfig);
