import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Registration1 from '../Registration/Registration_1';
import Registration2 from '../Registration/Registration_2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/registraton/1" element={<Registration1 />} />
      <Route path="/registraton/2" element={<Registration2 />} />
    </Routes>
  );
}

export default App;
