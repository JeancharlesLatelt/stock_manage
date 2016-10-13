'use strict';

const Hapi = require('hapi');
const Routes = require('./routes');

const server = new Hapi.Server();
server.connection({ port: 8080 });

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }
    server.route(Routes.endpoints);
});
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
