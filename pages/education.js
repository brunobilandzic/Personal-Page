import Head from "next/head";
import React from "react";
import { getEducation } from "../lib/education";

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
  return {
    props: {
      education: await getEducation()
    },
  };
}
