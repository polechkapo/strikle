import React from 'react';
import Dashboard from '../spotify/Dashboard';
import LoginSpotify from '../spotify/LoginSpotify';

function SearchSpoty() {
  const code = new URLSearchParams(window.location.search).get('code');

  return (
    <div>

      <h1>Давай выберем твои любимые песни!</h1>

      {
        code ? <Dashboard code={code} />
          : (
            <>
              <h3>Войди в свой аккаунт</h3>
              <LoginSpotify />
            </>
          )
      }
    </div>
  );
}

export default SearchSpoty;
