const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({
  title: String,
  text: String,
  publicDate: String,
  category: String,
})

module.exports = mongoose.model("Note", NoteSchema)