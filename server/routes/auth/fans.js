 const express = require('express');
 const commonValidations = require('../../shared/validations/fanlogin');
 const mongoose = require('mongoose');
 const Promise = require('bluebird');
 const bcrypt = require('bcryptjs');
 const isEmpty = require('lodash/isEmpty')

 let Fan = require('../../models/fans');
 let router = express.Router();

 mongoose.Promise = Promise;

 function validateInput(data, otherValidations) {
     let { errors } = otherValidations(data);
     return Fan.findOne({ email: data.email })
         .then(Fan => {
             if ( Fan == null) {
                 errors.email = 'Invalid email/password';
             } else {
                 if (bcrypt.compareSync(data.password, Fan.password_encrypt)) {
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
             res.json({ success: true })
         } else {
             res.status(400).json(errors);
         }
     })﻿
 });

 module.exports = router;
