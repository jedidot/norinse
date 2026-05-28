import { images } from "@/lib/images";
import type { ProductPageData } from "./types";

export const productPages: Record<ProductPageData["key"], ProductPageData> = {
  hair: {
    key: "hair",
    seo: {
      title: "노린스 No-Rinse® 샴푸 | 물 없는 샴푸와 캡",
      description:
        "지저분함·잔여물·알코올 없음. 노린스 No-Rinse® 샴푸는 전통적인 샴푸와 컨디셔닝의 신뢰할 수 있고 부드러운 대안입니다.",
    },
    category: "HAIR",
    categoryLabel: "헤어",
    accentColor: "#df3faf",
    heroBg: images.productPages.hairHero,
    heroBoxBg: "#f5a2d7",
    watchButtonColor: "#f5a2d7",
    videoId: "eXpmToP8QsU",
    intro:
      "물이나 헹굼 없이 아름답고 상쾌하며 부드럽고 매끄러운 머릿결을 경험하세요. 언제 어디서나 쉽게 사용할 수 있도록 설계된 검증된 포뮬러입니다. 지저분함 없음. 잔여물 없음. 알코올 없음. 노린스 No-Rinse® 샴푸 & 컨디셔너가 전통적인 샴푸의 신뢰할 수 있는 대안인 이유입니다.",
    pageTitle: "노린스",
    pageTitleSuffix: "샴푸 & 컨디셔너",
    usageBlocks: [
      {
        title: "NO RINSE 샴푸",
        content:
          "건조한 머리카락에 완전히 고르게 적셔질 때까지 바릅니다. 일반 샴푸처럼 부드럽게 마사지합니다. 컨디셔너 사용 시 가볍게 수건으로 닦아낸 뒤, 그렇지 않으면 충분히 수건으로 말립니다. 빗질하고 원하는 스타일을 연출하세요.",
      },
      {
        title: "NO RINSE 컨디셔너",
        content:
          "샴푸 후 가볍게 수건으로 닦은 머리카락에 소량을 바르고 부드럽게 마사지합니다. 빗으로 빗어줍니다. 충분히 수건으로 말린 뒤 스타일링하세요.",
      },
      {
        title: "NO RINSE 샴푸 캡",
        content:
          "샴푸와 컨디셔닝을 한 번에! 린스 프리 샴푸 캡을 머리에 씌우고 15–20초간 머리카락이 적셔질 때까지 캡을 통해 마사지합니다. 더 길거나 더 더러운 머리카락은 시간을 늘리거나 캡을 하나 더 사용하세요. 사용 후 각 캡은 제거하여 버립니다. 충분히 수건으로 말린 뒤 빗질하고 스타일링하세요. TIP: 전자레인지에 15초간 데우면 따뜻한 샴푸 경험을 할 수 있습니다.",
      },
    ],
    layout: "hair",
    products: [
      {
        name: "샴푸",
        nameColor: "#df3faf",
        image: images.productPages.hairShampoo,
        imageAlign: "center",
        skus: [
          { label: "2 OZ", sku: "00120" },
          { label: "8 OZ", sku: "00100" },
          { label: "16 OZ", sku: "00200" },
          { label: "1 GALLON", sku: "00400" },
          { label: "SHAMPOO CAP", sku: "02000" },
        ],
        bullets: [
          "즉시 사용 가능, 모든 모발 타입",
          "머릿결을 상쾌하고 깨끗하게",
          "헹굼 불필요",
          "파라벤 프리, pH 밸런스",
          "병원 테스트 및 승인",
          "성인·어린이 모두 원하는 만큼 사용",
        ],
        ingredients: [
          {
            title: "No Rinse Shampoo",
            content:
              "DEIONIZED WATER, SODIUM C14-16 OLEFIN SULFONATE, COCAMIDOPROPYL HYDROXYSULTAINE, PROPYLENE GLYCOL, PHENOXYETHANOL, FRAGRANCE, CITRIC ACID",
          },
          {
            title: "No Rinse Shampoo Cap",
            content:
              "DEIONIZED WATER, SODIUM C14-16 OLEFIN SULFONATE, COCAMIDOPROPYL HYDROXYSULTAINE, PROPYLENE GLYCOL, ISOSTEARAMIDOPROPYL MORPHOLINE LACTATE, PHENOXYETHANOL, FRAGRANCE, CITRIC ACID",
          },
        ],
        sds: [
          {
            label: "Shampoo SDS",
            href: "https://cleanlifeproducts.com/wp-content/uploads/2021/04/No-Rinse-Shampoo-SDS-5-2023.pdf",
            color: "#df3faf",
          },
          {
            label: "Shampoo Cap SDS",
            href: "https://cleanlifeproducts.com/wp-content/uploads/2021/04/No-Rinse-Shampoo-Cap-SDS-6-2023.pdf",
            color: "#df3faf",
          },
        ],
      },
      {
        name: "컨디셔너",
        nameColor: "#ff9e18",
        image: images.productPages.hairConditioner,
        imageAlign: "right",
        skus: [{ label: "8 OZ", sku: "00540" }],
        bullets: [
          "샴푸 후 완벽한 마무리",
          "엉킴과 머리카락 꼬임 즉시 해소",
          "부드럽고 윤기 있는 머릿결",
          "헹굼 불필요",
          "잔여물·기름기 없음",
          "성인·어린이 모두 원하는 만큼 사용",
        ],
        ingredients: [
          {
            title: "No Rinse Conditioner",
            content:
              "DEIONIZED WATER, ISOSTEARAMIDOPROPYL MORPHOLINE LACTATE, SODIUM BENZOATE, PHENYLPROPANOL, FRAGRANCE",
          },
        ],
        sds: [
          {
            label: "Conditioner SDS",
            href: "https://cleanlifeproducts.com/wp-content/uploads/2021/04/No-Rinse-Conditioner-4-2023.pdf",
            color: "#ff9e18",
          },
        ],
      },
    ],
  },
  body: {
    key: "body",
    seo: {
      title: "노린스 No-Rinse® 바디케어 | 물 없는 목욕",
      description:
        "바디 워시, 바디 바스, 목욕 티슈, 페리 워시로 물 없이도 깨끗하고 상쾌한 피부를.",
    },
    category: "BODY",
    categoryLabel: "바디",
    accentColor: "#a2d45e",
    heroBg: images.productPages.bodyHero,
    heroBoxBg: "#a2d45e",
    watchButtonColor: "#a2d45e",
    videoId: "ERfKv4qxUDc",
    intro:
      "노린스 바디 워시, 바디 바스, 목욕 티슈, 페리 워시 제품은 피부를 깨끗하고 상쾌하게 유지합니다. 침상 목욕이 필요한 분이나 욕조·샤워가 어려운 분에게 이상적입니다. 부드럽고 안전하며 효과적인 포뮬러로 매일 사용할 수 있습니다.",
    pageTitle: "노린스",
    usageBlocks: [
      {
        title: "NO RINSE Body Bath",
        content:
          "농축 포뮬러입니다. 따뜻한 물 약 1쿼트에 노린스 바디 바스 4캡을 섞습니다. 솔루션에 수건을 적셔 피부에 바릅니다. 마르기 전에 수건으로 닦아냅니다. 핸드 워시나 샤워 시에는 그대로 사용할 수도 있습니다.",
      },
      {
        title: "NO RINSE Body Wash & NO RINSE Foaming Body Wash",
        content:
          "즉시 사용 가능한 제품입니다. 린스리스 바디 워시를 깨끗한 수건에 바른 뒤 몸에 적용하고, 마르기 전에 수건으로 닦아냅니다.",
      },
      {
        title: "NO RINSE Bathing Wipes",
        content:
          "밀봉된 패킷에서 바로 사용할 수 있는 일회용 목욕 티슈로, 일상 목욕의 궁극적인 편의를 제공합니다. 자가 케어, 타인 케어, 야외 활동, 이동 중 가족에게 이상적입니다.",
      },
      {
        title: "NO RINSE Peri-Wash",
        content:
          "헹굼 없이 회음부 위생을 위해 직접 적용합니다. 따뜻한 damp 수건으로 잔여물을 제거합니다. 오염된 부위에 다시 바르고 따뜻한 damp 수건으로 닦은 뒤 pat dry 합니다.",
      },
    ],
    layout: "body",
    bathingChartHref:
      "https://cleanlifeproducts.com/wp-content/uploads/CL_BatingChart.pdf",
    products: [
      {
        name: "BODY WASH",
        nameColor: "#3bd4ae",
        image: images.productPages.bodyWash,
        skus: [
          { label: "2 OZ", sku: "00930" },
          { label: "8 OZ", sku: "00940" },
          { label: "8 OZ Foaming", sku: "00947" },
          { label: "16 OZ", sku: "00948" },
          { label: "1 GALLON", sku: "00944" },
        ],
        bullets: [
          "성인·어린이 모두 깨끗하고 상쾌한 피부",
          "냄새 제거",
          "즉시 사용 가능한 포뮬러",
          "알코올 프리",
          "100% 만족 보장",
          "미국 제조",
        ],
        ingredients: [
          {
            title: "No Rinse Body Wash & No Rinse Foaming Body Wash",
            content:
              "DEIONIZED WATER, SODIUM C14-16 OLEFIN SULFONATE, COCAMIDOPROPYL HYDROXYSULTAINE, PROPYLENE GLYCOL, GLYCERIN, SODIUM BENZOATE, PHENYLPROPANOL, FRAGRANCE, CITRIC ACID",
          },
        ],
        sds: [
          {
            label: "Body Wash SDS",
            href: "https://cleanlifeproducts.com/wp-content/uploads/2021/04/No-Rinse-Body-Wash-Foaming-4-2023.pdf",
            color: "#3bd4ae",
          },
        ],
      },
      {
        name: "BODY BATH",
        nameColor: "#a2d45e",
        image: images.productPages.bodyBath,
        skus: [
          { label: "2 OZ", sku: "00920" },
          { label: "8 OZ", sku: "00900" },
          { label: "16 OZ", sku: "00910" },
          { label: "1 GALLON", sku: "00950" },
        ],
        bullets: [
          "성인·어린이 모두 깨끗하고 상쾌한 피부",
          "냄새 제거",
          "농축 포뮬러",
          "알코올 프리",
          "100% 만족 보장",
          "미국 제조",
        ],
        ingredients: [
          {
            title: "No Rinse Body Bath",
            content:
              "DEIONIZED WATER, SODIUM C14-16 OLEFIN SULFONATE, COCAMIDOPROPYL HYDROXYSULTAINE, PROPYLENE GLYCOL, SODIUM BENZOATE, PHENYLPROPANOL, FRAGRANCE, CITRIC ACID",
          },
        ],
        sds: [
          {
            label: "Body Bath SDS",
            href: "https://cleanlifeproducts.com/wp-content/uploads/2021/04/No-Rinse-Body-Bath-4-2023.pdf",
            color: "#a2d45e",
          },
        ],
      },
      {
        name: "BATHING WIPES",
        nameColor: "#00c1de",
        image: images.productPages.bodyWipes,
        imageAlign: "right",
        skus: [{ label: "WIPES", sku: "01000" }],
        bullets: [
          "즉시 사용 가능",
          "일회용",
          "냄새 제거",
          "라텍스·알코올 프리",
          "100% 만족 보장",
        ],
        ingredients: [
          {
            title: "No Rinse Bathing Wipes",
            content:
              "WATER, PROPYLENE GLYCOL, GLYCERIN, LAURYL GLUCOSIDE, DIAZOLIDINYL UREA, POTASSIUM SORBATE, PHENOXYETHANOL, POLYSORBATE-20, PEG-40 HYDROGENATED CASTOR OIL, SIMETHICONE, CITRIC ACID, FRAGRANCE, ALOE BARBADENSIS LEAF JUICE, TOCOPHERYL ACETATE",
          },
        ],
        sds: [
          {
            label: "Bathing Wipes SDS",
            href: "https://cleanlifeproducts.com/wp-content/uploads/2021/04/No-Rinse-Bathing-Wipes-SDS.pdf",
            color: "#00c1de",
          },
        ],
      },
      {
        name: "PERI-WASH",
        nameColor: "#8093dc",
        image: images.productPages.bodyPeri,
        imageAlign: "right",
        skus: [
          { label: "8 OZ", sku: "00700" },
          { label: "1 GALLON", sku: "00710" },
        ],
        bullets: [
          "쉽고 dignified한 사용",
          "안전하고 부드러움",
          "케어기버가 선호",
          "알코올 프리",
          "100% 만족 보장",
          "미국 제조",
        ],
        ingredients: [
          {
            title: "No Rinse Peri-Wash",
            content:
              "DEIONIZED WATER, SODIUM C14-16 OLEFIN SULFONATE, COCAMIDOPROPYL HYDROXYSULTAINE, PROPYLENE GLYCOL, GLYCERIN, ALOE, SODIUM BENZOATE, PHENYLPROPANOL, FRAGRANCE, CITRIC ACID",
          },
        ],
        sds: [
          {
            label: "Peri-Wash SDS",
            href: "https://cleanlifeproducts.com/wp-content/uploads/2021/04/No-Rinse-Peri-Wash-3-2023.pdf",
            color: "#8093dc",
          },
        ],
      },
    ],
  },
  hand: {
    key: "hand",
    seo: {
      title: "노린스 No-Rinse® 포밍 핸드 워시",
      description:
        "비누와 물처럼 언제 어디서나 작동하는 포밍 핸드 워시. 알코올 프리, 100% 만족 보장.",
    },
    category: "HAND",
    categoryLabel: "핸드",
    accentColor: "#00c1de",
    heroBg: images.productPages.handHero,
    heroBoxBg: "#00c1de",
    watchButtonColor: "#00c1de",
    videoId: "_4L_O-9VUTU",
    intro:
      "집, 직장, 이동 중 언제든 깨끗하고 안전한 손을 위해. 포밍 핸드 워시는 비누와 물처럼 실제로 때를 제거하고 손을 깨끗하고 상쾌하게 합니다. 차, 차고, 백팩, 가방에 간편하게 보관하세요. 알로에 성분으로 보습합니다.",
    pageTitle: "노린스",
    usageBlocks: [
      {
        title: "NO RINSE Foaming Hand Wash",
        content:
          "손바닥에 소량을 바릅니다. 20초간 손 전체, 손가락, 손톱까지 문지릅니다. 천이나 종이 수건으로 닦아냅니다.",
      },
    ],
    layout: "hand",
    handSideImages: [
      images.productPages.handSmall1,
      images.productPages.handSmall2,
    ],
    buyNowHref:
      "https://www.amazon.com/No-Rinse-Foaming-Hand-Wash-Refreshed/dp/B0CRRV7ZSS",
    products: [
      {
        name: "FOAMING HAND WASH",
        nameColor: "#00c1de",
        image: images.productPages.handWide,
        imageAlign: "right",
        skus: [{ label: "8 OZ", sku: "00946" }],
        bullets: [
          "손을 깨끗하고 상쾌하게",
          "알코올 프리",
          "100% 만족 보장",
          "미국 제조",
        ],
        ingredients: [
          {
            title: "No Rinse Foaming Hand Wash",
            content:
              "DEIONIZED WATER, TRIETHANOLAMINE LAURYL SULFATE, GLYCERIN, COCAMIDOPROPYL BETAINE, FRAGRANCE, PROPYLENE GLYCOL USP, DMDM HYDANTOIN, CITRIC ACID",
          },
        ],
        sds: [
          {
            label: "Hand Care SDS",
            href: "https://cleanlifeproducts.com/wp-content/uploads/2021/04/No-Rinse-Foaming-Hand-Wash-SDS-12-2023.pdf",
            color: "#00c1de",
          },
        ],
      },
    ],
  },
};

export function getProductPage(key: ProductPageData["key"]) {
  return productPages[key];
}
