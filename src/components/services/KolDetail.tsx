"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";

export function KolDetail() {
  const t = useTranslations("serviceDetails.kol");
  const steps = t.raw("steps") as { title: string; text: string }[];

  return (
    <Section bg="paper" className="!pt-4">
      <Container size="full">
        <div className="mb-10">
          <h3 className="sp-display text-2xl md:text-3xl text-orange-500 max-w-2xl leading-tight">
            {t("subtitle")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border-2 border-orange-500 bg-white overflow-hidden flex flex-col"
            >
              <div
                aria-hidden="true"
                className="aspect-[4/3] relative"
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(135deg, #FFA872, #EA4510)"
                      : i === 1
                        ? "linear-gradient(135deg, #1A1A1A, #5C4BD1)"
                        : "linear-gradient(135deg, #FFD9B8, #FFAE78)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-70">
                  {i === 0 ? "🎥" : i === 1 ? "📱" : "📊"}
                </div>
              </div>
              <div className="p-6 flex-1">
                <h4 className="font-bold text-ink text-lg">{step.title}</h4>
                <p className="mt-3 text-sm text-ink/75 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
