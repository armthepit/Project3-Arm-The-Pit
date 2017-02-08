	import { SET_GENRES } from '../actions/browse';

   export default function genres(state = [], action = {}) {
    switch(action.type) {
      case SET_GENRES: 
      	return action.genres;
      default: return state;
    }
  }