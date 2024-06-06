import { BackgroundBeams } from "@/components/animated/beams";
import { GlowingStarsBackgroundCard } from "@/components/animated/glowing-stars";
import { useMDXComponents } from "@/components/mdx/mdx-components";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { promises as fs } from "fs";
import * as LucideIcons from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { Suspense } from "react";

async function getData(content: string, lng = "de") {
  try {
    const file = await fs.readFile(
      path.join(
        process.cwd(),
        "src",
        "content",
        content,
        `${content}.${lng}.mdx`
      ),
      "utf8"
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
  children,
  className,
  image,
}: {
  content: string;
  lng: string;
  animatedBackground?:
    | "beams"
    | "glowing-stars"
    | "grid"
    | "background-gradient";
  children: React.ReactNode;
  className?: string;
  image?: string;
}) {
  const { mdxSource } = await getData(content, lng);

  const { content: mdxContent, frontmatter } = await compileMDX<{
    title: string;
  }>({
    source: mdxSource,
    options: {
      parseFrontmatter: true,
    },
    components: useMDXComponents({
      User2Icon: LucideIcons.User2Icon,
      ArrowRightIcon: LucideIcons.ArrowRightIcon,
      Button: Button,
      Link: Link,
    }),
  });

  const Trigger = () => (
    <Card
      className={cn(
        "from-muted to-background/90",
        "bg-gradient-to-br w-full break-inside-avoid relative rounded-md overflow-hidden group cursor-pointer",
        className
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
      {image && (
        <Image
          src={image}
          fill
          objectFit="cover"
          className="object-center brightness-50"
          alt={content}
        />
      )}

      <div className="absolute top-0 left-0 w-full h-full p-4">{children}</div>
    </Card>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trigger />
      </DialogTrigger>
      <DialogContent className="max-w-5xl rounded-lg overflow-auto no-scrollbar">
        <ScrollArea className="max-h-[80vh] p-4">
          <Suspense fallback={"Loading..."}>{mdxContent}</Suspense>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
