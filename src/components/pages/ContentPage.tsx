import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { typo } from "@/lib/typography";
import { cn } from "@/lib/utils";

type PageProps = {
  pageKey: keyof ReturnType<typeof getDictionary>["pages"];
  heroClassName?: string;
};

export function createPageMetadata(pageKey: PageProps["pageKey"]) {
  const dict = getDictionary();
  const page = dict.pages[pageKey];
  return buildMetadata({
    pageSeo: page.seo,
    path: `/${pageKey}/`,
  });
}

export function ContentPage({ pageKey, heroClassName }: PageProps) {
  const dict = getDictionary();
  const page = dict.pages[pageKey];

  const sectionIds: Record<string, string[]> = {
    "where-to-buy": ["by-location", "retailers", "wholesale", "international"],
  };

  return (
    <>
      <section
        className={`bg-brand-blue py-16 md:py-24 ${heroClassName ?? ""}`}
      >
        <Container>
          <h1 className={typo.pageHero}>{page.title}</h1>
          {page.subtitle && (
            <p className="mt-3 text-base text-white/90 md:text-lg">{page.subtitle}</p>
          )}
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl space-y-10">
          {page.sections?.map((section, index) => (
            <article
              key={index}
              id={sectionIds[pageKey]?.[index]}
            >
              {section.heading && (
                <h2 className={cn(typo.blockTitle, "mb-3")}>
                  {section.heading}
                </h2>
              )}
              <p className={typo.bodyGray}>{section.content}</p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
