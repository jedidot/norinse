import type { SeoMeta } from "@/lib/i18n/types";

export type SkuItem = {
  label: string;
  sku: string;
};

export type ProductItem = {
  name: string;
  nameColor: string;
  image: string;
  imageAlign?: "center" | "right";
  skus: SkuItem[];
  bullets: string[];
};

export type UsageBlock = {
  title: string;
  content: string;
};

export type ProductPageLayout = "hair" | "body" | "hand";

export type ProductPageData = {
  key: ProductPageLayout;
  seo: SeoMeta;
  category: string;
  categoryLabel: string;
  accentColor: string;
  heroBg: string;
  heroBoxBg: string;
  watchButtonColor: string;
  videoId: string;
  intro: string;
  pageTitle: string;
  pageTitleSuffix?: string;
  usageBlocks: UsageBlock[];
  products: ProductItem[];
  layout: ProductPageLayout;
  handSideImages?: string[];
  bathingChartHref?: string;
};
