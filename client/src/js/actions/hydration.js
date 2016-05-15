import {
  HYDRATE,
  CLEAR_TO_DEFAULT,
} from '../constants/actions'

export const hydrate = (payload) => ({type: HYDRATE, payload})
export const clearToDefault = () => ({type: CLEAR_TO_DEFAULT})
