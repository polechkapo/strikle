/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-trailing-spaces */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
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

const registerUser = createAsyncThunk(
  'user/registerUser', // это тайп для редьюсера

  async (payload) => {
   // сюда прилетает пэйлоад из компонента
   console.log(payload);
    const response = await fetch('/api/reg', { // сюда кидаем фетч 
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),

    });
    const data = await response.json();
    console.log(data);

    if (data.error) {
      throw data.error;
    }

    return data;
  },
);

const loginUser = createAsyncThunk(
  'user/loginUser',

  async (payload) => {
    console.log(payload, 'thunk');
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(payload),
  });
    const data = await response.json();
    console.log(data);

    if (data.error) {
      throw data.error;
    }

    return data;
  },
);

  const updateUser = createAsyncThunk(
   'user/updateUser', // это тайп для редьюсера
 
   async (payload) => {
    // сюда прилетает пэйлоад из компонента
    console.log(payload, 'update fetch');
     const response = await fetch('/api/reg', { // сюда кидаем фетч 
       method: 'PUT',
       headers: { 'content-type': 'application/json' },
       body: JSON.stringify(payload),
 
     });
     const data = await response.json();
     console.log(data, '<===== data fetch');
 
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
   console.log(payload, 'edit fetch');
    const response = await fetch('/api/profile', { // сюда кидаем фетч 
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),

    });
    const data = await response.json();
    console.log(data, '<===== data edit fetch');

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
   console.log(payload, 'edit pass');
    const response = await fetch('/api/editpass', { // сюда кидаем фетч 
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),

    });
    
    const data = await response.json();
    console.log(data, '<===== data edit fetch');

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
     console.log(data, '<===== data fetch');
 
     if (data.error) {
       throw data.error;
     }
 
     return data;
   },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  // reducers: {
  //   addUser: (state, action) => {
  //     const newUser = action.payload;
  //     state.user = newUser;
  //   },
  //   updateUser: (state, action) => {
  //     const newInfo = action.payload;
  //     state.user = { ...state.user, newInfo };
  //   },
  // },
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
        console.log(newUser);
      })
      .addCase(registerUser.rejected, (state, action) => {
         // Сценарий провала — загрузка не увенчалась успехом
         console.log(state.error, '<===== error register');
         state.error = action.error.message;
       })
       .addCase(registerUser.fulfilled, (state, action) => {
         // Успешный случай — загрузка прошла хорошо
         console.log(state.user, '<===== user');
         const newUser = action.payload;
         state.user = newUser;
       })
       .addCase(loginUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        console.log(state.error, '<===== error login');
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        console.log(state.user, '<===== user login');
        const newUser = action.payload;
        state.user = newUser;
      })
       .addCase(updateUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        console.log(state.error, '<===== error update');
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        console.log(state.user, '<===== Updateuser');
        const newInfo = action.payload;
        state.user = newInfo;
      })
      .addCase(editUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        console.log(state.error, '<===== error edit');
        state.error = action.error.message;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        console.log(state.user, '<===== Edituser');
        const newInfo = action.payload;
        state.user = newInfo;
      })
      .addCase(editPassUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        console.log(state.error, '<===== error edit');
        state.error = action.error.message;
      })
      .addCase(editPassUser.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        console.log(state.user, '<===== Edituser');
        state.checkEditPassword = action.payload;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.user = undefined;
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
};

// export const {
//   addUser,
//   updateUser,
// } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
