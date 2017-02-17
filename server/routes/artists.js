 const express = require('express');
 const commonValidations = require('../shared/validations/artistsignup');
 const mongoose = require('mongoose');
 const Promise = require('bluebird');
 const bcrypt = require('bcryptjs');
 const isEmpty = require('lodash/isEmpty')

 let Artist = require('../models/artists');
 let router = express.Router();

 mongoose.Promise = Promise;

 function validateInput(data, otherValidations) {
     let { errors } = otherValidations(data);
     return Artist.findOne({ email: data.email })
         .then(Artist => {
            if (Artist != null) {
                 if (Artist.email === data.email) {
                     errors.email = 'Email is already registered';
                 }
            }     

             return {
                 errors,
                 isValid: isEmpty(errors)
             }
         });
 } 

router.get('/:artist', function(req, res){
    Artist.findOne({'email': req.params.artist})
        .then(Artist => {
                console.log(Artist);
                res.json( Artist );
        })
});

 router.post('/', (req, res) => {
     validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
         if (isValid) {
             const { email, password, genre } = req.body;
             const password_encrypt = bcrypt.hashSync(password, 10);
             const newArtist = new Artist({
                 email: email,
                 password_encrypt: password_encrypt,
                 genre: genre
             });

             newArtist.save()
                 .then(newArtist => res.json({ success: true }))
                 .catch(err => res.status(500).json({ error: err }));
         } else {
             res.status(400).json(errors);
         }
     })﻿
 });

 module.exports = router;