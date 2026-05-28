import ko from "./locales/ko";
import type { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  ko,
  en: ko, // 영문 locale 추가 시 locales/en.ts 로 분리
};

/** 기본 locale — 한국어 사이트 */
export const defaultLocale: Locale = "ko";

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function t(
  locale: Locale = defaultLocale
): Dictionary {
  return getDictionary(locale);
}

export type { Dictionary, Locale, NavItem, SeoMeta } from "./types";
