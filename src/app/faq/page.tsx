import { FaqPageView, getFaqMetadata } from "@/components/faq/FaqPageView";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  pageSeo: getFaqMetadata(),
  path: "/faq/",
});

export default function FaqPage() {
  return <FaqPageView />;
}
