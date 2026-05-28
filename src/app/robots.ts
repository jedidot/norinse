import type { MetadataRoute } from "next";
import { getDictionary } from "@/lib/i18n";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const dict = getDictionary();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${dict.site.url}/sitemap.xml`,
  };
}
