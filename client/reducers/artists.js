	import { SET_ARTISTS } from '../actions/browse';

   export default function artists(state = [], action = {}) {
    switch(action.type) {
      case SET_ARTISTS: 
      	return action.artists;
      default: return state;
    }
  }