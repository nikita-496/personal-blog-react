const express = require("express")
const MongoClient = require("mongodb").MongoClient
const bodyParser = require("body-parser")
const db = require("./config/db")
//const path = require("path")
const app = express()

//const imgText = require("./client/src/img/text-page/code.jpg")

/*const ARTICLES = ({"title":"Как я сходил на FrontEnd Conf 2021","paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",publicDate:"1.07.2021", "category":"создание сайтов"})
]*/

//GET
/*app.get("/api/articles", (req, res) => {
  res.status(200).json(ARTICLES)
})*/

const PORT = 5000
app.use(bodyParser.urlencoded({extended: true}))

//подключение к базе данных 
MongoClient.connect(db.url, 
  {
    useUnifiedTopology: true,  // установка опций
    useNewUrlParser: true
 },
  function (err, database) {
  if (err) return console.log(err)
  require('./app/routes')(app, database);
  app.listen(PORT, () => {
    console.log("Server has been started on " + PORT);
  });               
})


/*app.use(express.static(path.resolve(__dirname, "client/:public")))

app.get("*", (req,res)=> {
  res.sendFile(path.resolve(__dirname, "client/:public", "index.html"))
})*/




