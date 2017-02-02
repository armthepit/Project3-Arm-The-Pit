 const express = require('express');
 const commonValidations = require('../../shared/validations/artistlogin');
 const mongoose = require('mongoose');
 const Promise = require('bluebird');
 const bcrypt = require('bcryptjs');
 const isEmpty = require('lodash/isEmpty')
 const jwt = require('jsonwebtoken');
 const config = require('../../../server/config/jwt')

 let Artist = require('../../models/artists');
 let router = express.Router();

 mongoose.Promise = Promise;

 function validateInput(data, otherValidations) {
     let { errors } = otherValidations(data);
     return Artist.findOne({ email: data.email })
         .then(Artist => {
             if (Artist == null) {
                 errors.email = 'Invalid email/password';
             } else {
                 if (bcrypt.compareSync(data.password, Artist.password_encrypt)) {
                     console.log('password match');
                 } else {
                     errors.email = 'Invalid email/password';
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
                console.log(Artist.email);
             const token = jwt.sign({
                 id: Artist._id,
                 email: Artist.email
             }, config.jwtSecret);
             res.status(200).json({token});
         } else {
             res.status(400).json(errors);
         }
     })﻿
 });

 module.exports = router;
