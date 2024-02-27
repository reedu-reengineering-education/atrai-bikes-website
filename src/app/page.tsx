import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
	const language = headers().get("Accept-Language");

	if (language?.includes("de")) {
		redirect("/de");
	}

	if (language?.includes("pt")) {
		redirect("/pt");
	}

	redirect("/en");
}
