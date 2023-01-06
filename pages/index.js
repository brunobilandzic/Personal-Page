import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno Bilandzic</title>
      </Head>
      <section>
        <h1 className="text-3xl mb-4">Hello, I am Bruno.</h1>
        <p className="">
          This is my personal page.<br/> I am glad you are wanting to learn more
          about me. 
          This is change made on test branch.
        </p>
      </section>
      <section></section>
      <div className="text-green-50">hello wold</div>
    </>
  );
}
