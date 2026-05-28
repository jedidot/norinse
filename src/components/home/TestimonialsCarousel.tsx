"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

const testimonialImages = images.testimonials;

const quoteClassMap = {
  blue: "quote-blue",
  purple: "quote-purple",
  orange: "quote-orange",
  green: "quote-green",
};

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="hidden bg-brand-sky py-10 md:block md:py-16">
      <Container>
        <SectionHeading align="center" light className="mb-10">
          {dict.home.testimonials.title}
        </SectionHeading>
      </Container>

      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {dict.home.testimonials.items.map((item, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%]">
              <div
                className="grid min-h-[60vh] items-center bg-cover bg-[50%_25%] md:grid-cols-2"
                style={{
                  backgroundImage: `url(${testimonialImages[item.image]})`,
                }}
              >
                <div
                  className={cn(
                    "p-6 md:col-span-1 md:p-10 md:col-start-1",
                    item.imagePosition === "left"
                      ? "lg:pr-20"
                      : "md:col-start-2 lg:pl-20"
                  )}
                >
                  <p
                    className={cn(
                      "quote-mark text-lg leading-relaxed text-brand-blue md:text-xl md:leading-[1.75]",
                      quoteClassMap[item.quoteColor]
                    )}
                  >
                    <span>{item.quote}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="이전"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-5xl text-[#c3cbc8] hover:text-[#869791]"
          onClick={() => emblaApi?.scrollPrev()}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="다음"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-5xl text-[#c3cbc8] hover:text-[#869791]"
          onClick={() => emblaApi?.scrollNext()}
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {dict.home.testimonials.items.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`후기 ${index + 1}`}
            className={cn(
              "h-2 w-2 rounded-full",
              selectedIndex === index ? "bg-brand-blue" : "bg-white/70"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
