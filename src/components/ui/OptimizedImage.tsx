import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  wrapperClassName?: string;
};

export function OptimizedImage({
  wrapperClassName,
  className,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <Image
        alt={alt}
        className={cn("h-auto w-full object-contain", className)}
        {...props}
      />
    </div>
  );
}
