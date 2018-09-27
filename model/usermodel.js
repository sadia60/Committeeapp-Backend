var connection=require('../config.js')
var t=require('../twilio.js')
var pacc=require('../model/payment_model')

exports.signup=function(req,res,func){
    
    var phone=req.body.phone
    var password=req.body.password
    var name=req.body.name
    var cnic=req.body.cnic
    var con=connection.createconnection();
    
    var sql1="SELECT * FROM users WHERE phone ="+"'"+phone+"'"
	con.query(sql1, function (error, result) {
	        if(error){
                    func(error, null);
                    return;
                }
            if (result.length==0){
                
                var code=t.twilio1(phone)
                
                var sql = "INSERT INTO users (name,phone,cnic,password,code) VALUES ("+"'"+name+"'"+","+"'"+phone+"'"+","+"'"+cnic+"'"+","+"'"+password+"'"+","+"'"+code+"'"+")";
                console.log(sql)

                con.query(sql, function (err, result) {
                if(err){
                    // func(error, null);
                    res.send(err)
                    return;
                }
                else{
                    pacc.create_paccount(req,res)
                    res.send(JSON.stringify({message:'successful','phone':phone}))
                    
                return;

                }
    
            })

        }
        else{
            func(null,'0')
            return;



        }
            
      })
    

}
exports.verify=function(req,res,func){
    var code=req.body.code;
    var phone=req.body.phone;
    var con=connection.createconnection();
    var sql='select code from users where phone='+"'"+phone+"'";
    con.query(sql, function (err, result) {
        if (err){
            func(err,null)
        }
        else if (result.length>=1){
            if (result[0].code==code){
                var sql1="update users set verify=1 where phone="+"'"+phone+"'";
                con.query(sql1,function(err,result){
                    if (err){
                        func(err,null)
                        return

                    }
                    else{
                        
                        res.send(JSON.stringify({message:'successful'}))
                        
                    }
                })
            }
            else{
                func(null,0)
            }
        }

    })
}
exports.login1=function(req,res,func){
    
    var phone=req.body.phone
    var pass=req.body.password
    var con=connection.createconnection()
    var sql='select * from users where phone='+"'"+phone+"'"+"and password="+"'"+pass+"'";
    con.query(sql, function (err, result) {
        if (err){
            console.log(err)
            return
        }
        else if (result.length>=1){
            var sql='select * from users where phone='+"'"+phone+"'";
            con.query(sql, function (err, result){
                res.send(JSON.stringify({message:'successful','phone':phone,'id':result[0]['id']}))
            })

            
            
        } 
        else{
            func(null,'0')
        }

    })
}
exports.user_details=function(req,res,func){
    var id=req.body.id;
    var con=connection.createconnection()
    var sql='select * from users where id='+id;
    con.query(sql, function (err, result) {
        if (err){
            func(err,null)
        }
        else if (result.length>=1){
            res.json(JSON.stringify({message:'successful','result':result}))
        }
        else{
            func(null,'0')
        }

    })
}
exports.printuser1=function(req,res,func){
    
    var con=connection.createconnection()
    var sql='select * from users ';
    con.query(sql, function (err, result) {
        if (err){
            func(err,null)
        }
        else if (result.length>=1){
            res.send(JSON.stringify({message:'successful','result':result}))
        }
        else{
            func(null,'0')
        }

    })
}
exports.delete=function(req,res,func){
    
    var con=connection.createconnection()
    var phone=req.body.phone
    var sql='delete from users where phone= '+"'"+phone+"'";
    con.query(sql, function (err, result) {
        if (err){
            func(err,null)
        }
        else{
            res.send(JSON.stringify({message:'successful'}))
        }
        

    })
}


