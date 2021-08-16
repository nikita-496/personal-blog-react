const Note = require ("../models/notes")
const ObjectID = require("mongodb").ObjectID

 changeNote = req => new Note ({
  title: req.body.title,
  text: req.body.text,
  publicDate: req.body.publicDate,
  category: req.body.category,
})  

//POST 
exports.create = (req, res) => {
  const note = changeNote(req)

  //Запись в БД
  note.save().then(data => {
      //отправление сообщения о записи клиенту
      res.status(200).json({
        message: "The note was successfully added to the database by id = " + data.id,
        note: data,
      })
  }).catch(err => {
    res.status(500).json({
      message:"Error!",
      error: err.message,
    })
  })
}

//Получение всех заметок
exports.all = (req, res) => {
  Note.find((err, docs) => {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send(docs)
  })
}

exports.findById = (req, res) => {
  const details = {"_id": new ObjectID(req.params.id)}
  Note.findOne(details, (err,docs) => {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send(docs)
  })
}

exports.update = (req, res) => {
  details = {"_id": new ObjectID(idreq.params.id)}
  Note.update(details, changeNote, (err, result) => {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send(notes)
  })
}

exports.delete = (req, res) => {
  details = {"_id": new ObjectID(req.params.id)}
  Note.deleteOne(details, (err, result) => {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send("Note " + req.params.id + " deleted!")
  })
}