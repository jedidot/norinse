import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ProductsSection } from "@/components/home/ProductsSection";
import { WhyBetterSection } from "@/components/home/WhyBetterSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { WhereToBuyPreview } from "@/components/home/WhereToBuyPreview";
import { AudienceCards } from "@/components/home/AudienceCards";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ProductsSection />
      <WhyBetterSection />
      <ProductShowcase />
      <TestimonialsCarousel />
      <WhereToBuyPreview />
      <AudienceCards />
    </>
  );
}
