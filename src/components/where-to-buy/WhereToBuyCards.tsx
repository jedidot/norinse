import Link from "next/link";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

const iconMap = {
  location: images.icons.location,
  online: images.icons.online,
  amazon: images.icons.amazon,
  wholesale: images.icons.wholesale,
};

export function WhereToBuyCards() {
  return (
    <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-10">
      {dict.home.whereToBuy.cards.map((card) => (
        <div
          key={card.title}
          className="w-full max-w-[280px] flex-[1_1_220px] px-5 text-center sm:max-w-[300px] lg:flex-[0_1_calc(33.333%-1.5rem)]"
        >
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
              <Link
                href={card.href}
                target={card.external ? "_blank" : undefined}
                className="wtb-card-title-link"
              >
                <strong className="wtb-card-title">{card.title}</strong>
                <span className="wtb-card-subtitle">{card.subtitle}</span>
              </Link>
            </p>
            <hr className="wtb-divider" />
            <p className="text-center">
              <Link
                href={card.href}
                target={card.external ? "_blank" : undefined}
                className="wtb-card-action"
              >
                {card.linkText}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
