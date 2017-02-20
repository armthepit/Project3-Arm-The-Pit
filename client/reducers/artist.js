	import { VIEW_ARTIST } from '../actions/artist';

   export default function artist(state = [], action = {}) {
    switch(action.type) {
      case VIEW_ARTIST: 
      	return action.artist !== undefined ? action.artist : null;;
      default: return state;
    }
  }