const mongoose = require("mongoose")

const ArticleSchema = mongoose.Schema({
  title: String,
  paragraph: String,
  publicDate:  { type: Date, default: Date.now },
  category: String,
})

module.exports = mongoose.model("Article", ArticleSchema)