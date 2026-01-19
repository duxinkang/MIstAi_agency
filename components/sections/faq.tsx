"use client";

import { Check } from "lucide-react";

const faqs = [
  {
    concern: '"你们不懂我的技术"',
    answer: "团队核心成员具备技术背景，确保沟通同频，实现技术价值的精准翻译",
  },
  {
    concern: '"方案模板化"',
    answer: "坚持精品定制方案，拒绝流水线作业。我们同期仅服务少量客户，确保专注与深度",
  },
  {
    concern: '"执行不到位，消耗心力"',
    answer: "提供全流程托管服务，负责从资源对接到落地的完整闭环，让客户团队得以聚焦于核心战略",
  },
  {
    concern: '"风险高"',
    answer: "采用分阶段、灵活合作模式，确保项目阶段清晰，成果可见，有效控制您的投入风险",
  },
  {
    concern: '"启动慢，不灵活"',
    answer: "敏捷响应，最快3天即可启动。策略可根据市场反馈实时调整，完全匹配创业节奏",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            您的顾虑，我们的答卷
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-background border border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-medium">
                    {faq.concern}
                  </span>
                </div>
                <div className="flex gap-3 flex-1">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
