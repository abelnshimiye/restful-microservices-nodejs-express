
const users = require('./users.json')
const fs = require('fs')
//import users.json file and fs module

//This method will findUser
function findUser(email, done) {
    //use filter method to find the user from json file
    const userFetched = users.filter((user) => user.email === email)[0]
    done(undefined, userFetched)

}

//This method will register user
function registerUser(userData, done) {

    //call fileWrite method and write the user in json file

}

module.exports = {
    findUser, registerUser
}