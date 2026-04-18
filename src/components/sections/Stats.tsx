"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";

export function Stats() {
  const t = useTranslations("stats");
  const items = t.raw("items") as { n: string; label: string; text: string }[];
  const primaryItems = items.slice(0, 4);
  const sideItems = items.slice(4);

  return (
    <Section bg="white" className="!py-0">
      <Container size="full">
        <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-[1.55fr_1fr]">
          {/* Left panel */}
          <div className="bg-[#0D1830] px-8 py-16 md:px-12 lg:px-16 lg:py-24">
            <div className="max-w-2xl">
              <h2 className="sp-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#E8F0FF]">
                {t("title")}
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed">
                {t("subtitle")}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {primaryItems.map((it, i) => (
                <motion.div
                  key={it.label + i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={i === 3 ? "sm:col-span-2 xl:col-span-3 xl:max-w-[320px]" : ""}
                >
                  <div className="sp-display text-5xl md:text-6xl text-[#00E676]">
                    {it.n}
                  </div>
                  <div className="mt-3 border-t border-white/12 pt-3 text-lg font-bold text-[#E8F0FF]">
                    {it.label}
                  </div>
                  {it.text && (
                    <div className="mt-2 text-sm leading-relaxed text-white/50">
                      {it.text}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right panel — electric blue accent */}
          <div className="bg-[#0A1E3F] px-8 py-16 md:px-12 lg:px-14 lg:py-24 relative overflow-hidden">
            {/* Subtle blue glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(41,121,255,0.15) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 space-y-10">
              {sideItems.map((it, i) => (
                <motion.div
                  key={it.label + i + 4}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-6"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#2979FF] text-white shadow-[0_16px_32px_rgba(41,121,255,0.3)]">
                    <span className="text-3xl font-semibold">{i === 0 ? "◔" : "◎"}</span>
                  </div>
                  <div>
                    <div className="sp-display text-5xl md:text-6xl text-[#E8F0FF]">
                      {it.n}
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-[#E8F0FF]/90">
                      {it.label}
                    </div>
                    {it.text && (
                      <div className="mt-1 text-sm leading-relaxed text-white/55">
                        {it.text}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
