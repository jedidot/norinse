import type { Metadata } from "next";
import type { SeoMeta } from "@/lib/i18n/types";
import { defaultLocale, getDictionary } from "@/lib/i18n";

type BuildMetadataOptions = {
  pageSeo?: SeoMeta;
  path?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  pageSeo,
  path = "",
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const dict = getDictionary(defaultLocale);
  const title = pageSeo?.title ?? dict.home.seo.title;
  const description = pageSeo?.description ?? dict.home.seo.description;
  const url = `${dict.site.url}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(dict.site.url),
    alternates: {
      canonical: url,
      languages: {
        ko: url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: dict.site.name,
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function buildJsonLd(path = "") {
  const dict = getDictionary(defaultLocale);
  const url = `${dict.site.url}${path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${dict.site.url}/#website`,
        url: dict.site.url,
        name: dict.site.name,
        description: dict.site.tagline,
        inLanguage: "ko-KR",
      },
      {
        "@type": "Organization",
        "@id": `${dict.site.url}/#organization`,
        name: dict.site.name,
        url: dict.site.url,
        logo: `${dict.site.url}/favicon.ico`,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: dict.home.seo.title,
        isPartOf: { "@id": `${dict.site.url}/#website` },
        inLanguage: "ko-KR",
      },
    ],
  };
}
