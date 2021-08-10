const articlesController = require("../../controllers/articles")
const postsController = require("../../controllers/posts")
const notesController = require("../../controllers/notes")

module.exports = function(app){
  app.get("/articles/:id", articlesController.findById)
  app.get("/articles", articlesController.all)
  app.post("/articles", articlesController.create)
  app.put("/articles/:id", articlesController.update)
  app.delete("/articles/:id", articlesController.delete)

  app.get("/posts/:id", postsController.findById)
  app.get("/posts", postsController.all)
  app.get("/posts", postsController.pagination)
  app.post("/posts", postsController.create)
  app.put("/posts/:id", postsController.update)
  app.delete("/posts/:id", postsController.delete)

  app.get("/notes/:id", notesController.findById)
  app.get("/notes", notesController.all)
  app.post("/notes", notesController.create)
  app.put("/notes/:id", notesController.update)
  app.delete("/notes/:id", notesController.delete)
}


