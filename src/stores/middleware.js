import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

const middleware = applyMiddleware(
  thunkMiddleware, 
  promiseMiddleware(), 
  logger
);

export default middleware;