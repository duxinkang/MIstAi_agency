"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const plans = [
  {
    name: "战略问诊",
    duration: "2-3周找准方向",
    price: "¥15,000",
    description: "通过3次深度工作坊（共6小时），完成诊断与策略定义阶段",
    subtitle: "帮你看清方向是否成立",
    features: [
      "3次深度工作坊",
      "共6小时诊断",
      "策略定义输出",
      "方向可行性评估",
    ],
    popular: false,
  },
  {
    name: "策略与启动陪跑",
    duration: "<3个月",
    price: "¥30,000 – ¥50,000",
    priceUnit: "/ 月",
    description: "内容基建与GTM策略输出，并主导执行启动与路径验证等初期工作",
    subtitle: "轻量版",
    features: [
      "内容基建",
      "GTM策略输出",
      "执行启动主导",
      "路径验证",
      "策略、核心内容与投放指导",
    ],
    popular: true,
  },
  {
    name: "全链路增长陪跑",
    duration: ">3个月",
    price: "¥80,000 – ¥120,000",
    priceUnit: "/ 月",
    description: "全面负责策略-执行-优化增长闭环，全权主导执行与迭代",
    subtitle: "完整版 · 基础月费 + 利润分成",
    features: [
      "策略-执行-优化全闭环",
      "全权主导执行与迭代",
      "深度绑定增长结果",
      "长期合作伙伴关系",
      "对增长结果负责",
    ],
    popular: false,
  },
];

export function Pricing() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(plans.length, 150);

  return (
    <section id="pricing" className="py-24 bg-card relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            我们的<span className="text-gradient-animate">合作模式</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            把策略变成可执行的第一步
          </p>
        </div>

        <div ref={containerRef} className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl transition-all duration-500 shadow-sm hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-to-br from-primary/10 to-[#fc9918]/10 border-2 border-primary scale-105 shadow-lg hover:shadow-xl"
                  : "bg-background border border-border hover:border-primary/30 hover:shadow-xl"
              } ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  最受欢迎
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-primary">{plan.subtitle}</p>
              </div>

              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-foreground">
                  {plan.price}
                  {plan.priceUnit && (
                    <span className="text-lg text-muted-foreground">
                      {plan.priceUnit}
                    </span>
                  )}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {plan.duration}
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                开始咨询
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
