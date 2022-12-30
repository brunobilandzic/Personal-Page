import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children, home, title }) {
  return (
    <>
    <Head>
    <link rel="icon" href="/images/favicon.ico" />
    </Head>
      <Navbar />
      <div className={`px-2 sm:px-10 `}>{children}</div>
    </>
  );
}
