const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'sample',
    user: 'root',
    password: ''
})

connection.connect(function (err) {
    if (err) {
        console.log("error occured while connecting")
    } else {
        console.log("Connection created with mysql successfully");
    }

    var sql = "CREATE TABLE cutomers (name VARCHAR(255) , address VARCHAR(255))";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    })

})