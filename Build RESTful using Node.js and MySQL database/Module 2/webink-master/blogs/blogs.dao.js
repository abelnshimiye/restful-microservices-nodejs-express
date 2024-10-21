const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = "blogmanagementDB";

const saveBlog = async function (blog, done) {

    try {
        // Establish connection with MongoDB
        await client.connect();
        console.log("Connected to MongoDB!");

        // Get the database and collection
        const db = client.db(dbName);
        const collection = db.collection('blogs');

        // establish connection with mongo

        // insert blog document to blogs collection of blogmanagementDB database

        const insertResult = await collection.insertOne(blog);

        // store the insert command result in insertResult

        if (!insertResult) {
            console.log("Error in saving blog, ERROR::");

            // EXITING
            return done("Failed to save blog due to data errors..!");
        }

        // EXITING with results
        return done(null, blog);

    } catch (error) {
        console.log("Error in saving blog, ERROR::", error);
        return done("Failed to save blog due to database error.");
    } finally {
        // Close the connection
        await client.close();
    }

}

const findBlogs = async function (done) {
    // establish connection with mongo

    // fetch all blogs from blogs collection of blogmanagementDB database

    try {
        // Establish connection with MongoDB
        await client.connect();
        console.log("Connected to MongoDB!");

        // Get the database and collection
        const db = client.db(dbName);
        const collection = db.collection('blogs');

        // Fetch all blogs from blogs collection
        const findResult = await collection.find({}).toArray();

        // store the find command result in findResult

        if (!findResult) {
            console.log("Error in fetching blogs");

            // EXITING
            return done("Failed to fetch blogs due to data errors..!");
        }

        // EXITING with results
        return done(null, findResult);
    } catch (error) {
        console.log("Error in fetching blogs, ERROR::", error);
        return done("Failed to fetch blogs due to database error.");
    } finally {
        // Close the connection
        await client.close();
    }
}


module.exports = {
    saveBlog,
    findBlogs,
}