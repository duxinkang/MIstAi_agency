"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { DotMatrix } from "@/components/brand/Decor";
import { SingleBall } from "@/components/brand/GradientBall";

/**
 * P2 — AI Agent 的问题，不在技术，在 GTM
 * Left: character illustration (placeholder) + warm orb.
 * Right: title + 01/02/03 pain points.
 */
export function Problem() {
  const t = useTranslations("problem");
  const items = t.raw("items") as { n: string; text: string }[];

  return (
    <Section bg="paper">
      <Container size="full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: orb + illustration slot */}
          <div className="relative h-[420px] flex items-center justify-center">
            <DotMatrix
              cols={5}
              rows={5}
              className="absolute top-8 left-4 text-ink"
            />
            <SingleBall
              variant="warm"
              size={360}
              className="relative z-0 opacity-90"
            />
            {/* Thinking-character placeholder — will be replaced with real photo via Sanity */}
            <div
              className="absolute inset-0 flex items-center justify-center text-7xl"
              aria-hidden="true"
            >
              <span className="drop-shadow-lg">🤔</span>
            </div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="sp-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                {t("title")}
              </h2>
              <div className="mt-6 h-px bg-ink/80" />
            </div>

            <ul className="space-y-8">
              {items.map((it) => (
                <li key={it.n} className="flex gap-6">
                  <div className="text-orange-500 font-bold text-xl min-w-[2.5rem]">
                    {it.n}
                  </div>
                  <p className="text-xl text-ink/90 font-medium">{it.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
