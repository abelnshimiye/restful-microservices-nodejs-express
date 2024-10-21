// Import the axios library
const axios = require('axios')
const fs = require('fs')

const getMovies = (done) => {
  // get all movies
  done(null, JSON.stringify(require('../data/movies.json')))
}

const getMoviesById = (movieId, done) => {
  // get movie by id

  const result = require('../data/movies.json').movies.filter((m) => m.id === movieId).pop()
  done(null, JSON.stringify(result))

}

const saveMovie = async function (newMovie, done) {
  // save the details of a movie read from the request body
  if (require('../data/movies.json').movies[newMovie.id]) done('Request movie already exists..!', null)

  require('../data/movies.json').movies.push(newMovie)

  await fs.promises.writeFile('./data/movies.json', JSON.stringify(require('../data/movies.json')), (err) => {
    console.log(err)
  })
  done(null, JSON.stringify(require('../data/movies.json').movies))


}

const updateMovie = async function (movieId, updateData, done) {
  // update movie details of a specific movie

  if (!require('../data/movies.json').movies[movieId]) done("Requested movie doesn't exist..!", null)

  const updateMovies = require('../data/movies.json').movies.map((movie) =>
    movie.id === movieId ? { ...movie, ...updateData, id: movie.id } : movie
  )

  await fs.promises.writeFile('./data/movies.json', JSON.stringify({ movies: updateMovies }), (err) => {
    console.log(err)
  })
  return done(null, JSON.stringify({ movies: updateMovies }))


}

const deleteMovieById = async function (movieId, done) {
  // delete a specific movie 

  if (!require('../data/movies.json').movies[movieId]) done("Requested movie doesn't exist..!", null)

  const updatedMovies = require('../data/movies.json').movies.filter((m) => m.id !== movieId)

  await fs.promises.writeFile('./data/movies.json', JSON.stringify({ movies: updatedMovies }), (err) => {
    console.log(err);
  })

  done(null, JSON.stringify({ movies: updatedMovies }))


}



module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
}
