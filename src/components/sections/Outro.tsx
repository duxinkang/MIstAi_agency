"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DotMatrix } from "@/components/brand/Decor";

export function Outro() {
  const t = useTranslations("outro");
  const nav = useTranslations("nav");

  return (
    <section className="relative overflow-hidden bg-[#060D1C] text-[#E8F0FF] py-24 md:py-32">
      {/* Neon glow — green left, blue right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 100% 50%, rgba(41,121,255,0.12) 0%, transparent 65%), radial-gradient(ellipse 40% 60% at 0% 60%, rgba(0,230,118,0.08) 0%, transparent 65%)",
        }}
      />
      <DotMatrix
        cols={5}
        rows={5}
        className="absolute top-24 right-24 text-[#00E676]/20"
      />

      <Container size="full" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-8"
        >
          <h2 className="sp-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            {t("body1")}
          </p>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            {t("body2")}
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <Button href="/contact" variant="primary" size="lg">
              {nav("cta")} →
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              {nav("pricing")}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
