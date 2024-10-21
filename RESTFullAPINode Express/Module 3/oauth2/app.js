const express = require('express');
const path = require('path');
const dataFormat = require('data-format');
const app = express();
const morgan = require('morgan');
const config = require("./config")
const oauthrouter = require('./oauth')
//  useful for logging the requests reaching to this server
morgan.token('time', () => dataFormat.asString(dateFormat.ISO8601_FORMAT, new Date()));
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'))
})
app.use('/oauth', oauthrouter)

app.listen(config.PORT, () => {
    console.log(`App listening on port ${config.PORT}`);
});

app.use((req, res) => {
    console.error(`Request resources ${req.method} ${req.url} not found ..!`);
    res.status(404).send("Resource not founf..!");
})