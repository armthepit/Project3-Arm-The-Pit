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
     return Artist.find({ email: data.email })
         .then(Artist => {
             if (Artist.length) {
                 if (Artist[0].email === data.email) {
                     errors.email = 'Email is already registered';
                 }
             }
             return {
                 errors,
                 isValid: isEmpty(errors)
             }
         });
 }

 router.post('/', (req, res) => {
     validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
         if (isValid) {
             const { email, password, genre } = req.body;
             const password_encrypt = bcrypt.hashSync(password, 10);
             const newArtist = new Artist({
                 email: email,
                 password: password_encrypt,
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