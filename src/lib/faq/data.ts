export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "gluten-free",
    question: "제품에 글루텐이 함유되어 있나요?",
    answer: "네, No-Rinse® 제품의 모든 성분에는 글루텐이 함유되어 있지 않습니다.",
  },
  {
    id: "shampoo-amount",
    question: "No-Rinse® 샴푸는 얼마나 사용해야 하나요?",
    answer:
      "No-Rinse® 샴푸 사용법이 궁금하시다면, 팁을 알려드립니다. 머리카락이 완전히 적셔질 때까지 바른 뒤 마사지하고, 수건으로 충분히 닦아 최대한 수분을 제거하세요.",
  },
  {
    id: "shampoo-cap-microwave",
    question: "전자레인지에서 No-Rinse® 샴푸 캡을 어떻게 데우나요?",
    answer:
      "포장을 열어 공기를 빼고 캡을 포장 안에 둔 채 15초 이내로만 데우세요. 머리에 쓰기 전에 캡이 너무 뜨겁지 않은지 확인하세요. 뜨거운 샴푸 캡은 절대 사용하지 마세요.",
  },
  {
    id: "perm",
    question: "펌 전후에 No-Rinse® 샴푸를 사용할 수 있나요?",
    answer:
      "네. pH 밸런스가 맞춰져 있어 안전합니다. 액체 샴푸이므로 펌 후 2일이 지난 뒤 사용하세요.",
  },
  {
    id: "hair-color",
    question: "No-Rinse® 샴푸가 염색을 빠지게 하나요?",
    answer:
      "모든 샴푸가 어느 정도는 그렇습니다. No-Rinse®는 pH 밸런스가 맞춰져 있어 다른 많은 샴푸보다 색상에 미치는 영향이 훨씬 적습니다. 매우 순합니다.",
  },
  {
    id: "hair-type",
    question: "머리카락이 굵거나 가늘어도 No-Rinse® 샴푸를 사용할 수 있나요?",
    answer: "네, No-Rinse® 샴푸는 모든 모발 타입에 사용할 수 있습니다.",
  },
  {
    id: "blow-dry",
    question: "No-Rinse® 샴푸 사용 후 드라이기를 사용할 수 있나요?",
    answer:
      "네. 먼저 수건으로 최대한 수분을 제거한 뒤, 평소처럼 드라이기를 사용하세요.",
  },
  {
    id: "twice",
    question: "No-Rinse® 샴푸를 두 번 사용할 수 있나요?",
    answer: "네, 머리카락이 특히 더럽거나 기름기가 많을 때 사용할 수 있습니다.",
  },
  {
    id: "frequency",
    question: "No-Rinse® 샴푸는 얼마나 자주 사용할 수 있나요?",
    answer:
      "No-Rinse® 샴푸는 필요할 때마다 매일 사용할 수 있습니다. 많은 분들이 평생 사용해 왔습니다.",
  },
  {
    id: "warm-shampoo",
    question: "No-Rinse® 샴푸를 따뜻하게 데울 수 있나요?",
    answer: "네. 따뜻한 물이 담긴 대야에 병을 넣어 데우세요. 사용 전 온도를 확인하세요.",
  },
  {
    id: "baby",
    question: "No-Rinse® 샴푸와 No-Rinse® 바디 바스를 아기에게 사용할 수 있나요?",
    answer: "네. No-Rinse®는 깨끗하게 세정하며 피부에도 부드럽습니다.",
  },
  {
    id: "eyes",
    question: "No-Rinse® 제품이 눈에 들어가면 어떻게 하나요?",
    answer: "눈에 닿으면 물로 헹구세요.",
  },
  {
    id: "pets",
    question: "No-Rinse® 샴푸를 반려견이나 고양이에게 사용할 수 있나요?",
    answer:
      "네, 사람에게 사용하는 방법과 동일하게 따르세요. 샴푸가 눈에는 자극을 줄 수 있으니, 얼굴 주변에 사용할 때는 주의하세요.",
  },
  {
    id: "body-bath-vs-wash",
    question: "바디 바스(Body Bath)와 바디 워시(Body Wash)의 차이는 무엇인가요?",
    answer:
      "No-Rinse® 바디 바스는 농축된 제품입니다. (물 1리터당 바디바스 약 30mL를 섞으세요.)\nNo-Rinse® 바디 워시는 병에서 바로 사용할 수 있습니다.",
  },
];

export const faqPageMeta = {
  seo: {
    title: "FAQ: No-Rinse® 샴푸 사용법 | 노린스",
    description:
      "No-Rinse® 샴푸 사용법이 궁금하신가요? 노린스 제품에 대한 자주 묻는 질문과 답변을 확인하세요.",
  },
  heroTitle:
    "FAQ: No-Rinse® 샴푸 사용법이 궁금하신가요? 도와드리겠습니다.",
};
