import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H2(props: Props) {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 py-6",
        props.className
      )}
    >
      {props.children}
    </h2>
  );
}
