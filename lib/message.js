import Message from "../models/message";
import dbConnect from "./mongooseConnect";

export const newMeassge = async (message) => {
  await dbConnect();
  const { title, content, username } = message;
  const slug = title.replace(/\s/g, "-").toLowerCase().substring(0, 100);
  const newMessage = new Message({ title, content, username, slug });

  await newMessage.save();
  return newMessage;
};
