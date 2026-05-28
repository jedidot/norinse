"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { contactCountries } from "@/lib/contact/data";
import type { ContactFormPayload } from "@/lib/contact/types";

const inputClass =
  "w-full rounded-[3px] border border-black/25 bg-white px-3.5 text-base leading-[19px] text-black/70 outline-none focus:border-brand-blue";
const inputHeight = "h-[43px]";
const labelClass = "mb-1 block text-base leading-[19px] text-black/85";
const sublabelClass = "mt-1 block text-sm leading-[17px] text-black/55";

type ContactFormProps = {
  className?: string;
};

function readFormData(form: HTMLFormElement): ContactFormPayload {
  const data = new FormData(form);
  const contactByPhone = data.get("contactByPhone");

  return {
    name: String(data.get("name") ?? "").trim(),
    company: String(data.get("company") ?? "").trim(),
    phone: String(data.get("phone") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    address1: String(data.get("address1") ?? "").trim(),
    address2: String(data.get("address2") ?? "").trim(),
    city: String(data.get("city") ?? "").trim(),
    state: String(data.get("state") ?? "").trim(),
    postal: String(data.get("postal") ?? "").trim(),
    country: String(data.get("country") ?? "").trim(),
    contactByPhone: contactByPhone === "yes" ? "yes" : "no",
    message: String(data.get("message") ?? "").trim(),
    website: String(data.get("website") ?? "").trim(),
  };
}

export function ContactForm({ className }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const payload = readFormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok) {
        setError(result.error ?? "문의 전송에 실패했습니다.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={cn("rounded-[3px] border border-brand-blue/20 bg-brand-sky/20 p-6", className)}>
        <p className="text-base text-brand-blue">
          문의가 접수되었습니다. 영업일 기준 1–2일 내에 답변드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form
      className={cn("space-y-[15px]", className)}
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      {error && (
        <div className="rounded-[3px] border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          이름 <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className={cn(inputClass, inputHeight)}
        />
      </div>

      <div>
        <label htmlFor="contact-company" className={labelClass}>
          회사
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          className={cn(inputClass, inputHeight)}
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          전화
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          className={cn(inputClass, inputHeight)}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          이메일 <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className={cn(inputClass, inputHeight)}
        />
      </div>

      <fieldset className="space-y-[15px] border-0 p-0">
        <legend className={cn(labelClass, "mb-2")}>주소</legend>

        <div>
          <input
            id="contact-address1"
            name="address1"
            type="text"
            className={cn(inputClass, inputHeight)}
          />
          <label htmlFor="contact-address1" className={sublabelClass}>
            주소 1
          </label>
        </div>

        <div>
          <input
            id="contact-address2"
            name="address2"
            type="text"
            className={cn(inputClass, inputHeight)}
          />
          <label htmlFor="contact-address2" className={sublabelClass}>
            주소 2
          </label>
        </div>

        <div className="grid gap-[15px] sm:grid-cols-2">
          <div>
            <input
              id="contact-city"
              name="city"
              type="text"
              className={cn(inputClass, inputHeight)}
            />
            <label htmlFor="contact-city" className={sublabelClass}>
              도시
            </label>
          </div>
          <div>
            <input
              id="contact-state"
              name="state"
              type="text"
              className={cn(inputClass, inputHeight)}
            />
            <label htmlFor="contact-state" className={sublabelClass}>
              주/도
            </label>
          </div>
        </div>

        <div className="grid gap-[15px] sm:grid-cols-2">
          <div>
            <input
              id="contact-postal"
              name="postal"
              type="text"
              className={cn(inputClass, inputHeight)}
            />
            <label htmlFor="contact-postal" className={sublabelClass}>
              우편번호
            </label>
          </div>
          <div>
            <select
              id="contact-country"
              name="country"
              defaultValue="KR"
              className={cn(inputClass, inputHeight)}
            >
              {contactCountries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            <label htmlFor="contact-country" className={sublabelClass}>
              국가
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset className="border-0 p-0">
        <legend className={cn(labelClass, "mb-2")}>
          전화로 연락받으시겠습니까?
        </legend>
        <ul className="flex flex-wrap gap-6">
          <li>
            <label className="inline-flex items-center gap-2 text-base text-black/85">
              <input type="radio" name="contactByPhone" value="yes" />
              예
            </label>
          </li>
          <li>
            <label className="inline-flex items-center gap-2 text-base text-black/85">
              <input type="radio" name="contactByPhone" value="no" defaultChecked />
              아니오
            </label>
          </li>
        </ul>
      </fieldset>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          문의 및 질문
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          className={cn(inputClass, "min-h-[120px] py-3")}
        />
      </div>

      <div className="pt-2.5">
        <button
          type="submit"
          disabled={submitting}
          className="h-[41px] rounded-[3px] bg-[#066aab] px-[15px] text-[17px] text-white transition-opacity hover:opacity-90 disabled:opacity-70"
        >
          {submitting ? "전송 중..." : "제출"}
        </button>
      </div>
    </form>
  );
}
