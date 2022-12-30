import { createClient } from "contentful";
import Head from "next/head";
import React from "react";
import BlogPostList from "../../components/blog/blogPostList";
import Layout from "../../components/layout/layout";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <BlogPostList blogPosts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  });
  const response = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: response.items,
    },
  };
}
