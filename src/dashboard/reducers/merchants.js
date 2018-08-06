import createReducer from './../../utils/createReducer';

import { GET_MERCHANTS } from '../actions/getMerchants';
import { ADD_NEW_MERCHANT } from '../actions/addNewMerchant';
import { REMOVE_MERCHANT } from '../actions/removeMerchant';
import { UPDATE_MERCHANT } from '../actions/updateMerchant';

const defaultState = {
  value: [],
};

export default createReducer(defaultState, {
  [GET_MERCHANTS.success]: (state, { payload: { merchants } }) => {
    return {
      ...state,
      value: merchants,
    }
  },
  [ADD_NEW_MERCHANT]: (state, { meta }) => {
    return {
      ...state,
      value: [
        ...state.value,
        Object.assign({}, meta)
      ]
    }
  },
  [REMOVE_MERCHANT]: (state, { meta: { id } }) => {
    const index = state.value.findIndex(item => item.id === id);
    return {
      ...state,
      value: [
        ...state.value.slice(0, index),
        ...state.value.slice(index + 1),
      ]
    }
  },
  [UPDATE_MERCHANT]: (state, { meta } ) => {
    const index = state.value.findIndex(item => item.id === meta.id);
    return {
      ...state,
      value: [
        ...state.value.slice(0, index),
        Object.assign({}, meta),
        ...state.value.slice(index + 1),
      ]
    }
  }
})