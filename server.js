const express = require("express")
//const MongoClient = require("mongodb").MongoClient
const MongoClient = require("mongodb").MongoClient
const bodyParser = require("body-parser")
const db = require("./config/db")
//const path = require("path")
const app = express()

//const client = new MongoClient("mongodb+srv://nikita:n999180499@cluster0.1hv7g.mongodb.net/personal-blog")

//const imgText = require("./client/src/img/text-page/code.jpg")

const PORT = 5000
app.use(bodyParser.urlencoded({extended: true}))

  MongoClient.connect(db.url, 
  {
    useUnifiedTopology: true,  // установка опций
    useNewUrlParser: true
 },
  function (err, client) {
    var db = client.db("articles")
      if (err) {
      return console.log(err)
      }
    require('./app/routes')(app, db);
    app.listen(PORT, () => {
      console.log("Server has been started on " + PORT);
    });
})
