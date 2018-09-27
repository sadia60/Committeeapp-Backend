var connection=require('../config'); 
exports.create_paccount=function(req,res){

    
	
	// var o_name=req.session.user_name
    var con=connection.createconnection()
    var name=req.body.name
    var phone=req.body.phone
    var cnic=req.body.cnic
	
	var sql = "INSERT INTO payments (phone,cnic,name)VALUES ("+"'"+phone+"'"+","+"'"+cnic+"'"+","+"'"+name+"'"+")";
	console.log(sql)
	con.query(sql, function (err, result) {
    if (err) throw err;
    
	});
}
exports.print_account=function(req,res){

    
	
	// var o_name=req.session.user_name
    var con=connection.createconnection()
   
	
	var sql = "select * from payments";
	console.log(sql)
	con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result)
	});
}
exports.pay=function(req,res,func){
    var con=connection.createconnection()
    var c_id=req.body.id;
    var payer_id=req.body.u_id
    var phone_from=req.body.phone
    var amount=req.body.amount;
    var sql = "select owner_id from pools where c_id=" + c_id;
	console.log(sql)
	con.query(sql, function (err, result) {
	if (err) throw err;
	else{
        // var o_id=result[0][owner_id]
        var o_id=result[0]["owner_id"]
        var sql="select phone from users where id="+ o_id
        con.query(sql, function (err, result) {
        if (err) throw err;
        else{
            var phone_to=result[0]["phone"]
            
            var sql="update payments set balance = balance +"+amount+" where phone="+"'"+phone_to+"'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            else{
            
                var sql="update payments set balance = balance -"+amount+" where phone="+"'"+phone_from+"'"
                con.query(sql)
                var sql="insert into transactions(paidby_phone,paidto_phone,c_id,amount) values("+"'"+phone_from+"'"+","+"'"+phone_to+"'"+","+"'"+c_id+"'"+","+"'"+amount+"'"+")"
                con.query(sql)
                var sql="insert into notifications (owner_id,joiner_id,c_id,type) values("+o_id+","+payer_id+","+c_id+","+"'pay'"+")";
                con.query(sql)
                return
                
            }
        });
            
        }
        });
	}
    });
    
        


    

}