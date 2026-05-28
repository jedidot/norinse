import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqItems, faqPageMeta } from "@/lib/faq/data";
import { typo } from "@/lib/typography";

export function FaqPageView() {
  return (
    <>
      <section className="bg-brand-sky py-10">
        <Container>
          <h1 className={typo.pageHero}>{faqPageMeta.heroTitle}</h1>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <FaqAccordion items={faqItems} />
        </Container>
      </section>
    </>
  );
}

export function getFaqMetadata() {
  return faqPageMeta.seo;
}
