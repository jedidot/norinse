"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/lib/faq/data";
import { typo } from "@/lib/typography";

type FaqAccordionProps = {
  items: FaqItem[];
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 text-brand-blue transition-transform duration-200",
        open && "rotate-90"
      )}
      aria-hidden
    >
      ›
    </span>
  );
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div id="faq" className="space-y-2.5">
      {items.map((item) => {
        const open = openIds.has(item.id);
        return (
          <article key={item.id} className="border-b border-gray-200 last:border-b-0">
            <h4 className="m-0">
              <button
                type="button"
                className="flex w-full items-start gap-3 py-3.5 text-left"
                onClick={() => toggle(item.id)}
                aria-expanded={open}
              >
                <ChevronIcon open={open} />
                <span className={typo.faqQuestion}>
                  {item.question}
                </span>
              </button>
            </h4>
            {open && (
              <div className="pb-5 pl-[30px]">
                <p className={typo.faqAnswer}>
                  {item.answer}
                </p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
