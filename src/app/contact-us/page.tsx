import {
  ContactPageView,
  getContactMetadata,
} from "@/components/contact/ContactPageView";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  pageSeo: getContactMetadata(),
  path: "/contact-us/",
});

export default function ContactUsPage() {
  return <ContactPageView />;
}
