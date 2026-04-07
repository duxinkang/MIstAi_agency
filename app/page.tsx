import type { Metadata } from "next";

import { PdfFullSite } from "@/components/sections/pdf-fullsite";

export const metadata: Metadata = {
  title: "起始点 StartPoint | AI Agent 的 0→1 增长合伙人",
  description:
    "StartPoint 只做 AI Agent 的 0→1 增长，覆盖 GTM 策略、Launch Video、Product Hunt、SEO/GEO、达人合作、广告投放与增长陪跑。",
  keywords: [
    "AI Agent 增长",
    "AI SaaS 营销",
    "Product Hunt 代运营",
    "Launch Video",
    "SEO GEO",
    "海外达人营销",
    "StartPoint",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "起始点 StartPoint | AI Agent 的 0→1 增长合伙人",
    description:
      "只做 AI Agent 的 0→1 增长，帮助团队找准市场、打通渠道、夯实故事、落地执行。",
    type: "website",
    locale: "zh_CN",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StartPoint",
  alternateName: "起始点",
  url: "https://startpoint.local",
  description:
    "专注 AI Agent 与 AI SaaS 团队的 0→1 增长服务，覆盖 GTM 策略、内容、投放、渠道与发布。",
  telephone: "+86-15622153144",
  areaServed: ["China", "Global"],
  knowsAbout: [
    "AI Agent Go-To-Market",
    "Launch Video",
    "Product Hunt",
    "SEO",
    "GEO",
    "Influencer Marketing",
    "Paid Ads",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Agent Growth Marketing",
  provider: {
    "@type": "Organization",
    name: "StartPoint",
  },
  areaServed: ["China", "Global"],
  audience: {
    "@type": "Audience",
    audienceType: "AI Agent founders, AI SaaS teams, startup operators",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "StartPoint Growth Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GTM 策略制定" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Launch Video 制作" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Hunt 冲榜" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO / GEO 增长" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "海外达人合作" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "广告投放与增长陪跑" } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PdfFullSite />
    </>
  );
}
