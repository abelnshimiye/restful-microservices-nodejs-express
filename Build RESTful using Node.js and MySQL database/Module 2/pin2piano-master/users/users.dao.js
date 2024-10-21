const { v4: uuidv4 } = require("uuid");

const UserModel = require('./users.entity')

/* 
  saveUser should be a function that calls the save() function on Users Model 
  to persist user data in MongoDB Users collection of shoppingcartDB
*/
const saveUser = function (userReq, done) {

  let newUserObj = new UserModel({
    UserId: uuidv4(),
    UserName: userReq.UserName,
    Email: userReq.Email,
    OrdersPlaced: userReq.OrdersPlaced,
    Tags: userReq.Tags,
    Description: userReq.Description,
    UpdatedOn: userReq.UpdatedOn,
    UpdatedBy: userReq.UpdatedBy

  })

  newUserObj.save((err, savedUser) => {
    if (err) {
      console.log("Error in saving user, Error: ", err);
      return done("Failed to save user due to data error ...!")
    }
    return done(null, savedUser)
  })


}

/* 
  findUsers should be a function that calls the find() function on Users Model 
  to fetch all documents from Users collection of shoppingcartDB
*/
const findUsers = function (done) {
  UserModel.find({}, (err, users) => {
    if (err) {
      console.log("Error in fetching users, Error: ", err);
      return done("Failed to fetch users");
    }
    return done(null, users);
  });
};

/* 
  getUserByEmail should be a function that calls the findOne() function on Users Model 
  to fetch User document from Users collection of shoppingcartDB,
  containing data of Users for given email
*/
const getUserByEmail = function (email, done) {
  UserModel.findOne({ Email: email }, (err, user) => {
    if (err) {
      console.log("Error in fetching user by email, Error: ", err);
      return done("Failed to fetch user by email");
    }
    return done(null, user);
  });
};

/* 
  getUserById should be a function that calls the findOne() function on Users Model 
  to fetch User document from Users collection of shoppingcartDB,
  containing data of Users for given userId
*/
const getUserById = function (userId, done) {
  UserModel.findOne({ UserId: userId }, (err, user) => {
    if (err) {
      console.log("Error in fetching user by id, Error: ", err);
      return done("Failed to fetch user by id");
    }
    return done(null, user);
  });
};

/* 
  updateUserDetails should be a function that calls the findOneAndUpdate() 
  function on Users Model that fetches user by id from Products collection of shoppingcartDB and updates it
*/
const updateUserDetails = function (userId, updateData, done) {
  UserModel.findOneAndUpdate(
    { UserId: userId },
    { $set: updateData },
    { new: true },  // Returns the updated document
    (err, updatedUser) => {
      if (err) {
        console.log("Error in updating user details, Error: ", err);
        return done("Failed to update user details");
      }
      return done(null, updatedUser);
    }
  );
};

module.exports = {
  saveUser,
  findUsers,
  getUserByEmail,
  updateUserDetails,
  getUserById
}