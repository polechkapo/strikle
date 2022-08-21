import { configureStore } from '@reduxjs/toolkit';
import userSlice from './store/userReducer/reducer';
import genresSlice from './store/genresReducer/reducer';
import artistSlice from './store/artistsReducer/reducer';

const store = configureStore(
  // Опции создания хранилища
  {
    // Комбинированный reducer
    reducer: {
      user: userSlice,
      genres: genresSlice,
      tracks: artistSlice,
    },
  },
);

export default store;
