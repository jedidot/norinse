import Image from "next/image";
import { onlineMarketplaces } from "@/lib/where-to-buy/marketplaces";

const defaultLogoClassName =
  "h-8 w-auto max-w-[160px] object-contain object-left";

export function OnlineMarketplaceLogos() {
  return (
    <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-5">
      {onlineMarketplaces.map((market) => (
        <li key={market.id}>
          <a
            href={market.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer opacity-90 transition hover:opacity-100"
            aria-label={`${market.name} 바로가기`}
          >
            <Image
              src={market.logo}
              alt={market.name}
              width={market.width}
              height={market.height}
              className={
                "imageClassName" in market && market.imageClassName
                  ? market.imageClassName
                  : defaultLogoClassName
              }
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
