import { apiCall } from './../../utils/api';
import { merchants } from '../../dashboard/services/getMerchants';
import createAsyncAction from '../../utils/createAsyncAction';

import createAction from './'

export const GET_MERCHANTS = createAsyncAction(createAction('GET_MERCHANTS'));

export const getMerchants = () => (dispatch) => {
  dispatch({ type: GET_MERCHANTS.pending });

  return apiCall(merchants).then((merchants) => {
    dispatch({
      type: GET_MERCHANTS.success,
      payload: { merchants }
    })
  })
};