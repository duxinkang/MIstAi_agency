import { defineType, defineField } from "sanity";
import { bilingualString, bilingualText } from "./bilingual";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    bilingualString("role", "Role label (short)"),
    bilingualString("titleLine", "Title / pedigree"),
    bilingualText("bio", "Short bio"),
    defineField({
      name: "photo",
      type: "image",
      title: "Photo",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Display order",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role.en", media: "photo" },
  },
});
