	import { BROWSE_ARTISTS } from '../actions/browse';

   export default function artists(state = [], action = {}) {
    switch(action.type) {
      case BROWSE_ARTISTS: 
      	return action.artists;
      default: return state;
    }
  }