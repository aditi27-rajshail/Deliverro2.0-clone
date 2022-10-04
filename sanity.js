import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const client = sanityClient({
  dataset: "production",
  projectId: "kga5awfi",
  apiVersion: "2021-08-11", // or today's date for latest
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;
