const getRequestData = (req) => {
    // Write logic here to read the request body data
    return new Promise((resolve, reject) => {
        try {
            let body = ''

            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', () => {
                return resolve(body)
            })
        } catch (err) {
            return reject(err)
        }
    })
}

module.exports = getRequestData