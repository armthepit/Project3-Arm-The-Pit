	import { BROWSE_STATES } from '../actions/browse';

   export default function states(state = [], action = {}) {
    switch(action.type) {
      case BROWSE_STATES: 
      	return action.states;
      default: return state;
    }
  }