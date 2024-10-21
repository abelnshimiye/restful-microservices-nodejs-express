const express = require('express');
const config = require("../config");
const router = express.Router();
const oauthCtrl = require("./auth.controller");

// redirects the login to consent authorization screen from github
router.get('/login', (req, res) => {
        res.redirect(`https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}`)
});


// Callback url to which github oauth code is sent 
router.get('/callback', (req, res) => {

        // Return the token in cookie
        // Data should be sent either in cookie or in session storage
        !req.query.code ? res.status(401).send('Unauthorized') : null
        try {
                oauthCtrl.oauthProcessor(req.query.code, (err, { user, token }) => {
                        if (err) return res.status(400).send('Bad Request')

                        res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 })
                        res.cookie('user', JSON.stringify(user), { httpOnly: true, secure: true, maxAge: 3600000 })

                        return res.redirect(`http://localhost:3000?token=${token}`)
                })
        } catch (err) {
                return res.status(500).send('Internal server error')
        }

});

module.exports = router;