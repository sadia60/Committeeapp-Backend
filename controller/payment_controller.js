var p_model=require('../model/payment_model')
exports.pay=function(req,res){
    p_model.pay(req,res,function(error,result){
        if (error){
            res.send('error occured');
            return;
        }
        else if(result=='1'){
            res.send('successfully paid');
            return;
        }
      
    })
}
exports.print_account=function(req,res){
    p_model.print_account(req,res,function(error,result){
        if (error){
            res.send('error occured');
            return;
        }
        else if(result=='1'){
            res.send('successfully paid');
            return;
        }
      
    })
}