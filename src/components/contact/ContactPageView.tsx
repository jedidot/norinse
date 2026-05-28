import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { contactPageMeta } from "@/lib/contact/data";
import { typo } from "@/lib/typography";
import { images } from "@/lib/images";

export function ContactPageView() {
  return (
    <>
      <section className="bg-brand-sky py-10">
        <Container>
          <h1 className={typo.pageHero}>{contactPageMeta.heroTitle}</h1>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-8 space-y-3 text-base leading-relaxed">
                <p>
                  <strong className="font-semibold text-[#0000ff]">
                    {contactPageMeta.disclaimerIntro}
                  </strong>
                </p>
                {contactPageMeta.disclaimerWarnings.map((warning) => (
                  <p key={warning}>
                    <strong className="font-semibold text-[#ff0000]">{warning}</strong>
                  </p>
                ))}
              </div>

              <ContactForm />
            </div>

            <aside className="lg:col-span-4">
              <div className="mx-auto max-w-[320px] text-center lg:mx-0">
                <OptimizedImage
                  src={images.products.footerBadge}
                  alt="노린스 No-Rinse"
                  width={598}
                  height={714}
                  className="mx-auto"
                />
                <div className="mt-6 space-y-3 text-base leading-relaxed text-brand-gray">
                  {contactPageMeta.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>전화: {contactPageMeta.phones}</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

export function getContactMetadata() {
  return contactPageMeta.seo;
}
