"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";

/**
 * EngagementScope — anonymized "Scope of Work" example showing the full
 * deliverable surface of a 0→1 GTM engagement, split into two phases
 * (Strategy & Setup → Launch & Iterate). Lives on /cases as the
 * "this is what an engagement actually contains" proof point.
 */
export function EngagementScope() {
  const locale = useLocale();
  const isZh = locale === "zh";

  const phase1 = isZh
    ? {
        eyebrow: "前两周 · 策略与系统搭建",
        timing: "Week 0 – 2",
        items: [
          {
            t: "品牌战略与市场定位",
            d: "价值体系、目标用户、竞品研究、Message House、差异化表达,持续动态打磨。",
          },
          {
            t: "官网优化重构",
            d: "信息架构、页面改版方向、文案框架、UI 优化方案。",
          },
          {
            t: "SEO 策略制定与执行",
            d: "关键词规划、技术 SEO 修复、sitemap、内链外链建设。",
          },
          {
            t: "付费广告策略与账户搭建",
            d: "投放策略、账户结构、关键词分组建议。",
          },
          {
            t: "渠道准备",
            d: "海内外 KOL/Partner/PR 名单池、Outreach 话术、PR 资源对接。",
          },
          {
            t: "社媒内容营销支持",
            d: "账号 Set-up 清单、选题、内容框架、Social proof 与传播策略。",
          },
          {
            t: "宣传物料制作",
            d: "广告素材、Launch Video、销售 PPT、海报、产品展示物料。",
          },
          {
            t: "转化路径与漏斗优化",
            d: "用户路径分析、漏斗结构优化、增长策略支持。",
          },
          {
            t: "市场营销建议",
            d: "Launch Campaign 节奏、KPI 框架、AB Test 方向。",
          },
          {
            t: "其他营销服务",
            d: "双方书面约定的其他相关营销服务,按需扩展。",
          },
        ],
      }
    : {
        eyebrow: "Weeks 0–2 · Strategy & Setup",
        timing: "Week 0 – 2",
        items: [
          {
            t: "Brand strategy & positioning",
            d: "Value system, ICP, competitor research, message house, differentiation — refined as the market responds.",
          },
          {
            t: "Website redesign",
            d: "Information architecture, page direction, copy framework, UI polish.",
          },
          {
            t: "SEO strategy & execution",
            d: "Keyword planning, technical SEO fixes, sitemap, internal & external link building.",
          },
          {
            t: "Paid ads strategy & account setup",
            d: "Campaign strategy, account structure, keyword grouping.",
          },
          {
            t: "Channel readiness",
            d: "Global KOL / partner / PR shortlist, outreach scripts, PR resource intros.",
          },
          {
            t: "Social content support",
            d: "Account setup checklist, topics, content frameworks, social proof & distribution.",
          },
          {
            t: "Creative production",
            d: "Ad creatives, Launch Video, sales decks, posters, product demo assets.",
          },
          {
            t: "Funnel & conversion optimization",
            d: "User journey analysis, funnel structure tuning, growth-side recommendations.",
          },
          {
            t: "Marketing playbook",
            d: "Launch campaign cadence, KPI framework, A/B test directions.",
          },
          {
            t: "Other agreed deliverables",
            d: "Anything else written into scope by both parties — flexible by need.",
          },
        ],
      };

  const phase2 = isZh
    ? {
        eyebrow: "第三周起 · 启动与迭代",
        timing: "Week 3 →",
        items: [
          {
            t: "Google Ads 小预算测试",
            d: "验证关键词与受众反馈,跑出可放大的 winning angle。",
          },
          {
            t: "海外 KOL / Partner 触达",
            d: "第一轮 outreach 执行,affiliate 结构同步落地。",
          },
          {
            t: "社媒矩阵节奏发布",
            d: "LinkedIn / YouTube / Reddit / X 按统一节奏运转。",
          },
          {
            t: "Product Hunt 打榜",
            d: "全程操盘,从节奏、文案、Hunter、Top voter 一站式落地。",
          },
          {
            t: "正式 Launch Video 制作",
            d: "可在前两周提前启动,第三周配合 Launch 上线。",
          },
          {
            t: "跨境电商社群融入",
            d: "找到目标客户聚集地,自然嵌入社群对话。",
          },
          {
            t: "已有客户联合营销",
            d: "和已签约客户做共创、互推、案例联动。",
          },
          {
            t: "Growth 型市场活动",
            d: "有趣有爆点的活动设计,跑增长不靠堆预算。",
          },
          {
            t: "PR / 媒体定向推进",
            d: "基于前期研究结果,精准对接合适媒体。",
          },
          {
            t: "AB Test 与渠道动态调整",
            d: "根据首轮反馈,持续迭代渠道与投放结构。",
          },
        ],
      }
    : {
        eyebrow: "Week 3 onward · Launch & Iterate",
        timing: "Week 3 →",
        items: [
          {
            t: "Google Ads pilot",
            d: "Small-budget test to validate keywords and audience signal — find the winning angle to scale.",
          },
          {
            t: "Global KOL / partner outreach",
            d: "First wave goes live; affiliate structure activated alongside.",
          },
          {
            t: "Social cadence live",
            d: "LinkedIn, YouTube, Reddit, X all on a unified posting rhythm.",
          },
          {
            t: "Product Hunt launch",
            d: "End-to-end run: cadence, copy, Hunter, top voters — handled.",
          },
          {
            t: "Official Launch Video",
            d: "Production can start in weeks 0–2; lands in time for week-3 launch.",
          },
          {
            t: "Cross-border community embedding",
            d: "Find where the audience already lives, integrate naturally into the conversation.",
          },
          {
            t: "Co-marketing with existing customers",
            d: "Joint content, cross-promo, case-study collabs with signed clients.",
          },
          {
            t: "Growth-style campaigns",
            d: "Sharp, attention-grabbing campaigns — growth without burning budget.",
          },
          {
            t: "Targeted PR & media",
            d: "Based on earlier research, route into the right outlets — not spray-and-pray.",
          },
          {
            t: "A/B testing & channel tuning",
            d: "Iterate on channel mix and creative based on the first wave of signal.",
          },
        ],
      };

  return (
    <Section bg="paper" className="!py-24 md:!py-32 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #2979FF 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00E676 0%, transparent 70%)",
        }}
      />

      <Container size="full" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <Pill variant="orange" size="md" className="mb-6">
            {isZh ? "服务范围实例" : "Engagement scope · sample"}
          </Pill>
          <div className="text-[#2979FF] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4">
            {isZh
              ? "AI SaaS · 出海客户 · NDA 脱敏"
              : "AI SaaS · global launch · anonymized under NDA"}
          </div>
          <h2 className="sp-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white">
            {isZh
              ? "一份真实合作里我们到底交付什么"
              : "What we actually deliver in a real engagement"}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
            {isZh
              ? "下面是我们近期为一家出海 AI SaaS 客户出具的服务范围。先用两周完成策略与系统搭建,第三周起进入 Launch 与持续迭代,所有动作都围绕「跑出可放大的增长」这一目标。"
              : "Below is a recent SOW for a global-launch AI SaaS client. Two weeks to set strategy and infrastructure, then week 3 onward we ship launches and iterate — all aimed at finding the growth motion worth scaling."}
          </p>
        </motion.div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {[phase1, phase2].map((phase, phaseIdx) => (
            <motion.div
              key={phase.timing}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: phaseIdx * 0.1 }}
              className="rounded-3xl bg-white/[0.04] border border-white/10 p-7 md:p-9"
            >
              <div className="flex items-center justify-between gap-4 mb-7 pb-5 border-b border-white/10">
                <div>
                  <div className="text-white/45 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                    {phase.eyebrow}
                  </div>
                  <div className="sp-display text-[#00E676] text-2xl md:text-3xl leading-none">
                    {phase.timing}
                  </div>
                </div>
                <div
                  className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center sp-display text-xl md:text-2xl tabular-nums ${
                    phaseIdx === 0
                      ? "border-[#2979FF]/40 text-[#2979FF]"
                      : "border-[#00E676]/40 text-[#00E676]"
                  }`}
                >
                  {phaseIdx + 1}
                </div>
              </div>

              <ol className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={item.t} className="flex gap-4">
                    <span className="shrink-0 w-7 text-white/35 text-xs font-bold tabular-nums pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <div className="text-white text-[15px] md:text-base font-semibold leading-snug">
                        {item.t}
                      </div>
                      <div className="mt-1 text-white/60 text-[13px] md:text-sm leading-relaxed">
                        {item.d}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 md:mt-14 rounded-2xl bg-gradient-to-br from-[#00E676]/10 via-transparent to-[#2979FF]/8 border border-[#00E676]/25 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5"
        >
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
            {isZh
              ? "想看完整 SOW、报价结构和过往同类客户的真实数据?在 NDA 下可以一对一拆解。"
              : "Want the full SOW, pricing structure, and benchmarked outcomes from comparable clients? We share it 1:1 under NDA."}
          </p>
          <Button href="/contact" variant="primary" size="lg">
            {isZh ? "聊聊你的项目" : "Tell us about your project"} →
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
