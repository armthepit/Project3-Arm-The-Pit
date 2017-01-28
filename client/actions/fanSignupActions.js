import axios from 'axios';
 
 export function fanSignupRequest(userData) {
   return dispatch => {
     return axios.post('/api/fans', userData);
   }
 }