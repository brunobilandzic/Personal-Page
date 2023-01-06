import Head from "next/head";
import React from "react";
import { getEducation } from "../lib/contentful";

export default function Education({ education }) {
  const { title, content } = education;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <article className={``}>
        <div className="">{title}</div>
        <div>{content}</div>
      </article>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      education: await getEducation()
    },
  };
}
