import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

const audienceImages = images.audience;

export function AudienceCards() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionHeading className="mb-10">{dict.home.audience.title}</SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.audience.cards.map((card) => (
            <article key={card.title} className="overflow-hidden">
              <OptimizedImage
                src={audienceImages[card.image]}
                alt={card.title}
                width={600}
                height={450}
              />
              <h4
                className="flex min-h-[52px] items-center justify-center px-3 py-3 text-center text-lg font-medium text-white"
                style={{ backgroundColor: card.headerColor, lineHeight: 1 }}
              >
                {card.title}
              </h4>
              <p className="bg-white p-4 text-sm leading-relaxed text-brand-blue md:text-base">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
