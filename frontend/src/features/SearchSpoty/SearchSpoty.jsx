import React from 'react';
import Dashboard from '../spotify/Dashboard';
import LoginSpotify from '../spotify/LoginSpotify';

function SearchSpoty() {
  const code = new URLSearchParams(window.location.search).get('code');
  // useEffect(() => {
  //   console.log('USEEFFECT');
  //   fetch('https://accounts.spotify.com/authorize?client_id=a64cff7f1f62470ab9902e118ab37e41&response_type=code&redirect_uri=http://localhost:3000/search')
  //     .then((response) => console.log(response));
  // }, []);
  console.log('CODE', code);
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
