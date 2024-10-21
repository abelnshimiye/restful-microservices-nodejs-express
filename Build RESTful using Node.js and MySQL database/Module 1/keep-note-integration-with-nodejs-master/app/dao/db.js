const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

initializeConnection = () => {
  /* create a connection object using createConnection function of mysql module*/
  var connection =  null;

  return connection;
}
module.exports = initializeConnection;