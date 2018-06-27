

var express = require("express");
var app = express();
var userDAO = require("./userDAO.js");
var userInfoDAO = require("./userInfoDAO.js");
var bodyParser = require("body-parser");
var mongoDB = require("mongodb")
var datetime = new Date()

app.get("/", function(request, response){
    
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


const port = 7777
app.listen(7777, function(){
  console.log("Blasting the music on highway " + port, "at " + datetime)
})
