'use strict';
module.exports = {
    create: function (config, app, cb) {
        var server;
        if (config.ssl_active) {
            server = require('https').createServer(config.ssl_conf(), app);
        }else {
            server = require('http').createServer(app);
        }
        server.listen(config.port, cb);
    }
};