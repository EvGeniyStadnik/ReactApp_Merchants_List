import createAction from './'

import { clearFormField } from './clearFormField';
import { checkEmptyValuesBids } from '../selectors/checkEmtyValuesBids';

export const ADD_NEW_MERCHANT = createAction('ADD_NEW_MERCHANT');

export const addNewMerchant = (e) => (dispatch, getState) => {
  e.preventDefault();
  const state = getState();

  const { firstName, lastName, email, phone, bids } = state.dashboard.merchantForm.fields;
  if (!firstName ||!lastName || !email || !phone){
    alert('Pleas fill all fields of form');
    return;
  }

  const emptyValueBid = checkEmptyValuesBids(bids);

  if ( bids.length === 0){
    alert('Please create at least one bid');
    return;
  }

  if (emptyValueBid && bids.length !== 0){
    alert('Please fill all fields of bids');
    return;
  }

  dispatch({
    type: ADD_NEW_MERCHANT,
    meta: {
      id: Math.floor(Math.random() * 1e6),
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