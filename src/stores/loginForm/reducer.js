import { CREATE_LOGIN } from './actions';

const initialState = {
  email: ''
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case CREATE_LOGIN:
      return {
        email: action.payload 
      }
    default:
      return state;
  }
}
