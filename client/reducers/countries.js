	import { BROWSE_COUNTRIES } from '../actions/browse';

   export default function countries(state = [], action = {}) {
    switch(action.type) {
      case BROWSE_COUNTRIES: 
      	return action.countries;
      default: return state;
    }
  }