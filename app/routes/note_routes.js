const articlesController = require("../../controllers/articles")
const postsController = require("../../controllers/posts")

module.exports = function(app,db){
  app.get("/articles/:id", articlesController.findById)
  app.get("/articles", articlesController.all)
  app.post("/articles", articlesController.create)
  app.put("/articles/:id", articlesController.update)
  app.delete("/articles/:id", articlesController.delete)

  /app.get("/posts/:id", postsController.findById)
  app.get("/posts", postsController.all)
  app.post("/posts", postsController.create)
  app.put("/posts/:id", postsController.update)
  app.delete("/posts/:id", postsController.delete)
}


