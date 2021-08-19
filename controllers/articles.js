const Article = require ("../models/articles")
const ObjectID = require("mongodb").ObjectID

 const changeArticle = req => new Article ({
  title: req.body.title,
  text: req.body.text,
  description: req.body.description,
  publicDate: req.body.publicDate,
  category: req.body.category,
})  

//POST 
exports.create = (req, res) => {
  let article = changeArticle(req)

  //Запись в БД
  article.save().then(data => {
      //отправление сообщения о записи клиенту
      res.status(200).json({
        message: "The article was successfully added to the database by id = " + data.id,
        articles: data,
      })
  }).catch(err => {
    res.status(500).json({
      message:"Ошибка!",
      error: err.message,
    })
  })
}

//Получение всех статей
exports.all = (req, res) => {
  Article.find((err, docs) => {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send(docs)
  })
}

exports.findById = (req, res) => {
  const details = {"_id": new ObjectID(req.params.id)}
  Article.findOne(details, (err,docs) => {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send(docs)
  })
}

exports.update = (req, res) => {
  details = {"_id": new ObjectID(req.params.id)}
  Article.update(details, changeArticle, (err, result) => {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send(article)
  })
}

exports.delete = (req, res) => {
  details = {"_id": new ObjectID(req.params.id)}
  Article.deleteOne(details, (err, result) => {
    if (err){
      res.send({"error": "An error has occurred"})
    }
    res.send("Article " + req.params.id + " deleted!")
  })
}

exports.pagination = async (req, res) => {

  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit); 
    
    //Т.к. в ответе на запрос получаем массив (среди прочего), в котором
    //индексация начинается с 0 позиции, а страницы с 1 
    //то при отображении порции данных из массива, следует учитывать этот факт 
    const startIndex = (page - 1) * limit

    let results = await Article.find({})  
                      .skip(startIndex) 
                      .limit(limit)
                      .select("-__v");
        
    let numOfCustomer = await Article.countDocuments({});
  
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