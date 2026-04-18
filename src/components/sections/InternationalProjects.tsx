"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";

type Project = {
  flag: string;
  country: string;
  industry: string;
  outcome: string;
  name: string;
  url: string;
};

export function InternationalProjects() {
  const t = useTranslations("internationalProjects");
  const items = t.raw("items") as Project[];

  return (
    <Section bg="paper" className="!py-24 md:!py-28">
      <Container size="full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <Pill variant="ink" size="md" className="mb-6">
            {t("eyebrow")}
          </Pill>
          <h2 className="sp-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-[#E8F0FF]">
            {t("title")}
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-[#0D1830] border border-white/8 p-7 md:p-8 hover:border-[#00E676]/40 hover:shadow-[0_0_30px_rgba(0,230,118,0.08)] transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl md:text-5xl leading-none">
                  {p.flag}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="text-white/25 group-hover:text-[#00E676] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                >
                  <path
                    d="M5 15L15 5M15 5H7M15 5V13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="text-white/40 text-xs font-bold tracking-[0.22em] uppercase">
                {p.country}
              </div>
              <div className="mt-1 text-white/55 text-sm">
                {p.industry}
              </div>

              <h3 className="mt-5 sp-display text-2xl md:text-3xl text-[#E8F0FF] leading-tight group-hover:text-[#00E676] transition-colors">
                {p.outcome}
              </h3>

              <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/8">
                <span className="text-white/70 font-bold text-sm">
                  {p.name}
                </span>
                <span className="text-white/35 group-hover:text-[#00E676] text-xs font-semibold tracking-wide transition-colors">
                  {t("visit")} →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
