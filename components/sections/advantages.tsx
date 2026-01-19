"use client";

import { Users, Clock, Award, Zap, Network, Handshake } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const advantages = [
  {
    icon: Users,
    title: "复合团队",
    description: "兼具大厂技术背景与海内外增长实战经验，精通翻译与执行",
  },
  {
    icon: Clock,
    title: "全时响应",
    description: "团队分布海内外，提供近24小时支持，关键问题随时跟进",
  },
  {
    icon: Award,
    title: "经验实证",
    description: "已成功帮助多个AI团队从0到1搭建市场体系，方法论经过锤炼",
  },
  {
    icon: Zap,
    title: "敏捷协作",
    description: "无冗余流程，以创业节奏迅速启动、同步推进",
  },
  {
    icon: Network,
    title: "资源与执行保障",
    description: "手握成熟资源网络，可按需精准匹配，并负责跟进后续的执行与交付",
  },
  {
    icon: Handshake,
    title: "非一次性交付",
    description: "不做方案即走的顾问，而是与创始人并肩推进，参与关键决策与执行调整",
  },
];

export function Advantages() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(advantages.length, 100);

  return (
    <section id="advantages" className="py-24 relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            我们的<span className="text-gradient-animate">核心优势</span>
          </h2>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`group p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 ${
                visibleItems[index] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-[#fc9918] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <advantage.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {advantage.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
