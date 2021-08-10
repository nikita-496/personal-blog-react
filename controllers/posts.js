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
        res.send("Posts " + req.params.id + " deleted!")
    }
  })
}

exports.pagination = function  (req, res) {
     Posts.pagination( function(err, result, numOfPosts) {
    if (err)  {
      res.status(500).send({
        message: "Error -> Can NOT complete a paging request!",
        error: error.message
      })
    }else {
      const {page,limit} = parseInt(req.query) 
      const offset = page ? page * limit : 0;

      result.skip(offset)
      result.limit(limit)
      result.select("-__v")

      res.status(200).json({
        "message": "Paginating is completed! Query parametrs: page = " + page + ", limit = " + limit,
        "totalPages": Math.ceil(numOfPosts / limit),
        "totalItems": numOfPosts,
        "limit": limit,
        "currentPageSize": result.length,
        "posts": result
      })
    }
  })
} 