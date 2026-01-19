"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative circles with floating animation */}
      <div className="absolute top-20 right-[10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-[#fc9918] to-[#f14a16] opacity-90 animate-float animate-pulse-glow" />
      <div className="absolute top-40 right-[20%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-tr from-[#4a6fa5] to-[#fc9918] opacity-80 animate-float-slow" />
      <div className="absolute top-10 right-[5%] w-16 h-16 md:w-20 md:h-20 border-2 border-foreground rounded-full opacity-30 animate-rotate-slow" style={{ background: 'transparent' }}>
        <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, currentColor 3px, currentColor 4px), repeating-linear-gradient(90deg, transparent, transparent 3px, currentColor 3px, currentColor 4px)' }} />
      </div>
      
      {/* Decorative arc with subtle animation */}
      <div className="absolute bottom-20 left-0 w-40 h-40 border-2 border-foreground/20 rounded-full -translate-x-1/2 animate-pulse" />
      
      {/* Dot pattern with staggered pulse */}
      <div className="absolute bottom-1/3 right-1/4 grid grid-cols-4 gap-2">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="w-2 h-2 rounded-full bg-foreground animate-dot-pulse" 
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <div 
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background mb-8 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-sm font-bold tracking-wide">{"Let's Start"}</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span 
              className={`block text-foreground transition-all duration-700 delay-100 ${
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              起始点
            </span>
            <span 
              className={`block text-gradient-animate transition-all duration-700 delay-200 ${
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              StartPoint
            </span>
          </h1>

          <div 
            className={`flex items-center gap-3 mb-12 transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center animate-bounce-subtle">
              <span className="text-foreground font-bold text-sm">1</span>
            </div>
            <p className="text-xl md:text-2xl text-foreground font-medium">
              只做 AI Agent 的 0→1 增长
            </p>
          </div>

          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 bg-gradient-to-r from-primary to-[#fc9918] text-white hover:opacity-90 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              免费30分钟咨询
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              了解更多
            </Button>
          </div>

          {/* Stats with staggered animation */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { value: "3天", label: "最快启动", color: "text-primary" },
              { value: "24h", label: "全时响应", color: "text-[#fc9918]" },
              { value: "3-6月", label: "关键陪伴期", color: "text-primary" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center transition-all duration-700 hover:scale-110 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
