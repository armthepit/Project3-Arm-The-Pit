 const express = require('express');
 const mongoose = require('mongoose');
 const Promise = require('bluebird');

 let Artist = require('../../models/artists');
 let router = express.Router();

 mongoose.Promise = Promise;

 router.get('/', function(req, res){
 	console.log('server');
    Artist.find({})
        .then(Artist => {
            console.log({ Artist });
            res.json( { Artist } );
        })
});

 module.exports = router;