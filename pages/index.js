import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno Bilandzic</title>
      </Head>
      <div className="main-container">
        <section>
          <h2>
            <a href="mailto:bruno.bilandzic@outlook.com">Mail</a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/brunobilandzic">
              Github
            </a>
          </h2>
          <br />
        </section>
      </div>
    </>
  );
}
