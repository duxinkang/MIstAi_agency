"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";

export function Partner() {
  const t = useTranslations("partner");
  const pillars = t.raw("pillars") as { label: string; text: string }[];

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 lg:py-32 text-[#E8F0FF]"
      style={{
        background:
          "linear-gradient(135deg, #0A1428 0%, #0B1E3A 50%, #0A1428 100%)",
      }}
    >
      {/* Subtle neon glow accents */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(0,230,118,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 100% 50%, rgba(41,121,255,0.06) 0%, transparent 70%)",
        }}
      />
      <Container size="full" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-lg md:text-xl text-white/60 font-medium mb-4">
              {t("kicker")}
            </div>
            <h2 className="sp-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#E8F0FF]">
              {t("headline").split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="sp-display text-3xl md:text-4xl lg:text-5xl leading-tight text-[#E8F0FF]">
                {t("title")}
              </h3>
              <div className="mt-6 h-px bg-white/15" />
            </div>

            <ul className="space-y-5">
              {pillars.map((p) => (
                <li key={p.label} className="flex items-center gap-5">
                  <Pill
                    variant="orange"
                    size="md"
                    className="min-w-[7rem] justify-center !py-2.5"
                  >
                    {p.label}
                  </Pill>
                  <span className="text-base md:text-lg font-medium text-white/80">
                    {p.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/12">
              <p className="text-sm text-white/55 text-center md:text-right">
                {t("footnote")}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
