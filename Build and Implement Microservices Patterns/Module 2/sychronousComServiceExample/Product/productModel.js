const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    productId: {
        type: String,
        require: true
    },

    productName: {
        type: String,
        require: true
    },

    productDetails: {
        type: String,
        require: true
    },


})

const Product = mongoose.model('product', productSchema)

module.exports = Product