import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["zh", "en"],
  defaultLocale: "zh",
  localePrefix: "as-needed", // /zh is root "/", /en/... for English
  // Do NOT auto-redirect based on Accept-Language.
  // Default behavior was forcing `/` → `/en` for any visitor with an English
  // browser (including Baidu/Google/ChatGPT crawlers), which silently broke
  // Chinese SEO/GEO. With this off, `/` always serves zh; users flip to en
  // via the language switcher.
  localeDetection: false,
});
