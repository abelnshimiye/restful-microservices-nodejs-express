const fs = require('fs')
const path = require('path')

//import users.json file and fs module

//This method will findUser
function findUser(email, done) {
    //use filter method to find the user from json file

    const readStream = fs.createReadStream(path.join(__dirname, 'users.json'), 'utf8')

    readStream.on('data', (chunk) => {
        const users = JSON.parse(chunk)
        const user = users.find((user) => user.email === email)

        if (user) {
            return done(null, user)
        }
    })
    readStream.on('error', (err) => {
        return done('Internal server error')
    })

}

//This method will register user
function registerUser(userData, done) {

    //call fileWrite method and write the user in json file
    const user = {
        email: userData.email,
        password: userData.password,
    }
    fs.writeFile('./src/Users/user.json', JSON.stringify(user), (err) => {
        if (err) done('Internal server error')
        return done(null, user)
    })

}

module.exports = {
    findUser, registerUser
}