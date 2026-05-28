import { contactCountries } from "@/lib/contact/data";
import type { ContactFormPayload } from "@/lib/contact/types";

function countryLabel(code?: string) {
  if (!code) return "-";
  return contactCountries.find((c) => c.value === code)?.label ?? code;
}

export function formatContactEmail(payload: ContactFormPayload) {
  const addressParts = [
    payload.address1,
    payload.address2,
    [payload.city, payload.state].filter(Boolean).join(", "),
    payload.postal,
    countryLabel(payload.country),
  ].filter(Boolean);

  const lines = [
    `이름: ${payload.name}`,
    `회사: ${payload.company || "-"}`,
    `전화: ${payload.phone || "-"}`,
    `이메일: ${payload.email}`,
    `주소: ${addressParts.length ? addressParts.join(" / ") : "-"}`,
    `전화 연락 희망: ${payload.contactByPhone === "yes" ? "예" : "아니오"}`,
    "",
    "문의 및 질문:",
    payload.message || "-",
  ];

  return lines.join("\n");
}
