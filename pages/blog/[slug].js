import Head from "next/head";
import React from "react";
import BlogPost from "../../components/blog/blogPost";
import { getAllBLogPostsSlugs, getBlogPostBySlug } from "../../lib/contentful";

export default function Post({ post }) {
  const { sys, fields } = post;
  return (
    <>
      <Head>
        <title>{fields.title}</title>
      </Head>
      <BlogPost sys={sys} fields={fields} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: await getAllBLogPostsSlugs(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: await getBlogPostBySlug(params.slug),
    },
  };
}
