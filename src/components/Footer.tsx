import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./brand/Logo";
import { Container } from "./ui/Container";

export function Footer() {
  const t = useTranslations();

  const links = [
    { href: "/services", label: t("nav.services") },
    { href: "/cases", label: t("nav.cases") },
    { href: "/about", label: t("nav.about") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <footer className="bg-[#030810] text-white/70 py-16 border-t border-white/8">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="max-w-sm space-y-4">
            <Logo variant="dark" size="md" />
            <p className="text-sm text-white/50 leading-relaxed">
              {t("site.description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-white/30">
                Menu
              </div>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-sm hover:text-[#00E676] transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-white/30">
                Contact
              </div>
              <a
                href="mailto:contact@mistai.ai"
                className="block text-sm hover:text-[#00E676] transition"
              >
                contact@mistai.ai
              </a>
              <div className="text-sm text-white/50">
                {t("contact.locations")}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 text-xs text-white/30 flex flex-col sm:flex-row justify-between gap-2">
          <span>{t("footer.rights")}</span>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-white/60"
            >
              {t("footer.privacy")}
            </Link>
            <a
              href="https://www.mistaiagency.com/"
              className="hover:text-white/60"
            >
              www.mistaiagency.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
