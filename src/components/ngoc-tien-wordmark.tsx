import { cn } from "@/lib/cn";

export function NgocTienWordmark({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex items-center justify-center font-mono text-[clamp(0.9rem,5vw,1.5rem)] font-bold tracking-[0.16em] whitespace-nowrap",
        className
      )}
      {...props}
    >
      NGỌC TIẾN
    </span>
  );
}
