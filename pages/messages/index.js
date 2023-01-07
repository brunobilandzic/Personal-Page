import React, { useEffect } from "react";
import Message from "../../models/message";
import dbConnect from "../../lib/mongooseConnect";
import MessageItem from "../../components/message/messageItem";

export default function Index({ messages }) {
  return (
    <div>
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
