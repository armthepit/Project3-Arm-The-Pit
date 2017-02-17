import axios from 'axios';
 
 export function fanSignupRequest(fanData) {
   return dispatch => {
     return axios.post('/api/fans', fanData);
   }
 }

export function isFanExists(fan) {
   return dispatch => {
     return axios.get(`/api/fans/${fan}`);
   }
 }