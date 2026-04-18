import { defineType, defineField } from "sanity";
import { bilingualString, bilingualText } from "./bilingual";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: (doc) => {
          const t = (doc as { title?: { en?: string } }).title;
          return t?.en ?? "";
        },
        maxLength: 80,
      },
      validation: (Rule) => Rule.required(),
    }),
    bilingualString("tag", "Product category"),
    bilingualString("title", "Headline"),
    bilingualText("text", "Story / outcome description"),
    defineField({
      name: "metrics",
      title: "Key metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            bilingualString("label", "Metric label"),
            defineField({ name: "value", type: "string", title: "Value" }),
          ],
        },
      ],
    }),
    defineField({
      name: "coverImage",
      type: "image",
      title: "Cover image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
    }),
  ],
  preview: {
    select: { title: "title.en", subtitle: "tag.en" },
  },
});
