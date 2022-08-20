import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Cтрайкл</h1>
      <p>
        Если ты хочешь найти друзей, с которыми можно сходить на концерт  или просто поболтать о
        любимой музыке, этот сайт то, что тебе нужно.
        В знакомствах не всегда всё однозначно. Если ты хочешь завести новые знакомства, друзей,
        а может быть любовь, на Страйкл это сделать проще простого.
        Знакомься онлайн — это просто.
      </p>
      <button type="button" onClick={() => navigate('/registraton/1')}>Регистрация</button>
      <button type="button" onClick={() => navigate('/login')}>Войти</button>
    </div>
  );
}

export default Main;
