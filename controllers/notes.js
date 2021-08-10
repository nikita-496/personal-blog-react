const Notes = require ("../models/notes") 

exports.all = function (req, res) {
  Notes.all(function (err, docs) {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send(docs)
  })
}

exports.findById = function (req, res) {
  Notes.findById(req.params.id, function(err, docs) {
    if (err) {
      res.send({"error": "An error has occurred"})
    }else{
      console.log(req.body)
      res.send(docs)
    }
  })
}

exports.create = function (req, res) {
  const note = {title: req.body.title, text: req.body.text, publicDate: req.body.publicDate, category: req.body.category}
  Notes.create(note, function(err ,result){
    if (err) {
      res.send({"error": "An error has occurred"})
    }else{
      console.log(req.body)
      res.send(result.ops[0])
    }
  })
}

exports.update = function (req, res) {
  Notes.update(req.params.id, { title: req.body.title, text: req.body.text, publicDate: req.body.publicDate, category: req.body.category, link: req.body.link }, function(err ,result){
    if (err) {
      res.send({"error": "An error has occurred"})
    }else {
      res.send(post)
    }
  })
}

exports.delete = function (req, res) {
  Notes.delete(req.params.id, function(err, result){
     if (err) {
        res.send({"error": "An error has occurred"})
      }else {
        res.send("Note " + req.params.id + " deleted!")
  }
  })
}