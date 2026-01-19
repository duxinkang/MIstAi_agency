"use client";

import { X, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const selfBuild = [
  { title: "启动慢", desc: "招聘 + 磨合周期长，通常需要 4–6 个月才能真正启动" },
  { title: "成本高", desc: "人力成本高且持续，招聘、管理、试错均为隐性支出" },
  { title: "无经验", desc: "从零摸索 AI / 新领域，方向与方法高度不确定" },
  { title: "独自担风险", desc: "方向失误与执行风险，全部由公司自行承担" },
];

const startpoint = [
  { title: "高效启动", desc: "最快 3 天启动，直接切入项目与市场验证" },
  { title: "单一可控", desc: "单一合同价，成本清晰可控，覆盖策略、内容与执行" },
  { title: "成熟方法", desc: "复用已验证的方法与经验，直击增长核心问题" },
  { title: "风险共担", desc: "增长结果与我们收益深度绑定，风险共同承担" },
];

export function Comparison() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            为什么选择 StartPoint？
          </h2>
          <p className="text-xl text-muted-foreground">
            更理性、更敏捷、更确定的增长路径
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Self Build */}
          <div 
            ref={leftRef}
            className={`p-8 rounded-3xl bg-card border border-border shadow-sm transition-all duration-700 hover:shadow-lg ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">自建市场团队</h3>
            </div>
            <div className="space-y-6">
              {selfBuild.map((item, index) => (
                <div 
                  key={item.title} 
                  className={`flex gap-4 transition-all duration-500 ${
                    leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* StartPoint */}
          <div 
            ref={rightRef}
            className={`p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-[#fc9918]/10 border-2 border-primary relative overflow-hidden shadow-lg transition-all duration-700 hover:shadow-xl hover:scale-[1.02] ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-primary to-[#fc9918] text-white text-sm font-medium rounded-bl-lg animate-pulse">
              推荐
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-animate">与 StartPoint 合作</h3>
            </div>
            <div className="space-y-6">
              {startpoint.map((item, index) => (
                <div 
                  key={item.title} 
                  className={`flex gap-4 transition-all duration-500 ${
                    rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
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
