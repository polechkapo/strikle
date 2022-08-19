import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Registration1 from '../Registration/Registration_1';
import Registration2 from '../Registration/Registration_2';
import Registration3 from '../Registration/Registration_3';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/registraton/1" element={<Registration1 />} />
      <Route path="/registraton/2" element={<Registration2 />} />
      <Route path="/registraton/3" element={<Registration3 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cabinet" element={<Profile />} />
    </Routes>
  );
}

export default App;
