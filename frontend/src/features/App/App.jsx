import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Registration1 from '../Registration/Registration_1';
import Registration2 from '../Registration/Registration_2';
import Registration3 from '../Registration/Registration_3';
// import LoginSpotify from "../spotify/LoginSpotify";
// import Dashboard from "../spotify/Dashboard";
// import Multer from '../Multer/Multer';
import Login from '../Login/Login';
import SearchSpoty from '../SearchSpoty/SearchSpoty';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/search" element={<SearchSpoty />} />
      <Route path="/registraton/1" element={<Registration1 />} />
      <Route path="/registraton/2" element={<Registration2 />} />
      <Route path="/registraton/3" element={<Registration3 />} />
      {/* <Route path="/multer" element={<Multer />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
