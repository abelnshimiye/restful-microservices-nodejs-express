getRequestData = (req) => {
  return new Promise((resolve, reject) => {
    // Write logic to read the request body data here
    try {

      let body = ''

      req.on('data', (chunk) => {
        body += chunk.toString()
      })

    } catch (err) {
      return reject(err);
    }

  });
}

module.exports = getRequestData