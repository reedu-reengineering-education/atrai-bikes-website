import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

export function MdxImage(props: ImageProps) {
	return (
		<Image
			{...props}
			alt={props.alt}
			className={cn("rounded-md", props.className)}
		/>
	);
}
