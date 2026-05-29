import {
  getWhereToBuyMetadata,
  WhereToBuyPageView,
} from "@/components/where-to-buy/WhereToBuyPageView";

export const metadata = getWhereToBuyMetadata();

export default function WhereToBuyPage() {
  return <WhereToBuyPageView />;
}
