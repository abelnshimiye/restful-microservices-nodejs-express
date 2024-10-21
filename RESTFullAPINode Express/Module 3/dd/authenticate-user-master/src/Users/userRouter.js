const router = require('express').Router()
const userController = require('./userController')

//import the required module

//This get method will get the user with token
router.get('/', (req, res) => {

        //retrive userdata from req claims


        //Calling controller findUser method return the error or result
        try {

                const userData = req.claims
                if (!userData.email) {
                        return res.status(400).send('User email not available')
                }



                userController.findUser(userData.email, (err, result) => {
                        // if (err) return res.status(400).send('Error getting the user')

                        // return res.status(200).json({ STATUS: 'OK', data: result })
                        // return res.status(200).send(result).json({ STATUS: 'OK' })

                        if (err) {
                                res.status(400).send('error getting the user', err)
                        } else {
                                res.status(200).send(result)
                        }



                })
        } catch (err) {
                return res.status(500).send('Internal server error')
        }


        //Calling controller findUser method return the error or result
        // userController.findUser(userdata.email,(err,result)=>{

        // })

})


module.exports = router