import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	}
}
 
 export function login(data) {
   return dispatch => {
     return axios.post('/api/auth/artists', data).then(res => {
     	const token = res.data.token;
     	localStorage.setItem('jwtToken', token);
     	setAuthorizationToken(token);
     	 dispatch(setCurrentArtist(jwt.decode(token)));
     });
   }
 }