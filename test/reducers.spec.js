require('./setup.js')

import {expect} from 'chai';
import _ from 'lodash';
import {mytest} from '../client/src/js/reducers/test';
import * as test from '../client/src/js/reducers/test';
import rootReducer from '../client/src/js/reducers/index'
import {combineReducers} from 'redux';
import actions from '../client/src/js/actions'
import store, {backupStore, restoreStore, getStore, backup} from '../client/src/js/store/storeConfig';

import { CLEAR_TO_DEFAULT } from '../client/src/js/constants/actions';

describe('reducers', () => {
  describe('mytest reducer', () => {
    it('should return state if passed undefined', () => {
      expect(mytest(undefined, {type: "Not a type"})).to.equal(0)
      expect(mytest(44, {type: "Not a type"})).to.equal(44)
    });
    it('should add one if passed "addOne" action or object', () => {
      expect(mytest(44, actions.addOne())).to.equal(45)
      expect(mytest(44, {type: 'ADD_ONE'})).to.equal(45)
    });
    it('should be changed if hydrated', () => {
      expect(mytest(32, actions.hydrate({mytest:22}))).to.equal(22);
    });
    it('should NOT be changed if hydrated without a mytest property', () => {
      expect(mytest(32, actions.hydrate({notToday:22}))).to.not.equal(22);
    });
  });

  describe('rootReducer', () => {
    it('should return an appReducer', () => {
      let a = rootReducer({mytest: 3}, actions.hydrate({mytest:5}))
      let b = combineReducers(Object.assign({}, test))({mytest: 3}, actions.hydrate({mytest:5}))
      expect(_.isEqual(a, b));
    })
  })

  describe('overall state', () => {
    it('should clear on command', () => {
      expect(_.isEqual(getStore(), { mytest: 0 }))
      store.dispatch(actions.addOne());
      expect(_.isEqual(getStore(), { mytest: 1 }))
      store.dispatch(actions.clearToDefault())
      expect(_.isEqual(getStore(), { mytest: 0 }))
    })
  })
})
