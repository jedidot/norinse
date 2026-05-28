import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

const iconMap = {
  location: images.icons.location,
  online: images.icons.online,
  amazon: images.icons.amazon,
  wholesale: images.icons.wholesale,
};

export function WhereToBuyPreview() {
  return (
    <section className="bg-brand-sky py-10 md:py-16">
      <Container>
        <SectionHeading align="center" light className="mb-10 font-normal">
          {dict.home.whereToBuy.title}
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.whereToBuy.cards.map((card) => (
            <div key={card.title} className="px-5 text-center">
              <Link href={card.href} target={card.external ? "_blank" : undefined}>
                <OptimizedImage
                  src={iconMap[card.icon]}
                  alt=""
                  width={250}
                  height={250}
                  className="mx-auto px-8 md:px-[75px]"
                />
              </Link>
              <div className="where-to-buy-copy mt-4">
                <p className="text-center">
                  <Link href={card.href} className="text-brand-blue">
                    <strong className="block text-base font-semibold">{card.title}</strong>
                    <span className="text-sm">{card.subtitle}</span>
                  </Link>
                </p>
                <hr className="wtb-divider" />
                <p className="text-center">
                  <Link
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    className="text-sm text-brand-blue hover:underline"
                  >
                    {card.linkText}
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
