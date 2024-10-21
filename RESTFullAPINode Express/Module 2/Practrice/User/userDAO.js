const fs = require('fs')

const getUsers = function (done) {
    fs.readFile('User/users.json', (err, fileContent) => {
        if (err) {
            return done("Encountered error while getting users details")

        }
        let userData = JSON.parse(fileContent);
        return done(undefined, userData)
    })
}

const getUserById = function (userId, done) {
    fs.readFile('User/users.json', (err, fileContent) => {
        if (err) {
            return done('Encoutered error while users details')
        }
        let userData = JSON.parse(fileContent)
        const fetchedUsers = userData.find(user => user.userId === userId)

        if (fetchedUsers === undefined) {
            return done('No user for requested userId')
        }
        return done(undefined, fetchedUsers)
    })
}

const updateUserDetails = function (userId, userName, done) {
    fs.readFile('User/users.json', (err, fileContent) => {
        if (err) {
            return done("Encounterd error while getting users details")
        }
        let userData = JSON.parse(fileContent)
        let index = userData.findIndex(usr => usr.userId === userId)

        if (index == -1) {
            return done('No user found for requested userId ')
        }
        userData[index].userName = userName;
        fs.writeFile('User/user.json', JSON.stringify(userData), (err, updateContent) => {
            if (err) {
                return done('Encounted error while updating user details')
            }
            return done(undefined, "Successfully update user details")
        })
    })
}

module.exports = { getUsers, getUserById, updateUserDetails }