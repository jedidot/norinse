"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

/** 원본: 1번만 contain·상단, 2~5번은 cover·풀너비 / 말풍선은 슬라이드 배경 위에 겹침 */
const desktopSlides = [
  {
    bg: images.hero.handFoam,
    key: 0,
    bgSize: "contain",
    bgPosition: "50% 0",
  },
  {
    bg: images.hero.slide2,
    key: 1,
    bgSize: "cover",
    bgPosition: "50% 50%",
  },
  {
    bg: images.hero.slide3,
    key: 2,
    bgSize: "cover",
    bgPosition: "50% 50%",
  },
  {
    bg: images.hero.slide4,
    key: 3,
    bgSize: "cover",
    bgPosition: "50% 50%",
  },
  {
    bg: images.hero.slide5,
    key: 4,
    bgSize: "cover",
    bgPosition: "50% 50%",
  },
] as const;

function HeroSlideText({
  slide,
}: {
  slide: (typeof dict.home.hero)[number];
}) {
  return (
    <h2 className="home-bubble text-xl font-medium text-white sm:text-2xl md:text-3xl lg:leading-snug">
      {'"'}
      {slide.text}
      {slide.highlight && <strong>{slide.highlight}</strong>}
      {slide.textAfter}
      {'"'}
    </h2>
  );
}

function HeroBubble({ slideIndex }: { slideIndex: number }) {
  const slide = dict.home.hero[slideIndex];
  if (!slide) return null;

  return (
    <div
      className={cn(
        "hero-bubble-wrap z-10 px-4",
        slideIndex === 0 && "hero-bubble-wrap--first"
      )}
      style={{ backgroundImage: `url(${images.hero.bubble})` }}
    >
      <HeroSlideText slide={slide} />
    </div>
  );
}

function HeroSlidePanel({
  item,
  slideIndex,
  className,
}: {
  item: (typeof desktopSlides)[number];
  slideIndex: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "hero-slide-panel row-start-2 grid h-full min-h-[695px] grid-cols-1 items-center overflow-visible bg-white bg-no-repeat min-[992px]:grid-cols-2",
        item.bgSize === "contain"
          ? "hero-slide-panel--contain"
          : "hero-slide-panel--cover",
        className
      )}
      style={{
        backgroundImage: `url(${item.bg})`,
        backgroundPosition: item.bgPosition,
      }}
    >
      <div className="hidden min-h-full min-[992px]:block" aria-hidden />
      <HeroBubble slideIndex={slideIndex} />
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
    <section className="relative overflow-x-hidden overflow-y-visible bg-white">
      {/* ≥992px — 원본 show-1200(≥1200) + hide-1200(992~1199) 모두 5슬라이드 캐러셀 */}
      <div className="hero-viewport relative hidden min-[992px]:block" ref={emblaRef}>
        <div className="flex h-[calc(100vh-var(--header-height))]">
          {desktopSlides.map((item, index) => (
            <div key={item.key} className="relative min-w-0 flex-[0_0_100%]">
              <div className="hero-slide-frame">
                <div aria-hidden />
                <HeroSlidePanel item={item} slideIndex={index} />
                <div aria-hidden />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
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

      {/* ≤991px — 원본 mobile-only: HandFoam 정적 컷만, 말풍선·캐러셀 없음 */}
      <div className="min-[992px]:hidden">
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
