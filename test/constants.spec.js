require('./setup.js')

import {assert} from 'chai';
import _ from 'lodash';
import * as constants from '../client/src/js/constants';
let allConstants = constants.default;

describe('constants', () => {
  it('should have identical constant names and strings', function () {
    for(let key in allConstants){
      assert.equal(key, allConstants[key])
    }
  });
  it('should have all the right constants', function () {
    let constArray = [
      'HYDRATE',
      'ADD_ONE'
    ]
    constArray.forEach((item) =>{
      assert(allConstants.hasOwnProperty(item))
    })
  });
})
