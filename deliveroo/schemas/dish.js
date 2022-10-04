export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Dish name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image of Dish",
      type: "image",
    },
    {
      name: "price",
      title: "Price of Dish",
      type: "number",
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
  ],
};
