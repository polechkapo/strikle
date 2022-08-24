/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const { user } = useSelector((state) => state.user);
  const { userGenre } = useSelector((state) => state.genres);

  const navigate = useNavigate();
  return (
    <>
      <div id="bodyReg1" className="logContainer">
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
      <div className="home__wrapper">
        {(user.Artists === undefined || user.Artists.length === 0 || userGenre === undefined || userGenre.length === 0)
          ? (
            <>
              <h1 className="h1Reg2 home__title">Дополни аккаунт</h1>
              <div className="genres__content home__content">
                <p>Это поможет сделать поиск для тебя лучше</p>
                <div className="buttons__home">
                  {(user.Artists === undefined || user.Artists.length === 0) && <button className="btnLogin" type="button" onClick={() => navigate('/search')}>Выбери песни</button>}
                  {(userGenre === undefined || userGenre.length === 0) && <button className="btnLogin" type="button" onClick={() => navigate('/genres')}>Выбери жанры</button>}
                  {/* <button className="btnLogin" type="button" onClick={() => navigate('/profile')}>Заполни профиль</button> */}
                </div>
              </div>

            </>
          )
          : (
            <div className="genres__content home__content">
              <h1 className="h1Reg2 home__title">Начнем?</h1>
              <button className="btnLogin" type="button" onClick={() => navigate('/tinder')}>Найти кого-нибудь</button>
              <button className="btnLogin" type="button" onClick={() => navigate('/events')}>Ивенты</button>
              <button className="btnLogin" type="button" onClick={() => navigate('/chat')}>Личка</button>
            </div>
          )}
      </div>

    </>
  );
}

export default Home;
