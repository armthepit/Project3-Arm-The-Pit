// Required NPM Packages
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var artists = require('./routes/artists');
var fans =  require('./routes/fans');

var app = express();
var mongoose =require( 'mongoose');

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

app.use('/api/artists', artists);
app.use('/api/fans', fans);

//Routes
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));

});


//Port
app.listen(port, function() {
    console.log("Listening on port:" + port);
});
