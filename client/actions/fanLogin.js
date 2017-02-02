import axios from 'axios';
 
 export function login(data) {
   return dispatch => {
     return axios.post('/api/auth/fans', data);
   }
 }