const mongoose = require('mongoose');

const Mongo_URI = 'mongodb://localhost:27017/userproductdb';

exports.connect = () => {

  // Write the code to establish the database connectivity

  mongoose.connect(Mongo_URI, {

  }).then(() => {
    console.log("Successfully connected to userProduct Database !!!")
  }).catch((error) => {
    console.log("Database connection Failed ... Exiting Now");
    console.log(error)
    process.exit(1);
  })

};