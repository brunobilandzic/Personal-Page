import Message from "../models/message";
import dbConnect from "./mongooseConnect";

export const newMeassge = async (message) => {
  await dbConnect();
  let { title, content, username } = message;
  if (username.length === 0) {
    username = "Anonymous";
  }
  const slug = title.replace(/\s/g, "-").toLowerCase().substring(0, 100);
  const newMessage = new Message({ title, content, username, slug });

  try {
    const response = await newMessage.save();
    return {
      succes: true,
      message: "Message saved successfully",
      response,
    };
  } catch (error) {
    return {
      succes: false,
      message: "Message not saved. Most likely the title is already in use.",
    };
  }
};
