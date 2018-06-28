

var express = require("express");
var app = express();
var https = require("https")
// the https package
var fs = require("fs")
//fs package so you can reed the keys


var bodyParser = require("body-parser");
// var mongoDB = require("mongodb")
var userInfoDAO = require("./userInfoDAO.js");
var jsonParser = bodyParser.json();


const basicAuth = require('express-basic-auth')

// var privateKey = fs.readFileSync()
// var certficate = fs.readFileSync()

// var credentials = {key: privateKey, cert: certficate}
// var httpServer = https.createServer(credentials, app)

// for listening to the port
var datetime = new Date()
const port = 7777



// app.use(basicAuth({
//   users: {'admin': 'admin'}
// }))

app.get("/hello" , function(request, response){
  // get the request data
  console.log(request.params)

  // write the business logic 

  // respond to user
  response.end("return to user");
});


app.get("/user/:userid/:username", function(request, response){
    var userid = request.params.userid
    var username = request.params.username
      userInfoDAO.find(userid, function(err, result){
        console.log("We are cruising.....")
        response.setHeader("content-type", "application/json");
          if(err){
            console.log("No Such User ");
            var error = {};
            error.errorCode = 1;
            error.errorMessage = "Invalid User";
            response.end(JSON.stringify(error));
          }else{
            response.write(JSON.stringify(result));
          }
    });
  });

    app.post("/user", function(request, response){
        var user =  bodyParser.parse(request);
          userInfoDAO.post(user, function(err, result){
            response.setHeader("content-type", "application/json");
              if(err){
                console.log("No Such User ");
                var error = {};
                error.errorCode = 1;
                error.errorMessage = "Invalid User";
                response.end(JSON.stringify(error));
              }else{
                response.write(JSON.stringify(result));
              }
        });
  // fetch userid // call the dao ?
  });

  app.put("/user", jsonParser, function(request, response){
    var user = request.body;
    userInfoDAO.create(user, function(err, result){
          response.setHeader("content-type", "application/json");
          if(err){
            console.log("No Such User ");
            var error = {};
            error.errorCode = 1;
            error.errorMessage = "Wrong Person!";
            response.end(JSON.stringify(error));
          }else{
            response.end(JSON.stringify(result));
          }
    });
});




app.listen(7777, function(){
  console.log("Blasting the music on highway " + port, "at " + datetime)
})
