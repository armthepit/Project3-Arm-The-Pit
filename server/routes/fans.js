 const express = require('express');
 const commonValidations = require('../shared/validations/fansignup');
 const mongoose = require('mongoose');
 const Promise = require('bluebird');
 const bcrypt = require('bcryptjs');
 const isEmpty = require('lodash/isEmpty')

 let Fan = require('../models/fans');
 let router = express.Router();

 mongoose.Promise = Promise;

 function validateInput(data, otherValidations) {
     let { errors } = otherValidations(data);
     return Fan.findOne({ email: data.email })
         .then(Fan => {
            if (Fan != null) {
                 if (Fan.email === data.email) {
                     errors.email = 'Email is already registered';
                 }
            }     

             return {
                 errors,
                 isValid: isEmpty(errors)
             }
         });
 } 

 router.get('/:fan', function(req, res){
    Fan.findOne({'email': req.params.fan})
        .then(Fan => {
                console.log(Fan);
                res.json( Fan );
        })
});

 router.post('/', (req, res) => {
     validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
         if (isValid) {
             const { username, email, password, hometown, usa, country } = req.body;
             const password_encrypt = bcrypt.hashSync(password, 10);
             const newFan = new Fan({
                 username: username,
                 email: email,
                 password_encrypt: password_encrypt,
                 hometown: hometown,
                 state: usa,
                 country: country
             });

             newFan.save()
                 .then(newFan => res.json({ success: true }))
                 .catch(err => res.status(500).json({ error: err }));
         } else {
             res.status(400).json(errors);
         }
     })﻿
 });

 module.exports = router;