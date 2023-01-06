import Head from "next/head";
import React from "react";
import BlogPostList from "../../components/blog/blogPostList";
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
  return {
    props: {
      posts: await getAllBlogPosts(),
    },
  };
}
