
const movieDao = require('./movieDAO')
//import DAO layer

function saveMovie(movie, done) {

    //call DAO saveMovie function and pass the parameter
    movieDao.saveMovie(movie, done)

}



function getMovieById(movie, movieId, done) {

    //call DAO getMovieById function and pass the parameter
    movieDao.getMovieById(movie, movieId, done)


}

module.exports = { saveMovie, getMovieById }