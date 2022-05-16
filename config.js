const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user:"sqluser",
    password:"password",
    database:"mobile_legend"
});

connection.connect(function (error){
    if (error) throw error;
    console.log("Database Connected!");
});

module.exports = connection;