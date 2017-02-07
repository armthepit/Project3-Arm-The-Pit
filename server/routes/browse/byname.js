 const express = require('express');
 const mongoose = require('mongoose');
 const Promise = require('bluebird');

 let Name = require('../../models/name');
 let router = express.Router();

 mongoose.Promise = Promise;

 router.get('/', function(req, res){
 	console.log('server');
    Name.find({})
        .then(Name => {
            console.log({ Name });
            res.json( { Name } );
        })
});

 module.exports = router;