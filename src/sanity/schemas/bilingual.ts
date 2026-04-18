import { defineField } from "sanity";

/** Shared bilingual string field factory — saves repetition across schemas. */
export const bilingualString = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({ name: "zh", type: "string", title: "中文" }),
      defineField({ name: "en", type: "string", title: "English" }),
    ],
  });

export const bilingualText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({ name: "zh", type: "text", rows: 3, title: "中文" }),
      defineField({ name: "en", type: "text", rows: 3, title: "English" }),
    ],
  });

export const bilingualBlock = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({ name: "zh", type: "array", of: [{ type: "block" }], title: "中文" }),
      defineField({ name: "en", type: "array", of: [{ type: "block" }], title: "English" }),
    ],
  });
