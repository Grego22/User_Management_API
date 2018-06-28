

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoDB = require("mongodb")
var userInfoDAO = require("./userInfoDAO.js");
var jsonParser = bodyParser.json();

const basicAuth = require('express-basic-auth')

// for listening to the port
var datetime = new Date()
const port = 7777



app.use(basicAuth({
  users: {'admin': 'admin'}
}))

app.get("/", function(request, response){
    var userInfo = request.params.userinfo
    var username = request.params.username
      userInfoDAO.find(userInfo, function(err, result){
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

    app.post("/", function(request, response){
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


app.listen(7777, function(){
  console.log("Blasting the music on highway " + port, "at " + datetime)
})
