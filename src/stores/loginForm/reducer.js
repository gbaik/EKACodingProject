import { TEST } from './actions'

export default function reduce(state = {}, action) {
  switch (action.type) {
    case TEST:
      console.log('Hello World!');
      return action.payload.data
    default:
      return state;
  }
}
