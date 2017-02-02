import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
 
 export function login(data) {
   return dispatch => {
     return axios.post('/api/auth/artists', data).then(res => {
     	const token = res.data.token;
     	localStorage.setItem('jwtToken', token);
     	setAuthorizationToken(token);
     	console.log(jwt.decode(token))
     });
   }
 }