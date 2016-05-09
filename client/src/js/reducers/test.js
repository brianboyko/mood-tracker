import {ADD_ONE} from '../constants/actions'

export function mytest(state = 0, action){
  switch(action.type){
    case ADD_ONE:
      return state + 1;
    default:
      return state;
  }
}
