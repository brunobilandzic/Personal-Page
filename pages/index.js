import Head from "next/head";
import styles from "../styles/utils.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno Bilandzic</title>
      </Head>
      <section>
        <h2 className="">Hello, I am Bruno.</h2>
        <p className="">
          This is my personal page.
          <br />
          Here you can read my blog posts, see my education and write me a{" "}
          <a
            href="https://www.brunobilandzic.from.hr/messages/new"
            className={styles.customLink}
          >
            message
          </a>
          .
        </p>
        <h4>Contact</h4>
        <a
          className={styles.customLink}
          href="mailto:bruno.bilandzic@outlook.com"
        >
          Mail
        </a>
        <br />
        <a
          className={styles.customLink}
          target="_blank"
          href="https://github.com/brunobilandzic"
        >
          Github
        </a>
        <br />
        <a
          className={styles.customLink}
          target="_blank"
          href="https://www.facebook.com/bruno.bilandzic.14/"
        >
          Facebook
        </a>
        <br />
        <a
          className={styles.customLink}
          target="_blank"
          href="https://www.instagram.com/bruno.bilandzic/"
        >
          Instagram
        </a>
      </section>
    </>
  );
}
