import { promises as fs } from "fs";
import { BackgroundBeams } from "@/components/animated/beams";
import { GlowingStarsBackgroundCard } from "@/components/animated/glowing-stars";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useMDXComponents } from "@/mdx-components";
import { compileMDX } from "next-mdx-remote/rsc";
import { Suspense } from "react";

async function getData(content: string, lng = "de") {
	try {
		const file = await fs.readFile(
			`${process.cwd()}/src/content/${content}/${content}.${lng}.mdx`,
			"utf8",
		);
		if (!file) return { mdxSource: "" };
		return { mdxSource: file };
	} catch (error) {
		return { mdxSource: "" };
	}
}

export default async function PageDialog({
	content,
	lng,
	animatedBackground,
	size,
	children,
}: {
	content: string;
	lng: string;
	animatedBackground?:
		| "beams"
		| "glowing-stars"
		| "grid"
		| "background-gradient";
	size?: "normal" | "large";
	children: React.ReactNode;
}) {
	const { mdxSource } = await getData(content, lng);

	const { content: mdxContent, frontmatter } = await compileMDX<{
		title: string;
	}>({
		source: mdxSource,
		options: { parseFrontmatter: true },
		components: useMDXComponents({}),
	});

	const Trigger = () => (
		<Card
			className={cn(
				size === "large" ? "col-span-2" : "col-span-1",
				"from-muted to-background/90",
				"bg-gradient-to-br w-full break-inside-avoid relative rounded-md overflow-hidden group cursor-pointer",
			)}
		>
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

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Trigger />
			</DialogTrigger>
			<DialogContent className="max-w-7xl rounded-lg max-h-[80vh] overflow-auto no-scrollbar">
				<Suspense fallback={"Loading..."}>{mdxContent}</Suspense>
			</DialogContent>
		</Dialog>
	);
}
