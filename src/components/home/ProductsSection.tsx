import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

const productCards = [
  {
    image: images.products.hairHome,
    label: dict.home.products.hair,
    href: "/hair-care/",
    color: "#df3faf",
  },
  {
    image: images.products.bodyHome,
    label: dict.home.products.body,
    href: "/body-care/",
    color: "#a2d45e",
  },
  {
    image: images.products.handHome,
    label: dict.home.products.hand,
    href: "/hand-care/",
    color: "#00c1de",
  },
];

export function ProductsSection() {
  return (
    <section id="our-products-home" className="bg-white py-10 md:py-16">
      <Container>
        <SectionHeading className="mb-10">{dict.home.products.title}</SectionHeading>
        <div className="grid gap-8 md:grid-cols-3">
          {productCards.map((card) => (
            <div key={card.href} className="text-center">
              <OptimizedImage
                src={card.image}
                alt={card.label}
                width={800}
                height={665}
                className="mx-auto mb-6"
              />
              <Button href={card.href} color={card.color}>
                {card.label}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
