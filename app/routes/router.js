const articles = require("../../controllers/articles")
//const posts = require("../../controllers/posts")
const comments = require("../../controllers/comments")
const notes = require("../../controllers/notes")

module.exports = function(app){
  app.get("/articles/:id", articles.findById)
  app.get("/articles", articles.all)
  app.post("/articles", articles.create)
  app.put("/articles/:id", articles.update)
  app.delete("/articles/:id", articles.delete)

  /*app.get("/posts/:id", posts.findById)
  app.get("/posts", posts.all)
  app.post("/posts", posts.create)
  app.put("/posts/:id", posts.update)
  app.delete("/posts/:id", posts.delete)*/

  app.get("/comments/:id", comments.findById)
  app.get("/comments", comments.all)
  app.post("/comments", comments.create)
  app.delete("/comments/:id", comments.delete)

  app.get("/notes/:id", notes.findById)
  app.get("/notes", notes.all)
  app.post("/notes", notes.create)
  app.put("/notes/:id", notes.update)
  app.delete("/notes/:id", notes.delete)

  app.get("/select", articles.pagination)
}


