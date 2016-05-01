import {ADD_ONE} from '../constants/actions'
console.log("reducers ADD_ONE:", ADD_ONE)

export function mytest(state = 0, action){
  switch(action.type){
    case ADD_ONE:
      return state + 1;
    default:
      return state;
  }
}
