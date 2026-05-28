import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
  size?: "lg" | "xl";
};

export function SectionHeading({
  children,
  className,
  align = "left",
  light = false,
  size = "xl",
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-medium leading-snug",
        size === "xl"
          ? "text-2xl md:text-[1.75rem]"
          : "text-xl md:text-2xl",
        align === "center" && "text-center",
        light ? "text-white" : "text-brand-gray",
        className
      )}
    >
      {children}
    </h2>
  );
}