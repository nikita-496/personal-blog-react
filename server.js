const express = require("express")
const bodyParser = require("body-parser")
const pino = require("express-pino-logger")()

const db = require("./db.js")
const link = require("./config/link")


const app = express()
app.use(pino)
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res) {
  const name = req.query.name || "API"
	res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify({greeting: `Hello ${name}!`}))
});


  db.connect(link.url, function(err) {
    if (err) return console.log(err)
    require('./app/routes')(app, db);
    app.listen(PORT, () => {
      console.log("Server has been started on " + PORT);
    })
  })

  const PORT = process.env.PORT || 5000

  


