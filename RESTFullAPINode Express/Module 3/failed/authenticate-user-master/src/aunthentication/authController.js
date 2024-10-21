const userService = require('../Users/userService')
const authService = require('./authService')

//import the userService and authService module

//This function will registerUser it will take two parameters
//first the userData second the callback
//call the userService finduser method and also the userService register method
function registerUser(userData, done) {

}

//This function will loginUser 
//Use the method findUser of userService to first verify and if userfound than call
//the createToken method
function loginUser({ email, password }, done) {
  userService.findUser(email, (err, userFound) => {
    if (err)
      done('Internal server error')

    const userVerified = authService.verifyUser({ email, password }, userFound)
    if (userVerified) {

      if (userFound) {
        const jwtToken = authService.createJWT(userFound)
        done(null, jwtToken)
      } else {
        done({ error: "User not verified" })
      }
    } else {
      done({ error: "User not found" })
    }




  })

}

module.exports = {
  registerUser, loginUser

}