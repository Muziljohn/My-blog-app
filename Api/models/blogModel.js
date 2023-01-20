const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    summary: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    cover: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = new mongoose.model("blogModel", blogSchema);
