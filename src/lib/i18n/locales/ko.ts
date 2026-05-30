import type { Dictionary } from "../types";

const ko: Dictionary = {
  site: {
    name: "노린스",
    tagline: "물 없이 깨끗하게, No-Rinse®",
    url: "https://norinse.co.kr",
    locale: "ko",
    lang: "ko",
  },
  nav: [
    { label: "홈", href: "/" },
    {
      label: "제품",
      href: "#",
      children: [
        { label: "헤어케어", href: "/hair-care/" },
        { label: "바디케어", href: "/body-care/" },
        { label: "핸드케어", href: "/hand-care/" },
      ],
    },
    {
      label: "구매처",
      href: "/where-to-buy/",
      children: [
        { label: "지역별 매장", href: "/where-to-buy/#by-location" },
        { label: "온라인&편의점", href: "/where-to-buy/#retailers" },
        { label: "도매", href: "/where-to-buy/#wholesale" },
      ],
    },
    { label: "FAQ", href: "/faq/" },
    { label: "문의하기", href: "/contact-us/" },
  ],
  footer: {
    contactTitle: "문의하기",
    companyName: "메디캠프",
    address: "주소: 서울시 영등포구 당산로 153-1",
    customerServiceLabel: "고객센터",
    phone: "02-3667-7017",
    fax: "02-3667-6017",
    email: "medicamp@medicamp.kr",
    emailButton: "이메일 문의",
    privacy: "개인정보처리방침",
    aboutTitle: "메디캠프 소개",
    whereToBuyTitle: "구매처",
    copyright: "© 2026 메디캠프. All rights reserved.",
  },
  common: {
    skipToContent: "본문으로 바로가기",
    scrollTop: "맨 위로",
    moreInfo: "자세히 보기",
    watchVideo: "영상 보기",
    learnMore: "더 알아보기",
  },
  home: {
    seo: {
      title: "노린스 No-Rinse® | 물 없는 샴푸·핸드·바디 워시",
      description:
        "노린스 No-Rinse® 제품은 전통적인 목욕, 샴푸, 손 씻기의 편안하고 세심한 대안입니다. 물 없이도 깨끗하고 상쾌한 케어를 경험하세요.",
    },
    hero: [
      { text: "비누와 물의 ", highlight: "최고의 대안" },
      { text: "개인 ", highlight: "홈케어", textAfter: "… 쉽고 품위 있게." },
      { text: "삶의 모든 야외활동을 ", highlight: "쉽고 편리하게" },
      { text: "", highlight: "번거로움 없이", textAfter: " 믿을 수 있는 깨끗한 머리, 피부, 손." },
      { text: "", highlight: "언제 어디서나", textAfter: " 깨끗하게!" },
    ],
    products: {
      title: "제품 라인업",
      hair: "헤어케어",
      body: "바디케어",
      hand: "핸드케어",
    },
    whyBetter: {
      title: "노린스가 더 나은 이유",
      items: [
        {
          title: "간편한 목욕·샴푸·손 씻기 대안",
          description:
            "부드럽고 효과적인 노린스 No-Rinse® 제품은 전통적인 목욕, 샴푸, 손 씻기 방법에 대한 편안하고 세심한 대안을 제공합니다. 물 없는 샴푸와 바디 워시로 몸과 손은 깨끗하고 상쾌하게, 머릿결은 부드럽고 아름답게 유지할 수 있습니다. 친환경적입니다.",
          icon: "alternative",
        },
        {
          title: "너무 쉽고, 너무 편해요",
          description:
            "노린스 No-Rinse® 제품은 노인, 성인, 어린이 등 개인 위생관리가 어렵거나 불편한 거의 모든 상황에 이상적입니다. 쾌적하고 품위 있는 돌봄이나 자기 위생을 위해 쉽게 사용할 수 있습니다.",
          icon: "easy",
        },
        {
          title: "모든 피부 타입에 적합",
          description:
            "파라벤과 알코올이 함유되지 않은 노린스 No-Rinse® 제품은 모든 피부타입과 성인, 어린이 모두에게 완벽합니다. 가장 민감한 피부에 자주 사용해도 자극이 없습니다. 또한 잔여물이 없습니다. 병원에서 테스트/승인되었습니다.",
          icon: "paraben",
        },
      ],
    },
    showcase: {
      subtitle: "비누와 물의 최고의 대안",
      hair: {
        title: "노린스 헤어케어",
        description:
          "즉시 사용 가능한 헤어케어 제품으로 성인과 어린이 모두 머리를 깨끗하고 부드럽게 만들어 줍니다. 물 없는 샴푸를 바르고 마사지한 뒤 수건으로 닦고 스타일링하세요. 헹굼이 필요 없습니다. 헹굼 없이도 지저분함이 남지 않습니다. 알코올이 없어 건조함이 없습니다.",
        color: "#df3faf",
      },
      body: {
        title: "노린스 바디케어",
        description:
          "매일 사용하여 물 없는 목욕을 경험할 수 있으며 성인과 어린이 모두 깨끗하고 상쾌하며 냄새 없는 피부로 만들어 줍니다. 잔여물이 없고 알코올이 없어 건조함이 없습니다. 민감한 피부에도 안전하고 부드럽습니다. 인기있는 바디 바스, 바디 워시, 목욕 타월, 페리 워시는 사용하기 쉽습니다.",
        color: "#a2d45e",
      },
      hand: {
        title: "노린스 핸드케어",
        description:
          "No-Rinse 포밍 핸드 워시는 어디든 함께하며 비누와 물처럼 언제 어디서나 깨끗한 손관리를 할 수 있습니다. 자극이 없어 성인과 어린이의 민감한 피부에도 안전하고 부드럽습니다. 파라벤과 알코올이 없고 잔여물이 남지 않습니다.",
        color: "#00c1de",
      },
    },
    testimonials: {
      title: "고객들의 이야기",
      items: [
        {
          quote:
            "아버지는 누워 계시고 피부가 예민하지만 매일 아침 목욕을 원하십니다. 바디 바스로 목욕을 즐기시고 항상 기분이 좋아지십니다. 바디 바스는 정말 좋은 제품입니다. 감사합니다.",
          image: "man",
          quoteColor: "blue",
          imagePosition: "left",
        },
        {
          quote:
            "제 딸은 장애가 있어서 머리에 물이 닿는 것을 싫어합니다. 목욕 시간이 항상 힘들었습니다. 이제 No-Rinse 샴푸 덕분에 스트레스 없이 목욕할 수 있습니다. 또한 최근 병원에 입원했을 때 그곳에서 목욕타월도 사용해 봤는데 정말 좋았습니다.",
          image: "girl",
          quoteColor: "purple",
          imagePosition: "left",
        },
        {
          quote:
            "No-Rinse 샴푸를 쓸 때마다 '시간을 많이 절약해 줘서 고맙다'고 속으로 말합니다. 바쁜 간호사에게는 품질이 떨어지는 제품을 쓸 시간이 없습니다. 높은 기준에 감사드립니다.",
          image: "nurse",
          quoteColor: "blue",
          imagePosition: "right",
        },
        {
          quote:
            "샴푸 캡은 정말 환상적입니다. 태즈메이니아 9일 하이킹에서 여러 개 사용했고 부드럽고 깨끗하고 달콤한 냄새의 머릿결을 유지했습니다. 지금까지 써 본 드라이 파우더 샴푸보다 훨씬 낫습니다.",
          image: "hiker",
          quoteColor: "orange",
          imagePosition: "left",
        },
        {
          quote:
            "알려드리고 싶었어요. 저는 항상 귀사의 샴푸를 사용합니다. 남편과 저는 트럭 운전을 하는데 차를 세우고 샤워하기가 항상 편한 것은 아닙니다. 제 삶을 조금 더 편하게 만들어 주셔서 감사합니다.",
          image: "trucker",
          quoteColor: "green",
          imagePosition: "right",
        },
      ],
    },
    whereToBuy: {
      title: "구매처",
      cards: [
        {
          title: "지역별 매장",
          subtitle: "의료용품 전문점과 약국",
          linkText: "지역별 매장 →",
          href: "/where-to-buy/#by-location",
          icon: "location",
        },
        {
          title: "온라인&편의점",
          subtitle: "온라인 스토어",
          linkText: "온라인·편의점 →",
          href: "/where-to-buy/#retailers",
          icon: "online",
        },
        {
          title: "도매",
          subtitle: "의료시설, 딜러, 리테일러",
          linkText: "도매 →",
          href: "/where-to-buy/#wholesale",
          icon: "wholesale",
        },
      ],
    },
    audience: {
      title: "노린스는 이런 분들을 위해",
      cards: [
        {
          title: "개인 관리",
          description:
            "노린스 NO RINSE는 독립적인 생활을 유지하는 데 도움이 되는 부드럽고 효과적인 제품으로 여러분을 지원합니다.",
          image: "homeCare",
          headerColor: "#00c1de",
        },
        {
          title: "아웃도어/스포츠",
          description:
            "개인 위생을 소홀히 하지 않고 좋아하는 야외 활동을 즐기세요. 노린스 NO RINSE 제품으로 언제 어디서든 깨끗한 피부, 머리, 손을 유지하세요.",
          image: "outdoors",
          headerColor: "#a2d45e",
        },
        {
          title: "간병·요양",
          description:
            "사랑하는 사람이 당신을 의지할 때, 노린스 NO RINSE로 언제 어디서나 쾌적하고 번거로움 없는 깨끗한 피부, 머리, 손을 경험하게 하세요.",
          image: "specialNeeds",
          headerColor: "#ff9e18",
        },
        {
          title: "여행/출장",
          description:
            "이동 중에도 개인 위생을 유지하세요. 호텔, 캠핑, 장거리 여행 어디서든 노린스 NO RINSE로 깨끗함을 지킬 수 있습니다.",
          image: "traveling",
          headerColor: "#8093dc",
        },
      ],
    },
  },
  pages: {
    "hair-care": {
      seo: {
        title: "노린스 No-Rinse® 샴투 | 물 없는 샴푸와 캡",
        description:
          "지저분함 없음. 잔여물 없음. 알코올 없음. 노린스 No-Rinse® 샴푸가 전통적인 샴푸와 컨디셔닝의 신뢰할 수 있고 부드러운 대안인 이유입니다.",
      },
      title: "헤어케어",
      subtitle: "물 없이 깨끗하고 부드러운 머릿결",
      sections: [
        {
          heading: "No-Rinse® 샴푸",
          content:
            "물이나 헹굼 없이 머릿결을 깨끗하고 부드럽게. 두피에 바르고 마사지한 뒤 수건으로 닦아내세요. 알코올 프리로 건조함 없이, 잔여물 없이 상쾌한 사용감을 제공합니다.",
        },
        {
          heading: "샴푸 캡",
          content:
            "일회용 샴푸 캡으로 더욱 간편하게. 캡을 착용하고 마사지 후 제거하면 깨끗하고 상쾌한 머릿결. 병원, 요양, 캠핑, 여행에 이상적입니다.",
        },
      ],
    },
    "body-care": {
      seo: {
        title: "노린스 No-Rinse® 바디케어 | 물 없는 목욕",
        description:
          "바디 바스, 바디 워시, 목욕 티슈, 페리 워시로 물 없이도 깨끗하고 상쾌한 피부를. 민감한 피부에도 안전합니다.",
      },
      title: "바디케어",
      subtitle: "물 없는 일상 목욕",
      sections: [
        {
          heading: "바디 바스 & 바디 워시",
          content:
            "피부에 바르고 닦아내기만 하면 됩니다. 잔여물과 알코올 없이 깨끗하고 상쾌한 피부. 민감한 피부에도 부드럽습니다.",
        },
        {
          heading: "목욕 티슈 & 페리 워시",
          content:
            "침대나 휠체어에서도 편리하게 사용할 수 있는 티슈형 제품. 부분 세정과 페리 케어에 특화된 포뮬러.",
        },
      ],
    },
    "hand-care": {
      seo: {
        title: "노린스 No-Rinse® 포밍 핸드 워시",
        description:
          "비누와 물처럼 언제 어디서나 작동하는 포밍 핸드 워시. 파라벤·알코올 프리, 잔여물 없음.",
      },
      title: "핸드케어",
      subtitle: "언제 어디서나 깨끗한 손",
      sections: [
        {
          heading: "No-Rinse 포밍 핸드 워시",
          content:
            "손에 펌핑 후 문지르고 닦아내기만 하면 됩니다. 진정한 세정력과 민감한 피부를 위한 순한 포뮬러. 휴대하기 편한 크기로 출퇴근, 여행, 캠핑에 적합합니다.",
        },
      ],
    },
    "where-to-buy": {
      seo: {
        title: "구매처 | 노린스 No-Rinse®",
        description: "지역 매장, 온라인, 도매, 해외 구매처 안내.",
      },
      title: "구매처",
      sections: [
        {
          heading: "지역별 매장",
          content: "전국 대학·종합병원, 요양병원 내외 의료용품 전문점과 약국에서 노린스 제품을 만나 보실 수 있습니다. 가까운 매장은 고객센터로 문의해 주세요.",
        },
        {
          heading: "온라인 & 편의점",
          content: "의료·전문 리테일러를 통해 주요 온라인몰에서 주문이 가능합니다. 전국 대학·종합병원내외 편의점에서도 노린스 제품을 만나 보실 수 있습니다.",
        },
        {
          heading: "도매",
          content: "전국적으로 인정받는 대부분의 의료 및 전문 유통업체에서 구입 가능합니다.",
        },
      ],
    },
    faq: {
      seo: {
        title: "자주 묻는 질문 | 노린스 No-Rinse®",
        description: "노린스 No-Rinse® 제품 사용법, 성분, 보관 등 자주 묻는 질문.",
      },
      title: "FAQ",
      sections: [
        {
          heading: "물 없이 어떻게 깨끗해지나요?",
          content:
            "특수 계면활성제가 먼지와 유분을 포집하고, 수건으로 닦아내면 깨끗해집니다. 헹굼이 필요 없는 포뮬러입니다.",
        },
        {
          heading: "민감한 피부에도 사용할 수 있나요?",
          content: "파라벤·알코올 프리이며, 병원 테스트를 거친 부드러운 포뮬러입니다. 어린이부터 시니어까지 사용 가능합니다.",
        },
        {
          heading: "잔여물이 남나요?",
          content: "아니요. 제품 설계상 잔여물 없이 깨끗하고 상쾌한 마무리를 제공합니다.",
        },
      ],
    },
    "contact-us": {
      seo: {
        title: "문의하기 | 노린스",
        description: "제품, 구매, 도매 문의는 노린스 고객센터로 연락해 주세요.",
      },
      title: "문의하기",
      sections: [
        {
          content:
            "제품, 구매처, 도매 및 기타 문의는 아래 연락처 또는 이메일로 문의해 주세요. 영업일 기준 1–2일 내 답변드립니다.",
        },
      ],
    },
    "privacy-policy": {
      seo: {
        title: "개인정보처리방침 | 노린스",
        description: "노린스 개인정보 수집·이용·보호에 관한 방침.",
      },
      title: "개인정보처리방침",
    },
  },
};

export default ko;
