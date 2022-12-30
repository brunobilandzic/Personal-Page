import { createClient } from "contentful";
import Head from "next/head";
import React from "react";

export default function Education({ education }) {
  const { title, content } = education;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <article className={`px-2  border-2 border-500 rounded-lg`}>
        <div className="text-xl">{title}</div>
        <div>{content}</div>
      </article>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  });

  const response = await client.getEntries({ content_type: "education" });

  return {
    props: {
      education: response.items[0].fields,
    },
  };
}
