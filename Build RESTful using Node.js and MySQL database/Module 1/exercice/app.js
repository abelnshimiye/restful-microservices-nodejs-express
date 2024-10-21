const express = require("express");

const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Node.js with MySQL integration application" });
});

require("./app/routes/product.routers.js")(app);

// set port, listen for requests

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`)
});