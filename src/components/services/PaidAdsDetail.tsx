"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";

export function PaidAdsDetail() {
  const t = useTranslations("serviceDetails.paid-ads");
  const channels = t.raw("channels") as string[];
  const methodology = t.raw("methodology") as { title: string; text: string }[];
  const goals = t.raw("goals") as { title: string; text: string }[];

  return (
    <Section bg="paper" className="!pt-4">
      <Container size="full">
        {/* Channels */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Pill variant="orange" size="md">
              {t("kicker")} · CHANNELS
            </Pill>
            <div className="h-px flex-1 bg-ink/15" />
          </div>
          <div className="flex flex-wrap gap-3">
            {channels.map((ch) => (
              <span
                key={ch}
                className="rounded-full border-2 border-ink px-5 py-2.5 font-semibold text-ink bg-white"
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Pill variant="ink" size="md">
              METHODOLOGY
            </Pill>
            <div className="h-px flex-1 bg-ink/15" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodology.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl bg-white border border-ink/10 p-6 shadow-sm"
              >
                <div className="text-orange-500 font-bold text-sm mb-2">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-ink text-lg">{m.title}</h4>
                <p className="mt-3 text-sm text-ink/75 leading-relaxed">
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Pill variant="orange" size="md">
              OUTCOMES
            </Pill>
            <div className="h-px flex-1 bg-ink/15" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {goals.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-4 items-start bg-cream rounded-xl p-5"
              >
                <div className="shrink-0 w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <div className="font-bold text-ink">{g.title}</div>
                  <div className="text-sm text-ink/70 mt-1">{g.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
