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
import remarkGfm from "remark-gfm";

async function getData() {
  try {
    const file = await fs.readFile(
      path.join(
        process.cwd(),
        "src",
        "content",
        "docs",
        `docs.en.mdx`
      ),
      "utf8"
    );
    console.log("file", path.join(
      process.cwd(),
      "src",
      "content",
      "docs",
      `docs.en.mdx`
    ));
    if (!file) return { mdxSource: "" };
    return { mdxSource: file };
  } catch (error) {
    console.error("Error reading file:", error);
    return { mdxSource: "" };
  }
}

export default async function Page() {
  const { mdxSource } = await getData();

  const { content: mdxContent, frontmatter } = await compileMDX<{
    title: string;
  }>({
    source: mdxSource,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
      },
    },
    components: useMDXComponents({
      User2Icon: LucideIcons.User2Icon,
      ArrowRightIcon: LucideIcons.ArrowRightIcon,
      Button: Button,
      Link: Link,
      table: (props: any) => (
          <table
            className={cn(
              "w-full border-collapse text-sm",
              props.className
            )}
          >
            {props.children}
          </table>
      ),
      th: (props: any) => (
        <th
          className={cn(
            "border-b bg-muted px-4 py-2 text-left font-medium",
            props.className
          )}
        >
          {props.children}
        </th>
      ),
      td: (props: any) => (
        <td
          className={cn(
            "border-b px-4 py-2 text-left",
            props.className
          )}
        >
          {props.children}
        </td>
      ),
      pre: (props: any) => (
        <div className="overflow-x-auto">
          <pre
            className={cn(
              "overflow-x-auto rounded-md border bg-muted p-4",
              props.className
            )}
          >
            {props.children}
          </pre>
        </div>
      ),
    }),
  });

  return (
          <Suspense fallback={"Loading..."}>{mdxContent}</Suspense>
  );
}
