const express = require('express')
const router = express.Router()
const authController = require('./authController')

//import the modules that are required

//This method post will regiater the use
router.post('/register', (req, res) => {


        //retrive name, email and password from request body

        //calling authController registeruser method return the error msg or the result
        authController.registerUser(userDetails, (err, result) => {

        })
})

//This method post will login the user once they are registered
router.post('/login', (req, res) => {

        const { email, password } = req.body
        if (!(email && password)) {
                return res.status(400).send('Required inputs are missing !!')
        }


        try {

                authController.loginUser({ email, password }, (err, result) => {
                        if (err) {
                                res.status(401).send({ error: "Invalid Credentials", err })
                        } else {
                                res.status(200).send({ STATUS: "OK", result })
                        }
                })

        } catch (error) {
                res.status(401).send({ error: "Unexpected error while login the user", error })

        }

})

module.exports = router