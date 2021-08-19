const mongoose = require("mongoose")

const ArticleSchema = mongoose.Schema({
  title: String,
  description: String,
  text: String,
  publicDate: String,
  category: String,
})

module.exports = mongoose.model("Article", ArticleSchema)

