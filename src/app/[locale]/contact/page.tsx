import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { ContactForm } from "@/components/forms/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return buildMetadata({
    locale,
    title: `${t("title")} — StartPoint`,
    description:
      locale === "zh"
        ? "预约 StartPoint 30 分钟免费咨询。邮箱 contact@startpoint.ai，杭州 / 上海 / 巴黎 线下 coffee chat。"
        : "Book a free 30-minute consultation with StartPoint. Reach us at contact@startpoint.ai — Hangzhou / Shanghai / Paris for in-person coffee chats.",
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });
  const nav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: nav("contact"), path: "/contact" },
        ])}
      />

      {/* Hero */}
      <Section bg="paper">
        <Container size="full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            {/* Left: intro */}
            <div>
              <Pill variant="orange" size="md" className="mb-6">
                {nav("contact")}
              </Pill>
              <h1 className="sp-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink">
                {t("title")}
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-ink/80 leading-relaxed">
                {t("subtitle")}
              </p>

              {/* Contact meta */}
              <div className="mt-10 space-y-5">
                <div>
                  <div className="text-xs font-bold tracking-[0.2em] text-ink/50 mb-2">
                    EMAIL
                  </div>
                  <a
                    href={`mailto:${t("email")}`}
                    className="sp-display text-2xl md:text-3xl text-orange-600 hover:text-orange-700 transition"
                  >
                    {t("email")}
                  </a>
                </div>

                <div>
                  <div className="text-xs font-bold tracking-[0.2em] text-ink/50 mb-2">
                    {locale === "zh" ? "线下" : "IN-PERSON"}
                  </div>
                  <div className="text-ink/75 leading-relaxed">
                    {t("locations")}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold tracking-[0.2em] text-ink/50 mb-2">
                    {locale === "zh" ? "响应时间" : "RESPONSE TIME"}
                  </div>
                  <div className="text-ink/75 leading-relaxed">
                    {locale === "zh"
                      ? "通常在 24 小时内回复（工作日）"
                      : "Usually within 24 hours on weekdays"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
