import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate();
  return (
    <div id="mainContainer">
      <div className="divMain">
        <h1 id="h1Main">СТРАЙКЛ</h1>
        <p>
          Если ты хочешь найти друзей, с которыми можно сходить на концерт  или просто поболтать о
          любимой музыке, этот сайт то, что тебе нужно.
          В знакомствах не всегда всё однозначно. Если ты хочешь завести новые знакомства, друзей,
          а может быть любовь, на Страйкл это сделать проще простого.
          Знакомься онлайн — это просто.
        </p>
        <button className="btnMain" type="button" onClick={() => navigate('/registraton/1')}>Регистрация</button>
      </div>
      <div className="btn2">
        <button className="btnMain" id="btnMain2" type="button" onClick={() => navigate('/login')}>Войти</button>
      </div>
      <div id="imgMain1" />
      <div id="imgMain2" />
      <div id="imgMain3" />
    </div>
  );
}

export default Main;
