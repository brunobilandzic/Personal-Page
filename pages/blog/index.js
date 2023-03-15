import Head from "next/head";
import React from "react";
import BlogPostListItem from "../../components/blog/blogPostListItem";
import { getAllBlogPosts } from "../../lib/contentful";

export default function Blog({ blogPosts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div>
        {blogPosts.map((post, i) => (
          <BlogPostListItem {...post} key={i} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await getAllBlogPosts();
  const blogPosts = response.sort((a, b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt));
  return {
    props: {
      blogPosts
    },
  };
}
