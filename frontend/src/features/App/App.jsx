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
import { loadUser } from '../store/userReducer/reducer';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import ChangeArtists from '../Profile/ChangeArtists';
import MainTinder from '../Tinder/MainTinder';
import Events from '../Events/EventsPage';
import EventPage from '../Events/EventPage/EventPage';
import { loadComments, loadEvents, loadParticipants } from '../store/eventsReducer/reducer';
import CreateEvent from '../Events/CreateEvent/CreateEvent';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadEvents());
    dispatch(loadComments());
    dispatch(loadParticipants());
  }, []);

  console.log(user);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {user.user ? (
          <>
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
          </>
        )
          : (
            <>
              <Route path="/search" element={<SearchSpoty />} />
              <Route path="/" element={<Main />} />
              <Route path="/registraton" element={<Registration1 />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        {/* <Route path="/multer" element={<Multer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
