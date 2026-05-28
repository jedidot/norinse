import { ProductPageView } from "@/components/products/ProductPageView";
import { buildMetadata } from "@/lib/seo";
import { getProductPage } from "@/lib/product-pages/data";

const data = getProductPage("hand");

export const metadata = buildMetadata({
  pageSeo: data.seo,
  path: "/hand-care/",
});

export default function HandCarePage() {
  return <ProductPageView data={data} />;
}
