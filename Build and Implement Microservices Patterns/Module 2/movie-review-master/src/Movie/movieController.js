
const movieService = require('./movieService')
//import Service layer

function saveMovie(movie, done) {

    //call service saveMovie function and pass the parameter
    movieService.saveMovie(movie, done)

}



function getMovieById(movie, movieId, done) {

    //call service getMovieById function and pass the parameter
    movieService.getMovieById(movie, movieId, done)


}

module.exports = { saveMovie, getMovieById }