import { cn } from "@/lib/cn";

export function NgocTienMark({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex aspect-[2/1] items-center justify-center rounded-md border border-current px-1 font-mono text-[0.58em] font-bold tracking-[-0.08em]",
        className
      )}
      {...props}
    >
      NT
    </span>
  );
}
