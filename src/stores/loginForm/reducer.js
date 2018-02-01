import { test } from './actions.js'

const initialState = {
  testState: false
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case test:
      return console.log('Hello World!');
    default:
      return state;
  }
}
