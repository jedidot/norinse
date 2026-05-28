import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { WatchVideoButton } from "@/components/products/WatchVideoButton";
import type { ProductPageData } from "@/lib/product-pages/types";
import { typo } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ProductPageViewProps = {
  data: ProductPageData;
};

function ProductHero({ data }: { data: ProductPageData }) {
  return (
    <section
      className="product-page-header bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${data.heroBg})` }}
    >
      <Container className="grid min-h-[520px] grid-cols-1 items-start lg:min-h-[680px] lg:grid-cols-2">
        <div
          className="mt-20 px-6 py-10 lg:mt-20"
          style={{ backgroundColor: data.heroBoxBg }}
        >
          <h5 className="wide-letters mb-3 text-center text-sm font-medium text-brand-blue">
            사용 방법
          </h5>
          <h2 className={cn(typo.pageHero, "text-center")}>
            노린스 <strong className="font-semibold">{data.categoryLabel}</strong>{" "}
            케어
          </h2>
          <WatchVideoButton color={data.watchButtonColor} videoId={data.videoId} />
          <p className={cn(typo.bodyBlue, "mt-4")}>
            {data.intro}
          </p>
        </div>
        <div className="hidden min-h-[400px] lg:block" aria-hidden />
      </Container>
    </section>
  );
}

function UsageSection({ data }: { data: ProductPageData }) {
  if (data.layout === "hand") {
    const product = data.products[0];
    return (
      <section className="mt-[120px] py-8">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h1
                className={cn(typo.pageTitle, "mb-6")}
                style={{ color: data.accentColor }}
              >
                노린스 <strong className="font-semibold">{data.categoryLabel}</strong>{" "}
                케어
              </h1>
              {data.usageBlocks.map((block) => (
                <div key={block.title} className={cn(typo.bodyBlue, "mb-5")}>
                  <strong className="font-medium">{block.title}</strong>
                  <br />
                  {block.content}
                </div>
              ))}
              {data.handSideImages && (
                <div className="mt-20 grid grid-cols-2 gap-2">
                  {data.handSideImages.map((src) => (
                    <OptimizedImage
                      key={src}
                      src={src}
                      alt=""
                      width={215}
                      height={300}
                      className="mx-auto"
                    />
                  ))}
                </div>
              )}
            </div>
            <div>
              <ProductCard product={product} />
              {data.buyNowHref && (
                <div className="mt-6 text-center">
                  <a
                    href={data.buyNowHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[30px] items-center rounded-sm bg-brand-blue px-8 text-base text-white hover:bg-white hover:text-brand-blue"
                  >
                    지금 구매
                  </a>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="mt-[120px] py-8">
      <Container>
        <h1
          className={cn(typo.pageTitle, "mb-6")}
          style={{ color: data.accentColor }}
        >
          노린스 <strong className="font-semibold">{data.categoryLabel}</strong>{" "}
          케어
          {data.pageTitleSuffix ? ` ${data.pageTitleSuffix}` : ""}
        </h1>
        <div className="space-y-5">
          {data.usageBlocks.map((block) => (
            <p key={block.title} className={typo.bodyBlue}>
              <strong className="font-medium">{block.title}</strong>
              <br />
              {block.content}
            </p>
          ))}
        </div>
        {data.bathingChartHref && (
          <div className="mt-10">
            <h6 className="mb-4 text-brand-blue">
              침상 목욕 시 참고용 목욕 순서 차트(PDF) 다운로드:
            </h6>
            <a
              href={data.bathingChartHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-brand-blue px-4 py-2 text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              목욕 순서 차트 ↓
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}

function ProductsGrid({ data }: { data: ProductPageData }) {
  if (data.layout === "hand") return null;

  const gridClass =
    data.layout === "hair"
      ? "mt-20 grid gap-8 lg:grid-cols-12 lg:gap-6"
      : "mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4";

  return (
    <section className="pb-16 pt-8">
      <Container>
        <div className={gridClass}>
          {data.products.map((product, index) => (
            <div
              key={product.name}
              className={
                data.layout === "hair"
                  ? index === 0
                    ? "lg:col-span-5"
                    : index === 1
                      ? "lg:col-span-5 lg:col-start-8"
                      : ""
                  : ""
              }
            >
              <ProductCard product={product} />
            </div>
          ))}
          {data.layout === "hair" && <div className="hidden lg:col-span-2 lg:block" />}
        </div>
      </Container>
    </section>
  );
}

export function ProductPageView({ data }: ProductPageViewProps) {
  return (
    <>
      <ProductHero data={data} />
      <UsageSection data={data} />
      <ProductsGrid data={data} />
    </>
  );
}
