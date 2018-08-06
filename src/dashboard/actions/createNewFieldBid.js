import createAction from './'

export const CREATE_NEW_FIELD_BID = createAction('CREATE_NEW_FIELD_BID');
export const CHANGE_BID_FORM_FIELD = createAction('CHANGE_BID_FORM_FIELD');

export const createNewFieldBid = (emptyBid) => ({
  type: CREATE_NEW_FIELD_BID,
  meta: {
    ...emptyBid
  },
});

export const changeBidFormField = (id, fieldName, value) => ({
  type: CHANGE_BID_FORM_FIELD,
  meta: {
    id,
    [fieldName]: value,
    fieldName,
  }
});
