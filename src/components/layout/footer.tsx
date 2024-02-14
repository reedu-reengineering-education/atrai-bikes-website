import Link from "next/link";
import { SparklesCore } from "../animated/sparkels";
import H2 from "../ui/typography/H2";

export default function Footer() {
	return (
		<footer className="w-full bg-background py-24">
			<div className="h-40 relative md:w-3/4 mx-auto">
				{/* Gradients */}
				<div className="absolute inset-x-1/4 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-1/2 blur-sm" />
				<div className="absolute inset-x-1/4 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/2" />
				<div className="absolute left-[37.5%] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
				<div className="absolute left-[37.5%] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

				{/* Core component */}
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1}
					particleDensity={1200}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>

				{/* Radial Gradient to prevent sharp edges */}
				<div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
				<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
					<Link
						href="https://reedu.de"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline hover:underline-offset-2"
					>
						<H2 className="font-bold border-none">Powered by re:edu</H2>
					</Link>
				</div>
			</div>
		</footer>
	);
}
