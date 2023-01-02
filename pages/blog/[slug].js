import { createClient } from "contentful";
import Head from "next/head";
import React from "react";

import Time from "react-time-format";
import { getAllParams, getAllPostSlugs, getPostBySlug } from "../../lib/posts";

export default function Post({ post }) {
  const { sys, fields } = post;
  return (
    <>
      <Head>
        <title>{fields.title}</title>
      </Head>
      <div>
        <article className={`px-2  border-2 border-500 rounded-lg`}>
          <div className="text-sm text-gray-400">
            <Time value={sys.createdAt} format="YYYY/MM/DD hh:mm"></Time>{" "}
          </div>
          <div className="text-green-300">{fields.category}</div>
          <div className="text-xl">{fields.title}</div>
          <div>{fields.content}</div>
        </article>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: await getAllPostSlugs(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: await getPostBySlug(params.slug),
    },
  };
}
