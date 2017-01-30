 const express = require('express');
 const validateInput = require('../shared/validations/fansignup');

let router = express.Router();

 router.post('/', (req, res) => {
   const { errors, isValid } = validateInput(req.body);
 
   if (isValid) {
     res.json({ success: true });
   } else {
      res.status(400).json(errors);
    }
 });

  module.exports = router;