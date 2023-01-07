import { newMeassge } from "../../lib/message";

export default async function handler(req, res) {
  if (req.method != "POST") return;

  const { title, content, username } = req.body;
  if (!title || title.length == 0 || !content || content.length == 0)
    return res.status(400).json({ message: "Missing data" });
  if (title.length > 30)
    return res.status(400).json({ message: "Title is too long" });
  const newMessage = await newMeassge(req.body);
  return res.status(201).json(newMessage);
}
