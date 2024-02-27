"use client";

import DataAnalyticsImage from "@/assets/images/data-analytics.png";
import Image52N from "@/assets/images/partners/52n.png";
import ICImage from "@/assets/images/partners/instituto-cordial.png";
import ReeduImage from "@/assets/images/partners/logo_small_text_white.png";
import HardwareImage from "@/assets/images/sensebox-bike.jpeg";
import BentoCard from "@/components/bento/bento-card";
import H1 from "@/components/ui/typography/H1";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { i18n } from "./i18n";

export default function Home() {
	const pathname = usePathname();

	const lng = pathname.split("/")[1] as keyof typeof i18n;

	return (
		<div className="flex flex-col items-center w-full gap-12">
			<div className="md:h-80 h-40 w-full bg-dot-fuchsia-400/50 relative flex items-center justify-center mt-12">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
				<H1 className="bg-clip-text text-transparent bg-gradient-to-b from-muted-foreground to-foreground">
					Atrai Bikes
				</H1>
			</div>
			<div className="max-w-6xl mx-auto w-full">
				<div className="grid md:auto-rows-[18rem] grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-[10rem]">
					<BentoCard href={"/about"} animatedBackground="beams">
						<div className="absolute bottom-0 left-0 p-4">
							<h2 className="text-2xl font-bold">{i18n[lng].about}</h2>
						</div>
					</BentoCard>
					<BentoCard href={"/analytics"} image={DataAnalyticsImage}>
						<h2 className="text-2xl font-bold">{i18n[lng].analytics}</h2>
					</BentoCard>
					<BentoCard href={"/results"} animatedBackground="glowing-stars">
						<h2 className="text-2xl font-bold">{i18n[lng].results}</h2>
					</BentoCard>
					<BentoCard size="large" image={HardwareImage} href={"/hardware"}>
						<div className="absolute top-0 right-0 p-4">
							<h2 className="text-2xl font-bold">{i18n[lng].hardware}</h2>
						</div>
					</BentoCard>
					<BentoCard href={"/blog"} animatedBackground="grid">
						<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4">
							<h2 className="text-2xl font-bold">{i18n[lng].blog}</h2>
						</div>
					</BentoCard>
					<BentoCard href={"/faq"} animatedBackground="glowing-stars">
						<h2 className="text-2xl font-bold">{i18n[lng].faq}</h2>
					</BentoCard>
					<BentoCard href={"/partner"} size="large" animatedBackground="beams">
						<div className="w-full h-full flex flex-col">
							<h2 className="text-2xl font-bold">{i18n[lng].partner}</h2>
							<div className="w-full h-full  flex items-center justify-around group-hover:scale-105 transition-all">
								<div className="relative h-full aspect-square ">
									<Image
										src={ICImage}
										alt="Instituto Cordial"
										fill
										className="object-contain"
									/>
								</div>
								<div className="relative h-full aspect-square">
									<Image
										src={ReeduImage}
										alt="Reedu"
										fill
										className="object-contain"
									/>
								</div>

								<div className="relative h-full aspect-square">
									<Image
										src={Image52N}
										alt="52n"
										fill
										className="object-contain"
									/>
								</div>
							</div>
						</div>
					</BentoCard>
				</div>
			</div>
		</div>
	);
}
