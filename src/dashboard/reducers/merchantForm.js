import createReducer from './../../utils/createReducer';

import { SAVE_FORM_FIELD } from '../actions/changeFormField';
import { EDIT_MERCHANT } from '../actions/editMerchant';
import { CLEAR_FORM_FIELD } from '../actions/clearFormField';
import { CREATE_NEW_FIELD_BID } from '../actions/createNewFieldBid';
import { CHANGE_BID_FORM_FIELD } from '../actions/createNewFieldBid';

const defaultState = {
  fields: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bids: [],
  },
  isEditMode: false,
};

export default createReducer(defaultState, {
  [SAVE_FORM_FIELD]: (state, { meta: { fieldName, [fieldName]: value } }) => {
    return {
      ...state,
      fields: {
        ...state.fields,
        [fieldName]: value
      },
    }
  },
  [EDIT_MERCHANT]: (state, { meta: { field, isEditMode } }) => {
    return {
      ...state,
      fields: {
        ...state.fields,
        ...field,
      },
      isEditMode
    }
  },
  [CREATE_NEW_FIELD_BID]: (state, { meta }) => {
    return {
      ...state,
      fields: {
        ...state.fields,
        bids: [...state.fields.bids, meta],
      }
    }
  },
  [CHANGE_BID_FORM_FIELD]: (state, { meta: { id, fieldName, [fieldName]: value } }) => {
    const bidIndex = state.fields.bids.findIndex(bid => bid.id === id);
    const bid = state.fields.bids[bidIndex];
    return {
      ...state,
      fields: {
        ...state.fields,
        bids: [
          ...state.fields.bids.slice(0, bidIndex),
          Object.assign({}, {...bid, [fieldName]: value}),
          ...state.fields.bids.slice(bidIndex + 1)
        ]
      }
    }
  },
  [CLEAR_FORM_FIELD]: () => defaultState
})