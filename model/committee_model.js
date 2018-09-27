var connection=require('../config'); 

exports.create_com1=function(req,res,func){
	// res.send(req.session.user_id)
	
	var o_phone=req.body.phone
	var level=req.body.level
	var c_name=req.body.c_name
	var id1=req.body.identity
	var start_date=req.body.start
	var duration=req.body.duration
	var max_participants=req.body.max
	var con=connection.createconnection()
	
	var sql="select name from users where id="+id1
	console.log(sql)
	con.query(sql,function(err,result){
		if (err) throw err;
		else{
			var name=result[0]['name']

		}
		var sql = "INSERT INTO pools (owner_id,owner_name,owner_phone,c_name,level_of_joiner,start_date,duration,max_participants) VALUES ("+id1+","+"'"+name+"'"+","+"'"+o_phone+"'"+","+"'"+c_name+"'"+","+"'"+level+"'"+","+"'"+start_date+"'"+","+"'"+duration+"'"+","+"'"+max_participants+"'"+")";
	console.log(sql)
	con.query(sql, function (err, result) {
	if (err) throw err;
	else{
		res.send(JSON.stringify({message:'successful'}))
	}
	});
	})
	
	
}

exports.list_members=function(req,res,func){
	// res.send(req.session.user_id)
	var c_id=req.body.id;

    var con=connection.createconnection()
    var sql = "select user_id from pools_join where committee_id="+c_id;
	console.log(sql)
	con.query(sql, function (err, result) {
	if (err) throw err;
	else{
		var size=result.length
		var i=0
		var name1=[]
		var ni={}
		console.log(result[0])
		for(i=0;i<size;i++){
			var m=result[i]['user_id'];
			var sql1="select name from users where id ="+result[i]['user_id']
			console.log(sql1)
			con.query(sql1,function(err,result1){
				var n=result1[0]['name']
			
				ni['name']=n
				ni['id']=m


				
				name1.push(ni)
			
			})
		
			
		}
		function func(){
	
		}
		setTimeout(func,1500)

		
	}
	var sql = "select * from pools where c_id="+c_id;
	console.log(sql)
	con.query(sql, function (err, result) {
	if (err) throw err;
	else{
		res.send(JSON.stringify({message:'successful','details':result[0],'members':name1}))

	}
})
	});
}
exports.notification=function(req,res,func){
	
	var o_id=req.body.id
	var con=connection.createconnection()
	var sql = "select c_name,type from pools where owner_id="+id;
	console.log(sql)
	con.query(sql, function (err, result) {
	
	if (err) throw err;
	else{
		var sql="select c_id from pools_join where user_id="+id
		con.query(sql,function(err,result){
			if (err) throw err;
		})

		res.json({message:'successful',
			"result":result})
		
		return
	
}
	});

	
    
}
exports.print_com1=function(req,res,func){
	// res.send(req.session.user_id)
	// var o_id=req.session.user_id
	var id=req.body.id
    var con=connection.createconnection()
    var sql = "select c_name,o_name,c_id from pools where owner_id="+id;
	console.log(sql)
	con.query(sql, function (err, result) {
	
	if (err) throw err;
	else{
		var sql="select c_id from pools_join where user_id="+id
		con.query(sql,function(err,result){
			if (err) throw err;
		})

		res.json({message:'successful',
			"result":result})
		
		return
	
}
	});
}
exports.search_com=function(req,res,func){
	// res.send(req.session.user_id)
	// var o_id=req.session.user_id
	var name=req.body.name
	// var id=req.body.id

    var con=connection.createconnection()
    var sql = "select c_name,o_name,c_id from pools where  c_name="+"'"+name+"'";
	console.log(sql)
	con.query(sql, function (err, result) {
	if (err) throw err;
	else{
		res.send(JSON.stringify({message:'successful','result':result}))
	}
	});
}
exports.committee_details1=function(req,res,func){
	// res.send(req.session.user_id)
	// var o_id=req.session.user_id
	var o_id=req.body.id

    var con=connection.createconnection()
    var sql = "select * from pools where owner_id="+o_id;
	console.log(sql)
	con.query(sql, function (err, result) {
	if (err) throw err;
	else{
		
		res.send(JSON.stringify({message:'successful','result':result}))
		return
		
	}
	});
}
exports.print_join=function(req,res,func){
	// res.send(req.session.user_id)
	// var o_id=req.session.user_id


    var con=connection.createconnection()
    var sql = "select * from pools_join ";
	console.log(sql)
	con.query(sql, function (err, result) {
	if (err) throw err;
	else{
		
		res.send(JSON.stringify({message:'successful','result':result}))
		return
		
	}
	});
}
// exports.list_members=function(req,res,func){
// 	// res.send(req.session.user_id)
// 		var c_id=req.body.id;

