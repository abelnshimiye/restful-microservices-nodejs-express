const http = require('http')
const PORT = process.env.PORT || 5000
const todos = require('./todos')
const getRequestsData = require('./utils')
const server = http.createServer(async (request, response) => {
    if (request.url === '/api/v1/todos' && request.method === 'GET') {
        response.writeHead(200, {
            'content-type': 'application/json'
        })
        response.end(JSON.stringify(todos))
    }
    else if (request.url === '/api/v1/todos' && request.method === 'POST') {
        let req_body = await getRequestsData(request)
        todos.push(JSON.parse(req_body))
        response.writeHead(201, {
            'content-type': 'application/json'
        })

        response.end(JSON.stringify(JSON.parse(req_body)))

    } else if (request.url.match(/\/api\/todos\/([0-9])/) && request.method === 'DELETE') {
        const id = request.url.split("/")[4]
        const todo = todos.find(t => t.id === parseInt(id))
        if (!todo) {
            response.writeHead(404, {
                'content-type': 'application/json'
            })
            response.end('No todo with the specified id is suitable')
        }
        else {
            const index = todos.indexOf(todo)
            todos.split(index, 1)
            response.writeHead(200, {
                'content-type': 'application/json'
            })
            response.end('Deleted the specified todo')
        }
    }
})

server.listen(PORT, () => {
    console.log('Server is ready and runninf on Port', PORT)
})

server.on('error', (error) => {
    if (error.code = 'EADRINUSE') {
        Console.LOG('Port already in use')
    }
})