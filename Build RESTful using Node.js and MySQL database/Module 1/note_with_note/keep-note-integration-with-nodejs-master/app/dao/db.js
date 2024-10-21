const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

initializeConnection = () => {
  /* create a connection object using createConnection function of mysql module*/
  var connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });

  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database")
  })

  return connection;
}
module.exports = initializeConnection;

// var connection = mysql.createConnection({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB
// })

// //  open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database")
// })

// module.exports = connection;