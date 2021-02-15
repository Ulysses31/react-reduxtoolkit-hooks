import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/counter';
import Posts from './components/posts';
import store from './state/store';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <hr />
      <Posts />
    </Provider>
  );
}
