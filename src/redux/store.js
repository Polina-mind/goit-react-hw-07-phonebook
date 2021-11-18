import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import logger from 'redux-logger';
import reducer from './reducer';

const myMiddleware = store => next => action => {
  // console.log('myMiddleware', action);

  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleware,
  // logger,
];

const store = configureStore({
  reducer: {
    contacts: reducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
