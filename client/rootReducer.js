import { combineReducers } from 'redux';
 
 import flashMessages from './reducers/flashMessages';
 import auth from './reducers/auth';
 import artists from './reducers/artists';
 import countries from './reducers/countries';
 import genres from './reducers/genres';
 import names from './reducers/names';
 
 export default combineReducers({
   flashMessages,
   auth,
   artists,
   countries,
   genres,
   names
 });