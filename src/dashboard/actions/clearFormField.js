import createAction from './'

export const CLEAR_FORM_FIELD = createAction('CLEAR_FORM_FIELD');

export const clearFormField = () => ({
  type: CLEAR_FORM_FIELD,
});