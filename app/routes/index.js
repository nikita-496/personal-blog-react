const noteRoutes = require("./router")
module.exports = function(app, db) {
  noteRoutes(app,db) 
}