"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";

export function CasesGrid() {
  const t = useTranslations("cases");
  const items = t.raw("items") as {
    tag: string;
    title: string;
    text: string;
  }[];

  const themes = [
    {
      gradient: "from-[#00E676]/20 via-[#00BFA5]/15 to-[#2979FF]/10",
      accent: "text-[#00E676]",
      chipBg: "bg-[#00E676] text-[#030810]",
    },
    {
      gradient: "from-[#2979FF]/20 via-[#1565C0]/15 to-[#030810]/80",
      accent: "text-[#2979FF]",
      chipBg: "bg-[#2979FF] text-white",
    },
    {
      gradient: "from-[#00BFA5]/20 via-[#00E676]/15 to-[#2979FF]/10",
      accent: "text-[#69F0AE]",
      chipBg: "bg-[#00C853] text-[#030810]",
    },
  ];

  return (
    <Section bg="cream" className="!pt-8">
      <Container size="full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => {
            const theme = themes[i % themes.length];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-3xl bg-[#0D1830] border border-white/8 overflow-hidden hover:border-[#00E676]/30 hover:shadow-[0_0_40px_rgba(0,230,118,0.07)] transition-all"
              >
                {/* Gradient header */}
                <div
                  className={`relative aspect-[16/9] bg-gradient-to-br ${theme.gradient} overflow-hidden`}
                >
                  <div className="sp-dot-matrix absolute inset-0 opacity-15" />
                  <div className="absolute top-5 left-6 text-white/60 text-xs font-bold tracking-[0.2em]">
                    CASE 0{i + 1}
                  </div>
                  <div className="sp-ball absolute -right-8 -bottom-8 w-40 h-40 opacity-40 mix-blend-screen" />
                  <div className="absolute bottom-5 left-6">
                    <span className={`${theme.chipBg} text-xs font-bold px-3 py-1.5 rounded-full`}>
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 md:p-8">
                  <h3 className={`sp-display text-2xl md:text-[26px] leading-tight ${theme.accent}`}>
                    {item.title}
                  </h3>
                  <p className="mt-4 text-white/60 leading-relaxed text-[15px]">
                    {item.text}
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between">
                    <Pill variant="outline" size="sm">
                      {item.tag}
                    </Pill>
                    <svg
                      width="28"
                      height="18"
                      viewBox="0 0 32 20"
                      fill="none"
                      aria-hidden="true"
                      className="text-white/40 group-hover:text-[#00E676] transition-colors"
                    >
                      <path
                        d="M2 10H28M28 10L20 2M28 10L20 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
