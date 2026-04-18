import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Link } from "@/i18n/navigation";
import { buildMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ServicesOverview } from "@/components/sections/ServicesOverview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return buildMetadata({
    locale,
    title: `${t("indexTitle")} — StartPoint`,
    description: t("indexDescription"),
    path: "/services",
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "services" });
  const idx = await getTranslations({ locale, namespace: "servicesIndex" });
  const nav = await getTranslations({ locale, namespace: "nav" });
  const items = t.raw("items") as {
    slug: string;
    title: string;
    short: string;
  }[];

  const jsonLd = [
    breadcrumbSchema(locale, [
      { name: nav("services"), path: "/services" },
    ]),
    ...items.map((it) =>
      serviceSchema({
        locale,
        slug: it.slug,
        name: it.title,
        description: it.short,
      }),
    ),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Intro */}
      <Section bg="paper">
        <Container size="full">
          <div className="max-w-3xl">
            <Pill variant="orange" size="md" className="mb-6">
              {nav("services")}
            </Pill>
            <h1 className="sp-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              {idx("title")}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink/80 leading-relaxed">
              {idx("subtitle")}
            </p>
          </div>
        </Container>
      </Section>

      {/* Reuse homepage P4 hub */}
      <ServicesOverview />

      {/* Individual service cards */}
      <Section bg="paper">
        <Container size="full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}` as const}
                className="group rounded-2xl border border-ink/10 bg-white p-8 hover:border-orange-500 hover:-translate-y-1 transition-all shadow-sm"
              >
                <div className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
                  {item.slug.replace("-", " / ")}
                </div>
                <h3 className="sp-display text-2xl leading-tight text-ink group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-ink/75 leading-relaxed">
                  {item.short}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-500">
                  {idx("cta")} →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/contact" variant="primary" size="lg">
              {nav("cta")} →
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
