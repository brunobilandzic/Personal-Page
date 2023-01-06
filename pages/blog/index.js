import Head from "next/head";
import React from "react";
import BlogPostList from "../../components/blog/blogPostList";
import { getAllBlogPosts } from "../../lib/contentful";

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
  return {
    props: {
      posts: await getAllBlogPosts(),
    },
  };
}
