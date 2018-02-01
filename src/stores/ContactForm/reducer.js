import { CREATE_CONTACT } from './actions';

export default function reduce(state = {}, action) {
  switch (action.type) {
    case CREATE_CONTACT:
      return action.payload.data
    default:
      return state;
  }
}
