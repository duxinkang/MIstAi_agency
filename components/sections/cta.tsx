"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fc9918]/10 via-primary/5 to-background" />
      {/* Animated decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-[#fc9918]/20 blur-3xl animate-float" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#fc9918]/20 to-primary/10 blur-3xl animate-float-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            更理性、更敏捷、更确定的
            <span className="text-gradient-animate">增长路径</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            对于处于从0到1阶段的 AI Agent 团队，每一分资源、每一天时间都至关重要。
          </p>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            传统自建市场的路径充满不确定性与高昂的隐性成本。
            <br />
            选择<span className="text-primary font-semibold">起始点 StartPoint</span>，意味着选择一条被验证过、且与您利益深度绑定的高效路径。
          </p>

          <Button 
            size="lg" 
            className="group text-lg px-8 py-6 bg-gradient-to-r from-primary to-[#fc9918] text-white hover:opacity-90 mb-10 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 animate-pulse-glow"
          >
            获得免费30分钟咨询
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <Phone className="w-5 h-5 text-primary animate-bounce-subtle" />
              <span>+86 15622153144</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <MapPin className="w-5 h-5 text-primary" />
              <span>杭州 / 上海 / 巴黎可线下 coffee chat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
