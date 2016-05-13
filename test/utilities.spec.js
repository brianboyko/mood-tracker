require('./setup.js')

import {assert, expect} from 'chai';
import _ from 'lodash';
import { reduxify } from '../client/src/js/utilities/reduxify'
import * as actions from '../client/src/js/actions'
import React, { PropTypes, Component } from 'react'
import { mount, shallow } from 'enzyme';
import {Provider} from 'react-redux';
import store from '../client/src/js/store/storeConfig'

class Child extends Component {
   render() {
     return (<div>{JSON.stringify(this.props)}</div>)
   }
 }
Child = reduxify(actions, Child);

const testWrapper = shallow(
  <Provider store={store}>
    <Child />
  </Provider>)


describe('reduxify', () => {


  xit('should map store state to props', () => {
    expect(testWrapper.find(Child).props()).to.equal(0)
  });
  xit('should map actions props', () => {
    assert(wrapper.props.hasOwnProperty('actions'));
    assert(wrapper.props.actions.hasOwnProperty('addOne'))
    assert(wrapper.props.actions.hasOwnProperty('hydrate'))
  });
  xit('should have a dispatch property', () => {
    assert(wrapper.props.hasOwnProperty('dispatch'));
  });
  xit('should have a getStore property', () => {
    assert(wrapper.props.hasOwnProperty('getStore'));
  });
  xit('should dispatch actions with dispatch', () => {
    it('should also get state with getStore()', () => {
      assert(_.isEqual({mytest: 0}), wrapper.props.getStore())
      wrapper.props.dispatch(actions.default.addOne());
      assert(_.isEqual({mytest: 1}), wrapper.props.getStore())
    });
  });
})
