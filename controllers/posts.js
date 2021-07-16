const Posts = require ("../models/posts") 

exports.all = function (req, res) {
  Posts.all(function (err, docs) {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send(docs)
  })
}

exports.findById = function (req, res) {
  Posts.findById(req.params.id, function(err, docs) {
    if (err) {
      res.send({"error": "An error has occurred"})
    }else{
      console.log(req.body)
      res.send(docs)
    }
  })
}

exports.create = function (req, res) {
  const post = {title: req.body.title, text: req.body.text, publicDate: req.body.publicDate, category: req.body.category, link: req.body.link}
  Posts.create(post, function(err ,result){
    if (err) {
      res.send({"error": "An error has occurred"})
    }else{
      console.log(req.body)
      res.send(result.ops[0])
    }
  })
}

exports.update = function (req, res) {
  Posts.update(req.params.id, { title: req.body.title, text: req.body.text, publicDate: req.body.publicDate, category: req.body.category, link: req.body.link }, function(err ,result){
    if (err) {
      res.send({"error": "An error has occurred"})
    }else {
      res.send(post)
    }
  })
}

exports.delete = function (req, res) {
  Posts.delete(req.params.id, function(err, result){
     if (err) {
        res.send({"error": "An error has occurred"})
      }else {
        res.send("Article " + req.params.id + " deleted!")
  }
  })
}