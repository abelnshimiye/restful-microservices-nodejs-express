const mongoose = require('mongoose');



const schema = new mongoose.Schema({
    orderId: {
        type: String,
        required: [true, 'OrderId is required'],
        unique: true
    },
    orderName: {
        type: String,
        required: [true, 'OrderName is required'],
        default: ""
    },
    productId: {
        type: String,
        required: [true, 'ProductId is required']
    },
    productName: {
        type: String,
        required: [true, 'ProductName is required']
    },
    userId: {
        type: String,
        required: [true, 'UserId is required']
    },
    userName: {
        type: String,
        required: [true, 'UserName is required']
    },
    unitsPlaced: {
        type: Number,
        required: true,
        default: 0
    },
    updatedOn: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedBy: {
        type: String,
        required: [true, 'UpdatedBy is required']
    }

}, {
    collection: 'orders'
});

module.exports = mongoose.model('orders', schema);
