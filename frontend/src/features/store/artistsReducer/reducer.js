/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tracks: null,
  // userTracks: [],
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

    if (data.error) {
      throw data.error;
    }
    return data;
  },
);

const artistSlice = createSlice({
  name: 'tracks',
  initialState,
  // reducers: {
  //   addGenres: (state, action) => {
  //     const newGenres = action.payload;
  //     state.userGenres.push(newGenres);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      // .addCase(loadGenres.rejected, (state, action) => {
      //   // Сценарий провала — загрузка не увенчалась успехом
      //   state.error = action.error.message;
      // })
      // .addCase(loadGenres.fulfilled, (state, action) => {
      //   // Успешный случай — загрузка прошла хорошо
      //   const newGenres = action.payload;
      //   state.genres = newGenres;
      // })
      .addCase(addTracks.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addTracks.fulfilled, (state, action) => {
        state.tracks = action.payload;
      });
  },
});

export {
  addTracks,
};

// export const {
//   addGenres,
// } = genresSlice.actions;

export const selectGenres = (state) => state.genres;
export const selectUserGenres = (state) => state.userGenres;

export default artistSlice.reducer;
