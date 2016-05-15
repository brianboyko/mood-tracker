require('./setup.js')
import {expect} from 'chai';
import _ from 'lodash';
import store, {backupStore, restoreStore, getStore, backup} from '../client/src/js/store/storeConfig';
import actions from '../client/src/js/actions'

describe('store', () => {
  beforeEach(() => {
    store.dispatch(actions.clearToDefault());
  })
  it('should clear to default', () => {
    store.dispatch(actions.hydrate({mytest:3}));
    expect(store.getState()).to.eql({mytest: 3})
    store.dispatch(actions.clearToDefault());
    expect(store.getState()).to.eql({mytest: 0})
  })
  it('should have a dispatch and getState function', () => {
    expect(store.hasOwnProperty('dispatch')).to.be.true;
    expect(store.hasOwnProperty('getState')).to.be.true;
  })
  it('getStore() should be identical to store.getState()', () => {
    expect(store.getState()).to.eql(getStore())
  })
  it('even (and especially) after changes', () => {
    store.dispatch(actions.addOne());
    store.dispatch(actions.addOne());
    expect(store.getState()).to.eql({mytest: 2})
    expect(store.getState()).to.eql(getStore())
  })
  it('should backup the store when needed', () => {
    backupStore();
    expect(store.getState()).to.eql(backup)
    expect({mytest:0}).to.eql(backup)
    store.dispatch(actions.addOne());
    expect(store.getState()).to.eql({mytest: 1})
    expect({mytest:0}).to.eql(backup)
  })
  it('should restore the store from backup when called upon', () => {
    store.dispatch(actions.addOne());
    backupStore();
    expect(store.getState()).to.eql({mytest: 1})
    store.dispatch(actions.hydrate({mytest:3}));
    restoreStore();
    expect(store.getState()).to.eql({mytest: 1})
  })
})
