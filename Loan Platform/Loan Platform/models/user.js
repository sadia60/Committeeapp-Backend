var connection =require('../config')
var coni =require('../app')
var sms=require('../sms');

exports.signup = function(data, callback){
    
   var conn = connection.createconnect();
   
    var query='INSERT INTO payer SET ?';
    var params=data;
    console.log("Params are:")
   console.log(params);
    
setTimeout(function () {
   
  console.log('Processing');
  conn.query(query,params, function (error, results, fields) {
      if (error){
          console.log('ERROR')
          console.log(error);
        callback(error, null);
        return;
      }
    var ssms=sms.val;
    
    console.log("Registered Successfully ")
      //callback(null, results);
    });
}, 4000)
    
};
 
//C:\Users\Muhammad Atif\Loan Platform