/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  genres: null,
  userGenre: [],
  usersGenres: [],
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
    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data;
  },
);

const loadUsersGenres = createAsyncThunk(
  'genres/initUsersGenres',
  async () => {
    const response = await fetch('/api/genres');
    const data = await response.json();
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
    const response = await fetch('/api/favorite', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        genres: payload,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data;
  },
);

const editGenre = createAsyncThunk(
  'genres/editGenre',
  async (payload) => {
    const response = await fetch('/api/favorite', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        genres: payload,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data;
  },
);

const initUserGenre = createAsyncThunk(
  'genres/initUserGenre',
  async () => {
    const response = await fetch('/api/genres/user');

    const data = await response.json();

    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data;
  },
);

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    editArrGenres: (state, action) => {
      console.log('REDYCER GENRE');
      const newGenres = action.payload;
      console.log(newGenres, 'newGenres');
      state.userGenre = state.userGenre.filter((el) => el.genre_id !== newGenres);
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
      .addCase(initUserGenre.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(initUserGenre.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const userGenres = action.payload;
        state.userGenre = userGenres;
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
        state.userGenre = action.payload;
      })
      .addCase(loadUsersGenres.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loadUsersGenres.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const usersGenres = action.payload;
        state.usersGenres = usersGenres;
      });
  },
});

export {
  loadGenres,
  addGenre,
  loadUserGenres,
  editGenre,
  loadUsersGenres,
  initUserGenre,
};

export const { editArrGenres } = genresSlice.actions;

// export const selectGenres = (state) => state.genres;
// export const selectUserGenres = (state) => state.userGenres;

export default genresSlice.reducer;
