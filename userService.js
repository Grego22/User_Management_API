var express = require("express");
var app = express();
var userDAO = require("./userDAO.js");

app.get("/user/:userid", function(request, response){
    var user =  // fetch the i from the request
      userDAO.find(userid, function(err, result){
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
          userDAO.save(user, function(err, result){
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
  conole.log("Listening on highway 77777")
})
