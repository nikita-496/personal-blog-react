const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
  title: String,
  text: String,
  publicDate:  { type: Date, default: Date.now },
  category: String,
  link: String,
})
module.exports = mongoose.model("Post", PostSchema)