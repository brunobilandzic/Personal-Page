import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children, home, title }) {
  return (
    <>
    <Head>
      <link rel="icon" src="/images/profile.jpg"></link>
    </Head>
      <Navbar />
      <div className={`px-10`}>{children}</div>
    </>
  );
}
