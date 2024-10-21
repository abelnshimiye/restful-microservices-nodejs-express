const express = require('express')
const router = express.Router()
const authController = require('./authController')

router.post('/register', (req, res) => {

    try {

        const { name, email, password } = req.body

        if (!(name, email, password)) {
            return res.status(400).send('Required inputs are missing')
        }

        const userDetails = {
            name, email, password
        }

        authController.registerUser(userDetails, (err, result) => {
            if (err) {
                return res.status(400).send({ error: 'User Already Exists' })
            } else {
                res.status(201).send(result)
            }
        })

    } catch (err) {
        res.status(400).send({ error: 'Unexpected error while registering the user' })
    }
})

router.post('/login', (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            return res.status(400).send('Required inputs are missing !!')
        }
        authController.loginUser({ email, password }, (err, result) => {
            if (err) {
                res.status(401).send({ error: "Invalid Credentials", err })
            } else {
                res.status(200).send(result)
            }
        })

    } catch (err) {
        res.status(500).send({ error: "Unexpected error while registering the user", err })

    }
})

module.exports = router