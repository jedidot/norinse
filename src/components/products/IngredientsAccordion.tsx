"use client";

import { useState } from "react";
import type { IngredientBlock, SdsLink } from "@/lib/product-pages/types";

type IngredientsAccordionProps = {
  ingredients: IngredientBlock[];
  sds: SdsLink[];
};

export function IngredientsAccordion({
  ingredients,
  sds,
}: IngredientsAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="ingredient-list mt-6 border-t border-gray-200">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left text-brand-blue"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-base font-normal">성분 & SDS</span>
        <span className="text-xl leading-none text-brand-blue">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="pb-6">
          {ingredients.map((item) => (
            <div key={item.title} className="mb-4 text-brand-blue">
              <strong className="block">{item.title}</strong>
              <span className="text-sm">{item.content}</span>
            </div>
          ))}
          <div className="flex flex-wrap gap-3">
            {sds.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sds-button inline-flex items-center gap-2 border-2 px-4 py-2 text-sm transition-colors hover:text-white"
                style={{
                  borderColor: link.color,
                  color: link.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = link.color;
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = link.color;
                }}
              >
                {link.label}
                <span aria-hidden>↓</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
