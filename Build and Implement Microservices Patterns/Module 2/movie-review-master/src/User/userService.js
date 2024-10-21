const userDao = require('./userDAO')

//import DAO layer
function saveUser(user, done) {
  //call DAO saveUser function and pass the parameter
  userDao.saveUser(user, done)

}



function getUserById(user, userId, done) {
  //call DAO getUserById function and pass the parameter
  userDao.getUserById(user, userId, done)

}

module.exports = { saveUser, getUserById }