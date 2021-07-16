const MongoClient = require("mongodb").MongoClient
const link = require("./config/link")

const state = {
  db : null
}

exports.connect = function (url = link.url,done) {
  if (state.db) return console.log("O.K.")
  
  MongoClient.connect(url, 
    {
      useUnifiedTopology: true,  // установка опций
      useNewUrlParser: true
   },
    function(error, client) {
      const db = client.db("personal-blog")
    if(error) return done(error)
    state.db = db
    done()
  }) 
}

//module.exports.state = state.db
exports.get = function () {
  return state.db
}
