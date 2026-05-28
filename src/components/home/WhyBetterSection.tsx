import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";
import { typo } from "@/lib/typography";
import { cn } from "@/lib/utils";

const dict = getDictionary();

const iconMap = {
  alternative: images.icons.alternative,
  easy: images.icons.easy,
  paraben: images.icons.paraben,
};

export function WhyBetterSection() {
  return (
    <section className="bg-brand-lavender py-10 md:py-16">
      <Container>
        <SectionHeading align="center" light className="mb-12 font-normal">
          {dict.home.whyBetter.title}
        </SectionHeading>

        <div className="space-y-12">
          {dict.home.whyBetter.items.map((item, index) => (
            <div
              key={item.title}
              className={`grid items-center gap-6 md:grid-cols-12 ${
                index === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`md:col-span-3 ${
                  index === 1 ? "md:order-2 md:text-right" : ""
                }`}
              >
                <OptimizedImage
                  src={iconMap[item.icon]}
                  alt=""
                  width={626}
                  height={626}
                  className={`mx-auto max-w-[180px] ${index === 1 ? "md:ml-auto md:mr-0" : ""}`}
                />
              </div>
              <div className={`md:col-span-9 ${index === 1 ? "md:order-1" : ""}`}>
                <h3 className={cn(typo.blockTitle, "mb-3")}>
                  {item.title}
                </h3>
                <p className={typo.bodyBlue}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
