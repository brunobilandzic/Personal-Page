import Head from "next/head";
import React from "react";
import { getEducation } from "../lib/contentful";
import styles from "../components/blog/blogPost.module.css";

export default function Education({ education }) {
  const { title, content } = education;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={`${styles.big}`}>
        <div className={`${styles.title}`}>{title}</div>
        <div>{content}</div>
      </div>
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
