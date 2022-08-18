import React from 'react';
import { useNavigate } from 'react-router-dom';

function Registration2() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Выбери исполнителей и жанры</h1>
      <input type="text" placeholder="Поиск исполнителя" />
      <button type="submit" onClick={() => navigate('/')}>Пропустить</button>
    </div>
  );
}

export default Registration2;
