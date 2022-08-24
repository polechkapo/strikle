/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  joined: false,
  roomId: null,
  usersInRoom: [],
  messages: [],
  pairs: null,
};

const loadMessage = createAsyncThunk(
  'chat/loadmessage',

  async (payload) => {
    const response = await fetch('/api/chat', {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ payload }),
    });
    const data = await response.json();
    if (data.error) {
      throw data.error;
    }
    return data;
  },
);

const loadPairs = createAsyncThunk(
  'chat/loadpairs',

  async () => {
    const response = await fetch('/api/chatpage');
    const data = await response.json();
    console.log(data, 'DATA LOAD PAIRS');
    if (data.error) {
      throw data.error;
    }
    return data;
  },
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    isJoin: (state, action) => {
      state.joined = action.payload;
    },
    setUsers: (state, action) => {
      state.usersInRoom.push(...action.payload);
    },
    setMessages: (state, action) => {
      state.messages.push(action.payload);
    },
    addedRoomId: (state, action) => {
      state.roomId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMessage.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loadMessage.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const message = action.payload.allMessage;
        state.messages = [...state.messages, ...message];
      })
      .addCase(loadPairs.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loadPairs.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const pair = action.payload.allPairsUser;
        state.pairs = pair;
      });
  },

});

export {
  loadMessage,
  loadPairs,
};

export const { isJoin } = chatSlice.actions;
export const { setUsers } = chatSlice.actions;
export const { setMessages } = chatSlice.actions;
export const { addedRoomId } = chatSlice.actions;

export const selectAuth = (state) => state.chat.joined;
export const selectSetUsers = (state) => state.chat.usersInRoom;
export const selectSetMessage = (state) => state.chat.messages;
export const selectRoomId = (state) => state.chat.roomId;
export const selectPairs = (state) => state.chat.pairs;

export default chatSlice.reducer;
