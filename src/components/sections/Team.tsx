"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";

type DetailSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

type Stat = { value: string; unit?: string; label: string };

type Member = {
  name: string;
  role: string;
  title: string;
  text: string;
  avatar?: string;
  highlights?: string[];
  stats?: Stat[];
  tagline?: string;
  contact?: string;
  details?: {
    sections: DetailSection[];
    closing?: string;
  };
};

export function Team() {
  const t = useTranslations("team");
  const locale = useLocale();
  const isZh = locale === "zh";
  const members = t.raw("members") as Member[];

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
              {isZh ? (
                <>
                  您的增长
                  <br />
                  合伙人
                </>
              ) : (
                <>
                  Your growth
                  <br />
                  partners
                </>
              )}
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
              {isZh ? (
                <>
                  AI 懂技术，
                  <br />
                  但 0→1 的增长，仍然需要人
                </>
              ) : (
                <>
                  AI knows the tech.
                  <br />
                  0→1 growth still needs humans.
                </>
              )}
            </h3>
          </div>

          <div className="mt-10 space-y-5">
            {members.map((m, i) => (
              <MemberCard key={m.name} member={m} index={i} isZh={isZh} />
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-white/35">
            <span className="h-px flex-1 bg-white/10" />
            <span>
              {isZh
                ? "覆盖 AI Agent 从 0 → 1 的关键 3 个断点"
                : "Covering the 3 critical breakpoints from 0 → 1 for AI Agents"}
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function MemberCard({
  member: m,
  index: i,
  isZh,
}: {
  member: Member;
  index: number;
  isZh: boolean;
}) {
  const [open, setOpen] = useState(false);
  const hasDetails = !!m.details && m.details.sections.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: i * 0.08 }}
      className="rounded-[32px] border border-white/10 bg-[#060D1C]/60 px-5 py-5 md:px-6"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[220px_1fr] md:items-center">
        {m.avatar ? (
          <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-3 md:text-center">
            <div className="relative shrink-0">
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-full border border-dashed border-[#2979FF]/40"
              />
              <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden ring-2 ring-[#2979FF]/60 bg-[#2979FF]/15">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.12em] text-white/80">
                {m.name}
              </div>
              <div className="sp-display mt-0.5 text-xl text-[#E8F0FF]">
                {m.role}
              </div>
            </div>
          </div>
        ) : (
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
        )}

        <div className="pr-1">
          <div className="text-xl md:text-2xl font-semibold tracking-tight text-[#E8F0FF]">
            {m.title}
          </div>
          <p className="mt-2 text-[15px] md:text-base leading-relaxed text-white/60">
            {m.text}
          </p>

          {m.highlights && m.highlights.length > 0 && (
            <ul className="mt-4 space-y-2">
              {m.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2.5 text-[13.5px] md:text-sm text-white/75 leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#00E676]"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {m.stats && m.stats.length > 0 && (
            <div className="mt-5 grid grid-cols-3 gap-3 md:gap-5">
              {m.stats.map((s) => (
                <div key={s.label} className="min-w-0">
                  <div className="sp-display text-[#E8F0FF] text-3xl md:text-4xl leading-none tabular-nums">
                    {s.value}
                    {s.unit && (
                      <span className="text-[#00E676] text-base md:text-lg ml-0.5 font-semibold">
                        {s.unit}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-white/55 text-[11.5px] md:text-xs leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {(m.tagline || m.contact) && (
            <div className="mt-4 pt-3 border-t border-white/8 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] md:text-[12.5px] text-white/45">
              {m.tagline && (
                <span className="tracking-wide">{m.tagline}</span>
              )}
              {m.contact && (
                <span className="tracking-wide">
                  <span className="text-[#00E676]">◆</span> {m.contact}
                </span>
              )}
            </div>
          )}

          {hasDetails && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#00E676] hover:text-[#33ee94] transition-colors"
            >
              {open
                ? isZh
                  ? "收起"
                  : "Show less"
                : isZh
                  ? "查看完整背景"
                  : "See full background"}
              <span
                aria-hidden="true"
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              >
                ↓
              </span>
            </button>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {hasDetails && open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-5 pt-5 border-t border-white/10 space-y-5">
              {m.details!.sections.map((s, idx) => (
                <div key={s.heading} className="grid grid-cols-[28px_1fr] gap-3">
                  <div className="sp-display text-[#00E676] text-sm font-bold tabular-nums pt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-[15px] md:text-base font-semibold text-[#E8F0FF] leading-snug">
                      {s.heading}
                    </div>
                    {s.body && (
                      <p className="mt-1.5 text-[13.5px] md:text-sm leading-relaxed text-white/65">
                        {s.body}
                      </p>
                    )}
                    {s.bullets && s.bullets.length > 0 && (
                      <ul className="mt-2 space-y-1.5">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-[13px] md:text-[13.5px] text-white/70 leading-relaxed"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#00E676]"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
              {m.details!.closing && (
                <p className="mt-2 text-[13.5px] md:text-sm italic text-white/55 leading-relaxed">
                  {m.details!.closing}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
