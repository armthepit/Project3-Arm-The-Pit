import { combineReducers } from 'redux';
 
 import flashMessages from './reducers/flashMessages';
 import auth from './reducers/auth';
 import countries from './reducers/countries';
 
 export default combineReducers({
   flashMessages,
   auth,
   countries
 });