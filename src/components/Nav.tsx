"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useRouter } from "@/i18n/navigation";
import { Logo } from "./brand/Logo";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

export function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    {
      href: "/koc",
      label: locale === "zh" ? "KOC 增长方案" : "KOC growth",
      badge: locale === "zh" ? "首推" : "NEW",
    },
    { href: "/services", label: t("services") },
    { href: "/cases", label: t("cases") },
    { href: "/about", label: t("about") },
    { href: "/pricing", label: t("pricing") },
  ] as const;

  const toggleLocale = () => {
    const next = locale === "zh" ? "en" : "zh";
    router.replace(pathname, { locale: next });
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "bg-[#060D1C]/95 backdrop-blur-md border-b border-white/8"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="focus:outline-none">
            <Logo size="md" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/70 hover:text-[#00E676] transition-colors inline-flex items-center gap-1.5"
              >
                {l.label}
                {"badge" in l && l.badge && (
                  <span className="text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded-sm bg-[#00E676] text-[#030810]">
                    {l.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="hidden md:inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/60 hover:text-white hover:border-white/35 transition"
              aria-label="Toggle language"
            >
              {locale === "zh" ? "EN" : "中"}
            </button>
            <Button href="/contact" variant="primary" size="sm">
              {t("cta")}
            </Button>
            <button
              className="md:hidden p-2 -mr-2 text-white/80"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/10 pt-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-base font-medium text-white/80 hover:text-[#00E676]"
              >
                {l.label}
                {"badge" in l && l.badge && (
                  <span className="ml-2 text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded-sm bg-[#00E676] text-[#030810] align-middle">
                    {l.badge}
                  </span>
                )}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLocale();
                setOpen(false);
              }}
              className="block py-2 text-sm text-white/50"
            >
              {locale === "zh" ? "English" : "中文"}
            </button>
          </div>
        )}
      </Container>
    </header>
  );
}
