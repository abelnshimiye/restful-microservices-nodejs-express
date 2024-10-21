const express = require('express');
const router = express.Router()
const userController = require('./userController')
const User = require('./userModel')

//import the require Module

//Post method will post user in database
router.post('/', async (req, res) => {


        //retreive user from the req body


        //calling saveUser on controller layer
        //return result or err


        try {
                const newUser = new User([...req.body])

                userController.saveUser(newUser, (err, result) => {
                        if (err) {
                                res.status(404).send('Error while saving user', err)
                        } else {
                                res.status(200).send(result)
                        }

                })
        } catch (err) {
                res.status(500).send("Internal Server Error", err)
        }


})

////Get method will get specific  user from database
router.get('/:id', async (req, res) => {

        //retreive userId from the req.params


        //calling getUserById on controller layer
        //return result or err


        try {

                userController.getUserById(user, userId, (err, result) => {

                        if (err) {
                                res.status(400).send('error getting User', err)
                        } else {
                                res.status(200).send(err)
                        }


                })


        } catch (err) {
                res.status(500).send(err)
        }


})

module.exports = router