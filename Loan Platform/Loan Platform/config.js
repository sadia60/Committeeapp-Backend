var mysql = require('mysql');




function createconnect(){
console.log(' ------ In Create Connection ------')
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user namecls
  password : '', //mysql database password
  database : 'platform' //mysql database name
});

 connection.connect(function(err) {
  if (err) 
  throw err;
  console.log('You are now connected with mysql database...')
});
return connection;
}

module.exports.createconnect=createconnect;