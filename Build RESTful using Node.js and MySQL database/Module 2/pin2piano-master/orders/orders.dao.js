const { v4: uuidv4 } = require("uuid");

const orderModel = require('./orders.entity')

/* 
  saveOrder should be a function that calls the save() function on Orders Model 
  to persist order data in MongoDB Orders collection of shoppingcartDB
*/
const saveOrder = function (orderReq, done) {
  let newOrderObj = new orderModel({
    OrderId: uuidv4(),
    OrderName: orderReq.OrderName,
    ProductId: orderReq.ProductId,
    ProductName: orderReq.ProductName,
    UserId: orderReq.UserId,
    UserName: orderReq.UserName,
    UnitsPlaced: orderReq.UnitsPlaced || 0,
    UpdatedOn: orderReq.UpdatedOn || new Date(),
    UpdatedBy: orderReq.UpdatedBy,
  })

  newOrderObj.save((err, savedOrder) => {
    if (err) {
      console.log("Error in saving project, Error: ", err);
      return done("Failed to save project due to data error ...!")
    }
    return done(null, savedOrder)

  })

}

/* 
  findOrdersPlacedByUser should be a function that calls the find() function on Orders Model 
  to fetch all documents from Orders collection of shoppingcartDB,
  containing data of Orders for a given UserId
*/
const findOrdersPlacedByUser = function (userId, done) {
  orderModel.find({ UserId: userId }, (err, orders) => {
    if (err) {
      console.log("Error in fetching orders for user, Error:", err);
      return done("Failed to fetch orders placed by the user.");
    }
    return done(null, orders);
  });
};


module.exports = {
  saveOrder,
  findOrdersPlacedByUser
}