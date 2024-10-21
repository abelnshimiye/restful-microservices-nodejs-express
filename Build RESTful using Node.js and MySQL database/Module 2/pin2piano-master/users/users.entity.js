const mongoose = require('mongoose');



const schema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'UserId is required'],  // Mandatory with custom error message
        unique: true                              // Unique
    },
    userName: {
        type: String,
        required: [true, 'UserName is required'] // Mandatory with custom error message
    },
    email: {
        type: String,
        required: [true, 'Email is required']    // Mandatory with custom error message
    },
    ordersPlaced: {
        type: Number,
        required: true,                          // Mandatory
        default: 0                               // Default value 0
    },
    tags: {
        type: [String],                          // Type Array
        required: true,                          // Mandatory
        default: []                              // Default to empty array
    },
    description: {
        type: String,
        required: true,                          // Mandatory
        default: ""                              // Default value: Empty string
    },
    updatedOn: {
        type: Date,
        required: true,                          // Mandatory
        default: Date.now                        // Default value: Current date
    },
    updatedBy: {
        type: String,
        required: [true, 'UpdatedBy is required'] // Mandatory with custom error message
    }
}, {
    collection: 'users'  // Specify collection name
});

module.exports = mongoose.model('users', schema);
