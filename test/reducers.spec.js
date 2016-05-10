require('./setup.js')

import {assert} from 'chai';
import _ from 'lodash';
import {mytest} from '../client/src/js/reducers/test';

import actions from '../client/src/js/actions'

describe('reducers', () => {
  describe('mytest reducer', () => {
    it('should return state if passed undefined', () => {
      assert.equal(mytest(undefined, {type: "Not a type"}), 0);
      assert.equal(mytest(44, {type: "Not a type"}), 44)
    });
    it('should add one if passed "addOne" action or object', () => {
      assert.equal(mytest(33, actions.addOne()), 34);
      assert.equal(mytest(33, {type: 'ADD_ONE'}), 34);
    });
  });
})
