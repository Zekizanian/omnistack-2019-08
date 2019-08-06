const express = require('express');

const routes = express.Router();

//GET, POST, PUT, DELETE
routes.get('/', (request,response) => {
    return response.json({message:`Hello ${request.query.name}`})
});

routes.post('/devs' , (request, response)=> {
    console.log(request.body)
    return response.json({ok:true})
});


module.exports = routes;