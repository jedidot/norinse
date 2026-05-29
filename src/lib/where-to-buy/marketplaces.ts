export const onlineMarketplaces = [
  {
    id: "naver",
    name: "네이버쇼핑",
    href: "https://shopping.naver.com/ns/home",
    logo: "/images/marketplaces/naver-shopping.svg",
    width: 108,
    height: 22,
  },
  {
    id: "coupang",
    name: "쿠팡",
    href: "https://www.coupang.com/",
    logo: "/images/marketplaces/coupang.png",
    width: 350,
    height: 82,
  },
  {
    id: "gmarket",
    name: "G마켓",
    href: "https://www.gmarket.co.kr/",
    logo: "/images/marketplaces/gmarket.png",
    width: 480,
    height: 226,
    /** 가로형 로고 — h-8만 쓰면 다른 몰 대비 너무 작게 보임 */
    imageClassName: "h-14 w-auto max-w-[200px] object-contain object-left sm:h-16 sm:max-w-[240px]",
  },
  {
    id: "auction",
    name: "옥션",
    href: "https://www.auction.co.kr/",
    logo: "/images/marketplaces/auction.png",
    width: 120,
    height: 40,
  },
  {
    id: "11st",
    name: "11번가",
    href: "https://11st.co.kr/",
    logo: "/images/marketplaces/11st.png",
    width: 88,
    height: 32,
  },
] as const;
