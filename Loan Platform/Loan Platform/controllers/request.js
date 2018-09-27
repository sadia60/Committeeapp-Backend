//var response = require('./response');
var model = require('../models/request');




exports.savereq = function(data, res){
    console.log('before response');
  //  console.log(response);
    model.savereq(data, function(error, results){
        
   
        if (error){
            res.send({status:0, message:response.SIGNUP_FAIL, results:null});
            return;
        }
        else{
        res.send({status:1, message:response.SIGNUP_SUCCESSS, results:null});
        return;

        }
    });
};


