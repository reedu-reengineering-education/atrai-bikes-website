import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Atrai Bikes",
	description:
		"Motivating and supporting individuals, businesses, and local governments to collect and analyze data on bike infrastructure for urban improvement.",
	openGraph: {
		type: "website",
		url: "https://atrai.bike",
		title: "About Atrai Bikes",
		description:
			"Motivating and supporting individuals, businesses, and local governments to collect and analyze data on bike infrastructure for urban improvement.",
	},
	keywords:
		"Atrai Bikes, bike infrastructure, urban improvement, data collection, citizen science",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚲</text></svg>"
				/>
			</head>
			<body
				className={cn(
					"h-full bg-background relative antialiased flex flex-col",
					GeistSans.className,
				)}
			>
				<main className="container mx-auto flex-1 pb-12 block">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
