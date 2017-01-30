 const express = require('express');
 const validateInput = require('../shared/validations/fansignup');
 const bcrypt = require('bcryptjs');

 let Fans = require('../models/fans');

let router = express.Router();
 
 router.post('/', (req, res) => {
   const { errors, isValid } = validateInput(req.body);
 
   if (isValid) {
     const { email, password, usa } = req.body;
     const password_encrypt = bcrypt.hashSync(password, 10);
	Fans.create({
		email: email,
		password_encrypt: password_encrypt,
		state: usa
	}, function(err, docs){    
		if(err){
			res.status(400).json(err);			
		} else {
			res.json({ success: true });
		}
	});
   } else {
      res.status(400).json(errors);
    }
 });
 
 module.exports = router;