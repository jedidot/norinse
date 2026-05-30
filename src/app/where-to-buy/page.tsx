import {
  getWhereToBuyMetadata,
  WhereToBuyPageView,
} from "@/components/where-to-buy/WhereToBuyPageView";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  pageSeo: getWhereToBuyMetadata(),
  path: "/where-to-buy/",
});

export default function WhereToBuyPage() {
  return <WhereToBuyPageView />;
}
