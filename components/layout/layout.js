import Head from "next/head";
import NavbarComponent from "./navbar";

export default function Layout({ children, home, title }) {
  return (
    <>
    <Head>
    <link rel="icon" href="/images/favicon.ico" />
    <meta
          name="description"
          content="Bruno Bilandzic personal page"
        />
    </Head>
      <NavbarComponent />
      <div className={`container`}>{children}</div>
    </>
  );
}
