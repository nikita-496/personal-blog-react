const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({
  title: String,
  text: String,
  publicDate:  { type: Date, default: Date.now },
  category: String,
})

module.exports = mongoose.model("Note", NoteSchema)