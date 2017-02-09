	import { SET_ARTIST } from '../actions/artist';

   export default function artist(state = [], action = {}) {
    switch(action.type) {
      case SET_ARTIST: 
      	return action.artist;
      default: return state;
    }
  }