"use client";

import { Search, FileText, FlaskConical, TrendingUp } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const engines = [
  {
    icon: Search,
    number: "一",
    title: "诊断与策略",
    description: "系统梳理产品与市场关系，判断增长方向是否成立",
  },
  {
    icon: FileText,
    number: "二",
    title: "内容基建",
    description: "明确市场切入口、传播路径与可执行的 GTM 策略",
  },
  {
    icon: FlaskConical,
    number: "三",
    title: "执行验证",
    description: "通过真实用户反馈与数据，验证关键转化路径",
  },
  {
    icon: TrendingUp,
    number: "四",
    title: "放大增长",
    description: "复制已验证的有效模式，推动增长体系规模化",
  },
];

export function Engine() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(engines.length, 200);

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            我们的<span className="text-gradient-animate">四步增长引擎</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated vertical line */}
            <div 
              className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-[#fc9918] to-transparent hidden md:block origin-top transition-transform duration-1000 ${
                visibleItems[0] ? 'scale-y-100' : 'scale-y-0'
              }`} 
            />

            <div ref={containerRef} className="space-y-8">
              {engines.map((engine, index) => (
                <div
                  key={engine.number}
                  className={`relative flex gap-6 md:gap-10 group transition-all duration-700 ${
                    visibleItems[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                >
                  {/* Number circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[#fc9918] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <engine.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="text-sm text-primary font-medium mb-1">
                      步骤 {engine.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {engine.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {engine.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
