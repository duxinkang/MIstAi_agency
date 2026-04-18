import { defineType, defineField } from "sanity";
import { bilingualString, bilingualText } from "./bilingual";

export const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Pricing plan",
  type: "document",
  fields: [
    defineField({
      name: "key",
      type: "string",
      title: "Key (diagnosis / lite / full)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "icon", type: "string", title: "Emoji / icon" }),
    bilingualString("title", "Plan name"),
    bilingualText("text", "What's included"),
    defineField({
      name: "badges",
      title: "Badges (duration / price / outcome)",
      type: "object",
      fields: [
        defineField({
          name: "zh",
          type: "array",
          of: [{ type: "string" }],
          title: "中文",
        }),
        defineField({
          name: "en",
          type: "array",
          of: [{ type: "string" }],
          title: "English",
        }),
      ],
    }),
    bilingualString("footer", "Footer line"),
    defineField({
      name: "order",
      type: "number",
      title: "Display order",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "title.en", subtitle: "key" },
  },
});
