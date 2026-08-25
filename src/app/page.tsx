"use client";

import { useEffect } from "react";

export default function Page() {
	useEffect(() => {
		const lang = navigator.language?.slice(0, 2);
		const target = ["de", "en", "pt"].includes(lang) ? lang : "en";
		window.location.replace(`/${target}/`);
	}, []);

	return null;
}
