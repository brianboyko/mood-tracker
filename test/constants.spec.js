require('./setup.js')

import {expect} from 'chai';
import _ from 'lodash';
import * as actions from '../client/src/js/constants/actions';
let allConstants = Object.assign({}, actions.default)

describe('constants', () => {
  it('should have identical constant names and strings', function () {
    for(let key in allConstants){
      expect(_.isEqual(key, allConstants[key]))
    }
  });
  it('should have all the right constants', function () {
    let constArray = [
      'HYDRATE',
      'ADD_ONE'
    ]
    constArray.forEach((item) =>{
      expect(allConstants.hasOwnProperty(item))
    })
  });
})
