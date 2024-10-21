const express = require('express')
const { route } = require('../authentication')
const router = express.Router()

const userController = require('./userController')

router.get('/', (req, res) => {
    try {
        const userdata = req.claims
        console.log(claims)
        if (!userdata.email) {
            return res.send(400).send('user email not available')
        }

        userController.findUser(userdata.email, (err, result) => {
            if (err) {
                res.status(400).send('error getting the user', err)
            } else {
                res.status(200).send(result)
            }
        })

    } catch (err) {
        res.status(500).send({ error: 'unexpected error try after sometime', err })
    }
})

module.exports = router