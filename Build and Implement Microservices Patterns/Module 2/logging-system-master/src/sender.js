const amqp = require('amqplib/callback_api')
//create conn
const sendToRabbitMQ = (msg) => {

    // Create a channel to send info to queue

    // Check if queue is present or not/assert queue

    // Write a setTimeout function to exit after the message is sent

    // return true if the message is sent successfully    

    amqp.connect('amqp://localhost', (err, connection) => {

        if (err) {
            throw err
        }

        connection.createChannel((error, channel) => {
            if (error) {
                throw error;
            }

            const QUEUE = 'testqueue'
            channel.assertQueue(QUEUE)

            channel.consume(QUEUE, (msg) => {
                console.log(msg.content.toString())
            }, {
                noAck: true
            })
        })


    })


    return true
}

module.exports = { sendToRabbitMQ }

