"use client";

import { cn } from "@/lib/utils";
import { MDXProvider } from "@mdx-js/react";
import { Url } from "next/dist/shared/lib/router/router";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { BackgroundBeams } from "../animated/beams";
import { GlowingStarsBackgroundCard } from "../animated/glowing-stars";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const Post = require("@/content/about/about.de.mdx");

interface BentoCardProps {
	children: React.ReactNode;
	size?: "large" | "normal";
	variant?: "dark" | "light";
	image?: StaticImageData;
	href?: Url;
	animatedBackground?:
		| "beams"
		| "glowing-stars"
		| "grid"
		| "background-gradient";
	prependLngToHref?: boolean;
}

export default function BentoCard({
	children,
	size = "normal",
	variant = "dark",
	image,
	href,
	animatedBackground,
	prependLngToHref = true,
}: BentoCardProps) {
	const pathname = usePathname();

	const lng = pathname.split("/")[1];

	const JustTheCard = (
		<Card
			className={cn(
				size === "large" ? "col-span-2" : "col-span-1",
				variant === "dark"
					? "from-muted to-background/90"
					: "from-foreground to-muted-foreground",
				"bg-gradient-to-br w-full break-inside-avoid relative rounded-md overflow-hidden group cursor-pointer",
			)}
		>
			{image && (
				<Image
					src={image}
					fill
					alt={""}
					className="object-cover group-hover:scale-105 transition-all"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			)}
			{animatedBackground === "beams" && (
				<BackgroundBeams className="group-hover:scale-105 transition-all" />
			)}
			{animatedBackground === "glowing-stars" && (
				<GlowingStarsBackgroundCard className="group-hover:scale-105 transition-all" />
			)}
			{animatedBackground === "grid" && (
				<div className="absolute top-0 left-0 w-full h-full group-hover:scale-105 transition-all">
					<div className="h-full w-full bg-transparent  bg-grid-white/[0.2] relative flex items-center justify-center">
						<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
					</div>
				</div>
			)}

			<div className="absolute top-0 left-0 w-full h-full p-4">{children}</div>
		</Card>
	);

	// if (href) {
	// 	return (
	// 		<Link
	// 			href={prependLngToHref ? `${lng}/${href}` : href}
	// 			passHref
	// 			legacyBehavior
	// 		>
	// 			{JustTheCard}
	// 		</Link>
	// 	);
	// }

	return (
		<Dialog>
			<DialogTrigger asChild>{JustTheCard}</DialogTrigger>
			<DialogContent className="max-w-7xl rounded-lg max-h-[80vh] overflow-auto">
				<MDXProvider>
					<Post />
				</MDXProvider>
			</DialogContent>
		</Dialog>
	);
}
