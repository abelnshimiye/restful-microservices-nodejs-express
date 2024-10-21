const userService = require('./userService')

//import Service layer
function saveUser(user, done) {
     userService.saveUser(user, done)

     //call service saveUser function and pass the parameter

}



function getUserById(user, userId, done) {
     //call service getUserById function and pass the parameter
     userService.getUserById(user, userId, done)

}
module.exports = { saveUser, getUserById }