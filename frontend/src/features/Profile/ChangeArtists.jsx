import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserTracks } from '../store/artistsReducer/reducer';
import ChangeDashboard from './ChangeDashboard';
import SpotifyLogin from './SpotifyLogin';

function ChangeArtists() {
  const code = new URLSearchParams(window.location.search).get('code');

  const userTrack = useSelector((state) => state.tracks.userTracks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserTracks());
  }, []);
  console.log(userTrack, 'Это юзертрек');
  return (
    <div>
      <h3 className="h1Profile">Здесь можно изменить список твоих любимых артистов!</h3>
      <div className="tracksList">
        {userTrack ? userTrack.map((track) => (
          <div key={track.id}>
            <img src={track.albumUrl} alt="" />
            <p>{track.artist}</p>
          </div>
        )) : <h3 className="h1Profile">Загрузка артистов</h3>}
      </div>
      {code ? <ChangeDashboard code={code} />
        : (
          <div className="divArtists">
            <h3 className="h1Profile">Войди чтобы изменить</h3>
            <SpotifyLogin />
          </div>
        )}
    </div>
  );
}

export default ChangeArtists;
