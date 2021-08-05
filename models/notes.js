const ObjectID = require("mongodb").ObjectID
const db = require("../db")

exports.all = function (callback) {
  db.get().collection("notes").find().toArray(function (err, docs){
    if (err) throw err
    console.log(docs);
    callback(err, docs)
  })
}

exports.findById = function(id, callback) {
    const details = {"_id": new ObjectID(id)}
    db.get().collection("notes").findOne(details, (err, docs)=>{
      callback(err, docs)
    })
} 

exports.create = function(article, callback) {
  db.get().collection("notes").insertOne(article, (err,result)=>{
    callback(err, result)
  })
}

exports.update = function(id=req.params.id , newData, callback) {
  db.get().collection("notes").update(
    {"_id": new ObjectID(id)}, 
    newData, 
    function (err, result) {
    callback(err,result)
  })
}

exports.delete = function (id, callback) {
  const details = {"_id": new ObjectID(id)}
  db.get().collection("notes").deleteOne(details, (err, result) => {
   callback (err, result)
  })
}