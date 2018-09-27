const mysql = require("mysql");
const util = require('util')
const url = require("url");
// and so is assert
const assert = require('assert');
function createconnection(){
   
    // Then we'll pull in the database client library
    // Now lets get cfenv and ask it to parse the environment variable
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
    // if (credentials.ca_certificate_base64) {
    //   var ca = new Buffer(credentials.ca_certificate_base64, 'base64');
    //   options.ssl = { ca: ca };
    //   options.flags = "--ssl-mode=REQUIRED";
    // }
    
    // // set up a new connection using our config details
    // var connection = mysql.createConnection(options);
    

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "pool_app"
      });
  
      connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        
      });
      return connection;
}
module.exports.createconnection=createconnection;