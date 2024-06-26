import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H1(props: Props) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-8 text-gradient",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}
