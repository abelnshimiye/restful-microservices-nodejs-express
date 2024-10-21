require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const User = require("./model/user");
const Movie = require("./model/movie");

let TOKEN_KEY = "gfg_jwt_secret_key";


app.post("/movie", async (req, res) => {
    try {
        const {
            movieId,
            movieName,
            yearReleased
        } = req.body;

        if (!(movieId && movieName && yearReleased)) {
            res.status(400).send("All input is required !!!")
        }

        const existingMovie = await Movie.findOne({ movieId })

        if (existingMovie) {
            return res.status(409).send("Movie Already Exists !!");
        }

        const movie = await Movie.create({
            movieId: movieId,
            movieName: movieName,
            yearReleased: yearReleased
        });

        response.status(201).send("Movie saved");


    } catch (err) {
        console.log(err)
    }
});


app.route("/movies").get(function (req, res) {
    movie.find({}, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.post("/user", async (req, res) => {
    try {
        const {
            email,
            username,
            password,
            watchList
        } = req.body;

        if (!(email && username && password && watchList)) {
            res.status(400).send("All the inputs are required")
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).send("User Already exists");
        }

        const user = await User.create({
            email: email,
            username: username,
            password: password,
            watchList: watchList
        });

        let data = {
            time: Date(),
            userId: 12,
        }

        const token = jwt.sign(data, TOKEN_KEY);
        user.token = token;

        res.status(201).send(token);


    } catch (err) {
        console.log(err);
    }
});

app.route("/users").get(function (req, res) {
    User.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
