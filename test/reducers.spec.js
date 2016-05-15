require('./setup.js')

import {assert} from 'chai';
import _ from 'lodash';
import {mytest} from '../client/src/js/reducers/test';
import * as test from '../client/src/js/reducers/test';
import rootReducer from '../client/src/js/reducers/index'
import {combineReducers} from 'redux';
import actions from '../client/src/js/actions'
import store, {backupStore, restoreStore, getStore, backup} from '../client/src/js/store/storeConfig';

import { CLEAR_TO_DEFAULT } from '../client/src/js/constants/index';

describe('reducers', () => {
  describe('mytest reducer', () => {
    it('should return state if passed undefined', () => {
      assert.equal(mytest(undefined, {type: "Not a type"}), 0);
      assert.equal(mytest(44, {type: "Not a type"}), 44)
    });store
    it('should add one if passed "addOne" action or object', () => {
      assert.equal(mytest(33, actions.addOne()), 34);
      assert.equal(mytest(33, {type: 'ADD_ONE'}), 34);
    });
    it('should be changed if hydrated', () => {
      assert.equal(mytest(32, actions.hydrate({mytest:22})), 22);
    });
  });

  describe('rootReducer', () => {
    it('should return an appReducer', () => {
      let a = rootReducer({mytest: 3}, actions.hydrate({mytest:5}))
      let b = combineReducers(Object.assign({}, test))({mytest: 3}, actions.hydrate({mytest:5}))
      assert(_.isEqual(a, b));
    })
  })

  describe('overall state', () => {
    it('should clear on command', () => {
      assert(_.isEqual(getStore(), { mytest: 0 }))
      store.dispatch(actions.addOne());
      assert(_.isEqual(getStore(), { mytest: 1 }))
      store.dispatch(actions.clearToDefault())
      assert(_.isEqual(getStore(), { mytest: 0 }))
    })
  })
})
