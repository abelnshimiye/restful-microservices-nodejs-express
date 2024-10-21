const event = require('events')

const fs = require('fs')

const eventEmitter = new event.EventEmitter();

eventEmitter.addListener('updateResult', () => {
    console.log("when updateResult event gets involke call this function")
})

fs.readFile('test.txt', 'utf8', (err, data) => (eventEmitter.emit('updateResult')))