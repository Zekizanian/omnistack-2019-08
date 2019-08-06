const express = require('express');

const server = express();

//GET, POST, PUT, DELETE
server.get('/', (request,response) => {
    return response.json({message:`Hello ${request.query.name}`})
});

server.listen(3333);