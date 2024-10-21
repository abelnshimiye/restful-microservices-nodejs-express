// Import the required dependencies
const http = require("http");
const moviesService = require("./moviesService");
const getRequestData = require("./utils");

// Define the port at which the application will run
const PORT = process.env.PORT || 5000;

// Define the server
const server = http.createServer(async (req, res) => {
  if (req.url === '/api/movies' && req.method === 'GET') {
    //  get all movies
    moviesService.getMovies((err, data) => {
      if (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        console.log(err)
        res.end(err)
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(data)
      }
    })



  } else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === 'GET') {
    // Get a movie with specificatyion id 
    const id = +req.url.split('/')[3]
    moviesService.getMoviesById(id, (err, data) => {
      if (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(err)
      }
      else {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(data)
      }
    })



  } else if (req.url === '/api/movies' && req.method === 'POST') {
    // save movie details
    const data = await getRequestData(req)

    moviesService.saveMovie(JSON.parse(data), (err, data) => {
      if (err) {

        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(err)
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(data)
      }

    })



  } else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === 'PUT') {
    // update a specific movie
    const id = +req.url.split('/')[3]
    const data = await getRequestData(req)

    moviesService.updateMovie(id, JSON.parse(data), (err, data) => {
      if (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(err)
      }
      else {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(data)

      }
    })



  } else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === 'DELETE') {
    // delete a specific movie

    const id = +req.url.split('/')[3]
    moviesService.deleteMovieById(id, (err, data) => {
      if (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(err)
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(data)
      }
    })


  }


});
// listen to the server on the specified port
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
server.on("error", (error) => {
  if (error.code === "EADRINUSE") {
    console.log("Port already in use");
  }
});