// 		var con=connection.createconnection()
// 		var sql = "select user_id from pools_join where committee_id="+c_id;
// 		console.log(sql)
// 		con.query(sql, function (err, result) {
// 		if (err) throw err;
// 		else{
// 			var size=result.length
// 			var i=0		
// 			var name1=[]
// 			console.log(result[0])
// 			for(i=0;i<size;i++){
// 				var sql="select name from users where id ="+result[i]['user_id']
// 				console.log(sql)
// 				con.query(sql,function(err,result1){
// 					var a=result1[0]['name']
					
// 					name1.push(a)
				
// 				})
			
				
// 			}
// 			function func(){
		
// 			}
// 			setTimeout(func,1500)

			
// 		}
// 		var sql = "select * from pools where c_id="+c_id;
// 		console.log(sql)
// 		con.query(sql, function (err, result) {
// 		if (err) throw err;
// 		else{
// 			res.send(JSON.stringify({message:'successful','details':result,'members':name1}))

// 		}
// 	})
// 		});
// }
exports.join_com1=function(req,res,func){
	var c_id=req.body.c_id
	var u_id=req.body.u_id

    var con=connection.createconnection()
    var sql1 = "insert into pools_join (user_id,committee_id) values("+u_id+","+c_id+")";

	console.log(sql1)
	con.query(sql1, function (err, result) {
		if (err) throw err;
		else{
			res.send(JSON.stringify({message:'successful'}))
		}
	});


}
exports.join_com=function(req,res,func){
	// res.send(req.session.user_id)
	
	// var o_id=req.body.id
	var c_id=req.body.c_id
	var u_id=req.body.u_id

    var con=connection.createconnection()
    
			var sql="select owner_id,c_name from pools where c_id="+c_id;
			console.log(sql)
			con.query(sql,function(err,result){
				if (err) throw err;
				else{
					var o_id=result[0]['owner_id'];
					var name=result[0]['c_name'];
					var sql="insert into notifications (owner_id,joiner_id,c_id,type,c_name) values("+o_id+","+u_id+","+c_id+","+"'join'"+"'"+name+"'"+")";
					console.log(sql)
					con.query(sql,function(err,result){
						if (err) throw err;
						else{
							res.send('successfull')
						}
					})
					
				}
			})
		
	


}

// exports.join_com=function(req,res,func){
// 	// res.send(req.session.user_id)
// 	var u_id=req.body.u_id
// 	// var o_id=req.body.id
// 	var c_id=req.body.c_id

//     var con=connection.createconnection()
//     var sql = "select owner_id from pools where c_id ="+c_id;
// 	console.log(sql)
// 	con.query(sql, function (err, result) {
// 	if (err){
// 		func(err,null)
// 	}
// 	console.log(result)
	
// 	var sql1 = "insert into notifications (joiner_id,owner_id,c_id) values("+u_id+","+result[0].owner_id+","+c_id+")";
// 	console.log(sql1)
// 	con.query(sql1, function (err, result) {
// 		if (err){
// 			func(err,null)
// 		}
// 		else{
// 			func(null,1)
// 		}
// 	});

// 	});
// }
// exports.show_notification=function(req,res,func){
// 	// res.send(req.session.user_id)
// 	// var o_id=req.session.user_id
// 	var u_id=req.body.u_id
// 	// var id=req.body.id

//     var con=connection.createconnection()
//     var sql = "select joiner_id,c_id from notifications where  owner_id="+u_id;
// 	console.log(sql)
// 	con.query(sql, function (err, result) {
// 	if (err) throw err;
// 	else{
// 		console.log(result)
// 		var size=result.length
// 			var i=0
// 			var data=[]
// 			// console.log(result)
// 		for(i=0;i<size;i++){
// 			var sql="select name,phone,cnic from user where id ="+result[i]['joiner_id']
// 			console.log(result[i]['c_id'])
// 			con.query(sql,function(err,result1){
// 				console.log(result[0])
// 				data.push(result1[0])
				
				
			
// 			})
			

			
// 		}
// 		function func(){
// 			res.send(JSON.stringify({message:'successful','details':data}))
// 		}
// 		setTimeout(func,1500)
		

		
// 	}
// 	});
// }
