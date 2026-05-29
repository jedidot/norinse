import { Container } from "@/components/ui/Container";
import { OnlineMarketplaceLogos } from "@/components/where-to-buy/OnlineMarketplaceLogos";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { typo } from "@/lib/typography";
import { cn } from "@/lib/utils";

const dict = getDictionary();
const page = dict.pages["where-to-buy"];

const sectionIds = ["by-location", "retailers", "wholesale"] as const;

export function WhereToBuyPageView() {
  return (
    <>
      <section className="bg-brand-sky py-10">
        <Container>
          <h1 className={typo.pageHero}>{page.title}</h1>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl space-y-10">
          {page.sections?.map((section, index) => (
            <article key={sectionIds[index] ?? index} id={sectionIds[index]}>
              {section.heading && (
                <h2 className={cn(typo.blockTitle, "mb-3")}>{section.heading}</h2>
              )}
              <p className={typo.bodyGray}>{section.content}</p>
              {sectionIds[index] === "retailers" && <OnlineMarketplaceLogos />}
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}

export function getWhereToBuyMetadata() {
  return buildMetadata({
    pageSeo: page.seo,
    path: "/where-to-buy/",
  });
}
