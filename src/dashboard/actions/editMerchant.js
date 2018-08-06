import createAction from './'

import { getMerchantById } from '../../dashboard/selectors/getMerchantById'

export const EDIT_MERCHANT = createAction('EDIT_MERCHANT');

export const editMerchant = (id) => (dispatch, getState) => {
  const state = getState();
  const merchant = getMerchantById(state, id);

  dispatch({
    type: EDIT_MERCHANT,
    meta: {
      field: merchant,
      isEditMode: true,
    }
  })
};