import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between flex-wrap py-6">
			<Link href="/">
				<Button variant={"ghost"}>
					<ArrowLeftIcon className="mr-2 h-5" />
					Home
				</Button>
			</Link>
		</nav>
	);
}
