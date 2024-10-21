//Import the necessary dependencies
const http = require('http')
// Define a prot at which the server will run
const PORT = process.env.PORT || 6000

const productsService = require("./productsService");
const getRequestData = require('./utils');

const server = http.createServer(async (req, res) => {
  // Get all products

  if (req.url === '/api/v1/products' && req.method === 'GET') {
    const products = productsService.getProducts()
    res.writeHead(200, {
      'content-type': 'application/json',
    })
    res.end(products)

  } else if (req.url.match(/\/api\/v1\/product\/([0-9]+)/) && req.method === 'GET') {
    const id = +req.url.split('/')[4]

    productsService.getProductsById(id, (err, data) => {
      if (err) {
        res.writeHead(400, {
          'content-type': 'application/json',
        })
        res.end(JSON.stringify(err))
      } else {
        res.writeHead(200, {
          'content-type': 'application/json',
        })
        res.end(data)
      }
    })
  } else if (req.url === '/api/v1/product' && req.method === 'POST') {
    const data = await getRequestData(req)

    productsService.saveProduct(JSON.parse(data), (err, data) => {
      if (err) {
        res.writeHead(400, {
          'content-type': 'application/json',
        })
        res.end(JSON.stringify(err))
      } else {
        res.writeHead(200, {
          'content-type': 'application/json',
        })
        res.end(data)
      }
    })
  } else if (req.url === '/api/v1/product' && req.method === 'PUT') {
    let data = await getRequestData(req)
    data = JSON.parse(data)
    productsService.updateProduct(data.id, data.product, (err, data) => {
      if (err) {
        res.writeHead(400, {
          'content-type': 'application/json',
        })
        res.end(JSON.stringify(err))
      } else {
        res.writeHead(200, {
          'content-type': 'application/json',
        })
        res.end(data)
      }
    })
  } else if (req.url.match(/\/api\/v1\/product\/([0-9]+)/) && req.method === 'DELETE') {
    const id = +req.url.split('/')[4]
    productsService.deleteProduct(id, (err, data) => {
      if (err) {
        res.writeHead(400, {
          'content-type': 'application/json'
        })
        res.end(JSON.stringify(err))
      } else {
        res.writeHead(200, {
          'content-type': 'application/json'
        })
        res.end(data)
      }
    })
  }

});

// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})

server.on('error', (err) => {
  console.log(err)
})