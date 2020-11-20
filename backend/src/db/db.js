const mysql = require('mysql');

const mysqlconnection = mysql.createConnection({
  host: 'b8d4yxdx94f6woz4nl2l-mysql.services.clever-cloud.com',
  user: 'uciqhht0qc9hxymn',
  password: 'P3q52iPsAh8qIX223l9P',
  database: 'b8d4yxdx94f6woz4nl2l',
  multiStatements: true
});

mysqlconnection.connect(function(err){
  if(err){
    console.log(err);
  }else{
    console.log('La base de datos está conectada')
  }
});

module.exports= mysqlconnection;