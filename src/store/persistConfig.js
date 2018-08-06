import storage from 'redux-persist/lib/storage'
import { createFilter } from '@actra-development-oss/redux-persist-transform-filter-immutable/dist/index';

const transforms = [
  createFilter(
    'merchantForm', [
      'fields',
      'isEditMode'
    ]
  ),
];

export default {
  key: 'dashboard',
  storage,
  transforms,
};