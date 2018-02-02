import { CREATE_LOGIN, UPDATE_CURRENT_EMAIL } from './actions';

const initialState = {
  email: ''
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case CREATE_LOGIN:
      return;
    case UPDATE_CURRENT_EMAIL:
    return {
      email: action.payload 
    }
    default:
      return state;
  }
}
