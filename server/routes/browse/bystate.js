 const express = require('express');
 const mongoose = require('mongoose');
 const Promise = require('bluebird');

 let Usa = require('../../models/state');
 let router = express.Router();

 mongoose.Promise = Promise;

 router.get('/', function(req, res){
 	console.log('server');
    Usa.find({})
        .then(Usa => {
            console.log({ Usa });
            res.json( { Usa } );
        })
});

 module.exports = router;