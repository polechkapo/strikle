/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tracks: { addedArtist: null },
  userTracks: [],
};

// const loadGenres = createAsyncThunk(
//   'genres/initGenres',
//   async () => {
//     const response = await fetch('/api/genre');
//     const data = await response.json();

//     if (data.error) {
//       console.log(data.error);
//       throw data.error;
//     }
//     return data;
//   },
// );

const addTracks = createAsyncThunk(
  'tracks/addTracks',
  async (payload) => {
    console.log(payload, ',++++ thunk');
    const response = await fetch('/api/artists', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        artists: payload,
      }),
    });

    const data = await response.json();
    console.log('DATA ARTIST', data);
    if (data.error) {
      throw data.error;
    }
    return data;
  },
);

const editTracks = createAsyncThunk(
  'tracks/editTracks',
  async (payload) => {
    console.log(payload, ',++++ thunk');
    const response = await fetch('/api/artists', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        artists: payload,
      }),
    });

    const data = await response.json();
    console.log('DATA ARTIST', data);
    if (data.error) {
      throw data.error;
    }
    return data;
  },
);

const loadUserTracks = createAsyncThunk(
  'tracks/loadUserTracks',
  async (payload) => {
    console.log(payload, ',++++ thunk');
    const response = await fetch('/api/artists');

    const data = await response.json();
    console.log('DATA ARTIST', data);
    if (data.error) {
      throw data.error;
    }
    return data;
  },
);

const artistSlice = createSlice({
  name: 'tracks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addTracks.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addTracks.fulfilled, (state, action) => {
        state.tracks = action.payload;
      })
      .addCase(loadUserTracks.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadUserTracks.fulfilled, (state, action) => {
        state.userTracks = action.payload;
      })
      .addCase(editTracks.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editTracks.fulfilled, (state, action) => {
        state.tracks = action.payload;
      });
  },
});

export {
  addTracks,
  loadUserTracks,
  editTracks,
};

export const selectTracks = (state) => state.tracks;
export const selectUserTracks = (state) => state.userTracks;

export default artistSlice.reducer;
