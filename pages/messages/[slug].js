import React, { useEffect } from "react";
import MessageItem from "../../components/message/messageItem";
import dbConnect from "../../lib/mongooseConnect";
import Message from "../../models/message";

export default function MessagePage({ message }) {
  return (
    <>
     <MessageItem big message={message} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  await dbConnect();
  const response = await Message.findOne({ slug });
  const message = {
    title: response.title,
    content: response.content,
    username: response.username,
    slug: response.slug,
    date: response.date.toString(),
  };

  return {
    props: {
      message
    },
  };
}
