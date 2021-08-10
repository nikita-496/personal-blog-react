const ObjectID = require("mongodb").ObjectID
const db = require("../db")

exports.all = function (callback) {
  db.get().collection("articles").find().toArray( (err, docs)=>{
    if (err) throw err
    console.log(docs);
    callback(err, docs)
  })
}

exports.findById = function(id, callback) {
    const details = {"_id": new ObjectID(id)}
    db.get().collection("articles").findOne(details, (err, docs)=>{
      callback(err, docs)
    })
} 

exports.create = function(article, callback) {
  db.get().collection("articles").insertOne(article, (err,result)=>{
    callback(err, result)
  })
}

exports.update = function(id=req.params.id , newData, callback) {
  db.get().collection("articles").update(
    {"_id": new ObjectID(id)}, 
    newData, 
     (err, result)=>{
    callback(err,result)
  })
}

exports.delete = function (id, callback) {
  const details = {"_id": new ObjectID(id)}
  db.get().collection("articles").deleteOne(details, (err, result) => {
   callback (err, result)
  })
}