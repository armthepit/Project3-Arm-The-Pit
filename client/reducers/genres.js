	import { BROWSE_GENRES } from '../actions/browse';

   export default function genres(state = [], action = {}) {
    switch(action.type) {
      case BROWSE_GENRES: 
      	return action.genres;
      default: return state;
    }
  }