import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  joined: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    isJoin: (state, action) => {
      state.joined = action.payload;
    },
  },
});

export const { isJoin } = chatSlice.actions;

export const selectAuth = (state) => state.chat.joined;

export default chatSlice.reducer;
