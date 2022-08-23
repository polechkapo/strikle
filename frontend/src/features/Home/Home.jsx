import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div id="bodyReg1" className="logContainer">
      <div className="home__wrapper">
        <h1 className="h1Reg2 home__title">Дополни аккаунт</h1>
        <div className="genres__content home__content">
          <p>Это поможет сделать поиск для тебя лучше</p>
          <div className="buttons__home">
            <button className="btnLogin" type="button" onClick={() => navigate('/search')}>Выбери песни</button>
            <button className="btnLogin" type="button" onClick={() => navigate('/genres')}>Выбери жанры</button>
            <button className="btnLogin" type="button" onClick={() => navigate('/profile')}>Заполни профиль</button>
          </div>
        </div>
      </div>
      <div className="divLog" />
      <div className="imgLog1" />
      <div className="imgLog2" />
      <div className="imgLog3" />
      <div className="imgLog4" />
      <div className="imgLog5" />
      <div className="imgLog6" />
      <div className="imgLog7" />
      <div className="imgLog8" />
    </div>
  );
}

export default Home;
