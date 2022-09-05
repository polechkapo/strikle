import React from 'react';
import { useSelector } from 'react-redux';
// import { loadUserTracks } from '../store/artistsReducer/reducer';
import ChangeDashboard from './ChangeDashboard';
import SpotifyLogin from './SpotifyLogin';

function ChangeArtists() {
  const code = new URLSearchParams(window.location.search).get('code');
  console.log(code, 'PROFILE');
  const { userTracks } = useSelector((state) => state.tracks);
  return (
    <div className="tracks__wrapper">
      <h3 id="h1Artists" className="h1Profile">Твои любимые треки</h3>
      <div className="tracksList">
        {userTracks ? userTracks.map((track) => (
          <div key={track.id} className="track__card">
            <img src={track.albumUrl} alt="" />
            <div className="track__sub">
              <p className="track__title">{track.artist}</p>
              <p>{track.title}</p>
            </div>
          </div>
        )) : <p className="pArtists">Любимые исполнители еще не указаны</p>}
      </div>
      {code ? <ChangeDashboard code={code} />
        : (
          <div className="divArtists">
            <h3 id="h1Artists" className="h1Profile">Войди, чтобы изменить</h3>
            <SpotifyLogin />
          </div>
        )}
    </div>
  );
}

export default ChangeArtists;
