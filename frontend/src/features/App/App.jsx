import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
// import Main from '../Main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
