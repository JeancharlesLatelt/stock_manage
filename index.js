'use strict';

const Hapi = require('hapi');
const Routes = require('./routes');
const Config = require('./config')
const User = require('./models/user').User;

const server = new Hapi.Server();
const plugin = {
    yar: {
        cookieOptions: {
            password: 'toto',
            isSecure: false
        }
    },
    travelogue: Config.server
};
server.pack.require(plugins, function (err) {
    if (err) {
        throw err;
    }
});
server.auth.strategy('passport', 'passport');
const Passport = server.plugin.travelogue.passport;
Passport.use(User.createStrategy());
Passport.serializeUser(User.serializeUser());
Passport.deserializeUser(User.deserializeUser());
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
