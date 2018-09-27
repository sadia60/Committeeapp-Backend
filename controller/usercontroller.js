var usermodel=require('../model/usermodel');
exports.login1=function(req,res){
    usermodel.login1(req,res,function(error,result){
        if (error){
            res.json({message:error});
            return;
        }
        else if(result=='1'){
            // res.json({message:"Successful","id":req.session.user_id});
            return;
        }
        else if(result=='0'){
            res.send(JSON.stringify({message:"User is not registered"}));
            return; 
        }



    })
}
exports.signup=function(req,res){
    
    usermodel.signup(req,res,function(error,results){
        if(error){
            res.json({message:error})
            return;
        }
        else if(results=='0'){
            res.json({message:"Already Register"});
            return;     
        }
        else if(results=='1'){
            return;     
        }
    })
} 

exports.verify=function(req,res){
    
    usermodel.verify(req,res,function(error,results){
        if(error){
            res.send('error occured')
            return;
        }
        else if(results=='0'){
            res.send(JSON.stringify({message:'not verified'}) )
            return;     
        }
        else if(results=='1'){
            res.send(JSON.stringify({message:'verified'}) )
            return;     
        }
    })
} 
exports.printuser=function(req,res,func){
    usermodel.printuser1(req,res,function(error,result){
        if (error){
            res.send(error)
            return;
        }
        
        else if(result=='0'){
            res.send('no user')
            return;
        }
        else {
            res.send(result);
        }
    })
}
exports.user_details=function(req,res,func){
    usermodel.user_details(req,res,function(error,result){
        if (error){
            res.send('error occured')
            return;
        }
        
        else if(result=='0'){
            res.send('no user')
            return;
        }
        else {
            res.send(result);
        }
    })
}
exports.delete=function(req,res,func){
    usermodel.delete(req,res,function(error,result){
        if (error){
            res.send(error)
            return;
        }
        
        else if(result=='0'){
            res.send('not exist')
            return;
        }
        else {
            res.send(result);
        }
    })
}