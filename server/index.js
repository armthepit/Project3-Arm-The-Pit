// Required NPM Packages
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const artists = require('./routes/artists');
const fans = require('./routes/fans');

// BodyParser Settings
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
// 	extended: false
// }));

app.use('/api/artists', artists);
app.use('/api/fans', fans);

const publicpath = path.resolve(__dirname, '../public');
console.log(publicpath);

// Public Settings
app.use(express.static(publicpath));
const port = process.env.PORT || 3000;

// Database
require("./config/connection");

//Routes
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));

});

//Port
app.listen(port, function() {
    console.log("Listening on port:" + port);
});
