import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../spotify/Dashboard';
import LoginSpotify from '../spotify/LoginSpotify';

function ChangeArtists() {
  const code = new URLSearchParams(window.location.search).get('code');
  const userTrack = useSelector((state) => state.tracks.userTracks);
  return (
    <div>
      <h3>Здесь можно изменить список твоих любимых артистов!</h3>
      {userTrack ? userTrack.map((track) =>
        <div key={track.uri}>
          <img src={track.albumUrl} alt="" />
          <p>{track.title}</p>
          <p>{track.artist}</p>
        </div>) : <h3>Загрузка артистов</h3>}
      {code ? <Dashboard code={code} />
        : (
          <>
            <h3>Войди в свой аккаунт</h3>
            <LoginSpotify />
          </>
        )}
    </div>
  );
}

export default ChangeArtists;
