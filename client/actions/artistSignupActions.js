import axios from 'axios';
 
 export function artistSignupRequest(userData) {
   return dispatch => {
     return axios.post('/api/artists', userData);
   }
 }