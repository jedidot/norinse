import { OptimizedImage } from "@/components/ui/OptimizedImage";
import type { ProductItem } from "@/lib/product-pages/types";

type ProductCardProps = {
  product: ProductItem;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="h-full">
      <OptimizedImage
        src={product.image}
        alt={product.name}
        width={800}
        height={1100}
        className={product.imageAlign === "right" ? "ml-auto" : "mx-auto"}
      />

      <h4
        className="py-2.5 text-center text-base font-semibold text-white md:text-lg"
        style={{ backgroundColor: product.nameColor }}
      >
        {product.name}
      </h4>

      <ul className="sku-list my-6 space-y-1 px-1">
        {product.skus.map((sku) => (
          <li key={sku.sku} className="flex items-end text-brand-blue">
            <span className="shrink-0 text-base font-normal">{sku.label}</span>
            <span className="dots mx-2 mb-1 flex-1" />
            <span className="shrink-0 text-base font-normal">SKU # {sku.sku}</span>
          </li>
        ))}
      </ul>

      <ul
        className="product-bullets space-y-4 text-brand-blue"
        style={{ "--bullet-color": product.nameColor } as Record<string, string>}
      >
        {product.bullets.map((bullet) => (
          <li key={bullet} className="text-base leading-snug">
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}
