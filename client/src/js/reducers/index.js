// ==========================
// ./reducers/index.js
// ==========================

import { combineReducers } from 'redux';
import * as test from './test';
import { CLEAR_TO_DEFAULT } from '../constants/actions';

const appReducer = combineReducers(Object.assign({}, test));

const rootReducer = (state, action) => {
  if (action.type === CLEAR_TO_DEFAULT) {
    state = undefined;
  }
  return appReducer(state, action);
}


export default rootReducer;
