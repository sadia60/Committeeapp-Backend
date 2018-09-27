var c_model=require('../model/committee_model')
exports.create_com=function(req,res){
    c_model.create_com1(req,res,function(error,result){
        if (error){
            res.send('error occured');
            return;
        }
        else if(result=='1'){
            res.send('successfully created');
            return;
        }
      
    })
}
exports.print_com=function(req,res){
    c_model.print_com1(req,res,function(error,result){
        if (error){
            res.send('error occured');
            return;
        }
        else if(result){
            res.send(result);
            return;
        }
      
    })
}
exports.search_com=function(req,res){
    c_model.search_com(req,res,function(error,result){
        if (error){
            res.send('error occured');
            return;
        }
        else if(result){
            // res.json(result)
            return;
        }
      
    })
}
exports.committee_details1=function(req,res){
    c_model.committee_details1(req,res,function(error,result){
        if (error){
            res.send('error occured');
            return;
        }
        else if(result){
            // res.json(result)
            return;
        }
      
    })
}
exports.join_com=function(req,res){
    c_model.join_com(req,res,function(error,result){
        if (error){
            res.send(error);
            return;
        }
        else if(result=='1'){
            res.send(JSON.stringify({message:'successful'}));
            return;
        }
      
    })
}
exports.join_com1=function(req,res){
    c_model.join_com1(req,res,function(error,result){
        if (error){
            res.send(error);
            return;
        }
        else if(result=='1'){
            res.send(JSON.stringify({message:'successful'}));
            return;
        }
      
    })
}
// exports.join_com=function(req,res){
//     c_model.join_com(req,res,function(error,result){
//         if (error){
//             res.send(error);
//             return;
//         }
//         else if(result=='1'){
//             res.send("successfully joined");
//             return;
//         }
      
//     })
// }
exports.list_members=function(req,res){
    c_model.list_members(req,res,function(error,result){
        if (error){
            res.send(error);
            return;
        }
        else if(result){
            res.send(result);
            return;
        }
      
    })
}
exports.print_join=function(req,res){
    c_model.print_join(req,res,function(error,result){
        if (error){
            res.send(error);
            return;
        }
        else if(result){
            res.send(result);
            return;
        }
      
    })
}
exports.notification=function(req,res){
    c_model.notification(req,res,function(error,result){
        if (error){
            res.send(error);
            return;
        }
        else if(result){
            res.send(result);
            return;
        }
      
    })
}