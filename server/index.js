// Required NPM Packages
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const artists = require('./routes/artists');
const artistsAuth = require('./routes/auth/artists');
const fans = require('./routes/fans');
const fansAuth = require('./routes/auth/fans');
const artist = require('./routes/artist/artist.js');
const byArtist = require('./routes/browse/byartist');
const byCountry = require('./routes/browse/bycountry');
const byGenre = require('./routes/browse/bygenre');
const byName = require('./routes/browse/byname');
const byState = require('./routes/browse/bystate');



// BodyParser Settings
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
// 	extended: false
// }));

app.use('/api/artists', artists);
app.use('/api/auth/artists', artistsAuth);
app.use('/api/fans', fans);
app.use('/api/auth/fans', fansAuth);
app.use('api/artist/', artist);
// app.use('/api/browse/byartist', byArtist);
// api/browse/byartist/${browseId}/${searchId}
app.use('api/browse/byartist/browseId/searchId', byArtist);
app.use('/api/browse/bycountry', byCountry);
app.use('/api/browse/bygenre', byGenre);
app.use('/api/browse/byname', byName);
app.use('/api/browse/bystate', byState);

const publicpath = path.resolve(__dirname, '../public');
console.log(publicpath);

// Public Settings
app.use(express.static(publicpath));
const port = process.env.PORT || 3000;

// Database
// require("./config/connection");
// mongoose.connect(MONGODB_URI, function(err) {
 mongoose.connect("mongodb://heroku_50wwfh4l:8ir3h1ulv7nrl0m2i6ummdunn4@ds149059.mlab.com:49059/heroku_50wwfh4l", function(err) {
	if(err) throw err;
	console.log('database connected');
});

//Routes
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));

});

//Port
app.listen(port, function() {
    console.log("Listening on port:" + port);
});