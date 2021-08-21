const Comment = require ("../models/comments")
const ObjectID = require("mongodb").ObjectID

 const changeComment = req => new Comment ({
  author: req.body.author,
  avatar: req.body.avatar,
  text: req.body.text,
  publicDate: req.body.publicDate,
}) 

exports.create = (req, res) => {
  let comment = changeComment(req)

  comment.save().then(data => {
    res.status(200).json({
      message: "The comment was successfully added to the database by id = " + data.id,
      comment: data,
    })
  }).catch(err => {
  res.status(500).json({
    message:"Ошибка!",
    error: err.message,
  })
})
}

exports.all = (req, res) => {
  Comment.find((err, docs) => {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send(docs)
  })
}

exports.findById = (req, res) => {
  const details = {"_id": new ObjectID(req.params.id)}
  Comment.findOne(details, (err,docs) => {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send(docs)
  })
}

exports.delete = (req, res) => {
  details = {"_id": new ObjectID(req.params.id)}
  Comment.deleteOne(details, (err, result) => {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send("Comment " + req.params.id + " deleted!")
  })
}