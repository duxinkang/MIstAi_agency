"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

type Slide = {
  id: string;
  page: number;
  title: string;
  description: string;
  points?: string[];
};

const slides: Slide[] = [
  {
    id: "pdf-hero",
    page: 1,
    title: "起始点 StartPoint",
    description: "只做 AI Agent 的 0→1 增长。",
  },
  {
    id: "problems",
    page: 2,
    title: "AI Agent 的问题，不在技术，在 GTM",
    description: "从技术能力到市场结果之间，核心问题在用户导向、刚需场景与精准人群。",
    points: ["技术导向，而非用户导向", "有功能，但无刚需场景", "有流量，但无精准人群"],
  },
  {
    id: "who-we-are",
    page: 3,
    title: "您的增长合伙人",
    description: "深度陪伴、垂直专注、价值翻译，覆盖 AI Agent 从 0 到 1 的关键断点。",
  },
  {
    id: "service-matrix",
    page: 4,
    title: "业务覆盖",
    description: "围绕市场策略构建六大核心增长服务。",
    points: [
      "海外 KOL & KOC 营销",
      "Launch Video 制作",
      "广告投放 / Paid Ads",
      "Product Hunt",
      "SEO / GEO",
      "社群 / 社交媒体曝光",
    ],
  },
  {
    id: "growth-engine",
    page: 5,
    title: "我们的四步增长引擎",
    description: "从 GTM 产品发布到品牌打造，覆盖诊断策略、市场发布、规模增长与品牌沉淀。",
  },
  {
    id: "launch-video",
    page: 6,
    title: "Launch Video 制作",
    description: "通过脚本策划、产品演示制作与后期剪辑优化，帮助 AI 产品高效冷启动。",
  },
  {
    id: "creator",
    page: 7,
    title: "海外达人合作",
    description: "通过 KOL 精准匹配、KOC 口碑矩阵与效果追踪优化，帮助产品获取高质量早期用户。",
  },
  {
    id: "paid-ads",
    page: 8,
    title: "广告投流",
    description: "覆盖 Google、Meta、X、LinkedIn、Reddit 等平台，构建从曝光到转化的方法论。",
  },
  {
    id: "product-hunt",
    page: 9,
    title: "Product Hunt",
    description: "提供从预热到冲榜的全程陪跑服务，帮助产品实现注册增长、媒体曝光与投资人关注。",
  },
  {
    id: "reddit",
    page: 10,
    title: "Reddit 营销的独特价值",
    description: "通过深耕高价值社区与真实内容传播，获取高质量种子用户与长期 SEO 流量。",
  },
  {
    id: "growth-proof",
    page: 11,
    title: "用户案例",
    description: "展示 Product Hunt、SEO 与达人营销等真实增长案例。",
  },
  {
    id: "comparison",
    page: 12,
    title: "为什么选择 StartPoint",
    description: "相较于自建市场团队，StartPoint 提供更理性、更敏捷、更确定的增长路径。",
  },
  {
    id: "stats",
    page: 13,
    title: "突破性营销增长",
    description: "通过全球合作专家、落地案例与快速启动能力，助力 AI 产品实现增长突破。",
  },
  {
    id: "advantages",
    page: 14,
    title: "我们的核心优势",
    description: "六大差异化能力，让 StartPoint 成为 AI 产品营销增长的最优合作伙伴。",
  },
  {
    id: "team",
    page: 15,
    title: "是谁在陪你走 0→1",
    description: "由懂技术、懂增长、懂资本叙事的复合型团队陪你走完关键阶段。",
  },
  {
    id: "promise",
    page: 16,
    title: "核心承诺",
    description: "不是只给建议，而是陪你把 0→1 跑通，重点攻坚 3 到 6 个月关键窗口。",
  },
  {
    id: "closing",
    page: 17,
    title: "更理性、更敏捷、更确定的增长路径",
    description: "选择 StartPoint，意味着选择一条被验证过且与客户利益深度绑定的高效路径。",
  },
  {
    id: "pricing",
    page: 18,
    title: "我们的合作模式",
    description: "覆盖战略问诊、轻量陪跑与全链路增长陪跑等多种合作方式。",
  },
  {
    id: "contact",
    page: 19,
    title: "联系我们",
    description: "获得免费 30 分钟咨询，支持电话联系与线下 coffee chat。",
  },
];

const videos = [
  { title: "Ava - Artisan V3.4", src: "/Ava - Artisan V3.4.mp4" },
  { title: "Poly Final", src: "/Poly Final.mp4" },
];

