import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { LaunchVideoDetail } from "@/components/services/LaunchVideoDetail";
import { KolDetail } from "@/components/services/KolDetail";
import { PaidAdsDetail } from "@/components/services/PaidAdsDetail";
import { ProductHuntDetail } from "@/components/services/ProductHuntDetail";
import { SocialDetail } from "@/components/services/SocialDetail";
import { SeoGeoDetail } from "@/components/services/SeoGeoDetail";

const VALID_SLUGS = [
  "launch-video",
  "kol",
  "paid-ads",
  "product-hunt",
  "social",
  "seo-geo",
] as const;

type Slug = (typeof VALID_SLUGS)[number];

function isValidSlug(s: string): s is Slug {
  return (VALID_SLUGS as readonly string[]).includes(s);
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const slug of VALID_SLUGS) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidSlug(slug)) return {};
  const t = await getTranslations({
    locale,
    namespace: `serviceDetails.${slug}`,
  });
  return buildMetadata({
    locale,
    title: `${t("title")} — StartPoint`,
    description: t("intro"),
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidSlug(slug)) notFound();

  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: `serviceDetails.${slug}`,
  });
  const nav = await getTranslations({ locale, namespace: "nav" });

  const jsonLd = [
    breadcrumbSchema(locale, [
      { name: nav("services"), path: "/services" },
      { name: t("title"), path: `/services/${slug}` },
    ]),
    serviceSchema({
      locale,
      slug,
      name: t("title"),
      description: t("intro"),
    }),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <Section bg="paper" className="!pt-24 !pb-16">
        <Container size="full">
          <Pill variant="orange" size="md" className="mb-6">
            {t("kicker")}
          </Pill>
          <h1 className="sp-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            {t("title")}
          </h1>
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-ink/80 leading-relaxed">
            {t("intro")}
          </p>
        </Container>
      </Section>

      {/* Slug-specific body */}
      {slug === "launch-video" && <LaunchVideoDetail />}
      {slug === "kol" && <KolDetail />}
      {slug === "paid-ads" && <PaidAdsDetail />}
      {slug === "product-hunt" && <ProductHuntDetail />}
      {slug === "social" && <SocialDetail />}
      {slug === "seo-geo" && <SeoGeoDetail />}

      {/* CTA */}
      <Section bg="ink" className="!py-20">
        <Container size="lg" className="text-center">
          <h3 className="sp-display text-3xl md:text-4xl text-white">
            {locale === "zh"
              ? "把这一条拆解成适合你的执行方案"
              : "Tailor this service to your product"}
          </h3>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              {nav("cta")} →
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!border-white"
            >
              {locale === "zh" ? "看其他服务" : "See other services"}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
