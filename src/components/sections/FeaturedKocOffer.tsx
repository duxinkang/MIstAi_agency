"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";

/**
 * FeaturedKocOffer — top-of-funnel banner promoting the flagship
 * "Global KOC Growth" offering. Placed directly under Hero so every
 * visitor sees the lead offer first.
 */
export function FeaturedKocOffer() {
  const locale = useLocale();
  const isZh = locale === "zh";

  const stats = isZh
    ? [
        { n: "$800K", label: "年营收 ARR" },
        { n: "25%", label: "月度复合增长" },
        { n: "1,000+", label: "全球 KOC 矩阵" },
        { n: "10 天", label: "起号交付周期" },
      ]
    : [
        { n: "$800K", label: "Annual revenue (ARR)" },
        { n: "25%", label: "Monthly compounding growth" },
        { n: "1,000+", label: "Global KOC network" },
        { n: "10 days", label: "Account-launch turnaround" },
      ];

  return (
    <Section bg="ink" className="!py-20 md:!py-28 relative overflow-hidden">
      {/* Decorative neon corner glows */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #00E676 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #2979FF 0%, transparent 70%)",
        }}
      />

      <Container size="full" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-[#0A1428] via-[#071830] to-[#0A1428] border border-[#00E676]/25 p-8 md:p-12 lg:p-14 relative overflow-hidden"
        >
          {/* Top eyebrow with pulsing dot */}
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-[#00E676] opacity-60 animate-ping" />
              <span className="relative rounded-full h-2.5 w-2.5 bg-[#00E676]" />
            </span>
            <span className="text-[#00E676] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              {isZh ? "首推方案 · 全新上线" : "Featured offer · Just launched"}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Left: headline + intro */}
            <div>
              <h2 className="sp-display text-4xl md:text-5xl lg:text-6xl text-[#E8F0FF] leading-[1.05]">
                {isZh ? (
                  <>
                    全球化{" "}
                    <span className="bg-gradient-to-r from-[#00E676] to-[#2979FF] bg-clip-text text-transparent">
                      AI Agent KOC
                    </span>{" "}
                    增长解决方案
                  </>
                ) : (
                  <>
                    Global{" "}
                    <span className="bg-gradient-to-r from-[#00E676] to-[#2979FF] bg-clip-text text-transparent">
                      AI Agent KOC
                    </span>{" "}
                    growth solution
                  </>
                )}
              </h2>

              <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
                {isZh
                  ? "我们操盘了千万美金级融资的教育类 AI Agent 出海项目，在 0 投流 / 0 SEO / 0 GEO 的「三零」条件下，纯靠 KOC + UGC 实现指数级增长。"
                  : "We ran the 0→1 growth for a venture-backed education AI Agent — exponential growth with zero paid ads, zero SEO, zero GEO. Just KOC + UGC."}
              </p>

              <ul className="mt-7 space-y-3">
                {(isZh
                  ? [
                      "60 条深度创意搜索 + 定制化内容 Brief",
                      "6 个真人出镜账号，从 0 到 1 搭建激活",
                      "10 天完成策略到上线全流程·账号资产 100% 归你",
                    ]
                  : [
                      "60 deep creative searches + custom content briefs",
                      "6 real-person accounts built and activated from scratch",
                      "10-day end-to-end delivery — 100% account ownership stays with you",
                    ]
                ).map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-white/85 text-[15px] md:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#00E676]"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/koc" variant="primary" size="lg">
                  {isZh ? "查看完整方案" : "See the full offer"} →
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  {isZh ? "30 分钟免费咨询" : "Book a free 30-min call"}
                </Button>
              </div>
            </div>

            {/* Right: stats card + price */}
            <div className="space-y-5">
              <div className="rounded-2xl bg-[#030810] border border-white/10 p-6 md:p-7">
                <div className="text-white/45 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">
                  {isZh ? "已验证战绩" : "Proven track record"}
                </div>
                <div className="grid grid-cols-2 gap-5 md:gap-6">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="sp-display text-[#00E676] text-3xl md:text-4xl leading-none tabular-nums">
                        {s.n}
                      </div>
                      <div className="mt-2 text-white/65 text-xs md:text-sm leading-snug">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#00E676]/12 via-transparent to-[#2979FF]/8 border border-[#00E676]/35 p-6 md:p-7">
                <div className="text-[#00E676] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">
                  {isZh ? "标准包" : "Standard package"}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="sp-display text-[#E8F0FF] text-4xl md:text-5xl leading-none">
                    $1,200
                  </span>
                  <span className="text-white/55 text-sm">
                    {isZh ? "/ 周期" : "/ cycle"}
                  </span>
                </div>
                <p className="mt-3 text-white/65 text-[13px] leading-relaxed">
                  {isZh
                    ? "平均单条创意 Brief 成本仅 $20，性价比远超任何海外代运营。"
                    : "Roughly $20 per creative brief — far below any overseas agency rate."}
                </p>
                <Link
                  href="/koc"
                  className="mt-4 inline-flex items-center gap-1 text-[#00E676] text-sm font-semibold hover:gap-2 transition-all"
                >
                  {isZh ? "了解定价细节" : "Pricing details"} →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
