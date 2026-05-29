import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

const footerAboutLinks = [
  { label: "홈", href: "/" },
  { label: "헤어케어", href: "/hair-care/" },
  { label: "바디케어", href: "/body-care/" },
  { label: "포밍 핸드 워시", href: "/hand-care/" },
  { label: "FAQ", href: "/faq/" },
  { label: "문의하기", href: "/contact-us/" },
];

const footerBuyLinks = [
  { label: "지역별 매장", href: "/where-to-buy/#by-location" },
  { label: "온라인/전화", href: "/where-to-buy/#retailers" },
  { label: "도매", href: "/where-to-buy/#wholesale" },
  { label: "해외", href: "/where-to-buy/#international" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-blue bg-white pt-10">
      <Container className="pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center md:text-left">
            <OptimizedImage
              src={images.products.footerBadge}
              alt={dict.site.name}
              width={598}
              height={714}
              className="mx-auto max-w-[80%] md:mx-0"
            />
            <p className="mt-4 text-center text-brand-gray md:text-center">
              {dict.footer.copyright}
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-left text-sm font-semibold text-brand-gray">
              {dict.footer.contactTitle}
            </h5>
            <div className="space-y-2 text-sm leading-relaxed text-brand-gray">
              <p className="whitespace-pre-line font-semibold text-brand-blue">
                {dict.footer.companyName}
              </p>
              <p className="whitespace-pre-line">{dict.footer.businessReg}</p>
              <p className="whitespace-pre-line">{dict.footer.address}</p>
              <p>
                {dict.footer.customerServiceLabel}:{" "}
                <a
                  href={`tel:${dict.footer.phone.replace(/-/g, "")}`}
                  className="hover:text-brand-blue hover:underline"
                >
                  {dict.footer.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${dict.footer.email}`}
                  className="hover:text-brand-blue hover:underline"
                >
                  {dict.footer.email}
                </a>
              </p>
            </div>
            <Button href="/contact-us/" variant="outline" className="mt-4">
              {dict.footer.emailButton}
            </Button>
            <p className="mt-5">
              <Link
                href="/privacy-policy/"
                className="text-xs uppercase text-brand-gray hover:underline"
              >
                {dict.footer.privacy}
              </Link>
            </p>
            <p className="mt-4">
              <a
                href="https://crueltyfree.peta.org/company/cleanlife-products-no-rinse-laboratories/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-[#2274C7]"
              >
                {dict.footer.peta}
              </a>
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-semibold text-brand-gray">{dict.footer.aboutTitle}</h5>
            <ul className="space-y-2">
              {footerAboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-gray hover:text-brand-blue hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-semibold text-brand-gray">
              {dict.footer.whereToBuyTitle}
            </h5>
            <ul className="space-y-2">
              {footerBuyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-gray hover:text-brand-blue hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
