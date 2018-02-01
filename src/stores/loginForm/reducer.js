import { CREATE_LOGIN } from './actions'

export default function reduce(state = {}, action) {
  switch (action.type) {
    case CREATE_LOGIN:
      return action.payload.data
    default:
      return state;
  }
}
