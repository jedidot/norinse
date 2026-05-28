import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "text-white border-transparent",
  outline: "bg-transparent border-2 border-[#99a9b5] text-[#99a9b5] hover:bg-white",
  ghost: "bg-white border-transparent",
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  color?: string;
  textColor?: string;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

export function Button({
  href,
  children,
  color = "#00629b",
  textColor = "#ffffff",
  variant = "primary",
  external,
  className,
  icon,
}: ButtonProps) {
  const style =
    variant === "primary"
      ? { backgroundColor: color, color: textColor }
      : variant === "ghost"
        ? { color: color, backgroundColor: "#ffffff" }
        : undefined;

  const classes = cn(
    "inline-flex h-[30px] items-center justify-center px-[30px] text-base font-normal leading-[30px] transition-colors",
    variants[variant],
    className
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={style}>
      {children}
      {icon}
    </Link>
  );
}
