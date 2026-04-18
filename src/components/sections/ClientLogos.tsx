"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const CLIENTS = [
  { name: "Poly.app", meta: "3M+ views · $16M raised" },
  { name: "Blockit AI", meta: "1M views in 6h" },
  { name: "Crunched", meta: "4M+ views" },
];

export function ClientLogos() {
  const t = useTranslations("clientLogos");

  return (
    <section className="bg-[#060D1C] border-t border-b border-white/8 py-10 md:py-12">
      <Container size="full">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="shrink-0 text-white/40 text-xs md:text-[13px] tracking-[0.22em] uppercase font-bold">
            {t("label")}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-x-10 md:gap-x-14 gap-y-4 flex-1"
          >
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="flex items-baseline gap-3 group cursor-default"
              >
                <span className="sp-display text-2xl md:text-3xl text-[#E8F0FF] transition-colors group-hover:text-[#00E676]">
                  {c.name}
                </span>
                <span className="hidden md:inline text-xs text-white/35 tabular-nums">
                  {c.meta}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
