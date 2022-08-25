import React from 'react';
import Dashboard from '../spotify/Dashboard';
import LoginSpotify from '../spotify/LoginSpotify';
import './SearchSpoty.css';

function SearchSpoty() {
  const code = new URLSearchParams(window.location.search).get('code');

  return (
    <div className="container__wrapper">

      <h1 id="h1Main" className="spoty__title">Выбери любимые песни:</h1>
      <p className="ganresP">Тебе нужно выбрать 5 любимых песен</p>

      {
        code ? <Dashboard code={code} />
          : (
            <div className="genres__content spoty__content">
              <p>Для начала войди в свой аккаунт</p>
              <LoginSpotify />
            </div>
          )
      }
    </div>
  );
}

export default SearchSpoty;
