
module.exports = {
    create : function(object , cb){

      cb(null, object);
    } ,
    find : function(object, cb){
      var user = {};
      user.username = "gregory"
      user.password = "hellow"
      cb(null, user);
    },
    update : function(object , cb){
      cb(null,object);
    },
    delete : function(object , cb){
      var user = {};
      user.message = "Good work!";
      cb(null, user);
    },
    findall : function(cb){
      var user = {};
      user.username = "gregory";
      user.password = "hellow";
      cb(null, user);
    }
  }