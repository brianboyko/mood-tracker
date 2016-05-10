require('./setup.js')

import {assert} from 'chai';
import _ from 'lodash';
import * as actions from '../client/src/js/actions'

let {
  addOne,
} = actions.default;

describe('actions', function() {
  describe('addOne', function () {
    it('should return the correct object', function () {
      assert(_.isEqual(addOne(), {type:"ADD_ONE"}));
    });
  });
});
