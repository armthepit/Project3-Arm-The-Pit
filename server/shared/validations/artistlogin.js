 const Validator = require('validator');
 const isEmpty = require('lodash/isEmpty');

 var validateInput = function(data) {

     let errors = {};

     if (!Validator.isEmail(data.email)) {
         errors.email = 'This field is required.';
     }
     if (Validator.isEmpty(data.password)) {
         errors.password = 'This field is required.';
     }

     return {
         errors,
         isValid: isEmpty(errors)
     }
 }

   module.exports = validateInput;