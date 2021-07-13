const express = require("express")
const bodyParser = require("body-parser")
const db = require("./db.js")
const link = require("./config/default.json")
const app = express()


const PORT = 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
	res.send('Hello API');
});


  db.connect(link.url, function(err) {
    if (err) return console.log(err)
    require('./app/routes')(app, db);
    app.listen(PORT, () => {
      console.log("Server has been started on " + PORT);
    })
  })

  


