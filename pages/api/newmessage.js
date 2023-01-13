import { newMeassge } from "../../lib/message";

export default async function handler(req, res) {
  if (req.method != "POST") return;

  const { title, content, username } = req.body;
  if (!title || title.length == 0 || !content || content.length == 0)
    return res.status(400).json({ message: "Missing data" });
  if (title.length > 30)
    return res.status(400).json({ message: "Title is too long" });
  const { succes, message, response } = await newMeassge(req.body);
  if (!succes) return res.status(400).json( message);
  return res.status(201).json(response);
}
