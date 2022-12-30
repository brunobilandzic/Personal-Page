import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno Bilandzic personal page</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am Bruno.</p>
        <p className="text-lg">
          This is my personal page. I am glad you are wanting to learn more
          about me.
        </p>
      </section>
      <section></section>
      <div className="text-green-50">hello wold</div>
    </>
  );
}
