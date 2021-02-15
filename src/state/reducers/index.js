import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    fetchPosts: (state, action) => action.payload
  }
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => action.payload,
    decrement: (state, action) => action.payload
  }
});
