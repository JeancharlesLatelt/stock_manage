'use strict';

const Boom = require('boom');

exports.register = function(server, options, next) {
  const db = server.app.db;
  server.route({
    method: 'GET',
    path: '/login',
    handler: function (req, res) {
      db.user.find((err, docs) => {
        if (err) {
          return reply()
        }
      })
    }
  })
  return next();
};
exports.register.attributes = {
  name: 'routes-login'
};
