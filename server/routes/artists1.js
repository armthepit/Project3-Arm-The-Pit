 const express = require('express');
 const commonValidations = require('../shared/validations/artistsignup');
 const mongoose = require('mongoose');
 const Promise = require('bluebird');
 const bcrypt = require('bcryptjs');
 const isEmpty = require('lodash/isEmpty');
 const lowerCase = require('lodash/lowercase');

 let Artist = require('../models/artists');
 let CountryModel = require('../models/country');
 let GenreModel = require ('../models/genre');
 let NameModel = require('../models/name');
 let StateModel = require('../models/state');

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
             let { email, password, genre, name, hometown, state,country, recordLabel, bio, bandMembers, artistWebsite, facebook, reverbnation, soundCloud, twitter, youtubeChannel, otherWebsite1, otherWebsite2, representative, repEmail, repPhone } = req.body;
             let sortName = lowerCase(name.charAt(0)); 
             let artistUrl = lowerCase(name.replace(/\s+/g, ''));
             const password_encrypt = bcrypt.hashSync(password, 10);
             const newArtist = new Artist({
                 email: email,
                 password_encrypt: password_encrypt,
                 genre: genre,
                 name: name,
                 sortName: sortName,
                 artistUrl: artistUrl,
                 hometown:hometown,
                 state: state,
                 country: country,
                 recordLabel:recordLabel,
                 bio:bio,
                 bandMembers:bandMembers,
                 artistWebsite: artistWebsite,
                 facebook: facebook,
                 reverbnation: reverbnation,
                 soundCloud: soundCloud,
                 twitter: twitter,
                 youtubeChannel: youtubeChannel,
                 otherWebsite1: otherWebsite1,
                 otherWebsite2: otherWebsite2,
                 representative: representative,
                 repEmail: repEmail,
                 repPhone: repPhone
             });

             if ( country != "United States") {
                state = "";
             };

             newArtist.save()
                 .then(
                    console.log('Artist Saved')
                    // newArtist => res.json({ success: true })
                 )
                 .catch(err => res.status(500).json({ error: err }));

              GenreModel.findOneAndUpdate({ "title": genre }, {$inc:{"numberArtists":1}}, function(error, found) {
                if (error) {
                  console.log(error);
                }
                else {
                  console.log('Genre Found '+ found);
                }
              });

              NameModel.findOneAndUpdate({ "nameUrl": sortName }, {$inc:{"numberArtists":1}}, function(error, found) {
                if (error) {
                  console.log(error);
                }
                else {
                  console.log('Name Found '+ found);
                }
              });

              if(country == "United States") {
                  StateModel.findOneAndUpdate({ "title": state }, {$inc:{"numberArtists":1}}, function(error, found) {
                    if (error) {
                      console.log(error);
                    }
                    else {
                      console.log('State Found '+ found);
                    }
                  });                
              } else {
                  CountryModel.findOneAndUpdate({ "title": country }, {$inc:{"numberArtists":1}}, function(error, found) {
                    if (error) {
                      console.log(error);
                    }
                    else {
                      console.log('Country Found '+ found);
                    }
                  });                
              }

            res.json({ success: true })
         } else {
             res.status(400).json(errors);
         }
     })
 });

 module.exports = router;