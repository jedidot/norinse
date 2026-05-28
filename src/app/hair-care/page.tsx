import { ProductPageView } from "@/components/products/ProductPageView";
import { buildMetadata } from "@/lib/seo";
import { getProductPage } from "@/lib/product-pages/data";

const data = getProductPage("hair");

export const metadata = buildMetadata({
  pageSeo: data.seo,
  path: "/hair-care/",
});

export default function HairCarePage() {
  return <ProductPageView data={data} />;
}
