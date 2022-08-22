import React from 'react';
import Dashboard from '../spotify/Dashboard';
import LoginSpotify from '../spotify/LoginSpotify';
import './SearchSpoty.css';

function SearchSpoty() {
  const code = new URLSearchParams(window.location.search).get('code');

  return (
    <div>

      <h1 id="h1Main" className="spoty__title">Выбери любимые песни:</h1>

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
