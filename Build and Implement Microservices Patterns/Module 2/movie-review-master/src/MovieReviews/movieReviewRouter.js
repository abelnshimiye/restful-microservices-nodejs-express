const express = require('express');

const router = express.Router()

const mongoose = require('mongoose')

const axios = require('axios')

require('../dbconfig/dbfile')

const Review = require('./movieReviewModel')


//import require module

//This Post will save MovieReview in database

router.post('/', async (req, res) => {



  //Create newMovieReview object from userId and movieId 



  //call the save on newMovieReview object 


  //write if else condition

  try {
    const newReview = new Review({
      movieId: mongoose.Types.ObjectId(req.body.movieId),
      userId: mongoose.Types.ObjectId(req.body.userId),
    })

    const data = await newReview.save();

    if (data) res.status(200).send('Success')


  } catch (err) {
    console.log('error', err)
  }


})


//This get will retreive userid and its movie data
router.get('/:id', (req, res) => {



  //call axios get for User service


  //call axios get for Movie service


  //return Json object containg userName, MovieName and MovieDirector

  Review.findById(req.params.id).then((Review) => {

    if (Review) {
      axios.get(`http://localhost:4000/user/${Review.userId}`).then((response) => {

        let userObject = {
          userName: response.data.userName,
        }

        axios.get(`http://localhost:5000/movie/${Review.movieId}`).then((response) => {
          userObject.movieName = response.data.movieName
          userObject.directorName = response.data.directorName
          userObject.MovieReview = response.data.MovieReview
          console.log(": In review", userObject)

          res.json(userObject)
        })


      })

    } else {
      res.status(404).send('review not found')
    }

  }).catch((err) => {
    res.status(500).send('Internal Server Error !', err);
  });





})







module.exports = router
