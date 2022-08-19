/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  genres: [],
};

const loadGenres = createAsyncThunk(
  'genres/initGenres',
  async () => {
    const response = await fetch('/api/genre');
    const data = await response.json();

    if (data.error) {
      throw data.error;
    }

    return data;
  },
);
const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    addGenres: (state, action) => {
      const newGenres = action.payload;
      state.genres = newGenres;
    },
  },
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
      });
  },
});

export {
  loadGenres,
};

export const {
  addGenres,
} = genresSlice.actions;

export const selectGenres = (state) => state.genres;

export default genresSlice.reducer;
