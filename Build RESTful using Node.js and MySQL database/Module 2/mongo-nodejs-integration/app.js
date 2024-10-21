const mongoose = require('mongoose');

const config = require("./config");

const express = require('express');
const app = express();

const projectAPI = require("./project");

mongoose.connect(config.MONGO_URL).then(() => {
    console.log("Connection established Successfully");
})
// .catch(error => {
//     console.log(error);
// })

mongoose.connection.on('Connected', () => {
    console.log("Mongoose is now connected")
})

mongoose.connection.on('error', err => {
    console.log(err);
})

mongoose.connection.on('disconnected', () => {
    console.log("Mongoose is now disconnected ... !")
})


app.listen(config.PORT, () => {
    console.log(`App listening on port ${config.PORT}`)
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/projects", projectAPI);

app.use((req, res) => {
    console.log(`Requested resource ${req.method} ${req.url} not found..!`);
    res.status(404).send("Resource not found..!")
})

