const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customerId: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },

    productId: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    }
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;