import { createClient } from "contentful";

export const getEducation = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  });

  const response = await client.getEntries({ content_type: "education" });

  return response.items[0].fields;
};
