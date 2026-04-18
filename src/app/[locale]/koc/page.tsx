import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    title:
      locale === "zh"
        ? "全球化 AI Agent KOC 增长解决方案 — MIST Ai 首推方案"
        : "Global AI Agent KOC Growth Solution — MIST Ai Featured Offer",
    description:
      locale === "zh"
        ? "MIST Ai 首推方案：操盘千万美金级 AI Agent 出海项目，0 投流 / 0 SEO / 0 GEO 实现年营收 $800K + 月度 25% 复合增长。10 天交付 60 条创意 Brief 与 6 个真人起号账号，标准包 $1,200。"
        : "MIST Ai's flagship offer: $800K ARR + 25% MoM growth on a venture-funded education AI Agent, run on zero paid ads, zero SEO, zero GEO. Get 60 creative briefs and 6 real-person accounts launched in 10 days for $1,200.",
    path: "/koc",
  });
}

export default async function KocPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === "zh";

  const stats = isZh
    ? [
        { n: "$800K", label: "年营收 ARR" },
        { n: "25%", label: "月度复合增长" },
        { n: "1,000+", label: "全球 KOC 矩阵" },
        { n: "6 国", label: "覆盖时区与文化" },
      ]
    : [
        { n: "$800K", label: "Annual revenue (ARR)" },
        { n: "25%", label: "Monthly compounding growth" },
        { n: "1,000+", label: "Global KOC network" },
        { n: "6 markets", label: "Time zones + cultures covered" },
      ];

  const deliverables = isZh
    ? [
        {
          k: "起号服务",
          v: "60 条深度创意搜索 + 定制化内容 Brief",
        },
        { k: "账号搭建", v: "6 个真人出镜 / 实操账号（从 0 到 1 搭建激活）" },
        { k: "交付周期", v: "10 天完成从策略到账号上线的全流程" },
        { k: "账号归属", v: "所有账号资产及内容权限 100% 归产品方所有" },
      ]
    : [
        {
          k: "Launch service",
          v: "60 deep creative searches + tailored content briefs",
        },
        {
          k: "Account build",
          v: "6 real-person accounts built and activated from scratch",
        },
        {
          k: "Delivery window",
          v: "10 days end-to-end — strategy through go-live",
        },
        {
          k: "Ownership",
          v: "100% of accounts and content rights stay with you",
        },
      ];

  const reasons = isZh
    ? [
        {
          t: "实战逻辑",
          b: "我们不是代理商，我们是刚从战场回来的操盘手。交付的是验证过的增长逻辑，不是 PPT 上的「最佳实践」。",
        },
        {
          t: "全球矩阵",
          b: "1,000+ KOC 分布于加拿大、阿联酋、澳大利亚、美国、土耳其、菲律宾。跨时区、多语种、多文化，确保内容极具本地化说服力。",
        },
        {
          t: "结果导向",
          b: "拒绝虚假曝光。专注于能带来营收转化（Revenue Generation）的有效流量。每一条 Brief 都奔着 Conversion 去。",
        },
      ]
    : [
        {
          t: "Operator-grade playbook",
          b: "We're not an agency — we're operators just back from the field. We deliver growth logic we've validated ourselves, not slide-deck \u201cbest practices.\u201d",
        },
        {
          t: "Global creator matrix",
          b: "1,000+ KOCs across Canada, UAE, Australia, US, Turkey, and the Philippines — multi-timezone, multilingual, locally credible content.",
        },
        {
          t: "Results, not impressions",
          b: "We refuse vanity reach. Every brief is engineered for revenue-generating conversion, not view counts.",
        },
      ];

  const jsonLd = [
    breadcrumbSchema(locale, [
      {
        name: isZh ? "全球化 AI Agent KOC 增长方案" : "Global AI Agent KOC Growth",
        path: "/koc",
      },
    ]),
    serviceSchema({
      locale,
      slug: "koc",
      name: isZh
        ? "全球化 AI Agent KOC 增长解决方案"
        : "Global AI Agent KOC Growth Solution",
      description: isZh
        ? "10 天交付 60 条 KOC 创意 Brief 与 6 个真人起号账号，标准包 $1,200。"
        : "10-day delivery of 60 KOC creative briefs and 6 real-person launch accounts. Standard package $1,200.",
    }),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <Section bg="paper" className="!pt-32 md:!pt-40 !pb-16 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #00E676 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-40 -left-40 w-[28rem] h-[28rem] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #2979FF 0%, transparent 70%)",
          }}
        />
        <Container size="full" className="relative">
          <div className="flex items-center gap-3 mb-6">
            <Pill variant="orange" size="md">
              {isZh ? "首推方案" : "Featured offer"}
            </Pill>
            <span className="text-white/40 text-xs tracking-[0.25em] uppercase">
              {isZh ? "全新上线" : "Just launched"}
            </span>
          </div>

          <h1 className="sp-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-5xl text-[#E8F0FF]">
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
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-white/70 leading-relaxed">
            {isZh
              ? "我们操盘了千万美金级融资的教育类 AI Agent 出海项目，在「三零」条件下实现指数级增长。这是我们目前最强、最受欢迎的 0→1 增长方案。"
              : "We ran the 0→1 growth for a venture-backed education AI Agent — exponential growth under \u201ctriple-zero\u201d conditions. This is our strongest, most-requested 0→1 offer right now."}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary" size="lg">
              {isZh ? "立即预约咨询" : "Book a free call"} →
            </Button>
            <Button href="#deliverables" variant="outline" size="lg">
              {isZh ? "查看交付内容" : "See what's included"}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Stats — proven track record */}
      <Section bg="cream" className="!py-20 md:!py-24">
        <Container size="full">
          <div className="max-w-3xl mb-12">
            <Pill variant="orange" size="md" className="mb-5">
              {isZh ? "核心战绩" : "The case"}
            </Pill>
            <h2 className="sp-display text-3xl md:text-4xl lg:text-5xl text-[#E8F0FF] leading-[1.08]">
              {isZh
                ? "0 投流 / 0 SEO / 0 GEO，纯靠 KOC + UGC 爆发"
                : "Zero paid. Zero SEO. Zero GEO. Pure KOC + UGC."}
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed text-lg">
              {isZh
                ? "我们用一套已验证的创意引擎，把一个教育类 AI Agent 从 0 推到年营收 $800K，并保持每月 25% 的强劲复合增长。"
                : "We took an education AI Agent from zero to $800K ARR with our proven creative engine — and held 25% month-over-month compounding growth."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-[#0D1830] border border-white/8 p-6 md:p-7"
              >
                <div className="sp-display text-[#00E676] text-4xl md:text-5xl leading-none tabular-nums">
                  {s.n}
                </div>
                <div className="mt-3 text-white/65 text-sm md:text-base leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Proof — real account screenshots + videos */}
      <Section bg="paper" className="!py-20 md:!py-24 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-40 right-1/4 w-[28rem] h-[28rem] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #2979FF 0%, transparent 70%)",
          }}
        />
        <Container size="full" className="relative">
          <div className="max-w-3xl mb-12">
            <Pill variant="orange" size="md" className="mb-5">
              {isZh ? "案例实证" : "Proof in motion"}
            </Pill>
            <h2 className="sp-display text-3xl md:text-4xl lg:text-5xl text-[#E8F0FF] leading-[1.08]">
              {isZh
                ? "不是 PPT — 是真实跑出结果的账号矩阵"
                : "Not a deck — the actual account matrix that's working"}
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed text-lg">
              {isZh
                ? "下面是该项目运营中的真实账号矩阵后台，以及单条破百万播放的 KOC 账号截图与实拍片段。"
                : "Below: the live account-matrix back office, plus screen captures and on-camera footage from a single account that's broken 5M views."}
            </p>
          </div>

          {/* Matrix dashboard — full-width landscape proof shot */}
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#0D1830] mb-10 md:mb-14">
            <div className="px-6 md:px-8 py-4 border-b border-white/8 flex items-center gap-3">
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              </span>
              <span className="text-white/45 text-xs font-mono">
                {isZh
                  ? "账号矩阵后台 · 多平台 KOC 分发"
                  : "Account-matrix back office · multi-platform KOC distribution"}
              </span>
            </div>
            <Image
              src="/koc/proposal-2.png"
              alt={
                isZh
                  ? "MIST Ai 操盘的多平台 KOC 账号矩阵后台截图"
                  : "Back-office screenshot of the multi-platform KOC account matrix"
              }
              width={1288}
              height={775}
              className="w-full h-auto"
            />
          </div>

          {/* Two-column: tall portrait screenshot + narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-10 lg:gap-14 items-center mb-10 md:mb-14">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#030810] mx-auto max-w-sm w-full">
              <Image
                src="/koc/proposal-1.png"
                alt={
                  isZh
                    ? "单个 KOC 账号视频网格,单条破 521 万播放"
                    : "A single KOC account's video grid — top post over 5.21M views"
                }
                width={1408}
                height={3068}
                className="w-full h-auto"
              />
            </div>

            <div>
              <div className="text-[#00E676] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                {isZh ? "其中一个真实账号" : "One real account"}
              </div>
              <h3 className="sp-display text-2xl md:text-3xl lg:text-4xl text-[#E8F0FF] leading-tight">
                {isZh
                  ? "顶部单条 521 万播放,内容全部围绕产品场景"
                  : "Top post: 5.21M views — every piece anchored to the product use case"}
              </h3>
              <ul className="mt-6 space-y-3">
                {(isZh
                  ? [
                      "9 条样本中,5 条破百万播放,2 条破 18 万",
                      "出镜达人的内容均围绕「学英语 30 天进步」这一产品场景",
                      "评论区与 bio 链接全部沉淀到产品落地页",
                    ]
                  : [
                      "5 of 9 sample posts cleared 1M views; 2 cleared 180k",
                      "Every clip threads through one product use case (\u201cimprove English in 30 days\u201d)",
                      "Comments + bio links all funnel to the product landing page",
                    ]
                ).map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-white/80 text-[15px] md:text-base leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#00E676]"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Two video proof clips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <figure className="rounded-2xl overflow-hidden border border-white/10 bg-[#030810]">
              <video
                // eslint-disable-next-line jsx-a11y/media-has-caption
                src="/videos/koc-case-1.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover bg-black"
              />
              <figcaption className="px-5 py-4 text-white/65 text-sm leading-relaxed">
                {isZh
                  ? "真人出镜样片 — 围绕产品场景的 KOC 内容片段"
                  : "On-camera sample — KOC content built around the product moment"}
              </figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-white/10 bg-[#030810]">
              <video
                // eslint-disable-next-line jsx-a11y/media-has-caption
                src="/videos/koc-screen-recording.mov"
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover bg-black"
              />
              <figcaption className="px-5 py-4 text-white/65 text-sm leading-relaxed">
                {isZh
                  ? "后台运营录屏 — 多账号同步分发流程"
                  : "Back-office screen capture — multi-account sync workflow"}
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      {/* Insight — pull quote */}
      <Section bg="paper" className="!py-20 md:!py-24">
        <Container size="lg">
          <Pill variant="orange" size="md" className="mb-6">
            {isZh ? "核心洞察" : "The insight"}
          </Pill>
          <blockquote className="sp-display text-3xl md:text-4xl lg:text-5xl text-[#E8F0FF] leading-[1.15] max-w-4xl relative">
            <span
              aria-hidden="true"
              className="absolute -top-8 -left-2 md:-left-8 text-[#00E676]/35 text-7xl md:text-8xl select-none leading-none"
            >
              &ldquo;
            </span>
            {isZh
              ? "在 AI 时代，创意公式的半衰期极短。"
              : "In the AI era, the half-life of any creative formula is brutally short."}
          </blockquote>
          <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-3xl">
            {isZh
              ? "目前市面上 80% 的产品特定营销公式，在下个月都会面临失效。我们不卖「套路」——我们交付的是一套持续捕捉流量风向的创意引擎。"
              : "Roughly 80% of the marketing formulas working today will be dead next month. We don't sell playbooks — we deliver a creative engine that keeps catching where attention is moving next."}
          </p>
        </Container>
      </Section>

      {/* Deliverables */}
      <Section
        bg="cream"
        id="deliverables"
        className="!py-20 md:!py-24 scroll-mt-20"
      >
        <Container size="full">
          <div className="max-w-3xl mb-12">
            <Pill variant="orange" size="md" className="mb-5">
              {isZh ? "交付方案" : "The offer"}
            </Pill>
            <h2 className="sp-display text-3xl md:text-4xl lg:text-5xl text-[#E8F0FF] leading-[1.08]">
              {isZh
                ? "「全托管式创意起号」服务"
                : "Fully-managed creative launch service"}
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed text-lg">
              {isZh
                ? "我们为出海产品方提供端到端的 KOC 增长引擎，10 天内帮品牌建立海外社媒资产。"
                : "An end-to-end KOC growth engine for products going overseas. We stand up your social asset base in 10 days."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {deliverables.map((d, i) => (
              <div
                key={d.k}
                className="rounded-2xl bg-[#0D1830] border border-white/10 p-7 md:p-8 flex gap-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#00E676]/12 border border-[#00E676]/30 flex items-center justify-center text-[#00E676] font-bold tabular-nums">
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <div className="text-[#00E676] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                    {d.k}
                  </div>
                  <p className="text-[#E8F0FF] text-lg leading-snug">{d.v}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section bg="paper" className="!py-20 md:!py-24">
        <Container size="lg">
          <div className="max-w-3xl mb-12">
            <Pill variant="orange" size="md" className="mb-5">
              {isZh ? "合作报价" : "Pricing"}
            </Pill>
            <h2 className="sp-display text-3xl md:text-4xl lg:text-5xl text-[#E8F0FF] leading-[1.08]">
              {isZh
                ? "性价比远超任何海外代运营"
                : "Outperforms any overseas agency on cost-per-output"}
            </h2>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#00E676]/12 via-transparent to-[#2979FF]/8 border border-[#00E676]/35 p-8 md:p-12 max-w-3xl">
            <div className="text-[#00E676] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              {isZh ? "标准包" : "Standard package"}
            </div>
            <div className="flex items-baseline gap-3">
              <span className="sp-display text-[#E8F0FF] text-6xl md:text-7xl leading-none tabular-nums">
                $1,200
              </span>
              <span className="text-white/55 text-lg">
                {isZh ? "/ 周期" : "/ cycle"}
              </span>
            </div>
            <p className="mt-6 text-white/75 text-lg leading-relaxed">
              {isZh
                ? "包含 60 条创意 Brief + 6 个真人起号账号，10 天交付。"
                : "Includes 60 creative briefs + 6 real-person launch accounts, delivered in 10 days."}
            </p>
            <div className="mt-6 rounded-xl bg-[#030810]/60 border border-white/8 px-5 py-4 text-white/65 text-[15px] leading-relaxed">
              {isZh
                ? "平均单条创意 Brief 成本仅 $20，包含真人起号基建——海外代运营或投流机构通常单条 Brief 报价就在 $80-200。"
                : "That's roughly $20 per creative brief, real-person launch infrastructure included — overseas agencies and paid-media shops typically charge $80–200 per brief alone."}
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                {isZh ? "立即预约启动" : "Get started — book a call"} →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why us */}
      <Section bg="cream" className="!py-20 md:!py-24">
        <Container size="full">
          <div className="max-w-3xl mb-12">
            <Pill variant="orange" size="md" className="mb-5">
              {isZh ? "为什么是我们？" : "Why MIST Ai"}
            </Pill>
            <h2 className="sp-display text-3xl md:text-4xl lg:text-5xl text-[#E8F0FF] leading-[1.08]">
              {isZh
                ? "不是代理商，是刚从战场回来的操盘手"
                : "Not an agency — operators fresh from the field"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <article
                key={r.t}
                className="rounded-2xl bg-[#0D1830] border border-white/10 p-7 md:p-8 hover:border-[#00E676]/40 transition-colors"
              >
                <h3 className="sp-display text-2xl text-[#E8F0FF] leading-tight">
                  {r.t}
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">{r.b}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section bg="ink" className="!py-20 md:!py-24">
        <Container size="lg" className="text-center">
          <h2 className="sp-display text-3xl md:text-5xl text-white leading-tight">
            {isZh
              ? "联系我们，开启你的全球 KOC 增长曲线"
              : "Let's start your global KOC growth curve"}
          </h2>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            {isZh
              ? "30 分钟免费咨询，帮你判断 KOC 起号策略是否适合你当前阶段。工作日 24 小时内回复。"
              : "Free 30-minute consultation to pressure-test whether KOC launch fits your current stage. Reply within 24 hours on weekdays."}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              {isZh ? "预约咨询" : "Book consultation"} →
            </Button>
            <Button href="/services" variant="outline" size="lg">
              {isZh ? "看其他服务" : "See other services"}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
