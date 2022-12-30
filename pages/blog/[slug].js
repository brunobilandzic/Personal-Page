import { createClient } from "contentful";
import Head from "next/head";
import React from "react";

import Time from "react-time-format";

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

const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});

export async function getStaticPaths() {
  const response = await client.getEntries({ content_type: "post" });
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return {
    props: {
      post: response.items[0],
    },
  };
}
