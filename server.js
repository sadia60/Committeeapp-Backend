/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";
/* jshint node:true */

// Add the express web framework
const express = require("express");
const app = express();
const fs = require("fs");
const url = require("url");
var session=require('express-session')
app.set('trust proxy', true)
app.use(session({
    secret: 'programmers always pay their depts',
    resave: false,
    proxy: true,
    cookie: { secure: true },
    saveUninitialized: true
}));





// Use body-parser to handle the PUT data
const bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// Util is handy to have around, so thats why that's here.
// const util = require('util')
// // and so is assert
// const assert = require('assert');

// // We want to extract the port to publish our app on
// let port = process.env.PORT || 8080;

// // Then we'll pull in the database client library
// const mysql = require("mysql");

// // Now lets get cfenv and ask it to parse the environment variable
// let cfenv = require('cfenv');

// // load local VCAP configuration  and service credentials
// let vcapLocal;
// try {
//   vcapLocal = require('./vcap-local.json');
//   console.log("Loaded local VCAP");
// } catch (e) { 
//     // console.log(e)
// }

// const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {}
// const appEnv = cfenv.getAppEnv(appEnvOpts);

// // Within the application environment (appenv) there's a services object
// let services = appEnv.services;

// // The services object is a map named by service so we extract the one for PostgreSQL
// let mysql_services = services["compose-for-mysql"];

// // This check ensures there is a services for MySQL databases
// assert(!util.isUndefined(mysql_services), "Must be bound to compose-for-mysql services");

// // We now take the first bound MongoDB service and extract it's credentials object
// let credentials = mysql_services[0].credentials;

// let connectionString = credentials.uri;

// // First we need to parse the connection string. Although we could pass
// // the URL directly, that doesn't allow us to set an SSL certificate.

// let mysqlurl = new url.URL(connectionString);
// let options = {
//     host: mysqlurl.hostname,
//     port: mysqlurl.port,
//     user: mysqlurl.username,
//     password: mysqlurl.password,
//     database: mysqlurl.pathname.split("/")[1]
// };

// // If the path to the certificate is set, we assume SSL.
// // Therefore we read the cert and set the options for a validated SSL connection
// if (credentials.ca_certificate_base64) {
//   var ca = new Buffer(credentials.ca_certificate_base64, 'base64');
//   options.ssl = { ca: ca };
//   options.flags = "--ssl-mode=REQUIRED";
// }

// // set up a new connection using our config details
// let connection = mysql.createConnection(options);

// connection.connect(function(err) {
    
//     if (err) {
//         console.log(err);
//     } else {
       
//         connection.query(
//             "alter table pools add o_name varchar(20)",
//             function(err, result) {
//                 if (err) {
//                     console.log(err);
//                 }
//             }
//         );
//         connection.query(
//             "CREATE TABLE IF NOT EXISTS users (id int auto_increment primary key, name varchar(15) , phone varchar(15) unique,cnic Varchar(15) unique, password varchar(15),code varchar(5))",
//             function(err, result) {
//                 if (err) {
//                     console.log(err);
//                 }
//             }
//         );
//         connection.query(
//             "CREATE TABLE IF NOT EXISTS pools (c_id int auto_increment primary key,c_name varchar(10),owner_id int ,owner_phone varchar(20),owner_name varchar(15),level_of_joiner int default 1,min_transaction int default 500,start_date date not null,max_participants int, duration int)",
//             function(err, result) {
//                 if (err) {
//                     console.log(err);
//                 }
//             }
//         );
//         connection.query(
//             "CREATE TABLE IF NOT EXISTS pools_join(j_id int auto_increment primary key,user_id int, committee_id int )",
//             function(err, result) {
//                 if (err) {
//                     console.log(err);
//                 }
//             }
//         );
//         connection.query(
//             "CREATE TABLE IF NOT EXISTS notifications (owner_id int,joiner_id int,c_id int, verify int default 0)",
//             function(err, result) {
//                 if (err) {
//                     console.log(err);
//                 }
//             }
//         );
//         connection.query(
//             "CREATE TABLE IF NOT EXISTS payments (account_id int primary key auto_increment,user_id int,name varchar(20), phone varchar(20),cnic Varchar(25),balance bigint default 20000,pin int default 1234)",
//             function(err, result) {
//                 if (err) {
//                     console.log(err);
//                 }
//             }
//         );
//         connection.query(
//             "CREATE TABLE IF NOT EXISTS transactions (trans_id int primary key auto_increment,paidby_phone varchar(20),paidto_phone varchar(20) ,amount bigint,transaction_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP )",
//             function(err, result) {
//                 if (err) {
//                     console.log(err);
//                 }
//             }
//         );
        
       
        
//         connection.query(
//             "SET @@auto_increment_increment=1;",
//             function(err, result) {
//                 if (err) {
//                     console.log(err);
//                 }
//             }
//         );
//     }
// });

var user = require('./router/userroute');
var committee=require('./router/committee_route')
var payment=require('./router/payment_route')
app.use('/committee',committee)

app.use('/user', user);
app.use('/payment',payment)



app.listen(8081, function() {
    console.log("Server is listening on port " + 8081);
});
