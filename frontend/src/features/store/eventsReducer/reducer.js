/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  comments: [],
  participants: [],
};

const loadEvents = createAsyncThunk(
  'events/initEvents',
  async () => {
    const response = await fetch('/api/events');
    const data = await response.json();

    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data;
  },
);

const loadComments = createAsyncThunk(
  'comments/initComments',
  async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();

    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data;
  },
);

const loadParticipants = createAsyncThunk(
  'participants/initParticipants',
  async () => {
    const response = await fetch('/api/participants');
    const data = await response.json();

    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data;
  },
);

const addComment = createAsyncThunk(
  'comments/addComment',

  async (payload) => {
    const response = await fetch('/api/comment', {
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

const createEvent = createAsyncThunk(
  'events/createEvent',

  async (payload) => {
    const response = await fetch('/api/events/new', {
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

const deleteEvent = createAsyncThunk(
  'events/deleteEvent',

  async (payload) => {
    const response = await fetch('/api/events/delete', {
      method: 'DELETE',
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

const editEvent = createAsyncThunk(
  'events/editEvent',

  async (payload) => {
    const response = await fetch('/api/events/edit', {
      method: 'PUT',
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

const addParticipant = createAsyncThunk(
  'participants/addParticipant',

  async (payload) => {
    const response = await fetch('/api/participant', {
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

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadEvents.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loadEvents.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const allevents = action.payload;
        state.events = allevents;
      })
      .addCase(loadComments.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const allcomments = action.payload;
        state.comments = allcomments;
      })
      .addCase(loadParticipants.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loadParticipants.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const allParticipants = action.payload;
        state.participants = allParticipants;
      })
      .addCase(addComment.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const comment = action.payload;
        state.comments = [...state.comments, comment];
      })
      .addCase(addParticipant.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(addParticipant.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const participant = action.payload;
        state.participants = [...participant];
      })
      .addCase(createEvent.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const event = action.payload;
        state.events = [...state.events, event];
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const id = action.payload;
        state.events = state.events.filter((el) => el.id !== +id);
      })
      .addCase(editEvent.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(editEvent.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const event = action.payload;
        state.events = state.events.map((el) => ((el.id !== event.id) ? el : {
          ...el, title: event.title, photo: event.photo, description: event.description,
        }));
      });
  },
});

export {
  loadEvents,
  loadComments,
  addComment,
  loadParticipants,
  addParticipant,
  createEvent,
  deleteEvent,
  editEvent,
};

export default eventsSlice.reducer;
