var Mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/omar";
Mongo.connect(url, function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
  });