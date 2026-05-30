import {
  getPrivacyMetadata,
  PrivacyPolicyPageView,
} from "@/components/privacy/PrivacyPolicyPageView";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  pageSeo: getPrivacyMetadata(),
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageView />;
}
