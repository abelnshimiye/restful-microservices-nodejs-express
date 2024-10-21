
//import axios module
const axios = require('axios')

//After starting the JSOn server check the port on which is running accordingly change 
//the port in url given below

//This method will get all movies from json server
const getMovies = async (done) => {
  // This url can be used - axios.get("http://localhost:3000/movies")
  const { data } = await axios.get("http://localhost:3000/movies")

  if (!data) return done('No data found')

  return done(null, data)

}

//This method will get specific movie id from json server
const getMovieById = async (movieId, done) => {
  // This url can be used- axios.get(`http://localhost:3000/movies/${movieId}`)
  const { data } = await axios.get(`http://localhost:3000/movies/${movieId}`, { params: { id: movieId } })
  return done(null, data)

}
//This method will save Movie details in Json server
const saveMovieDetails = async (movieDetails, done) => {
  //This url can be used  -  axios.post(`http://localhost:3000/movies`, movieDetails)

  if (movieDetails.id === undefined) return done('Movie id is required')

  try {
    const { data } = await axios.post(`http://localhost:3000/movies`, movieDetails)
    return done(null, data)

  } catch (err) {
    return done('Error while saving movie details')
  }

}

//This method will update MovieDetails in Json Server
const updateMovieDetails = async (movieId, movieDetails, done) => {
  //This url can be used - axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails)

  if (movieDetails.id === undefined) return done('Movie id is required')

  try {
    const { data } = await axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails)
    return done(null, data)

  } catch (err) {
    return done('Error while updating movie details')
  }

}

//This method will delete specific movie from Json Server
const deleteMovieById = async (movieId, done) => {
  //This url can be used -  axios.delete(`http://localhost:3000/movies/${movieId}`)

  try {
    await axios.delete(`http://localhost:3000/movies/${movieId}`)
    return done(null, 'Movie deleted successfully')

  } catch (err) {
    return done('Error while deleting movie details')
  }

}

module.exports = {
  getMovies, getMovieById, saveMovieDetails, deleteMovieById, updateMovieDetails
}
