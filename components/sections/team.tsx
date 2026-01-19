"use client";

import { Code, Globe, TrendingUp } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const team = [
  {
    name: "Frank",
    role: "技术",
    title: "前网易算法专家",
    tagline: "懂代码，翻译技术价值",
    icon: Code,
  },
  {
    name: "Simy",
    role: "品牌",
    title: "海外市场专家",
    tagline: "5亿美金操盘手",
    icon: Globe,
  },
  {
    name: "Elaine",
    role: "流量",
    title: "头部大厂市场专家",
    tagline: "懂流量，洞察用户",
    icon: TrendingUp,
  },
];

export function Team() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(team.length, 150);

  return (
    <section id="team" className="py-24 relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            是谁在陪你走 <span className="text-gradient-animate">0→1</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            一支同时懂技术、懂增长、懂资本叙事的复合型团队
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 ${
                visibleItems[index] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-[#fc9918] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <member.icon className="w-10 h-10 text-white" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                {member.role}
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-muted-foreground mb-2">{member.title}</p>
              <p className="text-sm text-primary font-medium">{member.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
