'use strict';
var colors = require("colors");

/*************************/

var configs = {
    development: {
        port: 8080,
        env_name: "developpement".underline.green,
    },
    production: {
        port:8443,
        env_name: "production".underline.red,
        ssl_active: true,
        ssl_conf: function () {
            return {
                key: require('fs').readFileSync('cert/server.key'),
                cert: require('fs').readFileSync('cert/server.crt')
            }
        }
    },
    default: {
        ssl_active: false,
        url_ws: '/apiMobileJSON.php'
    }
};

module.exports = {
    port: null,
    ssl_active: null,
    env_name: null,
    url_ws: null,
    ssl_conf: null,
    init: function (app) {
        var _env = configs["default"];

        for (var _p in _env) {
            this[_p] = _env[_p];
        }

        _env = configs[app.get('env')];

        for (var _p in _env) {
            this[_p] = _env[_p];
        }
    }
};
