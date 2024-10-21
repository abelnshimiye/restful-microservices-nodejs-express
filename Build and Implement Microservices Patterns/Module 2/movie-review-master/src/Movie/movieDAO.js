require('../dbconfig/dbfile')

//create async function saveMovie to save movie in database taking two parameters
//movie object and a callback
//return callback 

async function saveMovie(movie, done) {
    const data = await movie.save()
    done(undefined, data)
}



//create async function getMovieById to get movieId from database taking three parameters
//movie object, movieId and a callback
//return callback 

async function getMovieById(movie, movieId, done) {
    const data = await movie.findById(movieId);
    done(undefined, data)
}

module.exports = { saveMovie, getMovieById }