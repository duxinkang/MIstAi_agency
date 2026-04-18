"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";

export function ServicesOverview() {
  const t = useTranslations("services");
  const items = t.raw("items") as { slug: string; title: string }[];

  const left = items.slice(0, 3);
  const right = items.slice(3);

  return (
    <Section bg="orange" className="!py-24 md:!py-32">
      {/* Neon mesh background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,230,118,0.05) 0%, transparent 70%)",
        }}
      />

      <Container size="full">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-90">
          <Logo variant="dark" size="sm" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sp-display text-[14vw] sm:text-[10vw] lg:text-[7vw] xl:text-[120px] leading-[0.9] text-[#E8F0FF]"
          >
            {t("title")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pt-8"
          >
            <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-md">
              {t("description")}
            </p>
          </motion.div>
        </div>

        {/* Hub and spokes */}
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center">
          {/* Left column */}
          <div className="space-y-5 md:space-y-8">
            {left.map((item) => (
              <ServiceNode
                key={item.slug}
                item={item}
                align="right"
              />
            ))}
          </div>

          {/* Center hub — neon gradient */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-full flex items-center justify-center text-[#030810] font-bold text-xl md:text-2xl w-40 h-40 md:w-56 md:h-56 mx-auto my-8 md:my-0 shadow-[0_0_60px_rgba(0,230,118,0.3)]"
            style={{
              background: "linear-gradient(135deg, #00E676 0%, #2979FF 100%)",
            }}
          >
            {t("center")}
          </motion.div>

          {/* Right column */}
          <div className="space-y-5 md:space-y-8">
            {right.map((item) => (
              <ServiceNode key={item.slug} item={item} align="left" />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ServiceNode({
  item,
  align,
}: {
  item: { slug: string; title: string };
  align: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-4 ${align === "left" ? "flex-row" : "flex-row-reverse"}`}
    >
      <Link
        href={`/services/${item.slug}` as const}
        className="group flex-1"
      >
        <div
          className={`bg-[#0D1830] border border-white/12 text-white rounded-full px-8 py-5 font-bold text-base md:text-lg tracking-wide transition-all group-hover:border-[#00E676]/50 group-hover:text-[#00E676] group-hover:bg-[#0A1428] shadow-lg ${align === "left" ? "text-left" : "text-right"}`}
        >
          {item.title}
        </div>
      </Link>
      <svg
        width="32"
        height="20"
        viewBox="0 0 32 20"
        fill="none"
        className="text-[#00E676]/50 shrink-0"
        style={{ transform: align === "right" ? "rotate(180deg)" : undefined }}
        aria-hidden="true"
      >
        <path
          d="M2 10H28M28 10L20 2M28 10L20 18"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
