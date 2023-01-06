import { createClient } from "contentful";

const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});

export const getEducation = async () => {
  const response = await client.getEntries({ content_type: "education" });

  return response.items[0].fields;
};

export const getAllBlogPosts = async () => {
    const response = await client.getEntries({ content_type: "post" });
    return response.items;
  };
  
  export const getAllBLogPostsSlugs = async () => {
    const response = await client.getEntries({ content_type: "post" });
    const paths = response.items.map((item) => ({
      params: { slug: item.fields.slug },
    }));
    return paths;
  };
  
  export const getBlogPostBySlug = async (slug) => {
    const response = await client.getEntries({
      content_type: "post",
      "fields.slug": slug,
    });
  
    return response.items[0];
  };
  