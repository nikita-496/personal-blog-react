const Articles = require ("../models/articles") 

exports.all = function (req, res) {
  Articles.all(function (err, docs) {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send(docs)
  })
}

exports.findById = function (req, res) {
  Articles.findById(req.params.id, function(err, docs) {
    if (err) {
      res.send({"error": "An error has occurred"})
    }else{
      console.log(req.body)
      res.send(docs)
    }
  })
}

exports.create = function (req, res) {
  const article = {title: req.body.title, paragraph: req.body.paragraph, publicDate: req.body.publicDate, category: req.body.category}
  Articles.create(article, function(err ,result){
    if (err) {
      res.send({"error": "An error has occurred"})
    }else{
      console.log(req.body)
      res.send(result.ops[0])
    }
  })
}

exports.update = function (req, res) {
  Articles.update(req.params.if, { title: req.body.title, paragraph: req.body.paragraph, publicDate: req.body.publicDate, category: req.body.category }, function(err ,result){
    if (err) {
      res.send({"error": "An error has occurred"})
    }else {
      res.send(article)
    }
  })
}

exports.delete = function (req, res) {
  Articles.delete(req.params.id, function(err, result){
     if (err) {
        res.send({"error": "An error has occurred"})
      }else {
        res.send("Article " + id + " deleted!")
  }
  })
}