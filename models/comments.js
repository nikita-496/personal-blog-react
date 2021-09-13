const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
  author: String,
  avatar: String,
  text: String,
  parentId: String,
  likes: Number,
  publicDate: String,
})

module.exports = mongoose.model("Comment", CommentSchema)