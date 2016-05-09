import {
  ADD_ONE,
  HYDRATE,
} from '../constants/actions'

export function mytest(state = 0, action){
  switch(action.type){
    case ADD_ONE:
      return state + 1;
    case HYDRATE:
      return action.payload.hasOwnProperty('mytest') ?
        action.payload.mytest :
        state;
    default:
      return state;
  }
}
