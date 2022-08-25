/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  likes: [],
  match: false,
};

const loadLikes = createAsyncThunk(
  'likes/initLikes',
  async () => {
    const response = await fetch('/api/likes');
    const data = await response.json();

    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data;
  },
);

const addLike = createAsyncThunk(
  'likes/addLike',

  async (payload) => {
    const response = await fetch('/api/like', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(
        payload,
      ),
    });
    const data = await response.json();

    if (data.error) {
      throw data.error;
    }
    return data;
  },
);

const findMatch = createAsyncThunk(
  'likes/findLike',

  async (payload) => {
    const response = await fetch('/api/match', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(
        payload,
      ),
    });
    const data = await response.json();

    if (data.error) {
      throw data.error;
    }
    return data;
  },
);

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  // reducers: {
  //   addGenres: (state, action) => {
  //     const newGenres = action.payload;
  //     state.userGenres.push(newGenres);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(loadLikes.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadLikes.fulfilled, (state, action) => {
        const like = action.payload;
        state.likes = like;
      })
      .addCase(addLike.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addLike.fulfilled, (state, action) => {
        const like = action.payload;
        state.likes = [...state.likes, like];
      })
      .addCase(findMatch.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(findMatch.fulfilled, (state, action) => {
        const pair = action.payload;
        state.match = pair;
      });
  },
});

export {
  addLike,
  loadLikes,
  findMatch,
};

export const selectLikes = (state) => state.likes;

export default likesSlice.reducer;
