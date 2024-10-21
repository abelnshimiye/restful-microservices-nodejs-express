
const userService = require('../Users/userService.js')
const authService = require('./authService')
//import the userService and authService module

//This function will registerUser it will take two parameters
//first the userData second the callback
//call the userService finduser method and also the userService register method
function registerUser(userData, done) {

  userService.findUser(userData.email, (err, result) => {
    if (err) return done('Internal server error')

    if (result) {
      return done('User already exist')
    } else {
      userService.registerUser(userData, done)
    }
  })

}

//This function will loginUser 
//Use the method findUser of userService to first verify and if userfound than call
//the createToken method
function loginUser({ email, password }, done) {
  userService.findUser(email, (err, result) => {
    if (err) return done('Internal server error')

    if (result) {
      const userVerified = authService.verifyUser({ email, password }, result)

      if (userVerified) {
        const token = authService.createJWT(result)
        return done(null, token)
      } else {
        return done('User not verified')
      }
    }
  })

}

module.exports = {
  registerUser,
  loginUser,

}