"use client";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[#fc9918] flex items-center justify-center">
              <span className="text-white font-bold text-sm">SP</span>
            </div>
            <span className="font-bold text-lg text-foreground">
              起始点 <span className="text-primary">StartPoint</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-center">
            只做 AI Agent 的 0→1 增长
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StartPoint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
