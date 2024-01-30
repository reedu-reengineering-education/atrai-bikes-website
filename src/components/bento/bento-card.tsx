import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

interface BentoCardProps {
	children: React.ReactNode;
	aspect?: "square" | "video";
	image?: StaticImageData;
	href?: Url;
}

export default function BentoCard({
	children,
	aspect = "video",
	image,
	href,
}: BentoCardProps) {
	const JustTheCard = (
		<Card
			className={cn(
				aspect === "square" ? "aspect-square" : "aspect-video",
				"w-full break-inside-avoid bg-muted relative overflow-hidden group cursor-pointer",
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
			<div className="absolute top-0 left-0 w-full h-full p-4">{children}</div>
		</Card>
	);

	if (href) {
		return (
			<Link href={href} passHref legacyBehavior>
				{JustTheCard}
			</Link>
		);
	}

	return JustTheCard;
}