 const express = require('express');
 const mongoose = require('mongoose');
 const Promise = require('bluebird');

 let Genre = require('../../models/genre');
 let router = express.Router();

 mongoose.Promise = Promise;

 router.get('/', function(req, res){
 	console.log('server');
    Genre.find({})
        .then(Genre => {
            console.log({ Genre });
            res.json( { Genre } );
        })
});

 module.exports = router;