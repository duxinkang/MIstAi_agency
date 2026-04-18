"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";

export function Advantages() {
  const t = useTranslations("advantages");
  const items = t.raw("items") as { title: string; text: string }[];

  return (
    <Section bg="cream">
      <Container size="full">
        <div className="max-w-3xl mb-14">
          <Pill variant="soft" size="md" className="mb-5">
            CORE ADVANTAGES
          </Pill>
          <h2 className="sp-display text-4xl md:text-5xl lg:text-6xl text-[#E8F0FF] leading-tight">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-2xl bg-[#0D1830] p-7 md:p-8 border border-white/8 hover:border-[#00E676]/35 hover:shadow-[0_0_30px_rgba(0,230,118,0.08)] transition-all"
            >
              <div className="text-[#00E676] font-bold text-sm mb-3 tracking-wider">
                0{i + 1}
              </div>
              <h3 className="font-bold text-[#E8F0FF] text-lg md:text-xl leading-snug">
                {item.title}
              </h3>
              <p className="mt-4 text-white/60 leading-relaxed text-[15px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
