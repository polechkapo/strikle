/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-trailing-spaces */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  users: null,
  errorMessage: null,
  checkEditPassword: false,
  userCode: null,
};

const loadUser = createAsyncThunk(
  'user/initUser',

  async () => {
    const response = await fetch('/api/session');
    const data = await response.json();

    if (data.error) {
      throw data.error;
    }

    return data;
  },
);

const loadUsers = createAsyncThunk(
  'user/initAllUsers',

  async () => {
    const response = await fetch('/api/all');
    const data = await response.json();
    if (data.error) {
      throw data.error;
    }

    return data;
  },
);

const registerUser = createAsyncThunk(
  'user/registerUser', // это тайп для редьюсера

  async (payload) => {
    // сюда прилетает пэйлоад из компонента
    const response = await fetch('/api/reg', { // сюда кидаем фетч 
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),

    });
    const data = await response.json();

    if (data.error) {
      throw data.errorMessage;
    }

    return data;
  },
);

const loginUser = createAsyncThunk(
  'user/loginUser',

  async (payload) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    if (data.error) {
      throw data.errorMessage;
    }

    return data;
  },
);

const updateUser = createAsyncThunk(
  'user/updateUser', // это тайп для редьюсера

  async (payload) => {
    // сюда прилетает пэйлоад из компонента
    const response = await fetch('/api/reg', { // сюда кидаем фетч 
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),

    });
    const data = await response.json();

    if (data.error) {
      throw data.error;
    }

    return data;
  },

);

const editUser = createAsyncThunk(
  'user/editUser', // это тайп для редьюсера

  async (payload) => {
    // сюда прилетает пэйлоад из компонента
    const response = await fetch('/api/profile', { // сюда кидаем фетч 
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),

    });
    const data = await response.json();

    if (data.error) {
      throw data.error;
    }

    return data;
  },

);

const editPassUser = createAsyncThunk(
  'user/editPassUser', // это тайп для редьюсера

  async (payload) => {
    // сюда прилетает пэйлоад из компонента
    const response = await fetch('/api/editpass', { // сюда кидаем фетч 
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),

    });

    const data = await response.json();

    if (data.error) {
      throw data.error;
    }

    return data;
  },

);

const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async () => {
    // сюда прилетает пэйлоад из компонента
    const response = await fetch('/logout', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });

    const data = await response.json();

    if (data.error) {
      throw data.error;
    }

    return data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    falseMessage: (state, action) => {
      state.checkEditPassword = action.payload;
    },
    codeLoad: (state, action) => {
      state.userCode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const newUser = action.payload;
        state.user = newUser;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const allUsers = action.payload;
        state.users = allUsers;
      })
      .addCase(registerUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const newUser = action.payload;
        state.user = newUser;
        const message = action.payload.errorMessage;
        state.errorMessage = message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const newUser = action.payload.user;
        state.user = newUser;
        const message = action.payload.errorMessage;
        state.errorMessage = message;
      })
      .addCase(updateUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const newInfo = action.payload;
        state.user = newInfo;
      })
      .addCase(editUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const newInfo = action.payload;
        state.user = newInfo;
      })
      .addCase(editPassUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(editPassUser.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        state.checkEditPassword = action.payload.updatePassword;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export {
  loadUser,
  registerUser,
  updateUser,
  editUser,
  deleteUser,
  loginUser,
  editPassUser,
  loadUsers,
};

export const {
  falseMessage,
  codeLoad,
} = userSlice.actions;

export const selectUser = (state) => state.user;
export const selectUsers = (state) => state.users;

export default userSlice.reducer;
