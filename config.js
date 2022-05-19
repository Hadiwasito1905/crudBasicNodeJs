const mysql = require('mysql');

// database credential
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user:"sqluser",
    password:"password",
    database:"mobile_legend"
});

//integrating
connection.connect(function (error){
    if (error) throw error;
    console.log("Database Connected!");
});

module.exports = connection;