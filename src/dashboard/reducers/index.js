import { combineReducers } from 'redux';

import merchants from './merchants';
import merchantForm from './merchantForm';

export default combineReducers({
  merchants,
  merchantForm
})