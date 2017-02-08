	import { SET_STATES } from '../actions/browse';

   export default function states(state = [], action = {}) {
    switch(action.type) {
      case SET_STATES: 
      	return action.states;
      default: return state;
    }
  }