import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno Bilandzic</title>
        <meta
          name="description"
          content="Bruno Bilandzic personal page containing email and github."
        />
        <link rel="icon" href="/zgrada_selfi.ico" />
      </Head>
      <div className="main-container">
        <Image
          src="/zgrada_selfi.ico"
          alt="Zgrada Selfi"
          width={200}
          height={200}
        />
        <p>
          Feel free to contact me on my email or check my programming skills on
          github.
        </p>
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
