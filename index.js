'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');
const server = new Hapi.Server();

server.connection({
    port: 8080
});
server.app.db = mongojs('stock_manage', ['user']);
server.register([
    require('./routes/login.js')
], (err) => {
    if (err) {
        throw err;
    }
    server.start((err) => {
        console.log('Server running at:', server.info.uri);
    });
});
