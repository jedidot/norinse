import type { MetadataRoute } from "next";
import { getDictionary } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const dict = getDictionary();
  const base = dict.site.url;

  const routes = [
    "",
    "hair-care",
    "body-care",
    "hand-care",
    "where-to-buy",
    "faq",
    "contact-us",
    "privacy-policy",
  ];

  return routes.map((route) => ({
    url: route ? `${base}/${route}/` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
