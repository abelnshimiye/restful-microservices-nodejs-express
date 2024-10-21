const { MongoClient } = require('mongodb');

const connectionURI = "mongodb://localhost:27017";

const client = new MongoClient(connectionURI);

client.connect().then(() => {
    console.log(" connection Established Successfully");
}).catch(() => {
    console.log("Failed to connect with MongoDB");
})