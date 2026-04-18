"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";

export function Team() {
  const t = useTranslations("team");
  const members = t.raw("members") as {
    name: string;
    role: string;
    title: string;
    text: string;
  }[];

  return (
    <Section bg="bone" className="!py-0">
      <Container size="full" className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left panel */}
        <div className="relative overflow-hidden px-8 py-16 md:px-12 lg:px-16 lg:py-24 bg-gradient-to-br from-[#0A1E3F] via-[#0D2850] to-[#071830]">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(41,121,255,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <Pill variant="soft" size="md" className="mb-6">
              TEAM
            </Pill>
            <p className="text-xl md:text-2xl text-white/60">{t("subtitle")}</p>
            <h2 className="sp-display mt-6 text-5xl md:text-7xl leading-[0.95] text-[#E8F0FF]">
              您的增长
              <br />
              合伙人
            </h2>
            <p className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-white/60">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Right panel */}
        <div className="bg-[#0D1830] px-8 py-16 md:px-12 lg:px-16 lg:py-24 border-t lg:border-t-0 lg:border-l border-white/8">
          <div className="border-b border-white/10 pb-8">
            <h3 className="sp-display max-w-3xl text-4xl md:text-5xl leading-[1.1] text-[#E8F0FF]">
              AI 懂技术，
              <br />
              但 0→1 的增长，仍然需要人
            </h3>
          </div>

          <div className="mt-10 space-y-5">
            {members.map((m, i) => (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="grid grid-cols-1 gap-4 rounded-[32px] border border-white/10 bg-[#060D1C]/60 px-5 py-5 md:grid-cols-[220px_1fr] md:items-center md:px-6"
              >
                <div className="inline-flex items-center justify-center rounded-full border-2 border-[#2979FF]/40 bg-[#2979FF]/15 px-5 py-4 text-center">
                  <div>
                    <div className="text-sm font-semibold tracking-[0.12em] text-white/70">
                      {m.name}
                    </div>
                    <div className="sp-display mt-1 text-2xl text-[#E8F0FF]">
                      {m.role}
                    </div>
                  </div>
                </div>

                <div className="pr-1">
                  <div className="text-xl md:text-2xl font-semibold tracking-tight text-[#E8F0FF]">
                    {m.title}
                  </div>
                  <p className="mt-2 text-[15px] md:text-base leading-relaxed text-white/60">
                    {m.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-white/35">
            <span className="h-px flex-1 bg-white/10" />
            <span>覆盖 AI Agent 从 0 → 1 的关键 3 个断点</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
