const mongoose = require("mongoose");

const messageObjet = {
  title: { type: String, required: true },
  content: { type: String, required: true },
  username: { type: String, default: "Anonymous" },
  slug: { type: String, required: true, unique: true, maxlength: 100 },
  date: { type: Date, default: () => Date.now() },
};

const messageSchema = new mongoose.Schema(messageObjet);

module.exports =
  mongoose.models.Message || mongoose.model("Message", messageSchema);