import { defineType, defineField } from "sanity";
import { bilingualString, bilingualText } from "./bilingual";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => {
          const t = (doc as { title?: { en?: string } }).title;
          return t?.en ?? "";
        },
        maxLength: 64,
      },
      validation: (Rule) => Rule.required(),
    }),
    bilingualString("title", "Title"),
    bilingualString("kicker", "Kicker / category label"),
    bilingualText("short", "Short description (for cards)"),
    bilingualText("intro", "Long intro (for detail page)"),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "heroImage",
      type: "image",
      title: "Hero image",
      options: { hotspot: true },
    }),
    defineField({
      name: "steps",
      title: "Methodology / Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            bilingualString("title", "Step title"),
            bilingualText("text", "Step description"),
          ],
          preview: {
            select: { title: "title.en", subtitle: "title.zh" },
          },
        },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        bilingualString("metaTitle", "Meta title"),
        bilingualText("metaDescription", "Meta description"),
      ],
    }),
  ],
  preview: {
    select: { title: "title.en", subtitle: "slug.current" },
  },
});
