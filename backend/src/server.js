const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const server = express();

const cors = require('cors');
server.use(cors())


mongoose.connect('mongodb+srv://zadrel:1326752@cluster0-kpf6d.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(express.json());

server.use(routes)

server.listen(3333);
 