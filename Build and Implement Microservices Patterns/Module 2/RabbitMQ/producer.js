const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, connection) => {
    if (err) {
        throw err;
    }
    connection.createChannel((error, channel) => {
        if (error) {
            throw error;
        }
        const QUEUE = 'testqueue'
        channel.assertQueue(QUEUE)
        var msg = 'hello'
        channel.sendToQueue(QUEUE, Buffer.from(msg))
        console.log(msg)
    })

    setTimeout(() => {
        connection.close()
        process.exit(0)
    }, 500)

})