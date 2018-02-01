import { CREATE_ADDRESS } from './actions';

export default function reduce(state = {}, action) {
  switch (action.type) {
    case CREATE_ADDRESS:
      return action.payload.data
    default:
      return state;
  }
}
