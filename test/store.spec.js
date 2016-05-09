import {assert} from 'chai';
import _ from 'lodash';
import store, {backupStore, restoreStore, getStore, backup} from '../client/src/js/store/storeConfig';
import actions from '../client/src/js/actions'

console.log("store", store)

describe('store', () => {
  let test = {type: 'ADD_ONE'};
  it('should have a dispatch and getState function', () => {
    assert(store.hasOwnProperty('dispatch'));
    assert(store.hasOwnProperty('getState'));
  })
  it('getStore() should be identical to store.getState()', () => {
    assert(_.isEqual(store.getState(), getStore()))
  })
  it('even (and especially) after changes', () => {
    store.dispatch(test);
    store.dispatch(actions.addOne());
    assert(_.isEqual(store.getState(), {mytest: 2}));
    assert(_.isEqual(store.getState(), getStore()))
  })
  it('should backup the store when needed', () => {
    backupStore();
    assert(_.isEqual(store.getState(), backup));
    assert(_.isEqual({mytest: 2}, backup));
    store.dispatch(test);
    assert(_.isEqual({mytest: 3}, store.getState()))
    assert(_.isEqual({mytest: 2}, backup));
  })
  it('should restore the store from backup when called upon', () => {
    restoreStore();
    assert(_.isEqual(store.getState(), {mytest: 2}));
  })
})
