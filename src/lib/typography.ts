/** 한국어 본문·제목용 공통 타이포 클래스 */
export const typo = {
  body: "text-base leading-[1.7] font-normal",
  bodyGray: "text-base leading-[1.7] font-normal text-brand-gray",
  bodyBlue: "text-base leading-[1.7] font-normal text-brand-blue",
  lead: "text-lg leading-[1.75] font-normal",
  leadBlue: "text-lg leading-[1.75] font-normal text-brand-blue",
  label: "text-sm leading-normal font-medium",
  pageHero: "text-2xl font-semibold leading-snug text-white md:text-3xl",
  pageTitle: "text-2xl font-semibold leading-snug md:text-3xl",
  sectionTitle: "text-2xl font-medium leading-snug text-brand-gray md:text-[1.75rem]",
  sectionTitleLight: "text-2xl font-medium leading-snug text-white md:text-[1.75rem]",
  blockTitle: "text-xl font-medium leading-snug text-brand-blue md:text-[1.375rem]",
  nav: "text-base font-medium tracking-normal",
  faqQuestion: "text-lg font-medium leading-snug text-brand-blue md:text-xl",
  faqAnswer: "text-base leading-[1.7] font-normal text-brand-gray",
} as const;
