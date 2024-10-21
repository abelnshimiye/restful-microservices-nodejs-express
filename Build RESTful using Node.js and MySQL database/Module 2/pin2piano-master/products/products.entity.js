const mongoose = require('mongoose');



/*
Define Schema for Products with following fields with type and validation criteria as specified in the format:
[Field :: Type :: Validation Criteria]

ProductId :: String :: Mandatory and Unique, 
ProductName :: String :: Mandatory, 
Description :: String :: Mandatory with Default Value 0, 
Price :: Number :: Mandatory with Default Value 0, 
UnitsAvailable :: Number :: Mandatory with Default Value 0,
Tags :: Array :: Mandatory, 
Category :: String :: Mandatory, 
Metadata :: Object 
UpdatedOn :: Date :: Mandatory with Default Value Current Date, 
UpdatedBy :: String :: Mandatory
*/

const schema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true // Ensures that ProductId is unique
    },
    productName: {
        type: String,
        required: true // ProductName is mandatory
    },
    description: {
        type: String,
        required: true,
        default: "0" // Default value for Description is "0"
    },
    price: {
        type: Number,
        required: true,
        default: 0 // Default value for Price is 0
    },
    unitsAvailable: {
        type: Number,
        required: true,
        default: 0 // Default value for UnitsAvailable is 0
    },
    tags: {
        type: [String],
        required: true // Tags array is mandatory
    },
    category: {
        type: String,
        required: true // Category is mandatory
    },
    metadata: {
        type: Object,
        default: {} // Metadata can be an object with no strict requirements
    },
    updatedOn: {
        type: Date,
        required: true,
        default: Date.now // Default value for UpdatedOn is the current date and time
    },
    updatedBy: {
        type: String,
        required: true // UpdatedBy is mandatory
    }
}, { collation: 'products' })


module.exports = mongoose.model('products', schema);
