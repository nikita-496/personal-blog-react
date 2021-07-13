const express = require("express")
const bodyParser = require("body-parser")
const db = require("./db.js")
//const path = require("path")
const app = express()

//const client = new MongoClient("mongodb+srv://nikita:n999180499@cluster0.1hv7g.mongodb.net/personal-blog")

//const imgText = require("./client/src/img/text-page/code.jpg")

const PORT = 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

  /*db.connect("mongodb+srv://nikita:n999180499@cluster0.wmfbt.mongodb.net/personal-blog", 
  function (err) {
      if (err) {
      return console.log(err)
      }
    db = database
    require('./app/routes')(app, db);
    app.listen(PORT, () => {
      console.log("Server has been started on " + PORT);
    });
})*/

app.get('/', function(req, res) {
	res.send('Hello API');
});


  db.connect("mongodb+srv://nikita:n999180499@cluster0.wmfbt.mongodb.net/personal-blog", function(err) {
    if (err) return console.log(err)
    require('./app/routes')(app, db);
    app.listen(PORT, () => {
      console.log("Server has been started on " + PORT);
    })
  })

  


