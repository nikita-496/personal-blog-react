const mongoose = require("mongoose")


const ArticleSchema = mongoose.Schema({
  title: String,
  paragraph: String,
  publicDate: String,
  category: String,
})

module.exports = mongoose.model("Article", ArticleSchema)

