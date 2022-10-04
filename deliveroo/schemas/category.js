export default {
  name: "category",
  title: "Menue Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image of Category",
      type: "image",
    },
    {
      name: "dish",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
