var connection =require('../config')
var coni =require('../app')



exports.savereq = function(data, callback){
    console.log('Loan request');
   var conn = connection.createconnect();
   
    var query='INSERT INTO loan_request SET ?';
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
    
    
    console.log("Data inserted successfully ")
      //callback(null, results);
    });
}, 4000)
    
};
 
//C:\Users\Muhammad Atif\Loan Platform