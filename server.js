'use strict';

var ssl = require('./lib/ssl.js');
var express = require('express');
var config = require('./lib/config.js');
var json_response = require('./lib/json_response.js');
var json_request = require('./lib/json_request.js');
var telemouv = require('./lib/telemouv.js');
var bodyParser = require('body-parser');
var colors = require("colors");

/********** configure express **************/
var app = express();
app.disable('x-powered-by');
app.use(bodyParser.json());

/*********** get configuration **************/
config.init(app);

/********* configure handlebars *************/
var handlebars = require('express3-handlebars')
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

/********** routing ******/
app.post(config.url_ws, function (req, res) {
    telemouv.clearParameters();
    console.log(colors.blue("----------------- " + colors.yellow(req.query.function) +" ----------------------------"));

    var _function = req.query.function || "apaLogin";
    var _id = req.query.id || 0;
    var _body = json_request.getBody(req.body);
    var _is_ok = json_request.checkRequest(_function, _body);
    var _response = json_response.getResponse(_is_ok, _function, _id);
    console.log("ok:" + _response);

    res.render('json', { layout: "json", response: _response });
});

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/login', function (req, res) {
    res.type('application/json');
    res.send('Meadowlark Travel');
});

/********* static *********/
app.use(express.static(__dirname + '/public'));

/*********** error handling ************/
// custom 404 page
app.use(function (req, res) {
    res.status(404);
    res.render('404');
});
// custom 500 page
app.use(function (err, req, res, next) {
    console.error(colors.yellow.underline(err.stack));
    res.status(500);
    res.render('500');
});

// start the server on port 8080
/*app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
            app.get('port') + '; press Ctrl-C to terminate.');
});*/

ssl.create(config, app, function () {
    console.log('Telemouv Fake Server started on ' + (config.ssl_active ? "https" : "http") + '://localhost:' +
        config.port + ' in ' + config.env_name + ' environement ; press Ctrl-C to terminate.');
});
