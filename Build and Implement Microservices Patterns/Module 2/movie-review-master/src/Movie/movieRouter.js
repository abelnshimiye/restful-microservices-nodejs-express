const express = require('express');
const router = express.Router()
const movieController = require('./movieController')
const Movie = require('./movieModel')

//import the require Module

//Post method will post movie in database
router.post('/', async (req, res) => {


        //retreive movie from the req body


        //calling SaveMovie on controller layer
        //return result and err


        try {
                const newMovie = new Movie({ ...req.body })

                movieController.saveMovie(newMovie, (err, result) => {

                        if (err) {
                                res.status(404).send('Error while saving Movie', err)
                        } else {
                                res.status(200).send(result)
                        }

                })

        } catch (error) {
                res.status(500).send('Internal Server Error', error)
        }




})

////Get method will get specific  movie from database
router.get('/:id', async (req, res) => {


        //retreive movieId from the req.params


        //calling getMovieById on controller layer
        //return result and err



        try {
                movieController.getMovieById(movie, movieId, (err, result) => {
                        if (err) {
                                res.status(400).send('Error getting movie', err)
                        } else {
                                res.status(200).send(result)
                        }
                })

        } catch (err) {
                res.status(500).send(err)
        }


})

module.exports = router