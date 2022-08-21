/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  genres: null,
  userGenre: [],
};

const loadGenres = createAsyncThunk(
  'genres/initGenres',
  async () => {
    const response = await fetch('/api/genre');
    const data = await response.json();

    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data;
  },
);

const loadUserGenres = createAsyncThunk(
  'genres/loadUserGenres',
  async () => {
    const response = await fetch('/api/favorite');
    const data = await response.json();
    console.log('DATA UG', data);
    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data;
  },
);

const addGenre = createAsyncThunk(
  'genres/addedUserGenre',
  async (payload) => {
    console.log(payload, ',++++ thunk');
    const response = await fetch('/api/favorite', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        genres: payload,
      }),
    });

    const data = await response.json();

    console.log('data', data);
    if (data.error) {
      throw data.error;
    }
    return data;
  },
);

const editGenre = createAsyncThunk(
  'genres/editGenre',
  async (payload) => {
    console.log(payload, ',++++ thunk');
    const response = await fetch('/api/favorite', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        genres: payload,
      }),
    });

    const data = await response.json();

    console.log('data', data);
    if (data.error) {
      throw data.error;
    }
    return data;
  },
);

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  // reducers: {
  //   addGenres: (state, action) => {
  //     const newGenres = action.payload;
  //     state.userGenres.push(newGenres);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(loadGenres.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loadGenres.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const newGenres = action.payload;
        state.genres = newGenres;
      })
      .addCase(loadUserGenres.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loadUserGenres.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const newGenres = action.payload;
        state.userGenre = newGenres;
      })
      .addCase(addGenre.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addGenre.fulfilled, (state, action) => {
        state.userGenre = {
          user_id: action.payload.user_id,
          genre: action.payload.resultUser,
        };
      })
      .addCase(editGenre.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editGenre.fulfilled, (state, action) => {
        state.userGenre = action.payload
      });
  },
});

export {
  loadGenres,
  addGenre,
  loadUserGenres,
  editGenre,
};

// export const {
//   addGenres,
// } = genresSlice.actions;

export const selectGenres = (state) => state.genres;
export const selectUserGenres = (state) => state.userGenres;

export default genresSlice.reducer;
