import { configureStore } from '@reduxjs/toolkit';
import userSlice from './store/userReducer/reducer';
import genresSlice from './store/genresReducer/reducer';
import likesSlice from './store/tinderReducer/reducer';
import artistSlice from './store/artistsReducer/reducer';
import eventsSlice from './store/eventsReducer/reducer';
import chatSlice from './store/chatReducer/reducer';

const store = configureStore(
  // Опции создания хранилища
  {
    // Комбинированный reducer
    reducer: {
      user: userSlice,
      genres: genresSlice,
      likes: likesSlice,
      tracks: artistSlice,
      chats: chatSlice,
      events: eventsSlice,
    },
  },
);

export default store;
