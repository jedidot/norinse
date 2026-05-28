import { ContentPage, createPageMetadata } from "@/components/pages/ContentPage";

export const metadata = createPageMetadata("privacy-policy");

export default function PrivacyPolicyPage() {
  return <ContentPage pageKey="privacy-policy" />;
}
