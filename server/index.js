// Required NPM Packages
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

var app = express();


var publicpath = path.resolve(__dirname, '../public');
console.log(publicpath);

// Public Settings
app.use(express.static(publicpath));
var port = process.env.PORT || 3000;

// Database
require("./config/connection");

// BodyParser Settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

//Routes
// var routes = require('../controllers/news.js');
// app.use('/',routes);
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));

});

//Port
app.listen(port, function() {
    console.log("Listening on port:" + port);
});
