"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

const desktopSlides = [
  { bg: images.hero.handFoam, key: 0 },
  { bg: images.hero.slide2, key: 1 },
  { bg: images.hero.slide3, key: 2 },
  { bg: images.hero.slide4, key: 3 },
  { bg: images.hero.slide5, key: 4 },
];

function HeroSlideText({
  slide,
}: {
  slide: (typeof dict.home.hero)[number];
}) {
  return (
    <h2 className="home-bubble mx-auto max-w-[70%] text-center text-xl font-medium text-white sm:text-2xl md:text-3xl lg:text-4xl lg:leading-snug">
      {slide.text}
      {slide.highlight && <strong>{slide.highlight}</strong>}
      {slide.textAfter}
    </h2>
  );
}

function HeroBubble({ slideIndex }: { slideIndex: number }) {
  const slide = dict.home.hero[slideIndex];
  if (!slide) return null;

  return (
    <div
      className="flex min-h-[35vw] items-center justify-center bg-contain bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url(${images.hero.bubble})` }}
    >
      <HeroSlideText slide={slide} />
    </div>
  );
}

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  ]);
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
    <section className="relative overflow-hidden bg-white">
      {/* Desktop carousel */}
      <div className="hidden min-h-[695px] lg:block lg:h-[90vh]" ref={emblaRef}>
        <div className="flex h-full">
          {desktopSlides.map((item, index) => (
            <div
              key={item.key}
              className="relative min-w-0 flex-[0_0_100%]"
            >
              <div
                className="grid h-full min-h-[695px] grid-cols-1 items-center bg-cover bg-center lg:grid-cols-2 lg:h-[90vh]"
                style={{ backgroundImage: `url(${item.bg})` }}
              >
                <div />
                <HeroBubble slideIndex={index} />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {desktopSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`슬라이드 ${index + 1}`}
              className={cn(
                "h-2 w-2 rounded-full transition",
                selectedIndex === index ? "bg-brand-blue" : "bg-white/60"
              )}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden min-h-[500px] bg-cover bg-center md:block lg:hidden">
        <div
          className="grid min-h-[500px] grid-cols-1 items-center bg-cover bg-center sm:grid-cols-2"
          style={{ backgroundImage: `url(${images.hero.handFoam})` }}
        >
          <div />
          <HeroBubble slideIndex={0} />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div
          className="grid min-h-[420px] grid-cols-1 items-end bg-cover bg-center"
          style={{ backgroundImage: `url(${images.hero.handFoam})` }}
        >
          <HeroBubble slideIndex={0} />
        </div>
        <img
          src={images.hero.handFoamMobile}
          alt=""
          className="w-full"
          loading="eager"
        />
      </div>
    </section>
  );
}
