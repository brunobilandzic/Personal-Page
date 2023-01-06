import Head from "next/head";
import React from "react";
import Time from "react-time-format";
import { getAllPostSlugs, getPostBySlug } from "../../lib/posts";

export default function Post({ post }) {
  const { sys, fields } = post;
  return (
    <>
      <Head>
        <title>{fields.title}</title>
      </Head>
      <div>
        <article className={``}>
          <div className="">
            <Time value={sys.createdAt} format="YYYY/MM/DD hh:mm"></Time>{" "}
          </div>
          <div className="">{fields.category}</div>
          <div className="">{fields.title}</div>
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
