let Hapi = require('hapi');
let server = Hapi.createServer('0.0.0.0', 8080);

server.route({
  method: 'GET',
  path: '/',
  handler: function(req, reply) {
    reply('test');
  }
});
server.start();
