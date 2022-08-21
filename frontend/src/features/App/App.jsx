import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../Main/Main';
import Registration1 from '../Registration/Registration_1';
import Registration2 from '../Registration/Registration_2';
import Registration3 from '../Registration/Registration_3';
// import LoginSpotify from "../spotify/LoginSpotify";
// import Dashboard from "../spotify/Dashboard";
// import Multer from '../Multer/Multer';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SearchSpoty from '../SearchSpoty/SearchSpoty';
import { loadUser } from '../store/userReducer/reducer';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
// import Tinder from '../Tinder/Tinder';
import MainTinder from '../Tinder/MainTinder';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  console.log(user);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {user.user ? (
          <>
            <Route path="/search" element={<SearchSpoty />} />
            <Route path="/" element={<Home />} />
            <Route path="/registraton/2" element={<Registration2 />} />
            <Route path="/registraton/3" element={<Registration3 />} />
            <Route path="/cabinet" element={<Profile />} />
            <Route path="/tinder" element={<MainTinder />} />
          </>
        )
          : (
            <>
              <Route path="/search" element={<SearchSpoty />} />
              <Route path="/" element={<Main />} />
              <Route path="/registraton/1" element={<Registration1 />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        {/* <Route path="/multer" element={<Multer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
