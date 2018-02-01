import { CREATE_ADDRESS, CREATE_CONTACT } from './actions';

export default function reduce(state = {}, action) {
  switch (action.type) {
    case CREATE_ADDRESS:
      return action.payload.data
    case CREATE_CONTACT:
      return action.payload.data
    default:
      return state;
  }
}
