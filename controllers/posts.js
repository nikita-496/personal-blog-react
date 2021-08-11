const Post = require("../models/posts")
const ObjectID = require("mongodb").ObjectID

const changePost = (req) => new Post ({
  title: req.body.title,
  text: req.body.text,
  publicDate: req.body.publicDate,
  category: req.body.category,
  link: req.body.link,
})  

//POST 
exports.create = (req, res) => {
  
  const post = changePost(req)

  //Запись в БД
  post.save().then(data => {
    res.status(200).json({
      message: "Upload Successfully a Customer to MongoDB with id = " + data.id,
      post: data,
    })
  }).catch(err => {
    res.status(500).json({
      message: "Fail!",
      error: err.message
    })
  })
}
  
//Получение всех статей
exports.all = (req, res) => {
  Post.find((err, docs) => {
    if (err){
      console.log(err);
			return res.sendStatus(500);
    }
    res.send(docs)
  })
}

exports.findById = (req, res) => {
  const details = {"_id": new ObjectID(req.params.id)}
  Post.findOne(details, (err,docs) => {
    if (err){
      res.status(500).json({
        message: "Fail!",
        error: err.message
      });
    }
    res.send(docs)
  })
}

exports.update = (req, res) => {
  details = {"_id": new ObjectID(req.params.id)}
  Post.update(details, changePost, (err, result) => {
    if (err){
      res.status(500).json({
        message: "Fail!",
        error: err.message
      });
    }
    res.send(post)
  })
}

exports.delete = (req, res) => {
  details = {"_id": new ObjectID(req.params.id)}
  Post.deleteOne(details, (err, result) => {
    if (err){
      res.status(500).json({
        message: "Fail!",
        error: err.message
      });
    }
    res.send("Post " + req.params.id + " deleted!")
  })
}

exports.pagination = async (req, res) => {

  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit); 
    const offset = page ? page * limit : 0;
  
    let results = await Post.find({})  
                      .skip(offset) 
                      .limit(limit)
                      .select("-__v");
        
    let numOfCustomer = await Post.countDocuments({});
  
    res.status(200).json({
      "message": "Paginating is completed! Query parameters: page = " + page + ", limit = " + limit,
      "totalPages": Math.ceil(numOfCustomer / limit),
      "totalItems": numOfCustomer,
      "limit": limit,
      "currentPageSize": results.length,
      "posts": results
    });      
  } catch (error) {
    res.status(500).send({
      message: "Error -> Can NOT complete a paging request!",
      error: error.message,
    });    
  }
}