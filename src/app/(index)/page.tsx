import DataAnalyticsImage from "@/assets/images/data-analytics.png";
import PartnersImage from "@/assets/images/partners.png";
import HardwareImage from "@/assets/images/sensebox-bike.jpeg";
import BentoCard from "@/components/bento/bento-card";
import H1 from "@/components/ui/typography/H1";

export default function Home() {
	return (
		<div className="flex flex-col items-center w-full gap-12">
			<div className="pt-24 pb-12">
				<H1>Atrai Bikes</H1>
			</div>
			<div className="max-w-6xl mx-auto w-full">
				<div className="columns-xs gap-4 space-y-4">
					<BentoCard href={"/analytics"} image={DataAnalyticsImage}>
						<h2 className="text-2xl text-muted font-bold">Analytics</h2>
					</BentoCard>
					<div className="flex gap-4">
						<BentoCard href={"/about"}>
							<h2 className="text-2xl font-bold">About</h2>
						</BentoCard>
						<BentoCard href={"/results"}>
							<h2 className="text-2xl font-bold">Results</h2>
						</BentoCard>
					</div>
					<BentoCard aspect="square" image={HardwareImage} href={"/hardware"}>
						<div className="absolute bottom-0 right-0 p-4">
							<h2 className="text-2xl text-muted font-bold">Hardware</h2>
						</div>
					</BentoCard>
					<div className="flex gap-4">
						<BentoCard href={"/faq"}>
							<h2 className="text-2xl font-bold">FAQ</h2>
						</BentoCard>
						<BentoCard href={"/blog"}>
							<h2 className="text-2xl font-bold">Blog</h2>
						</BentoCard>
					</div>
					<BentoCard href={"/partner"} image={PartnersImage}>
						<h2 className="text-2xl font-bold">Partner</h2>
					</BentoCard>
				</div>
			</div>
		</div>
	);
}
