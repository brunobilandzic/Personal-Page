import React, { useEffect } from "react";
import Message from "../../models/message";
import dbConnect from "../../lib/mongooseConnect";
import MessageItem from "../../components/message/messageItem";
import utils from "../../styles/utils.module.css";
import styles from "../../components/message/messages.module.css";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";

export default function Index({ messages }) {
  return (
    <div>
      <Head>
        <title>Messages</title>
      </Head>
      <div className={styles.topWrap}>
        <Link href="messages/new">
          <Button className={utils.actionBtn}>New</Button>
        </Link>
      </div>
      {messages?.map((message, i) => (
        <MessageItem key={i} message={message} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const response = await Message.find({});
  const messages = response
    .sort((a, b) => b.date - a.date)
    .map((message) => {
      return {
        title: message.title,
        content: message.content,
        username: message.username,
        slug: message.slug,
        date: message.date.toString(),
      };
    });
  return {
    props: {
      messages,
    },
  };
}
