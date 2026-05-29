export type Locale = "ko" | "en";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type SeoMeta = {
  title: string;
  description: string;
};

export type Dictionary = {
  site: {
    name: string;
    tagline: string;
    url: string;
    locale: Locale;
    lang: string;
  };
  nav: NavItem[];
  footer: {
    contactTitle: string;
    companyName: string;
    businessReg: string;
    address: string;
    customerServiceLabel: string;
    phone: string;
    email: string;
    emailButton: string;
    privacy: string;
    aboutTitle: string;
    whereToBuyTitle: string;
    copyright: string;
    peta: string;
  };
  common: {
    skipToContent: string;
    scrollTop: string;
    moreInfo: string;
    watchVideo: string;
    learnMore: string;
  };
  home: {
    seo: SeoMeta;
    hero: { text?: string; highlight?: string; textAfter?: string }[];
    products: {
      title: string;
      hair: string;
      body: string;
      hand: string;
    };
    whyBetter: {
      title: string;
      items: { title: string; description: string; icon: "alternative" | "easy" | "paraben" }[];
    };
    showcase: {
      subtitle: string;
      hair: { title: string; description: string; color: string };
      body: { title: string; description: string; color: string };
      hand: { title: string; description: string; color: string };
    };
    testimonials: {
      title: string;
      items: { quote: string; image: keyof typeof import("@/lib/images").images.testimonials; quoteColor: "blue" | "purple" | "orange" | "green"; imagePosition: "right" | "left" }[];
    };
    whereToBuy: {
      title: string;
      cards: { title: string; subtitle: string; linkText: string; href: string; icon: "location" | "online" | "amazon" | "wholesale"; external?: boolean }[];
    };
    audience: {
      title: string;
      cards: { title: string; description: string; image: keyof typeof import("@/lib/images").images.audience; headerColor: string }[];
    };
  };
  pages: Record<
    string,
    {
      seo: SeoMeta;
      title: string;
      subtitle?: string;
      sections?: { heading?: string; content: string }[];
    }
  >;
};
