 const Validator = require('validator');
 const isEmpty = require('lodash/isEmpty');

var validateInput = function(data) {
	
   let errors = {};
 
   if (Validator.isEmpty(data.email)) {
     errors.email = 'This field is required';
   }
   if (!Validator.isEmail(data.email)) {
     errors.email = 'Email is invalid';
   }
   if (Validator.isEmpty(data.password)) {
     errors.password = 'This field is required';
   }
   if (Validator.isEmpty(data.passwordConfirmation)) {
     errors.passwordConfirmation = 'This field is required';
   }
   if (!Validator.equals(data.password, data.passwordConfirmation)) {
     errors.passwordConfirmation = 'Passwords must match';
   }
   if (Validator.isEmpty(data.usa)) {
     errors.usa = 'This field is required';
   }
 
   return {
     errors,
     isValid: isEmpty(errors)
   }
 }

  module.exports = validateInput;