var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var user = require('./routes/user');
var db=require('./config');
var sms=require('./sms');
var connection;
var request=require('./routes/request');

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

app.use('/user', user);
app.use('/request',request);

//app.use();
//create app server
var server = app.listen(3000,  "127.0.0.1", function () {
connection = db.createconnect();
  var host = server.address().address
  var port = server.address().port
  
  console.log("Donation Platform Running at at http://%s:%s", host, port)

});

module.exports.connection = connection;
