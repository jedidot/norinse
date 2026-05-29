import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhereToBuyCards } from "@/components/where-to-buy/WhereToBuyCards";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

export function WhereToBuyPreview() {
  return (
    <section className="bg-brand-sky py-10 md:py-16">
      <Container>
        <SectionHeading align="center" light className="mb-10 font-normal">
          {dict.home.whereToBuy.title}
        </SectionHeading>
        <WhereToBuyCards />
      </Container>
    </section>
  );
}
