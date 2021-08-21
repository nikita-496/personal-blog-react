const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
  author: String,
  avatar: String,
  text: String,
  publicDate: String,
})

module.exports = mongoose.model("Comment", CommentSchema)