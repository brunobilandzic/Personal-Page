import Head from "next/head";
import React from "react";
import NewMessage from "../../components/message/newMessage";

export default function New() {
  return (
    <>
      <Head>
        <title>New Message</title>
      </Head>
      <NewMessage />
    </>
  );
}
