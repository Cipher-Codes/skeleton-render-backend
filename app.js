const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get( "/", ( req, res) => {
    res.end("Running")
})

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;