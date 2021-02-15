import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from '../state/reducers';

export default function Counter() {
  const dispatch = useDispatch();
  const { actions } = counterSlice;
  const { increment, decrement } = actions;
  const count = useSelector((state) => state.count);

  console.log(counterSlice);

  return (
    <>
      <button
        style={{ padding: '5px' }}
        onClick={() => dispatch(increment(count + 1))}
      >
        +
      </button>
      <h1>{count}</h1>
      <button
        style={{ padding: '5px' }}
        onClick={() => dispatch(decrement(count - 1))}
      >
        -
      </button>
      <br />
    </>
  );
}
