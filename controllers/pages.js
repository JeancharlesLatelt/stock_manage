exports.index = {
  handler: function (request, reply) {
    reply('Index');
  }
}

exports.login = {
  handler: function (request, reply) {
    reply.file('./src/login.html');
  }
}
