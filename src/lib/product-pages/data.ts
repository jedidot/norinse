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
          "건조한 머리카락에 완전히 고르게 적셔질 때까지 바릅니다. 일반 샴푸처럼 부드럽게 마사지합니다. 컨디셔너 사용 시 가볍게 수건으로 건조합니다. 그렇지 않으면 수건으로 충분히 말립니다. 빗질하고 원하는 스타일을 연출하세요.",
      },
      {
        title: "NO RINSE 컨디셔너",
        content:
          "샴푸 후 가볍게 수건으로 닦은 머리카락에 소량을 바르고 부드럽게 마사지합니다. 빗으로 빗어줍니다. 충분히 수건으로 말린 뒤 스타일링하세요.",
      },
      {
        title: "NO RINSE 샴푸 캡",
        content:
          "샴푸와 컨디셔닝을 한 번에! 헹굼이 필요 없는 샴푸 캡을 머리에 씌우고 15–20초간 머리카락이 적셔질 때까지 캡을 통해 마사지합니다. 길이가 길거나 더 더러운 머리카락은 시간을 늘리거나 캡을 하나 더 사용하세요. 사용 후 캡은 제거하여 버립니다. 충분히 수건으로 말린 뒤 빗질하고 스타일링하세요.\n\nTIP: 전자레인지에 15초간 데우면 따뜻한 샴푸 경험을 할 수 있습니다.",
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
          "모발을 상쾌하고 깨끗하게 유지",
          "헹굴 필요 없음",
          "파라벤 무첨가, pH 밸런스",
          "병원 테스트 및 승인",
          "성인 및 어린이 모두 원하는 만큼 자주 사용 가능",
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
          "헹굴 필요 없음",
          "잔여물·기름기 없음",
          "성인 및 어린이 모두 원하는 만큼 자주 사용 가능",
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
      "노린스 바디 워시, 바디 바스, 목욕 타월, 페리 워시 제품은 피부를 깨끗하고 상쾌하게 유지합니다. 침상 목욕이 필요한 분이나 욕조·샤워가 어려운 분에게 이상적입니다. 부드럽고 안전하며 효과적인 포뮬러로 매일 사용할 수 있습니다. 집, 병원, 요양시설 또는 이동 중에도 쾌적한 목욕 경험을 선사합니다.",
    pageTitle: "노린스",
    usageBlocks: [
      {
        title: "NO RINSE 바디 바스",
        content:
          "농축 포뮬러입니다. 따뜻한 물 약 1리터에 용기 뚜껑 4개 정도의 양을 희석합니다. 희석액을 수건에 적셔서 몸을 세정하고 마른 수건으로 물기를 닦아줍니다. 손 비누로 사용하거나 샤워 시에는 그대로 사용할 수도 있습니다.",
      },
      {
        title: "NO RINSE 바디워시 & NO RINSE 포밍 바디워시",
        content:
          "희석 없이 즉시 사용 가능한 제품입니다. 몸에 직접 혹은 바디워시를 타월에 적당량을 적신 후 마사지를 하듯 몸을 세정하고 마른 수건으로 물기를 닦아줍니다.",
      },
      {
        title: "NO RINSE 목욕 타월",
        content:
          "밀봉된 포장에서 바로 사용할 수 있는 일회용 목욕 타월로, 일상적인 목욕의 편리함을 제공하는 최고의 제품입니다. 자기 관리, 타인 돌봄, 야외 활동, 그리고 이동 중에도 이상적입니다.",
      },
      {
        title: "NO RINSE 페리 워시",
        content:
          "헹굼 없이 회음부 위생을 위해 부위에 직접 바르십시오. 따뜻한 젖은 수건으로 잔여물을 제거하십시오. 오염이 심한 경우 다시 바르고 닦아낸 후 가볍게 두드려 말리십시오.",
      },
    ],
    layout: "body",
    bathingChartHref:
      "https://cleanlifeproducts.com/wp-content/uploads/CL_BatingChart.pdf",
    products: [
      {
        name: "바디워시",
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
          "즉시 사용 가능",
          "알코올 무첨가",
          "100% 만족 보장",
          "미국 제조",
        ],
      },
      {
        name: "바디 바스",
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
          "물과 희석 사용",
          "알코올 무첨가",
          "100% 만족 보장",
          "미국 제조",
        ],
      },
      {
        name: "목욕 타월",
        nameColor: "#00c1de",
        image: images.productPages.bodyWipes,
        imageAlign: "right",
        skus: [{ label: "WIPES", sku: "01000" }],
        bullets: [
          "즉시 사용 가능",
          "일회용",
          "냄새 제거",
          "라텍스 및 알코올 무첨가",
          "100% 만족 보장",
        ],
      },
      {
        name: "페리 워시",
        nameColor: "#8093dc",
        image: images.productPages.bodyPeri,
        imageAlign: "right",
        skus: [
          { label: "8 OZ", sku: "00700" },
          { label: "1 GALLON", sku: "00710" },
        ],
        bullets: [
          "간편하고 품격 있는 사용",
          "안전하고 부드러움",
          "간병인들이 선호",
          "알코올 무첨가",
          "100% 만족 보장",
          "미국 제조",
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
      "집, 직장, 이동 중에도 하루 종일 자신과 사랑하는 사람들에게 깨끗한 손의 편안함과 안전을 제공하십시오.. 포밍 핸드 워시는 비누와 물처럼 실제로 먼지를 제거하고 손을 깨끗하고 상쾌하게 해줍니다. 자동차, 차고, 배낭 또는 운동 가방에 항상 비치해 두세요. 알로에 성분이 함유되어 보습 효과를 제공합니다.",
    pageTitle: "노린스",
    usageBlocks: [
      {
        title: "NO RINSE 포밍 핸드 워시",
        content:
          "손바닥에 소량을 바릅니다. 20초간 손 전체, 손가락, 손톱까지 문지릅니다. 천이나 종이 수건으로 닦아냅니다.",
      },
    ],
    layout: "hand",
    handSideImages: [
      images.productPages.handSmall1,
      images.productPages.handSmall2,
    ],
    products: [
      {
        name: "포밍 핸드 워시",
        nameColor: "#00c1de",
        image: images.productPages.handWide,
        imageAlign: "right",
        skus: [{ label: "8 OZ", sku: "00946" }],
        bullets: [
          "손을 깨끗하고 상쾌하게",
          "알코올 무첨가",
          "100% 만족 보장",
          "미국 제조",
        ],
      },
    ],
  },
};

export function getProductPage(key: ProductPageData["key"]) {
  return productPages[key];
}
