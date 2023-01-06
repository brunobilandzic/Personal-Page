import Head from "next/head";
import React from "react";
import Time from "react-time-format";
import { getAllBLogPostsSlugs, getBlogPostBySlug } from "../../lib/contentful";

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
