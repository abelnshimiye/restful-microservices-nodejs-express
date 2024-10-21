
const jsonwebtoken = require('jsonwebtoken')
const config = require('../../config.js')
//import jsonwebtoken and config file

//This function will verify email and password and will return true and false

function verifyUser({ email, password }, userData) {


  if (userData === undefined) {
    return false
  }
  else {

    if (email === userData.email && password === userData.password)
      return true;
  }


}

//This function will create JWT token and return the token
// use the method jwt.sign having two parameters payload and Auth_Secret
function createJWT(userdata) {
  //create payload
  //create payload
  const payload = {
    role: 'USER',
    email: userdata.email,
    name: userdata.name,
  }

  const token = jsonwebtoken.sign(payload, config.AUTH_SECRET, { expiresIn: '1h' })
  return token
}


module.exports = {
  verifyUser, createJWT
}