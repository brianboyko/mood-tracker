require('./setup.js')

import expect from 'expect'
import _ from 'lodash';
import { reduxify } from '../client/src/js/utilities/reduxify'
import * as actions from '../client/src/js/actions'
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils'
import { CLEAR_TO_DEFAULT } from '../client/src/js/constants/actions';
import store, {backupStore, restoreStore, getStore, backup} from '../client/src/js/store/storeConfig';

describe('Reduxify', () => {

  class ChildClass extends Component {
    render() {
      return <div />
    }
  }

  ChildClass.contextTypes = {
    store: PropTypes.object.isRequired
  }


  var Child = reduxify(actions, ChildClass)

  const tree = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <Child />
    </Provider>
  )

  it('should add the store to the child context', () => {
    const spy = expect.spyOn(console, 'error')
    spy.destroy()
    expect(spy.calls.length).toBe(0)

    const child = TestUtils.findRenderedComponentWithType(tree, Child)
    expect(child.context.store).toBe(store)
  })
  it('should add the actions to the child context', () => {
    const spy = expect.spyOn(console, 'error')

    spy.destroy()
    expect(spy.calls.length).toBe(0)

    const child = TestUtils.findRenderedComponentWithType(tree, Child)
    expect(_.isEqual(child.dispatchProps.actions, actions.default))
  })
  it('should add both at the same time', () => {
    const spy = expect.spyOn(console, 'error')

    spy.destroy()
    expect(spy.calls.length).toBe(0)

    const child = TestUtils.findRenderedComponentWithType(tree, Child)
    let expected = store.getState()
    expected.store = store;
    expected.actions = actions.default;
    expected.dispatch = store.dispatch;
    expect(_.isEqual(child.mergedProps.actions, expected))
  })
})
