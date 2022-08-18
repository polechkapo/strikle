import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Multer from '../Multer/Multer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/multer" element={<Multer />} />
    </Routes>
  );
}

export default App;
