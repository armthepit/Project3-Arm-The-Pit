 const express = require('express');
 const validateInput = require('../shared/validations/artistsignup');
 const mongoose = require('mongoose');
 const Promise = require('bluebird');
 const bcrypt = require('bcryptjs');

 let Artists = require('../models/artists');
 

let router = express.Router();
 
 router.post('/', (req, res) => {
   const { errors, isValid } = validateInput(req.body);
 
   if (isValid) {
   	// res.json({ success: true });
     const { email, password, genre } = req.body;
     const password_encrypt = bcrypt.hashSync(password, 10);
	Artists.create({
		email: email,
		password_encrypt: password_encrypt,
		genre: genre
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