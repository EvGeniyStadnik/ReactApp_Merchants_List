import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';

import { rootReducer } from '../reducers';

import loggerMiddleware from '../middlewares/logger';

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

const configureStore = (preloadedState) => {
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;
    middlewares.push(loggerMiddleware);

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  let store = createStore(
    persistedReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  );
  let persistor = persistStore(store);

  return { store, persistor }
};

export default configureStore;
