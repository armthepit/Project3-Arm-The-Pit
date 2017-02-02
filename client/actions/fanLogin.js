import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
 
 export function login(data) {
   return dispatch => {
     return axios.post('/api/auth/fans', data).then(res => {
     	const token = res.data.token;
     	localStorage.setItem('jwtToken', token);
     	setAuthorizationToken(token);
     });
   }
 }