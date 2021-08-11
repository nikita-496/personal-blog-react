const express = require("express")
const mongoose = require("mongoose")
const app = express()

const pino = require("express-pino-logger")()
const link = require("./config/link")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(pino)

app.get('/', function(req, res) {
  const name = req.query.name || "API"
	res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify({greeting: `Hello ${name}!`}))
});

//подключение к БД
mongoose.connect(link.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log("Successfully connected to MongoDB")
  }).catch(err =>{
    console.log('Could not connect to MongoDB.');
    process.exit();
  })


  require("./app/routes/index.js")(app)

  const PORT = process.env.PORT || 5000
    
  app.listen(PORT, () => {
    console.log("Server has been started on " + PORT);
  })

  


