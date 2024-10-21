const User = require('../model/user')

const Movie = require('../model/movie')


const getMovies = async (req, res) => {

    /**
        Write the code to get the movie details from database
    */

    Movie.find({}, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })


}

const addMovie = async (req, res) => {

    /**
        Write the code to add the movie details to the database
    */


    try {
        const { movieId, movieName, yearReleased } = req.body;

        if (!(movieId && movieName && yearReleased)) {
            return res.status(400).send("All input are required")
        }

        const existingProduct = await Product.findOne({ movieId })

        if (existingProduct) {
            return res.status(409).send("Product Already exists !!")
        }

        const movie = await Movie.create({
            movieId: movieId,
            movieName: movieName,
            yearReleased: yearReleased

        });

        // return res.status(200).json({
        //     message: "Ok",
        //     product: product
        // });

        return res.status(200).send("OK")



    } catch (err) {
        res.status(500).send('Internal server error')
    }



}

const deleteMovie = async (req, res) => {

    /**
        Write the code to delete the movie details from database
    */

}

module.exports = { getMovies, addMovie, deleteMovie };