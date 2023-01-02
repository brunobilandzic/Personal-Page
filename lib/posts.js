import { createClient } from "contentful";


export const getAllPosts = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  });
  const response = await client.getEntries({ content_type: "post" });
  return response.items;
};

export const getAllPostSlugs = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  });
  const response = await client.getEntries({ content_type: "post" });
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
  return paths;
};

export const getPostBySlug = async (slug) => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  });
  const response = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });

  return response.items[0];
};
