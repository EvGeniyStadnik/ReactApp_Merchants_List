import createAction from './'

import { clearFormField } from './clearFormField';

export const UPDATE_MERCHANT = createAction('UPDATE_MERCHANT');

export const updateMerchant = (e) => (dispatch, getState) => {
  e.preventDefault();
  const state = getState();

  const { id, firstName, lastName, email, phone, bids } = state.dashboard.merchantForm.fields;

  dispatch({
    type: UPDATE_MERCHANT,
    meta: {
      id,
      firstName,
      lastName,
      avatarUrl: `https://picsum.photos/50/50?random=${Math.floor(Math.random() * 10)}`,
      email,
      phone,
      bids,
    },
  });

  dispatch(clearFormField());

};