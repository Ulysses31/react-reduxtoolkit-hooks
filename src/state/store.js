import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { postSlice, counterSlice } from '../state/reducers';

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    count: counterSlice.reducer
  },
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
