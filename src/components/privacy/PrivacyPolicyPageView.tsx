import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { privacyPageMeta } from "@/lib/privacy/data";
import { typo } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function PrivacyPolicyPageView() {
  const { title, intro, sections, effectiveDate } = privacyPageMeta;

  return (
    <section className="bg-white pb-16 pt-[calc(var(--header-height)+2.5rem)] md:pb-24 md:pt-[calc(var(--header-height)+3.5rem)]">
      <Container>
        {/* 원본: col-sm-8, h2 좌측 정렬 (컬러 히어로 없음) */}
        <div className="mx-auto max-w-none lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h1
              className={cn(
                typo.pageTitle,
                "mb-8 text-left font-normal text-brand-blue md:mb-10"
              )}
            >
              {title}
            </h1>

            <div className="space-y-10">
              <p className={typo.bodyGray}>{intro}</p>

              {sections.map((section) => (
                <article key={section.heading}>
                  <h2 className={cn(typo.blockTitle, "mb-3")}>
                    {section.heading}
                  </h2>

                  {"paragraphs" in section &&
                    section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className={cn(typo.bodyGray, "mb-3")}>
                        {paragraph}
                      </p>
                    ))}

                  {"groups" in section &&
                    section.groups.map((group) => (
                      <div key={group.label} className="mb-4">
                        <p className={cn(typo.bodyGray, "mb-2 font-medium")}>
                          {group.label}
                        </p>
                        <ul className="list-disc space-y-1 pl-6">
                          {group.items.map((item) => (
                            <li key={item} className={typo.bodyGray}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                  {"items" in section && (
                    <ul className="list-disc space-y-1 pl-6">
                      {section.items.map((item) => (
                        <li key={item} className={typo.bodyGray}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {"contactEmail" in section && section.contactEmail && (
                    <p className={typo.bodyGray}>
                      이메일:{" "}
                      <Link
                        href={`mailto:${section.contactEmail}`}
                        className="text-brand-blue hover:underline"
                      >
                        {section.contactEmail}
                      </Link>
                    </p>
                  )}
                </article>
              ))}

              <p className={typo.bodyGray}>{effectiveDate}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function getPrivacyMetadata() {
  return privacyPageMeta.seo;
}
