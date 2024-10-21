require('../dbconfig/dbfile')


//create async function saveUser to save user in database taking two parameters
//user object and a callback
//return callback 
async function saveUser(user, done) {
    const data = await user.save()
    done(undefined, data)
}


//create async function getUserById to get userid from database taking three parameters
//user object, userId and a callback
//return callback 

async function getUserById(user, userId, done) {
    const data = await user.findById(userId)
    done(undefined, data)
}


module.exports = { saveUser, getUserById }