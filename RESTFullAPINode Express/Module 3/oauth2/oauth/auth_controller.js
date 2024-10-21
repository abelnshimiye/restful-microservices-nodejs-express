const oauthService = require('./auth_service')

function oauthProcessor(code, done) {
    if (err) {
        done(err)
    } else {
        done(null, token)
    }
}

module.exports = { oauthProcessor }