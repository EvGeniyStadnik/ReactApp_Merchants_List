import createAction from './'

export const SAVE_FORM_FIELD = createAction('SAVE_FORM_FIELD');

export const changeFormField = (fieldName, value) => ({
  type: SAVE_FORM_FIELD,
  meta: {
    [fieldName]: value,
    fieldName,
  },
});