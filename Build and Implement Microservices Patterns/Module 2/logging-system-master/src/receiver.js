const amqp = require("amqplib/callback_api");
//create conn
const receiveFromRabbitMQ = () => {
  amqp.connect("amqp://localhost", (err, connection) => {
    // Capture any error if present
    // Create a channel to send info to queue
    // Create a fanout exchange within the channel
    // Bind the exchange to the queue

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

  });
};

module.exports = { receiveFromRabbitMQ };
