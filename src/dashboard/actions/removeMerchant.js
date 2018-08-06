import createAction from './'

export const REMOVE_MERCHANT = createAction('REMOVE_MERCHANT');

export const removeMerchant = (id) => ({
  type: REMOVE_MERCHANT,
  meta: {
    id
  }
});