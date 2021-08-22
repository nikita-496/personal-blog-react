const mongoose = require("mongoose")

const ArticleSchema = mongoose.Schema({
  title: String,
  description: String,
  text: String,
  publicDate: String,
  category: String,
  comment: Object,
})

module.exports = mongoose.model("Article", ArticleSchema)

