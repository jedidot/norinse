import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";
import { typo } from "@/lib/typography";
import { cn } from "@/lib/utils";

const dict = getDictionary();

const showcases = [
  {
    ...dict.home.showcase.hair,
    href: "/hair-care/",
    bg: images.products.hairShowcase,
    imageLeft: true,
  },
  {
    ...dict.home.showcase.body,
    href: "/body-care/",
    bg: images.products.bodyShowcase,
    imageLeft: false,
  },
  {
    ...dict.home.showcase.hand,
    href: "/hand-care/",
    bg: images.products.handShowcase,
    imageLeft: true,
  },
];

export function ProductShowcase() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionHeading align="center" className="mb-12 text-brand-purple">
          <span className="font-light">
            {dict.home.showcase.subtitle.split(" ").slice(0, 2).join(" ")}{" "}
            <strong className="font-semibold">
              {dict.home.showcase.subtitle.split(" ").slice(2).join(" ")}
            </strong>
          </span>
        </SectionHeading>

        <div className="space-y-8">
          {showcases.map((item) => (
            <div
              key={item.href}
              className="grid items-center gap-5 md:grid-cols-2 md:gap-8"
            >
              <div
                className={`min-h-[280px] rounded-sm bg-cover bg-center md:min-h-[415px] ${
                  item.imageLeft ? "md:order-1" : "md:order-2"
                }`}
                style={{ backgroundImage: `url(${item.bg})` }}
                role="img"
                aria-label={item.title}
              />
              <div className={item.imageLeft ? "md:order-2" : "md:order-1"}>
                <h3
                  className="mb-4 text-2xl font-semibold leading-snug md:text-3xl"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className={cn(typo.bodyBlue, "mb-5")}>
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href={item.href} color={item.color}>
                    {dict.common.moreInfo}
                  </Button>
                  <Button href="#" variant="ghost" color={item.color}>
                    {dict.common.watchVideo} ▶
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
