import axios from 'axios';
 
 export function artistSignupRequest(artistData) {
   return dispatch => {
     return axios.post('/api/artists', artistData);
   }
 }

export function isArtistExists(artist) {
   return dispatch => {
     return axios.get(`/api/artists/${artist}`);
   }
 }