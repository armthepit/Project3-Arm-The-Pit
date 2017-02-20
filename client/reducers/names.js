	import { BROWSE_NAMES } from '../actions/browse';

   export default function names(state = [], action = {}) {
    switch(action.type) {
      case BROWSE_NAMES: 
      	return action.names;
      default: return state;
    }
  }