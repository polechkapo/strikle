import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../Main/Main';
import Registration1 from '../Registration/Registration_1';
import Registration2 from '../Registration/Registration_2';
import Registration3 from '../Registration/Registration_3';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SearchSpoty from '../SearchSpoty/SearchSpoty';
import { loadUser, loadUsers } from '../store/userReducer/reducer';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import ChangeArtists from '../Profile/ChangeArtists';
import MainTinder from '../Tinder/MainTinder';
import Events from '../Events/EventsPage';
import EventPage from '../Events/EventPage/EventPage';
import { loadComments, loadEvents, loadParticipants } from '../store/eventsReducer/reducer';
import CreateEvent from '../Events/CreateEvent/CreateEvent';
import MyEvents from '../Events/MyEvents/MyEvents';
import InputChat from '../Chat/InputChat';
import socket from '../Chat/socket';
import { setMessages } from '../store/chatReducer/reducer';
import { initUserGenre, loadGenres, loadUserGenres } from '../store/genresReducer/reducer';
import { loadUserTracks } from '../store/artistsReducer/reducer';
import NoPage from '../NoPage/NoPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('ROOM:JOINED', (users) => {
      console.log(users, 'JOINED INPUTCHAT');
    });
    socket.on('ROOM:NEW_MESSAGES', (message) => {
      dispatch(setMessages(message));
    });
  }, []);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadEvents());
    dispatch(loadComments());
    dispatch(loadParticipants());
    dispatch(loadUserGenres());
    dispatch(initUserGenre());
    dispatch(loadUsers());
    dispatch(loadGenres());
    dispatch(loadUserTracks());
    console.log(user, 'APP');
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {user.user ? (
          <>
            <Route path="/chat" element={<InputChat />} />
            <Route path="/artist" element={<ChangeArtists />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventPage />} />
            <Route path="/search" element={<SearchSpoty />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Registration2 />} />
            <Route path="/genres" element={<Registration3 />} />
            <Route path="/cabinet" element={<Profile />} />
            <Route path="/tinder" element={<MainTinder />} />
            <Route path="/events/new" element={<CreateEvent />} />
            <Route path="/events/myevents" element={<MyEvents />} />
            <Route path="*" element={<NoPage />} />
          </>
        )
          : (
            <>
              <Route path="/search" element={<SearchSpoty />} />
              <Route path="/" element={<Main />} />
              <Route path="/registraton" element={<Registration1 />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NoPage />} />
            </>
          )}
        {/* <Route path="/multer" element={<Multer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
