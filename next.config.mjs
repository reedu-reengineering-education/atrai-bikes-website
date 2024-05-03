import path from "path";
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
		],
	},
	experimental: {
		outputFileTracingRoot: path.join(process.cwd(), "src", "content"),
	},
};

export default withMDX(nextConfig);
