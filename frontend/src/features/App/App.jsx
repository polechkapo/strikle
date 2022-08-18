import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Multer from '../Multer/Multer';
import Login from '../Login/Login';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/multer" element={<Multer />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
