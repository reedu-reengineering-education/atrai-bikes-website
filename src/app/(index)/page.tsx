import DataAnalyticsImage from "@/assets/images/data-analytics.png";
import PartnersImage from "@/assets/images/partners.png";
import HardwareImage from "@/assets/images/sensebox-bike.jpeg";
import BentoCard from "@/components/bento/bento-card";
import H1 from "@/components/ui/typography/H1";

export default function Home() {
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
					<BentoCard href={"/analytics"} image={DataAnalyticsImage}>
						<h2 className="text-2xl font-bold">Analytics</h2>
					</BentoCard>
					<BentoCard href={"/about"}>
						<h2 className="text-2xl font-bold">About</h2>
					</BentoCard>
					<BentoCard href={"/results"}>
						<h2 className="text-2xl font-bold">Results</h2>
					</BentoCard>
					<BentoCard aspect="square" image={HardwareImage} href={"/hardware"}>
						<div className="absolute bottom-0 right-0 p-4">
							<h2 className="text-2xl font-bold">Hardware</h2>
						</div>
					</BentoCard>
					<BentoCard href={"/faq"}>
						<h2 className="text-2xl font-bold">FAQ</h2>
					</BentoCard>
					<BentoCard href={"/blog"}>
						<h2 className="text-2xl font-bold">Blog</h2>
					</BentoCard>
					<BentoCard href={"/partner"} aspect="square" image={PartnersImage}>
						<h2 className="text-2xl font-bold text-muted">Partner</h2>
					</BentoCard>
				</div>
			</div>
		</div>
	);
}
