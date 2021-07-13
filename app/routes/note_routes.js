const ObjectID = require("mongodb").ObjectID
const articlesController = require("../../controllers/articles")

module.exports = function(app,db){
  app.get("/articles/:id", articlesController.findById)
  app.get("/articles", articlesController.all)
  app.post("/articles", articlesController.create)
  app.put("/articles/:id", articlesController.update)
  app.delete("/articles/:id", articlesController.delete)
}


