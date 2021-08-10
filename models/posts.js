const ObjectID = require("mongodb").ObjectID
const db = require("../db")

exports.all = function (callback) {
  db.get().collection("posts").find().toArray(function (err, docs){
    if (err) throw err
    console.log(docs);
    callback(err, docs)
  })
}

exports.findById = function(id, callback) {
    const details = {"_id": new ObjectID(id)}
    db.get().collection("posts").findOne(details, (err, docs)=>{
      callback(err, docs)
    })
} 
exports.create = function(post, callback) {
  db.get().collection("posts").insertOne(post, (err,result)=>{
    callback(err, result)
  })
}

exports.update = function(id, newData, callback) {
  db.get().collection("posts").update( {"_id": new ObjectID(id)}, 
  newData, 
  function (err, result) {
    callback(err,result)
  })
}

exports.delete = function (id, callback) {
  const details = {"_id": new ObjectID(id)}
  db.get().collection("posts").deleteOne(details, (err, result) => {
   callback(err,result)
  })
}

exports.pagination = function (callback) {
  db.get().collection("posts").find({},function (err, result){
    callback(err, result, numOfPosts)
  })
}