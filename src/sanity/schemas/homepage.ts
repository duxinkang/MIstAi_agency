import { defineType, defineField } from "sanity";
import { bilingualString, bilingualText } from "./bilingual";

/**
 * Singleton homepage document. Use the Studio structure to enforce singleton.
 */
export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        bilingualString("eyebrow", "Eyebrow"),
        bilingualString("title", "Title"),
        bilingualText("subtitle", "Subtitle"),
        bilingualString("ctaLabel", "Primary CTA label"),
      ],
    }),
    defineField({
      name: "problem",
      title: "Problem section",
      type: "object",
      fields: [
        bilingualString("title", "Section title"),
        defineField({
          name: "items",
          type: "array",
          title: "Problem items",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "n", type: "string", title: "Number label" }),
                bilingualString("text", "Text"),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats bar",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "n", type: "string", title: "Number" }),
            bilingualString("label", "Label"),
            bilingualString("text", "Sub-text"),
          ],
        },
      ],
    }),
    defineField({
      name: "seo",
      title: "Homepage SEO overrides",
      type: "object",
      fields: [
        bilingualString("metaTitle", "Meta title"),
        bilingualText("metaDescription", "Meta description"),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
});
