import { ProductPageView } from "@/components/products/ProductPageView";
import { buildMetadata } from "@/lib/seo";
import { getProductPage } from "@/lib/product-pages/data";

const data = getProductPage("body");

export const metadata = buildMetadata({
  pageSeo: data.seo,
  path: "/body-care/",
});

export default function BodyCarePage() {
  return <ProductPageView data={data} />;
}
