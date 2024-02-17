const express = require('express')
const app = express()
const fs = require('fs')
const port = process.env.PORT || 3000

const dataURL = './data.json'


app.get( "/", ( req, res) => {
    res.end("Running")
})


app.get("/data", (req, res) => {

    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');

    fs.readFile( dataURL, ( err, data) => {
        if(!err){
            res.end(data);
        }else{
            res.end("Something wrong")
        }
    })

})



const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;