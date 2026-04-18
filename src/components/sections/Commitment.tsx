"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";

export function Commitment() {
  const t = useTranslations("commitment");
  const steps = t.raw("steps") as {
    n: string;
    title: string;
    text: string;
  }[];

  return (
    <Section bg="paper">
      <Container size="full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div className="space-y-8">
            <Logo size="md" variant="dark" />
            <div>
              <h2 className="sp-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#E8F0FF]">
                {t("title")}
              </h2>
              <p className="mt-6 text-lg text-white/65 max-w-md leading-relaxed">
                {t("subtitle")}
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-5">
            {/* Center puck — neon green gradient */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full z-10 flex items-center justify-center text-center text-[#030810] p-4"
              style={{
                background:
                  "radial-gradient(circle, #69F0AE 0%, #00E676 80%)",
                boxShadow: "0 0 40px rgba(0,230,118,0.4)",
              }}
            >
              <span className="text-sm md:text-base font-bold leading-tight">
                {t("centerText")}
              </span>
            </div>

            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6 md:p-8 min-h-[200px] flex flex-col border"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(140deg, rgba(0,230,118,0.07) 0%, rgba(0,230,118,0.12) 100%)"
                      : "linear-gradient(140deg, rgba(41,121,255,0.07) 0%, rgba(41,121,255,0.14) 100%)",
                  borderColor:
                    i % 2 === 0
                      ? "rgba(0,230,118,0.2)"
                      : "rgba(41,121,255,0.2)",
                  color: "#E8F0FF",
                }}
              >
                <div className="font-bold text-2xl mb-2 flex items-baseline gap-2">
                  <span className="sp-display" style={{ color: i % 2 === 0 ? "#00E676" : "#2979FF" }}>
                    {step.n}
                  </span>
                  <span className="text-xl text-white/30">｜</span>
                  <span>{step.title}</span>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-white/70">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