function SlideBackground({
  page,
  alt,
}: {
  page: number;
  alt: string;
}) {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <Image
        src={`/pdf-pages/page-${String(page).padStart(2, "0")}.png`}
        alt={alt}
        fill
        priority={page <= 2}
        sizes="(min-width: 1024px) 92vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

function SeoLayer({ slide }: { slide: Slide }) {
  return (
    <div className="sr-only">
      <h2>{slide.title}</h2>
      <p>{slide.description}</p>
      {slide.points && (
        <ul>
          {slide.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PageFiveReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#efefee] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[5.8%] top-[6.4%] flex items-center gap-[2vw]">
        <div className="flex gap-[0.9vw] text-[3.2vw] font-light tracking-[-0.12em] text-black/45">
          <span>〉</span>
          <span>〉</span>
          <span>〉</span>
          <span>〉</span>
        </div>
        <div className="h-[3vw] w-[3vw] rounded-full bg-black" />
        <p className="max-w-[58vw] text-[1.45vw] font-bold leading-[1.45] text-black/82">
          无论您的产品处于冷启动期、成长期还是规模化阶段，StartPoint 都能提供精准匹配当前阶段的增长策略，帮助AI产品在全球市场建立持久的品牌影响力与用户增长
        </p>
      </div>

      <div className="absolute left-[11.5%] top-[26.6%] text-[#f36b16]">
        <div className="text-[3.2vw] font-black leading-none">一 | 诊断与策略</div>
        <div className="mt-[0.5vw] text-[2vw] font-bold leading-[1.35] text-black">
          GTM策略制定，明确
          <br />
          核心价值主张
        </div>
      </div>

      <div className="absolute right-[11.1%] top-[26.8%] text-[#f36b16]">
        <div className="text-[3.2vw] font-black leading-none">二 | 市场发布</div>
        <div className="mt-[0.5vw] text-[2vw] font-bold leading-[1.35] text-black">
          Product Hunt冲榜，
          <br />
          Launch Video引爆声量
        </div>
      </div>

      <div className="absolute left-[11.4%] bottom-[12.2%] text-[#f36b16]">
        <div className="text-[3.2vw] font-black leading-none">三 | 规模增长</div>
        <div className="mt-[0.5vw] text-[2vw] font-bold leading-[1.35] text-black">
          达人矩阵+SEO+多渠道
          <br />
          投放，持续获客
        </div>
      </div>

      <div className="absolute right-[8.3%] bottom-[14%] text-[#f36b16]">
        <div className="text-[3.2vw] font-black leading-none">四 | 品牌沉淀</div>
        <div className="mt-[0.5vw] text-[2vw] font-bold leading-[1.35] text-black">
          IP打造+社区运营，
          <br />
          构建护城河
        </div>
      </div>

      <div className="absolute left-[32.6%] top-[39.6%] h-[28.3%] w-[18.6%] rounded-full bg-[linear-gradient(180deg,#f6d3ba_0%,#ff6a2a_58%,#ff4918_77%,#4f5da2_100%)]" />
      <div className="absolute left-[45.3%] top-[39.6%] h-[28.3%] w-[18.6%] rounded-full bg-[radial-gradient(circle_at_26%_24%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.24)_28%,transparent_30%),linear-gradient(180deg,#f7d7be_0%,#ff6d32_49%,#ff4c17_66%,#f9d6be_100%)] opacity-90" />

      <div className="absolute left-[41.5%] top-[47.8%] z-10 text-center text-[#8b3d1e]">
        <div className="text-[4vw] font-black leading-[1.04]">我们的四步</div>
        <div className="text-[4vw] font-black leading-[1.04]">增长引擎</div>
        <div className="mt-[0.9vw] text-[2.1vw] font-black text-white">从GTM产品发布到品牌打造</div>
      </div>

      <div className="absolute left-[19.1%] top-[44.2%] h-[17.2%] w-[0.28%] rounded-full bg-black" />
      <div className="absolute left-[19.1%] top-[60.9%] h-[0.28%] w-[20.3%] rounded-full bg-black" />
      <div className="absolute left-[39.1%] top-[60.9%] h-[0.28%] w-[0.28%] rounded-full bg-black" />
      <div className="absolute left-[52.2%] top-[31.7%] h-[11.8%] w-[0.28%] rounded-full bg-black" />
      <div className="absolute left-[52.2%] top-[31.7%] h-[0.28%] w-[11.1%] rounded-full bg-black" />
      <div className="absolute right-[22.8%] top-[59.2%] h-[0.28%] w-[18.2%] rounded-full bg-black" />
      <div className="absolute right-[22.8%] top-[59.2%] h-[16.5%] w-[0.28%] rounded-full bg-black" />
      <div className="absolute left-[41.5%] top-[67.8%] h-[12.6%] w-[0.28%] rounded-full bg-black" />
      <div className="absolute left-[31.1%] top-[80.2%] h-[0.28%] w-[10.6%] rounded-full bg-black" />

      <div className="absolute left-[18.6%] top-[42.8%] h-[1.3vw] w-[1.3vw] rounded-full bg-black" />
      <div className="absolute left-[62.6%] top-[30.5%] h-[1.3vw] w-[1.3vw] rounded-full bg-black" />
      <div className="absolute right-[21.7%] top-[74.5%] h-[1.3vw] w-[1.3vw] rounded-full bg-black" />
      <div className="absolute left-[30.4%] top-[79.2%] h-[1.3vw] w-[1.3vw] rounded-full bg-black" />

      <div className="absolute right-[4.2%] bottom-[6.6%] grid grid-cols-4 gap-[1.1vw]">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-[0.45vw] w-[0.45vw] rounded-full bg-black/72" />
        ))}
      </div>
    </div>
  );
}

function PageOneReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#efefee] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[8.6%] top-[14.6%] rounded-full bg-black px-[2.2vw] py-[0.7vw] text-[1.55vw] font-medium tracking-wide text-[#b84c20]">
        Let&apos;s Start
      </div>
      <div className="absolute left-[8.6%] top-[35.8%] text-black">
        <h1 className="text-[5.45vw] font-black leading-[0.94] tracking-[-0.07em]">
          起始点
          <br />
          StartPoint
        </h1>
        <p className="mt-[2.1vw] text-[2.05vw] font-bold tracking-[0.04em]">① 只做 AI Agent 的 0→1 增长</p>
      </div>
      <div className="absolute right-[14.8%] top-[23.8%] h-[33.8%] w-[19%] rounded-full bg-[linear-gradient(180deg,#f6d3ba_0%,#ff6a2a_58%,#ff4918_77%,#4f5da2_100%)]" />
      <div className="absolute right-[-0.3%] top-[23.8%] h-[33.8%] w-[19%] rounded-full bg-[linear-gradient(180deg,#f7d7be_0%,#ff6d32_49%,#ff4c17_66%,#f9d6be_100%)] opacity-90" />
      <div className="absolute right-[2.8%] top-[10%] h-[18.2%] w-[9.8%] rounded-full border-[0.16vw] border-black/55 bg-[linear-gradient(to_bottom,transparent_62%,rgba(255,102,45,0.7)_62%)] [background-size:1.4vw_1.4vw]" />
      <div className="absolute right-[18.7%] bottom-[16.4%] grid grid-cols-4 gap-[1.1vw]">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-[0.45vw] w-[0.45vw] rounded-full bg-black/72" />
        ))}
      </div>
      <div className="absolute left-[-8.4%] bottom-[-22%] h-[38%] w-[20%] rounded-full border-[0.24vw] border-black/82" />
    </div>
  );
}

function PageTwoReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#efefee] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <Image
        src="/pdf-pages/page-02.png"
        alt="StartPoint PDF 第 2 页左侧视觉"
        fill
        priority
        sizes="(min-width: 1024px) 92vw, 100vw"
        className="object-cover"
      />
      <div className="absolute left-[55.2%] top-[11.8%] h-[67.5%] w-[42.8%] bg-[#efefee]" />
      <div className="absolute left-[55.9%] top-[15.4%] text-black">
        <h2 className="text-[4.2vw] font-black leading-[1.06] tracking-[-0.06em]">
          AI Agent 的问题，
          <br />
          不在技术，在GTM
        </h2>
        <div className="mt-[1.75vw] h-[0.11vw] w-[33vw] bg-black/75" />
        <div className="mt-[4.4vw] space-y-[2.7vw]">
          {["技术导向，而非用户导向", "有功能，但无“刚需场景”", "有流量，但无精准人群"].map((item, index) => (
            <div key={item}>
              <div className="text-[2.25vw] font-black text-[#ff8d16]">0{index + 1}</div>
              <div className="mt-[0.25vw] text-[1.95vw] font-bold leading-tight">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PageThreeReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[linear-gradient(90deg,#f7a46b_0_39%,#fde8bc_39%_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <Image
        src="/pdf-pages/page-03.png"
        alt="StartPoint PDF 第 3 页背景"
        fill
        priority
        sizes="(min-width: 1024px) 92vw, 100vw"
        className="object-cover"
      />
      <div className="absolute left-[0.4%] top-[0.4%] h-[99.2%] w-[39.2%] bg-[linear-gradient(180deg,#ffb06a_0%,#f7a068_100%)]" />
      <div className="absolute left-[39.4%] top-[0.4%] h-[99.2%] w-[60.2%] bg-[#fde8bc]" />
      <div className="absolute left-[-13%] top-[-16%] h-[80%] w-[40%] rounded-full border-[0.12vw] border-white/45" />
      <div className="absolute left-[7.7%] top-[41.4%] w-[24%] text-[#22212a]">
        <p className="text-[1.55vw]">我们是谁?</p>
        <h2 className="mt-[1vw] text-[4.9vw] font-black leading-[1.04] tracking-[-0.06em]">
          您的增长
          <br />
          合伙人
        </h2>
      </div>
      <div className="absolute left-0 bottom-[4.8%] rounded-r-full bg-black px-[1.8vw] py-[0.65vw] text-[1.85vw] font-bold text-white">
        ① StartPoint
      </div>
      <div className="absolute left-[44.6%] top-[16%] w-[48.2%] text-black">
        <h2 className="text-[4vw] font-black leading-[1.1] tracking-[-0.05em]">
          AI 懂技术，
          <br />
          但 0→1 的增长，仍然需要人
        </h2>
        <div className="mt-[1.55vw] h-[0.11vw] w-[33vw] bg-black/25" />
        <div className="mt-[3vw] space-y-[2.9vw]">
          {[
            ["深度陪伴", "我们直接对结果负责"],
            ["垂直专注", "只服务 AI Agent/SAAS"],
            ["价值翻译", "把技术变成市场和资本听得懂的语言"],
          ].map(([title, desc]) => (
            <div key={title} className="grid grid-cols-[12.2vw_1fr] items-center gap-[1.7vw]">
              <div className="rounded-full bg-[#ff6e2e] px-[1vw] py-[0.95vw] text-center text-[1.7vw] font-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)]">
                {title}
              </div>
              <p className="text-[1.85vw] font-bold leading-tight">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-[2.9vw] flex items-center gap-[1.2vw] text-[1.3vw] text-black/46">
          <div className="h-[0.11vw] w-[7vw] bg-black/22" />
          <span>覆盖 AI Agent 从 0 → 1 的关键 3 个断点</span>
          <div className="h-[0.11vw] flex-1 bg-black/22" />
        </div>
      </div>
    </div>
  );
}

function PageFourReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#ff4f13] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <Image
        src="/pdf-pages/page-04.png"
        alt="StartPoint PDF 第 4 页背景"
        fill
        priority
        sizes="(min-width: 1024px) 92vw, 100vw"
        className="object-cover"
      />
      <div className="absolute left-[0.4%] top-[0.4%] h-[99.2%] w-[99.2%] bg-[#ff4f13]" />
      <div className="absolute left-[5.5%] top-[6.2%] text-[1.7vw] font-semibold">↗</div>
      <div className="absolute left-[34.2%] top-[6.1%] text-[1.5vw] font-bold">① StartPoint</div>
      <div className="absolute right-[7%] top-[6%] text-[1.45vw] font-medium">只做 AI Agent 的 0→1 增长</div>
      <div className="absolute left-[5.3%] top-[22.8%] text-[6.8vw] font-black leading-none tracking-[-0.07em]">业务覆盖</div>
      <div className="absolute right-[6.7%] top-[25%] w-[25.5%] text-[1.85vw] leading-[1.55] text-white/88">
        StartPoint 提供覆盖AI产品全生命周期的六大核心营销服务，从品牌曝光到精准转化，构建完整的增长飞轮
      </div>
      <div className="absolute left-[39.2%] top-[55.4%] flex h-[34%] w-[22.2%] items-center justify-center rounded-full bg-black text-[3.25vw] font-black text-[#efe8db]">
        市场策略
      </div>
      {[
        { label: "海外KOL&KOC营销", left: "5.5%", top: "55.5%" },
        { label: "LAUNCH VIDEO制作", left: "5.5%", top: "70.2%" },
        { label: "广告投放/PAID ADS", left: "5.5%", top: "84.9%" },
        { label: "PRODUCT HUNT", left: "68.7%", top: "55.5%" },
        { label: "SEO / GEO", left: "68.7%", top: "70.2%" },
        { label: "社群/社交媒体曝光", left: "68.7%", top: "84.9%" },
      ].map((item) => (
        <div
          key={item.label}
          className="absolute flex h-[10.4%] w-[25.6%] items-center justify-center rounded-full bg-black text-[1.95vw] font-black text-[#f7ede2]"
          style={{ left: item.left, top: item.top }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

function PageSixReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#f8f4eb] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(232,112,37,0.52),transparent_22%),radial-gradient(circle_at_6%_82%,rgba(255,172,68,0.36),transparent_18%),linear-gradient(180deg,#f8f4eb_0%,#f4efe5_100%)]" />
      <div className="absolute inset-x-[5.5%] top-[6.2%] flex items-center justify-between text-[1.05vw] font-semibold tracking-[0.06em] text-black/65">
        <span>LAUNCH VIDEO</span>
        <span>2026</span>
      </div>
      <div className="absolute left-[22.2%] top-[7.15%] h-[0.11vw] w-[57.5%] bg-black/45" />

      <div className="absolute left-[5.7%] top-[17.8%] w-[31.5%]">
        <h2 className="text-[4.7vw] font-black leading-[0.95] tracking-[-0.05em] text-[#ff551d]">
          LAUNCH VIDEO
          <br />
          制作
        </h2>
        <p className="mt-[2.3vw] max-w-[29vw] text-[1.36vw] font-medium leading-[1.52] text-[#ff6b24]">
          一支高质量的产品发布视频是AI产品冷启动阶段最高ROI的营销资产。它不仅能在Product Hunt、官网首页与社交媒体上驱动转化，更能精准传递产品的核心价值主张。
        </p>
      </div>

      <div className="absolute left-[44.35%] top-[18.35%] w-[45.2%]">
        <div>
          <h3 className="text-[2.08vw] font-black text-black/80">脚本策划</h3>
          <p className="mt-[0.82vw] text-[1.36vw] font-semibold leading-[1.46] text-black/58">
            深度挖掘产品核心差异化价值，用听得懂的话语构建打动人心的产品故事。
          </p>
        </div>
        <div className="mt-[2.28vw]">
          <h3 className="text-[2.08vw] font-black text-black/80">产品演示制作</h3>
          <p className="mt-[0.82vw] text-[1.36vw] font-semibold leading-[1.46] text-black/58">
            专业级屏幕录制与动效设计，清晰展示产品工作流，降低用户认知门槛。
          </p>
        </div>
        <div className="mt-[2.28vw]">
          <h3 className="text-[2.08vw] font-black text-black/80">后期剪辑优化</h3>
          <p className="mt-[0.82vw] text-[1.36vw] font-semibold leading-[1.46] text-black/58">
            精准节奏把控、配乐、字幕与视觉动效全面优化，确保完播率与点击转化。
          </p>
        </div>
      </div>

      <div className="absolute left-[6.6%] top-[62.4%] flex w-[27.6%] flex-col">
        <div className="relative aspect-[1.66/1] overflow-hidden bg-[#ddd2c7]">
          <video src="/Ava - Artisan V3.4.mp4" muted playsInline className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/12" />
          <div className="absolute left-1/2 top-1/2 flex h-[5vw] w-[5vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/82">
            <Play className="ml-[0.25vw] h-[2vw] w-[2vw] fill-black text-black" />
          </div>
          <div className="absolute inset-x-[4%] bottom-[6%] text-[1.9vw] font-black leading-[1.18] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.45)]">
            用视频讲好创始人的故事，
            <br />
            爆发式传播，撬动高转化
          </div>
        </div>
        <div className="grid grid-cols-[4.4vw_1fr] gap-[0.9vw] bg-[#f8f4eb] pt-[1vw]">
          <div className="flex h-[4vw] w-[4vw] items-center justify-center rounded-[0.2vw] bg-[#f19b84] text-[2.7vw] font-black text-white">
            b
          </div>
          <div className="text-[1.25vw] leading-[1.32] text-black/72">
            <span className="font-semibold">客户案例：</span>
            <span className="text-[1.65vw] font-black text-black/72 underline">Blockit AI</span>
            <br />
            <span className="font-bold text-[1.55vw] text-black/75">发布6小时突破百万观看量，</span>
            <br />
            <span className="font-bold text-[1.55vw] text-black/75">1,214 注册，272 信用卡付费</span>
          </div>
        </div>
      </div>

      <div className="absolute left-[37.35%] top-[62.4%] flex w-[27.6%] flex-col">
        <div className="relative aspect-[1.66/1] overflow-hidden bg-black">
          <video src="/Poly Final.mp4" muted playsInline className="h-full w-full object-cover opacity-82" />
          <div className="absolute inset-0 bg-black/24" />
          <div className="absolute left-1/2 top-1/2 flex h-[5vw] w-[5vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/82">
            <Play className="ml-[0.25vw] h-[2vw] w-[2vw] fill-black text-black" />
          </div>
          <div className="absolute inset-x-[3.8%] bottom-[6%] text-[1.9vw] font-black leading-[1.18] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.45)]">
            用纯视频语言，把文件浏览器
            <br />
            讲成 AI 时代的变革故事
          </div>
        </div>
        <div className="grid grid-cols-[4.4vw_1fr] gap-[0.9vw] bg-[#f8f4eb] pt-[1vw]">
          <div className="flex h-[4vw] w-[4vw] items-center justify-center text-[2.8vw] font-black text-[#ff5d1f]">
            ♦
          </div>
          <div className="text-[1.25vw] leading-[1.32] text-black/72">
            <span className="font-semibold">客户案例：</span>
            <span className="text-[1.65vw] font-black text-black/72">Poly.app</span>
            <br />
            <span className="font-bold text-[1.55vw] text-black/75">累计播放量300万+</span>
            <br />
            <span className="font-bold text-[1.55vw] text-black/75">融资 $16M</span>
          </div>
        </div>
      </div>

      <div className="absolute left-[68.1%] top-[62.4%] flex w-[27.6%] flex-col">
        <div className="relative aspect-[1.66/1] overflow-hidden rounded-[0.25vw] bg-[#ddd2c7]">
          <video src="/Poly Final.mp4" muted playsInline className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/16" />
          <div className="absolute left-1/2 top-1/2 flex h-[5vw] w-[5vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/82">
            <Play className="ml-[0.25vw] h-[2vw] w-[2vw] fill-black text-black" />
          </div>
          <div className="absolute inset-x-[4%] bottom-[6%] text-[1.9vw] font-black leading-[1.18] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.45)]">
            400 万播放的背后：视频让
            <br />
            复杂产品，一眼就懂
          </div>
        </div>
        <div className="grid grid-cols-[4.4vw_1fr] gap-[0.9vw] bg-[#f8f4eb] pt-[1vw]">
          <div className="flex h-[4vw] w-[4vw] items-center justify-center text-[2.9vw] font-black text-[#ff6a24]">
            c
          </div>
          <div className="text-[1.25vw] leading-[1.32] text-black/72">
            <span className="font-semibold">客户案例：</span>
            <span className="text-[1.65vw] font-black text-black/72">Crunched</span>
            <br />
            <span className="font-bold text-[1.55vw] text-black/75">累计播放量400万+</span>
            <br />
            <span className="font-bold text-[1.55vw] text-black/75">迅速打开欧美市场</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageSevenReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#efefee] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[44%] top-[39%] h-[20%] w-[12%] rounded-full bg-[radial-gradient(circle,rgba(255,196,122,0.42)_0%,rgba(255,196,122,0.18)_48%,transparent_78%)] blur-[1vw]" />
      <h2 className="absolute left-[5.5%] top-[13.2%] text-[5.3vw] font-black leading-[0.95] tracking-[-0.06em] text-[#ff561c]">
        海外达人
        <br />
        合作
      </h2>
      <div className="absolute left-[53.2%] top-[14.6%] w-[35%] text-[#ff5b20]">
        <h3 className="text-[3.2vw] font-black leading-[1.15]">专注AIagent和Saas的达人数据库</h3>
        <p className="mt-[2vw] text-[1.6vw] leading-[1.55] text-black/72">
          精准的达人营销是AI产品获取高质量早期用户最高效的路径之一。我们拥有覆盖全球AI、科技、生产力垂类的达人资源网络，为您匹配最具商业转化力的合作伙伴。
        </p>
      </div>
      <div className="absolute left-0 right-0 top-[70.2%] h-[0.1vw] bg-[#ff6b2b]" />
      {[
        {
          left: "5.6%",
          title: "KOL精准匹配",
          desc: "基于受众画像、内容调性与历史转化数据，精准筛选与AI产品目标用户高度重合的头部达人",
          backgroundPosition: "5.8% 52.1%",
        },
        {
          left: "38.2%",
          title: "KOC口碑矩阵",
          desc: "构建中尾部达人矩阵，以真实用户视角产出高可信度内容，在目标社区内形成病毒式口碑扩散",
          backgroundPosition: "38.4% 52.1%",
        },
        {
          left: "70.8%",
          title: "效果追踪优化",
          desc: "全链路数据监控与归因分析，实时评估每位达人的ROI表现，动态优化合作策略与资源配置",
          backgroundPosition: "71% 52.1%",
        },
      ].map((card) => (
        <div key={card.title} className="absolute top-[52.5%] w-[26.8%]" style={{ left: card.left }}>
          <div
            className="h-[17vw] rounded-t-[1.8vw] border border-[#ff6b2b] bg-[#ddd2c7]"
            style={{
              backgroundImage: "url('/pdf-pages/page-07.png')",
              backgroundSize: "373%",
              backgroundPosition: card.backgroundPosition,
            }}
          />
          <div className="rounded-b-[1.8vw] border border-t-0 border-[#ff6b2b] bg-[#faf7f3] px-[1.8vw] py-[1.6vw]">
            <h3 className="text-[2vw] font-black">{card.title}</h3>
            <p className="mt-[0.8vw] text-[1.35vw] leading-[1.35] text-black/72">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PageEightReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[linear-gradient(90deg,#ff5918_0_14%,#f4ede5_14%_86%,#ff5918_86%_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[14%] top-[6.4%] h-[0.12vw] w-[72%] bg-black/55" />
      <div className="absolute left-[14%] top-[16.7%] h-[0.12vw] w-[72%] bg-black/55" />
      <div className="absolute left-[14%] top-[46.1%] h-[0.12vw] w-[72%] bg-black/55" />
      <div className="absolute left-[14%] top-[63.8%] h-[0.12vw] w-[72%] bg-black/55" />
      <div className="absolute left-[14%] top-[87.8%] h-[0.12vw] w-[72%] bg-black/55" />
      <h2 className="absolute left-1/2 top-[7.4%] -translate-x-1/2 text-[5.2vw] font-black tracking-[-0.06em] text-[#202224]">广告投流</h2>
      <div className="absolute left-1/2 top-[20.6%] -translate-x-1/2 bg-[#ef6a17] px-[2vw] py-[0.5vw] text-[2.2vw] font-black">覆盖渠道</div>
      <div className="absolute left-1/2 top-[28.5%] -translate-x-1/2 text-[1.9vw] font-semibold text-[#273136]">
        • Google生态 • Meta生态 • X Ads • LinkedIn • Reddit
      </div>
      <div className="absolute left-1/2 top-[47.5%] -translate-x-1/2 bg-[#ef6a17] px-[2vw] py-[0.5vw] text-[2.2vw] font-black">我们的投放方法论</div>
      <div className="absolute left-1/2 top-[54.9%] -translate-x-1/2 text-[1.9vw] font-semibold text-[#273136]">
        • 受众分层建模 • 创意素材工厂 • 归因模型优化
      </div>
      <div className="absolute left-1/2 top-[65%] -translate-x-1/2 bg-[#ef6a17] px-[2vw] py-[0.5vw] text-[2.2vw] font-black">结果导向</div>
      <div className="absolute left-[17.4%] top-[72.8%] text-[1.8vw]"><span className="font-bold">• 让更多对的人看到你</span><br /><span className="text-black/72">品牌曝光 / 网站访问</span></div>
      <div className="absolute right-[17.2%] top-[72.8%] text-[1.8vw]"><span className="font-bold">• 让用户愿意点进来</span><br /><span className="text-black/72">点击率 / 注册转化</span></div>
      <div className="absolute left-[17.4%] top-[82%] text-[1.8vw]"><span className="font-bold">• 让用户留下来并付费</span><br /><span className="text-black/72">转化 / 留存 / LTV提升</span></div>
      <div className="absolute right-[17.2%] top-[82%] text-[1.8vw]"><span className="font-bold">• 让流量持续复用</span><br /><span className="text-black/72">再营销与用户沉淀</span></div>
    </div>
  );
}

function PageNineReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#f6eed9] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[13.8%] top-[15.2%] text-[4.6vw] font-black text-[#eb602f]">Product Hunt</div>
      <div className="absolute left-[13.8%] top-[30%] w-[33%] text-[1.7vw] leading-[1.45]">
        Product Hunt 是全球最具影响力的产品发现平台，单次成功冲榜可带来数千名早期用户、媒体报道与投资人关注，我们提供从预热到冲刺的全程专业陪跑服务
      </div>
      <div className="absolute left-[5.7%] top-[45.2%] h-[38%] w-[31.7%] rounded-[1.6vw] bg-[#2f272b]" />
      <div className="absolute left-[16.1%] top-[47.5%] text-[2.5vw] font-black text-[#f7f0e6]">核心成果目标</div>
      <div className="absolute left-[16.1%] top-[58%] space-y-[1vw] text-[1.85vw] font-medium leading-[1.45] text-[#f7f0e6]">
        {["冲击 Product of the Day 日榜前三", "获得 500+ 真实 Upvotes 与优质评论", "带来 2,000+ 官网访问与用户注册", "触达全球顶级科技媒体与投资人视野"].map((item) => (
          <div key={item}>• {item}</div>
        ))}
      </div>
    </div>
  );
}

function PageTenReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#f6eed9] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[13.8%] top-[15.2%] text-[5.1vw] font-black text-[#ff5918]">reddit</div>
      <div className="absolute left-[13.8%] top-[30%] w-[33.8%] text-[1.7vw] leading-[1.45]">
        Reddit 是全球 AI 产品早期用户密度最高的平台之一。在 r/artificial、r/SaaS、r/MachineLearning 等核心社区中建立真实的品牌存在，是获取高质量种子用户的关键路径。
      </div>
      <div className="absolute left-[12.6%] top-[44.4%] h-[40%] w-[34.2%] rounded-[1.6vw] bg-[#2f272b]" />
      <div className="absolute left-[16.1%] top-[47.2%] text-[2.4vw] font-black text-[#f7f0e6] uppercase">REDDIT 营销的独特价值</div>
      <div className="absolute left-[15.8%] top-[58.2%] space-y-[1vw] text-[1.8vw] font-medium leading-[1.42] text-[#f7f0e6]">
        <div>• Reddit 帖子在 Google 的搜索排名极高，优质内容可带来持续数月的免费 SEO 流量</div>
        <div>• Redditor 对营销内容极敏感，真实有价值的内容才能赢得社区信任与口碑传播</div>
        <div>• AI/科技垂类社区聚集了大量产品早期采用者、开发者与意见领袖</div>
      </div>
    </div>
  );
}

function PageElevenReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#efefee] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[5.9%] top-[18.2%] text-[6vw] font-black leading-none tracking-[-0.07em]">用户案例</div>
      <div className="absolute right-[6.8%] top-[15.6%] text-[2vw] font-bold">① StartPoint</div>
      <div className="absolute left-[5.8%] top-[37.5%] grid w-[89%] grid-cols-3 border border-black/25">
        {[
          ["AI写作工具", "PRODUCT HUNT 冲榜案例", "协助某 AI 写作 SaaS 产品完成 Product Hunt 发布，最终斩获当日榜第 2 名，单日带来 3,200+ 网站访问与 800+ 新用户注册，发布后 7 天内实现付费转化率提升 34%"],
          ["AI AGENT平台", "SEO 有机增长案例", "通过 6 个月系统化 SEO 内容布局与外链建设，帮助某 AI Agent 平台将月有机搜索流量从 2,000 提升至 18,000+，核心关键词首页排名数量增长 420%，获客成本降低 65%"],
          ["AI 工具", "达人营销案例", "为某 AI 效率工具协调 12 位垂类科技达人进行联合推广，内容总曝光量达 240万+，带来 5,600+ 新注册用户，其中付费转化率高达 18%，远超行业平均水平"],
        ].map(([t, s, b]) => (
          <div key={t} className="border-r border-black/25 last:border-r-0">
            <div className="min-h-[8.8vw] border-b border-black/25 bg-[#f9f0db] px-[1.6vw] py-[1.4vw] text-center">
              <div className="text-[1.75vw] font-black text-[#ff5b20]">{t}</div>
              <div className="text-[1.7vw] font-black leading-tight">{s}</div>
            </div>
            <div className="px-[1.5vw] py-[2vw] text-[1.55vw] font-medium leading-[1.55] text-[#333]">{b}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PageTwelveReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#efefee] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[5.8%] top-[9%]">
        <h2 className="text-[4.9vw] font-black leading-none tracking-[-0.06em]">为什么选择StartPoint?</h2>
        <p className="mt-[0.8vw] text-[1.9vw] font-semibold">更理性、更敏捷、更确定的增长路径</p>
      </div>
      <div className="absolute left-[14%] top-[26.2%] h-[57%] w-[72%] rounded-[3vw] bg-[#f8f0e2]" />
      <div className="absolute left-[33.6%] top-[34.4%] text-[3.1vw] font-black">自建市场团队 <span className="px-[0.8vw] text-[#ff5b20]">vs</span> <span className="text-[#ff5b20]">StartPoint</span></div>
      <div className="absolute left-[31.5%] top-[45.2%] h-[42%] w-[37%] rounded-full bg-[linear-gradient(90deg,#f8d9a3_0_50%,#ff7b46_50%_100%)]" />
      <div className="absolute left-[45.8%] top-[59.2%] flex h-[6vw] w-[6vw] items-center justify-center rounded-full bg-white text-[2.7vw] font-black text-[#ff5b20]">VS</div>
    </div>
  );
}

function PageThirteenReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[linear-gradient(90deg,#efefee_0_60%,#ffa320_60%_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[5.2%] top-[12.6%] text-[3.6vw] font-black">① StartPoint</div>
      <div className="absolute left-[5.4%] top-[23.2%] h-[0.55vw] w-[3.8vw] bg-[#ff6453]" />
      <div className="absolute left-[5.4%] top-[28.8%] text-[2.15vw] font-bold leading-[1.45]">
        助力AI产品实现突破性营销增长
        <br />
        达人营销・Product Hunt・Launch Video・
        <br />
        SEO/GEO・广告投放・品牌IP打造
      </div>
      <div className="absolute left-[5.4%] top-[50.2%] grid w-[47%] grid-cols-3 gap-[1.6vw] rounded-[1.6vw] bg-white/28 px-[2vw] py-[2vw]">
        {["50+|全球合作专家", "30+|成功落地案例", "7天|快速启动"].map((item) => {
          const [n, l] = item.split("|");
          return <div key={item} className="text-center"><div className="text-[4.2vw] font-black text-[#ff5b20]">{n}</div><div className="mt-[0.6vw] text-[1.6vw] font-black">{l}</div></div>;
        })}
        <div className="col-span-3 mt-[0.5vw] text-center">
          <div className="text-[5vw] font-black text-[#ff5b20]">100%</div>
          <div className="text-[1.8vw] font-black">AI赛道专注</div>
        </div>
      </div>
      <div className="absolute right-[9.5%] top-[32%] text-[4.6vw] font-black">15+</div>
      <div className="absolute right-[6.4%] top-[42%] text-[2.2vw] font-semibold">覆盖国家和地区</div>
      <div className="absolute right-[8.8%] top-[58%] text-[4.6vw] font-black">100%</div>
      <div className="absolute right-[6.5%] top-[68%] text-[2.2vw] font-semibold">客户满意度</div>
    </div>
  );
}

function PageFourteenReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_0_0,#da3b16_0%,transparent_28%),radial-gradient(circle_at_100%_100%,#ff6b24_0%,transparent_35%),linear-gradient(135deg,#df4318_0%,#ff931d_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[12.8%] top-[12.2%] text-[1.9vw] leading-none text-white">•••</div>
      <div className="absolute left-[12.8%] top-[16.8%] text-[4.8vw] font-black tracking-[-0.06em] text-[#79301c]">我们的核心优势</div>
      <div className="absolute left-[12.8%] top-[29.2%] text-[2vw] font-semibold text-white">六大差异化能力，让 StartPoint 成为AI产品营销增长的最优合作伙伴2</div>
      <div className="absolute left-[11.6%] top-[41.6%] grid w-[77%] grid-cols-2 gap-x-[4vw] gap-y-[3vw] text-white">
        {[
          "全链路AI/SAAS营销增长方案|从GTM策略到规模化增长，覆盖产品全生命周期的一体化营销解决方案，告别碎片化服务",
          "本地化品牌塑造|深度理解中西方市场文化差异，打造真正贴合目标市场的品牌叙事与传播策略",
          "结果导向的收费模式|以实际业务增长为核心衡量标准，确保每笔投入都与可量化的商业成果直接挂钩",
          "定制化方案|拒绝模板化操作，根据产品阶段目标、市场与竞争格局，量身定制专属增长策略",
          "更懂AI产品逻辑与用户需求|团队成员深度参与AI产品研发与运营，精准把握AI用户的决策路径与产品感知",
          "策略创新与市场适应性|持续追踪全球AI营销前沿趋势，快速迭代策略以应对市场变化，保持竞争优势",
        ].map((item) => {
          const [t, d] = item.split("|");
          return <div key={t}><div className="text-[2.3vw] font-black">{t}</div><div className="mt-[0.5vw] text-[1.55vw] leading-[1.45] text-white/92">{d}</div></div>;
        })}
      </div>
      <div className="absolute right-[4.4%] bottom-[4.8%] rounded-full bg-white/14 px-[1.8vw] py-[0.6vw] text-[1.8vw] font-bold text-white">① StartPoint</div>
    </div>
  );
}

function PageFifteenReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#efefee] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[6.4%] top-[14.2%]">
        <h2 className="text-[5vw] font-black leading-[1.05] tracking-[-0.06em]">是谁在陪你走 0→1</h2>
        <p className="mt-[1.1vw] text-[2.2vw] font-bold">一支同时懂技术、懂增长、懂资本叙事的复合型团队</p>
      </div>
      <div className="absolute left-[29.5%] top-[27.4%] h-[54%] w-[34%] rounded-full bg-[linear-gradient(180deg,#f6d3ba_0%,#ff6a2a_58%,#ff4918_77%,#4f5da2_100%)]" />
      <div className="absolute left-[26.2%] top-[43%] w-[46%] text-[2vw] font-bold leading-[1.45]">
        与国外数十位AI SaaS营销专家及顶级Agency建立长期战略合作关系，共享经过市场验证的方法论与成功案例经验，为客户带来全球视野与本地执行力的双Y优势
      </div>
    </div>
  );
}

function PageSixteenReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#efefee] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[5.3%] top-[34.8%] text-[2.4vw] font-bold">① StartPoint</div>
      <div className="absolute left-[5.3%] top-[47.6%] text-[4.4vw] font-black tracking-[-0.05em]">核心承诺</div>
      <div className="absolute left-[5.3%] top-[60.2%] whitespace-pre-line text-[3vw] font-bold leading-[1.08]">我们不是给建议{"\n"}而是陪你把 0→1 跑{"\n"}通</div>
      <div className="absolute left-[50.2%] top-[42.1%] flex h-[31%] w-[18.5%] items-center justify-center rounded-full bg-[linear-gradient(180deg,#ff9a52_0%,#f3823f_100%)] text-center text-[1.95vw] font-black text-white">
        最关键的
        <br />
        3-6 个月
        <br />
        0→1 跑通阶段
      </div>
    </div>
  );
}

function PageSeventeenReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#efefee] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[6.3%] top-[18.4%] max-w-[44%] text-black">
        <h2 className="text-[4.9vw] font-black leading-[1.08] tracking-[-0.06em]">
          更理性、更敏捷、更确定
          <br />
          的增长路径
        </h2>
        <p className="mt-[5vw] text-[2vw] leading-[1.65]">对于处于从 0 到 1 阶段的 AI Agent团队，每一分资源、每一天时间都至关重要。</p>
        <p className="mt-[3vw] text-[2vw] leading-[1.65]">传统自建市场的路径充满不确定性与高昂的隐性成本。选择起始点 Start Point，意味着选择一条被验证过、且与您利益深度绑定的高效路径</p>
      </div>
      <div className="absolute left-[3.1%] bottom-[6%] rounded-full bg-black px-[1.8vw] py-[0.6vw] text-[1.8vw] font-bold text-white">① StartPoint</div>
      <div className="absolute right-[-7%] top-0 h-[110%] w-[41%] rounded-l-[20vw] bg-[linear-gradient(180deg,#f07d57_0%,#ff5a1a_45%,#f6c1a6_100%)]" />
      <div className="absolute right-[4.5%] top-[5.8%] grid grid-cols-4 gap-[1.1vw]">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-[0.45vw] w-[0.45vw] rounded-full bg-black/72" />
        ))}
      </div>
    </div>
  );
}

function PageEighteenReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#ff4f13_0%,#f48662_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[4.2%] top-[9.4%] text-[5.2vw] font-black tracking-[-0.06em] text-white">我们的合作模式</div>
      <div className="absolute right-[9.2%] top-[10.2%] text-[2vw] font-bold text-white">① StartPoint</div>
      <div className="absolute left-[5.2%] top-[35.4%] grid w-[89.5%] grid-cols-3 gap-[2.2vw]">
        {[
          "战略问诊|通过3次深度工作坊（共6小时），完成“诊断与策略定义”阶段|2-3周|找准方向|¥15,000",
          "策略与启动陪跑（轻量版）|内容基建与GTM策略输出，并主导执行启动与路径验证等初期工作，提供策略、核心内容与投放指导|>3个月|¥30,000 - ¥50,000 / 月|",
          "全链路增长陪跑（完整版）|全面负责“策略-执行-优化”增长闭环，全权主导执行与迭代，采用“基础月费 + 利润分成”模式，深度绑定增长|<3个月|¥80,000 - ¥120,000 / 月|",
        ].map((item) => {
          const [t, d, c1, c2, c3] = item.split("|");
          return (
            <div key={t} className="rounded-[1.8vw] bg-white/24 px-[1.8vw] py-[1.8vw] text-[#5a321e] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]">
              <h3 className="text-[2.15vw] font-black text-white">{t}</h3>
              <p className="mt-[2vw] min-h-[8.5vw] text-[1.45vw] leading-[1.55]">{d}</p>
              <div className="mt-[2vw] flex flex-wrap gap-[0.6vw]">
                {[c1, c2, c3].filter(Boolean).map((chip) => (
                  <span key={chip} className="rounded-full bg-[#ff7134] px-[1vw] py-[0.35vw] text-[1vw] font-black text-[#4c2d1f]">• {chip}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PageNineteenReplica() {
  return (
    <div className="relative aspect-[3169/1783] w-full overflow-hidden rounded-[24px] bg-[#efefee] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <div className="absolute left-[3.2%] top-[7.6%] rounded-full bg-black px-[1.9vw] py-[0.8vw] text-[2vw] font-bold text-white">① StartPoint</div>
      <div className="absolute left-[6.3%] top-[39%] h-[26%] w-[16%] rounded-[1.8vw] border-[0.4vw] border-[#f08b8f] bg-[linear-gradient(135deg,#fff_0%,#ffe7e8_100%)]" />
      <div className="absolute left-[23.2%] top-[47.4%] w-[18.5%] text-black">
        <h2 className="text-[4vw] font-black leading-none tracking-[-0.06em]">联系我们</h2>
        <p className="mt-[1.2vw] text-[2vw] text-black/68">获得免费30分钟咨询</p>
      </div>
      <div className="absolute left-[8.8%] top-[72.2%] flex items-center gap-[2vw] text-[1.52vw] font-bold text-[#b65b2f]">
        <a href="tel:+8615622153144" className="hover:text-primary transition-colors">+86 15622153144</a>
        <span>杭州/上海/巴黎可线下coffee chat</span>
      </div>
      <div className="absolute right-[14.8%] top-[23.8%] h-[33.8%] w-[19%] rounded-full bg-[linear-gradient(180deg,#f6d3ba_0%,#ff6a2a_58%,#ff4918_77%,#4f5da2_100%)]" />
      <div className="absolute right-[-0.3%] top-[23.8%] h-[33.8%] w-[19%] rounded-full bg-[linear-gradient(180deg,#f7d7be_0%,#ff6d32_49%,#ff4c17_66%,#f9d6be_100%)] opacity-90" />
      <div className="absolute right-[2.8%] top-[10%] h-[18.2%] w-[9.8%] rounded-full border-[0.16vw] border-black/55 bg-[linear-gradient(to_bottom,transparent_62%,rgba(255,102,45,0.7)_62%)] [background-size:1.4vw_1.4vw]" />
      <div className="absolute right-[18.7%] bottom-[16.4%] grid grid-cols-4 gap-[1.1vw]">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-[0.45vw] w-[0.45vw] rounded-full bg-black/72" />
        ))}
      </div>
    </div>
  );
}

function renderReplica(page: number, alt: string) {
  switch (page) {
    case 1:
      return <PageOneReplica />;
    case 2:
      return <PageTwoReplica />;
    case 3:
      return <PageThreeReplica />;
    case 5:
      return <PageFiveReplica />;
    default:
      return <SlideBackground page={page} alt={alt} />;
  }
}

export function PdfFullSite() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="relative bg-[#eceae8] text-[#1a1a1a] pt-20">
      <div className="fixed right-3 top-1/2 z-20 hidden -translate-y-1/2 md:flex flex-col gap-2 rounded-full border border-black/10 bg-white/70 px-2 py-3 backdrop-blur">
        {slides.map((slide) => (
          <a
            key={slide.id}
            href={`#${slide.id}`}
            className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-medium text-black/55 transition hover:bg-black hover:text-white"
            aria-label={`跳转到第 ${slide.page} 页`}
          >
            {slide.page}
          </a>
        ))}
      </div>

      <div className="relative z-10 space-y-6 px-2 py-4 md:px-4 md:py-6">
        {slides.map((slide) => (
          <section
            key={slide.id}
            id={slide.id}
            aria-labelledby={`${slide.id}-title`}
            className="relative mx-auto max-w-[1600px]"
          >
            {renderReplica(slide.page, `StartPoint PDF 第 ${slide.page} 页`)}

            {slide.page === 6 && (
              <div className="absolute inset-x-[6.5%] bottom-[10%] grid grid-cols-1 gap-[1.5vw] md:grid-cols-3">
                {videos.map((video, index) => (
                  <button
                    key={video.src}
                    type="button"
                    onClick={() => setActiveVideo(video.src)}
                    className={`group min-h-[60px] rounded-full bg-transparent text-transparent outline-none ${
                      index === 0 ? "md:col-start-1" : "md:col-start-2"
                    }`}
                    aria-label={`播放视频 ${video.title}`}
                  >
                    <span className="sr-only">{video.title}</span>
                  </button>
                ))}
              </div>
            )}

            <article className="sr-only" aria-hidden="false">
              <h1 id={`${slide.id}-title`}>{slide.title}</h1>
              <SeoLayer slide={slide} />
              {slide.page === 6 && (
                <div>
                  <button type="button">Ava - Artisan V3.4</button>
                  <button type="button">Poly Final</button>
                </div>
              )}
              {slide.page === 19 && <a href="tel:+8615622153144">+86 15622153144</a>}
            </article>
          </section>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm md:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-end p-2">
              <button
                type="button"
                className="rounded-full p-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="关闭视频"
                onClick={() => setActiveVideo(null)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <video src={activeVideo} controls autoPlay className="w-full h-auto" />
          </div>
        </div>
      )}
    </main>
  );
}
