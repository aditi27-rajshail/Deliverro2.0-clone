export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Restaurant name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Image of Restaurant",
      type: "image",
    },

    {
      name: "lat",
      title: "Latitude of the Restaurant",
      type: "number",
    },
    {
      name: "long",
      title: "Longitude of the Restaurant",
      type: "number",
    },
    {
      name: "address",
      title: "Restaurant address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Enter rating between (1-5)",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter value between 1 to 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dish",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
