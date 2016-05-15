require('./setup.js')

import {assert} from 'chai';
import _ from 'lodash';
import * as actions from '../client/src/js/actions'

let {
  addOne,
  hydrate,
  clearToDefault,
} = actions.default;

describe('actions', function() {
    it('addOne()', function () {
      assert(_.isEqual(addOne(), {type:"ADD_ONE"}));
    });

    it('hydrate()', function () {
      const myState = {mytest: 30};
      assert(_.isEqual(hydrate(myState), {type:"HYDRATE", payload: myState}));
    });

    it('clearToDefault()', function () {
      assert(_.isEqual(clearToDefault(), {type:"CLEAR_TO_DEFAULT"}));
    });
});
