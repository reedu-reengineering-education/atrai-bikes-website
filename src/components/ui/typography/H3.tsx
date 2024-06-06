import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H3(props: Props) {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight py-4",
        props.className
      )}
    >
      {props.children}
    </h3>
  );
}
