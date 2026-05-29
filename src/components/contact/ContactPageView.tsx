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
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <ContactForm />
            </div>

            <aside className="lg:col-span-4">
              <div className="flex flex-col items-center text-center lg:translate-x-14 lg:pt-[81px]">
                <OptimizedImage
                  src={images.medicampLogo}
                  alt="메디캠프 MEDICAMP"
                  width={477}
                  height={106}
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  wrapperClassName="contact-medicamp-logo m-0 block w-full max-w-full origin-top p-0 leading-[0] lg:scale-[1.25]"
                  className="!m-0 mx-auto block h-auto w-full max-w-none"
                />
                <div className="mt-12 space-y-2 text-base leading-relaxed text-brand-gray">
                  {contactPageMeta.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>
                    전화:{" "}
                    <a
                      href={`tel:${contactPageMeta.phone.replace(/-/g, "")}`}
                      className="hover:text-brand-blue hover:underline"
                    >
                      {contactPageMeta.phone}
                    </a>
                  </p>
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
